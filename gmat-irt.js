/* ═══════════════════════════════════════════════════════════
   GMAT IRT ADAPTIVE ENGINE
   Item Response Theory scoring + adaptive question selection
   ═══════════════════════════════════════════════════════════ */

// 3PL IRT parameters
const IRT = {
  b: { easy: -1.0, medium: 0.0, hard: 1.5 },  // difficulty
  a: 1.0,   // discrimination (uniform — questions aren't individually calibrated)
  c: 0.2    // guessing (5 choices → 1/5)
};

// 3PL probability of correct response
function irtProb(theta, diff) {
  const b = IRT.b[diff] || 0;
  return IRT.c + (1 - IRT.c) / (1 + Math.exp(-IRT.a * (theta - b)));
}

// Maximum Likelihood Estimation of theta via Newton-Raphson
function estimateTheta(responses) {
  if (!responses.length) return 0;
  const allRight = responses.every(r => r.correct);
  const allWrong = responses.every(r => !r.correct);
  if (allRight) return Math.min(Math.max(...responses.map(r => IRT.b[r.difficulty] || 0)) + 1.5, 3.5);
  if (allWrong) return Math.max(Math.min(...responses.map(r => IRT.b[r.difficulty] || 0)) - 1.5, -3.5);

  let theta = 0;
  for (let i = 0; i < 30; i++) {
    let d1 = 0, d2 = 0;
    for (const r of responses) {
      const b = IRT.b[r.difficulty] || 0;
      const p = irtProb(theta, r.difficulty);
      const pStar = 1 / (1 + Math.exp(-IRT.a * (theta - b)));
      const w = (p - IRT.c) / (p * (1 - IRT.c));
      d1 += IRT.a * pStar * (1 - pStar) * (r.correct ? w : -w / (1 - p) * p);
      d2 -= IRT.a * IRT.a * pStar * pStar * (1 - pStar) * (1 - pStar) / (p * (1 - p));
    }
    if (Math.abs(d2) < 1e-10) break;
    const step = d1 / d2;
    theta = Math.max(-3.5, Math.min(3.5, theta - step));
    if (Math.abs(step) < 0.001) break;
  }
  return theta;
}

// Pick next question: closest difficulty to current theta, prefer unseen questions
function selectAdaptiveQuestion(pool, theta, usedIds, attemptedIds) {
  const available = pool.filter(q => !usedIds.has(q.id));
  if (!available.length) return null;

  // Target difficulty bucket based on theta
  let target = 'medium';
  if (theta < -0.5) target = 'easy';
  else if (theta > 0.75) target = 'hard';

  // Split into never-attempted and previously-attempted
  const seen = attemptedIds || new Set();
  const fresh = available.filter(q => !seen.has(q.id));
  const stale = available.filter(q => seen.has(q.id));
  const source = fresh.length ? fresh : stale;

  const preferred = source.filter(q => q.difficulty === target);
  const candidates = preferred.length ? preferred : source;

  // Sort by closeness to theta, pick randomly from top 5
  candidates.sort((a, b) =>
    Math.abs(theta - (IRT.b[a.difficulty] || 0)) - Math.abs(theta - (IRT.b[b.difficulty] || 0))
  );
  const topN = Math.min(5, candidates.length);
  return candidates[Math.floor(Math.random() * topN)];
}

// Theta → GMAT section score (60–90)
function thetaToScore(theta) {
  const s = 60 + ((theta + 3.5) / 7) * 30;
  return Math.max(60, Math.min(90, Math.round(s)));
}

// Approximate GMAT Focus percentile tables (from published GMAC data)
const GMAT_PCT = {
  quant:           {90:99,89:99,88:98,87:96,86:94,85:91,84:88,83:84,82:76,81:72,80:66,79:60,78:54,77:48,76:42,75:36,74:30,73:25,72:20,71:16,70:12,69:9,68:7,67:5,66:3,65:2,64:1,63:1,62:1,61:1,60:1},
  verbal:          {90:99,89:99,88:97,87:95,86:92,85:88,84:83,83:77,82:70,81:63,80:55,79:48,78:41,77:34,76:28,75:22,74:17,73:13,72:10,71:7,70:5,69:4,68:3,67:2,66:1,65:1,64:1,63:1,62:1,61:1,60:1},
  'data-insights': {90:99,89:99,88:98,87:96,86:93,85:89,84:84,83:78,82:71,81:64,80:56,79:49,78:42,77:35,76:29,75:23,74:18,73:14,72:10,71:8,70:6,69:4,68:3,67:2,66:2,65:1,64:1,63:1,62:1,61:1,60:1}
};

function getSectionPercentile(section, score) {
  const t = GMAT_PCT[section] || GMAT_PCT.quant;
  return t[score] || (score >= 90 ? 99 : 1);
}
