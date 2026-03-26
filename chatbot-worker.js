// DEPLOYMENT STEPS:
// 1. Install Wrangler: npm install -g wrangler
// 2. Login: wrangler login
// 3. Set secret: wrangler secret put GEMINI_API_KEY (then paste your key)
// 4. Deploy: wrangler deploy
// 5. Your worker URL will be: https://dhruv-portfolio-chatbot.<your-subdomain>.workers.dev

const ALLOWED_ORIGINS = [
  'https://dhruvagrawal-16.github.io',
  'http://localhost',
];

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SYSTEM_INSTRUCTION = `You are "Ask Dhruv" — a friendly AI assistant on Dhruv Agrawal's portfolio website. Your job is to help visitors learn about Dhruv and answer their questions.

About Dhruv Agrawal:
- Senior Salesforce Developer at EPAM Systems, currently working on the Amazon Key for Business (KFB) project.
- 5.5+ years of professional experience in Salesforce development.
- Previously worked at LTIMindtree for 4.5 years, primarily on projects for Honeywell.
- Graduated from IIT Bhilai with a B.Tech in Computer Science and Engineering, CGPA 8.0/10.

Salesforce Certifications (4):
- Salesforce Certified Platform Developer I (2022)
- Salesforce Certified Administrator (2021)
- Salesforce Certified AI Associate (2025)
- Salesforce Certified Agentforce Specialist (2025)

Currently pursuing: Platform Developer II and JavaScript Developer I certifications.

Technical Skills:
- Apex, Lightning Web Components (LWC), SOQL, Flows, Data Cloud, Agentforce
- Sales Cloud, Service Cloud, Experience Cloud, Field Service Lightning
- REST API, MuleSoft, DocuSign, Azure AI

Key Projects:
- Amazon Key for Business (KFB): Sales Cloud + Experience Cloud implementation at EPAM Systems.
- GenAI Chatbot for Honeywell: Built on Service Cloud + Azure AI for intelligent customer support.
- Field Service Lightning Enhancement: Optimized field service operations for Honeywell.
- ERP Data Migration: Migrated 2M+ records seamlessly into Salesforce.
- MDM Hub with MuleSoft: Master Data Management integration hub.

Contact Information:
- Email: dhruvagrawal16598@gmail.com
- LinkedIn: linkedin.com/in/dhruv-agrawal-275aba136
- Trailhead: trailblazer.me/id/dhruv16
- Dhruv is available for hire.

Guidelines:
- You can also help with general questions, resume tips, and Salesforce advice.
- Keep responses concise and friendly.
- If asked something you don't know about Dhruv, say so honestly and suggest contacting him directly via email or LinkedIn.`;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
const rateLimitMap = new Map();


function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const isAllowed = ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed));
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Periodically clean up stale rate limit entries
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

export default {
  async fetch(request, env) {
    const corsHeaders = getCorsHeaders(request);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Method not allowed. Use POST.' },
        { status: 405, headers: corsHeaders }
      );
    }

    // Rate limiting
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (isRateLimited(clientIP)) {
      return Response.json(
        { error: 'Rate limit exceeded. Please wait a minute before trying again.' },
        { status: 429, headers: corsHeaders }
      );
    }

    // Cleanup stale entries occasionally
    if (rateLimitMap.size > 1000) {
      cleanupRateLimitMap();
    }

    try {
      const body = await request.json();
      const { message, history } = body;

      if (!message || typeof message !== 'string') {
        return Response.json(
          { error: 'Missing or invalid "message" field.' },
          { status: 400, headers: corsHeaders }
        );
      }

      if (!env.GEMINI_API_KEY) {
        return Response.json(
          { error: 'Server configuration error: API key not set.' },
          { status: 500, headers: corsHeaders }
        );
      }

      // Build conversation contents from history + new message
      const contents = [];
      if (Array.isArray(history)) {
        for (const entry of history) {
          if (entry.role && Array.isArray(entry.parts)) {
            contents.push({ role: entry.role, parts: entry.parts });
          }
        }
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const geminiPayload = {
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      };

      const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
      });

      if (!geminiResponse.ok) {
        const errorData = await geminiResponse.text();
        console.error('Gemini API error:', geminiResponse.status, errorData);
        return Response.json(
          { error: 'Failed to get a response from the AI service.' },
          { status: 502, headers: corsHeaders }
        );
      }

      const geminiData = await geminiResponse.json();
      const reply =
        geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response. Please try again.";

      return Response.json({ reply }, { headers: corsHeaders });
    } catch (err) {
      console.error('Worker error:', err);
      return Response.json(
        { error: 'An unexpected error occurred. Please try again.' },
        { status: 500, headers: corsHeaders }
      );
    }
  },
};
