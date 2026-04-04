// GMAT Quant Review — Easy Questions (from GMAT Focus Edition Quantitative Review)
// Each file pushes questions into the global GMAT_QUESTIONS array

GMAT_QUESTIONS.push(
  {
    id: "quant_e001",
    section: "quant",
    difficulty: "easy",
    prompt: "A copy machine produces 20 copies of a one-page document each minute. How many hours does it take the machine, working at this constant rate, to produce 4,800 copies of a one-page document?",
    choices: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "7" },
      { id: "E", text: "8" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find the rate in copies per hour. The machine makes 20 copies per minute, and there are 60 minutes in an hour.<br>20 × 60 = 1,200 copies per hour.<br><br>Step 2: Divide the total copies needed by the hourly rate.<br>4,800 ÷ 1,200 = 4 hours.<br><br>The answer is 4."
  },
  {
    id: "quant_e002",
    section: "quant",
    difficulty: "easy",
    prompt: "If x + y = 2 and x<sup>2</sup> + y<sup>2</sup> = 2, what is the value of xy?",
    choices: [
      { id: "A", text: "−2" },
      { id: "B", text: "−1" },
      { id: "C", text: "0" },
      { id: "D", text: "1" },
      { id: "E", text: "2" }
    ],
    correctAnswer: "D",
    explanation: "Key identity: (x + y)<sup>2</sup> = x<sup>2</sup> + 2xy + y<sup>2</sup>.<br><br>Step 1: Square both sides of x + y = 2.<br>(x + y)<sup>2</sup> = 4, which expands to x<sup>2</sup> + 2xy + y<sup>2</sup> = 4.<br><br>Step 2: We know x<sup>2</sup> + y<sup>2</sup> = 2, so substitute that in.<br>2 + 2xy = 4.<br><br>Step 3: Solve for xy.<br>2xy = 2, so xy = 1.<br><br>The answer is 1."
  },
  {
    id: "quant_e003",
    section: "quant",
    difficulty: "easy",
    prompt: "The sum S of the first n consecutive positive even integers is given by S = n(n + 1). For what value of n is this sum equal to 110?",
    choices: [
      { id: "A", text: "10" },
      { id: "B", text: "11" },
      { id: "C", text: "12" },
      { id: "D", text: "13" },
      { id: "E", text: "14" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Set up the equation using the given formula.<br>n(n + 1) = 110.<br><br>Step 2: Try the answer choices. Start with n = 10:<br>10 × 11 = 110. ✓<br><br>That works! The answer is n = 10."
  },
  {
    id: "quant_e004",
    section: "quant",
    difficulty: "easy",
    prompt: "6(87.30 + 0.65) − 5(87.30) =",
    choices: [
      { id: "A", text: "3.90" },
      { id: "B", text: "39.00" },
      { id: "C", text: "90.90" },
      { id: "D", text: "91.20" },
      { id: "E", text: "91.85" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Distribute the 6 across the parentheses.<br>6(87.30) + 6(0.65) − 5(87.30).<br><br>Step 2: Combine the 87.30 terms.<br>(6 − 5) × 87.30 + 6(0.65) = 1 × 87.30 + 3.90.<br><br>Step 3: Add.<br>87.30 + 3.90 = 91.20.<br><br>The answer is 91.20."
  },
  {
    id: "quant_e005",
    section: "quant",
    difficulty: "easy",
    prompt: "What is the value of x<sup>2</sup>yz − xyz<sup>2</sup>, if x = −2, y = 1, and z = 3?",
    choices: [
      { id: "A", text: "20" },
      { id: "B", text: "24" },
      { id: "C", text: "30" },
      { id: "D", text: "32" },
      { id: "E", text: "48" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Factor the expression first to simplify.<br>x<sup>2</sup>yz − xyz<sup>2</sup> = xyz(x − z).<br><br>Step 2: Substitute x = −2, y = 1, z = 3.<br>(−2)(1)(3)(−2 − 3) = (−6)(−5).<br><br>Step 3: Multiply.<br>(−6)(−5) = 30.<br><br>The answer is 30."
  },
  {
    id: "quant_e006",
    section: "quant",
    difficulty: "easy",
    prompt: "A souvenir vendor purchased 1,000 shirts for a special event at a price of $5 each. The vendor sold 600 of the shirts on the day of the event for $12 each and 300 of the shirts in the week following the event for $4 each. The vendor was unable to sell the remaining shirts. What was the vendor's gross profit on the sale of these shirts?",
    choices: [
      { id: "A", text: "$1,000" },
      { id: "B", text: "$2,200" },
      { id: "C", text: "$2,700" },
      { id: "D", text: "$3,000" },
      { id: "E", text: "$3,400" }
    ],
    correctAnswer: "E",
    explanation: "Gross profit = Total revenue − Total cost.<br><br>Step 1: Find total cost.<br>1,000 × $5 = $5,000.<br><br>Step 2: Find total revenue.<br>600 shirts × $12 = $7,200.<br>300 shirts × $4 = $1,200.<br>Total revenue = $7,200 + $1,200 = $8,400.<br><br>Step 3: Calculate profit.<br>$8,400 − $5,000 = $3,400.<br><br>The answer is $3,400."
  },
  {
    id: "quant_e007",
    section: "quant",
    difficulty: "easy",
    prompt: "If x &gt; y and y &gt; z, which of the following represents the greatest number?",
    choices: [
      { id: "A", text: "x − z" },
      { id: "B", text: "x − y" },
      { id: "C", text: "y − x" },
      { id: "D", text: "z − y" },
      { id: "E", text: "z − x" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Since x &gt; y &gt; z, determine which expressions are positive or negative.<br>• (C) y − x is negative (since x &gt; y).<br>• (D) z − y is negative (since y &gt; z).<br>• (E) z − x is negative (since x &gt; z).<br>So only (A) and (B) are positive.<br><br>Step 2: Compare (A) and (B).<br>x − z = (x − y) + (y − z). Since y − z is positive, x − z &gt; x − y.<br><br>The greatest value is x − z."
  },
  {
    id: "quant_e008",
    section: "quant",
    difficulty: "easy",
    prompt: "To order certain plants from a catalog, it costs $3.00 per plant, plus a 5 percent sales tax, plus $6.95 for shipping and handling regardless of the number of plants ordered. If Company C ordered these plants from the catalog at the total cost of $69.95, how many plants did Company C order?",
    choices: [
      { id: "A", text: "22" },
      { id: "B", text: "21" },
      { id: "C", text: "20" },
      { id: "D", text: "19" },
      { id: "E", text: "18" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Set up the equation. Let x = number of plants.<br>Cost per plant with tax = $3.00 × 1.05 = $3.15.<br>Total = 3.15x + 6.95.<br><br>Step 2: Solve for x.<br>3.15x + 6.95 = 69.95<br>3.15x = 63.00<br>x = 63.00 ÷ 3.15 = 20.<br><br>Company C ordered 20 plants."
  },
  {
    id: "quant_e009",
    section: "quant",
    difficulty: "easy",
    prompt: "A rug manufacturer produces rugs at a cost of $75 per rug. What is the manufacturer's gross profit from the sale of 150 rugs if <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> of the rugs are sold for $150 per rug and the rest are sold for $200 per rug?",
    choices: [
      { id: "A", text: "$10,350" },
      { id: "B", text: "$11,250" },
      { id: "C", text: "$13,750" },
      { id: "D", text: "$16,250" },
      { id: "E", text: "$17,800" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Find how many rugs are in each group.<br><span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> × 150 = 100 rugs sold at $150.<br>Remaining: 150 − 100 = 50 rugs sold at $200.<br><br>Step 2: Calculate total revenue.<br>100 × $150 = $15,000.<br>50 × $200 = $10,000.<br>Total revenue = $25,000.<br><br>Step 3: Calculate total cost.<br>150 × $75 = $11,250.<br><br>Step 4: Gross profit = Revenue − Cost.<br>$25,000 − $11,250 = $13,750.<br><br>The answer is $13,750."
  },
  {
    id: "quant_e010",
    section: "quant",
    difficulty: "easy",
    prompt: "The value of Maureen's investment portfolio has decreased by 5.8 percent since her initial investment. If her initial investment was $16,800, what is the current value of the portfolio?",
    choices: [
      { id: "A", text: "$7,056.00" },
      { id: "B", text: "$14,280.00" },
      { id: "C", text: "$15,825.60" },
      { id: "D", text: "$16,702.56" },
      { id: "E", text: "$17,774.40" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: A 5.8% decrease means the portfolio retains 100% − 5.8% = 94.2% of its value.<br><br>Step 2: Calculate the current value.<br>0.942 × $16,800 = $15,825.60.<br><br>The current value is $15,825.60."
  },
  {
    id: "quant_e011",
    section: "quant",
    difficulty: "easy",
    prompt: "Company C produces toy trucks at a cost of $5.00 each for the first 100 trucks and $3.50 for each additional truck. If 500 toy trucks were produced by Company C and sold for $10.00 each, what was Company C's gross profit?",
    choices: [
      { id: "A", text: "$2,250" },
      { id: "B", text: "$2,500" },
      { id: "C", text: "$3,100" },
      { id: "D", text: "$3,250" },
      { id: "E", text: "$3,500" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Calculate total revenue.<br>500 × $10.00 = $5,000.<br><br>Step 2: Calculate total production cost.<br>First 100 trucks: 100 × $5.00 = $500.<br>Remaining 400 trucks: 400 × $3.50 = $1,400.<br>Total cost = $500 + $1,400 = $1,900.<br><br>Step 3: Gross profit = Revenue − Cost.<br>$5,000 − $1,900 = $3,100.<br><br>The answer is $3,100."
  },
  {
    id: "quant_e012",
    section: "quant",
    difficulty: "easy",
    prompt: "The annual profit or loss for three divisions of Company T for the years 1991–1995 are shown below. Losses are indicated by parentheses. All values are in millions of dollars.<br><br><table><tr><th>Division</th><th>1991</th><th>1992</th><th>1993</th><th>1994</th><th>1995</th></tr><tr><td>A</td><td>1.1</td><td>(3.4)</td><td>1.9</td><td>2.0</td><td>0.6</td></tr><tr><td>B</td><td>(2.3)</td><td>5.5</td><td>(4.5)</td><td>3.9</td><td>(2.9)</td></tr><tr><td>C</td><td>10.0</td><td>(6.6)</td><td>5.3</td><td>1.1</td><td>(3.0)</td></tr></table><br>For which division and which three consecutive years was the combined profit or loss closest to $0?",
    choices: [
      { id: "A", text: "Division A for 1991–1993" },
      { id: "B", text: "Division A for 1992–1994" },
      { id: "C", text: "Division B for 1991–1993" },
      { id: "D", text: "Division B for 1993–1995" },
      { id: "E", text: "Division C for 1992–1994" }
    ],
    correctAnswer: "E",
    explanation: "Check each answer choice by adding the three years of profit/loss:<br><br>(A) Div A, 1991–1993: 1.1 + (−3.4) + 1.9 = −0.4<br>(B) Div A, 1992–1994: (−3.4) + 1.9 + 2.0 = 0.5<br>(C) Div B, 1991–1993: (−2.3) + 5.5 + (−4.5) = −1.3<br>(D) Div B, 1993–1995: (−4.5) + 3.9 + (−2.9) = −3.5<br>(E) Div C, 1992–1994: (−6.6) + 5.3 + 1.1 = −0.2<br><br>The sum closest to $0 is −0.2 (Division C, 1992–1994)."
  },
  {
    id: "quant_e013",
    section: "quant",
    difficulty: "easy",
    prompt: "Of the following, which is least?",
    choices: [
      { id: "A", text: "0.03 ÷ 0.00071" },
      { id: "B", text: "0.03 ÷ 0.0071" },
      { id: "C", text: "0.03 ÷ 0.071" },
      { id: "D", text: "0.03 ÷ 0.71" },
      { id: "E", text: "0.03 ÷ 7.1" }
    ],
    correctAnswer: "E",
    explanation: "Key concept: When dividing the same numerator by different denominators, the result is smallest when the denominator is largest.<br><br>All five choices have the same numerator (0.03). The denominators are:<br>(A) 0.00071 (smallest denominator → largest result)<br>(B) 0.0071<br>(C) 0.071<br>(D) 0.71<br>(E) 7.1 (largest denominator → smallest result)<br><br>Since 7.1 is the largest denominator, 0.03 ÷ 7.1 gives the smallest value."
  },
  {
    id: "quant_e014",
    section: "quant",
    difficulty: "easy",
    prompt: "If the average (arithmetic mean) of 5 numbers j, j + 5, 2j − 1, 4j − 2, and 5j − 1 is 8, what is the value of j?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>7</span><span class='den'>13</span></span>" },
      { id: "C", text: "1" },
      { id: "D", text: "3" },
      { id: "E", text: "8" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: The average of 5 numbers equals their sum divided by 5.<br><br>Step 2: Find the sum of the five expressions.<br>j + (j + 5) + (2j − 1) + (4j − 2) + (5j − 1) = 13j + 1.<br><br>Step 3: Set up the average equation.<br><span class='math-frac'><span class='num'>13j + 1</span><span class='den'>5</span></span> = 8.<br><br>Step 4: Solve for j.<br>13j + 1 = 40<br>13j = 39<br>j = 3.<br><br>The answer is j = 3."
  },
  {
    id: "quant_e015",
    section: "quant",
    difficulty: "easy",
    prompt: "There are five sales agents in a certain real estate office. One month Andy sold twice as many properties as Ellen, Bob sold 3 more than Ellen, Cary sold twice as many as Bob, and Dora sold as many as Bob and Ellen together. Who sold the most properties that month?",
    choices: [
      { id: "A", text: "Andy" },
      { id: "B", text: "Bob" },
      { id: "C", text: "Cary" },
      { id: "D", text: "Dora" },
      { id: "E", text: "Ellen" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let Ellen's sales = x. Express everyone in terms of x.<br>• Andy = 2x<br>• Bob = x + 3<br>• Cary = 2(x + 3) = 2x + 6<br>• Dora = (x + 3) + x = 2x + 3<br><br>Step 2: Compare the expressions (since x ≥ 0).<br>• Cary = 2x + 6<br>• Andy = 2x and Dora = 2x + 3 are both less than 2x + 6.<br>• Bob = x + 3 and Ellen = x are even smaller.<br><br>Cary (2x + 6) is the largest for any non-negative x, so Cary sold the most."
  },
  {
    id: "quant_e016",
    section: "quant",
    difficulty: "easy",
    prompt: "In a field day at a school, each child who competed in n events and scored a total of p points was given an overall score of <span class='math-frac'><span class='num'>p</span><span class='den'>n</span></span> + n. Andrew competed in 1 event and scored 9 points. Jason competed in 3 events and scored 5, 6, and 7 points, respectively. What was the ratio of Andrew's overall score to Jason's overall score?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>10</span><span class='den'>23</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>7</span><span class='den'>10</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>4</span><span class='den'>5</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>10</span><span class='den'>9</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>12</span><span class='den'>7</span></span>" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Calculate Andrew's overall score.<br>Andrew: n = 1, p = 9.<br>Score = <span class='math-frac'><span class='num'>9</span><span class='den'>1</span></span> + 1 = 9 + 1 = 10.<br><br>Step 2: Calculate Jason's overall score.<br>Jason: n = 3, p = 5 + 6 + 7 = 18.<br>Score = <span class='math-frac'><span class='num'>18</span><span class='den'>3</span></span> + 3 = 6 + 3 = 9.<br><br>Step 3: Find the ratio.<br><span class='math-frac'><span class='num'>Andrew</span><span class='den'>Jason</span></span> = <span class='math-frac'><span class='num'>10</span><span class='den'>9</span></span>.<br><br>The answer is <span class='math-frac'><span class='num'>10</span><span class='den'>9</span></span>."
  },
  {
    id: "quant_e017",
    section: "quant",
    difficulty: "easy",
    prompt: "A certain work plan for September requires that a work team, working every day, produce an average of 200 items per day. For the first half of the month, the team produced an average of 150 items per day. How many items per day must the team average during the second half of the month if it is to attain the average daily production rate required by the work plan?",
    choices: [
      { id: "A", text: "225" },
      { id: "B", text: "250" },
      { id: "C", text: "275" },
      { id: "D", text: "300" },
      { id: "E", text: "350" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: September has 30 days, so each half is 15 days.<br><br>Step 2: Find the total items needed for the month.<br>200 × 30 = 6,000 items.<br><br>Step 3: Find how many items were produced in the first half.<br>150 × 15 = 2,250 items.<br><br>Step 4: Find how many items are needed in the second half.<br>6,000 − 2,250 = 3,750 items.<br><br>Step 5: Find the required daily average for the second half.<br>3,750 ÷ 15 = 250 items per day.<br><br>The answer is 250."
  },
  {
    id: "quant_e018",
    section: "quant",
    difficulty: "easy",
    prompt: "A company sells radios for $15.00 each. It costs the company $14.00 per radio to produce 1,000 radios and $13.50 per radio to produce 2,000 radios. How much greater will the company's gross profit be from the production and sale of 2,000 radios than from the production and sale of 1,000 radios?",
    choices: [
      { id: "A", text: "$500" },
      { id: "B", text: "$1,000" },
      { id: "C", text: "$1,500" },
      { id: "D", text: "$2,000" },
      { id: "E", text: "$2,500" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Calculate profit from selling 1,000 radios.<br>Profit per radio = $15.00 − $14.00 = $1.00.<br>Total profit = 1,000 × $1.00 = $1,000.<br><br>Step 2: Calculate profit from selling 2,000 radios.<br>Profit per radio = $15.00 − $13.50 = $1.50.<br>Total profit = 2,000 × $1.50 = $3,000.<br><br>Step 3: Find the difference.<br>$3,000 − $1,000 = $2,000.<br><br>The answer is $2,000."
  },
  {
    id: "quant_e019",
    section: "quant",
    difficulty: "easy",
    prompt: "Which of the following represent positive numbers?<br><br>I. −3 − (−5)<br>II. (−3)(−5)<br>III. −5 − (−3)",
    choices: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "III only" },
      { id: "D", text: "I and II" },
      { id: "E", text: "II and III" }
    ],
    correctAnswer: "D",
    explanation: "Evaluate each expression:<br><br>I. −3 − (−5) = −3 + 5 = 2. This is positive. ✓<br><br>II. (−3)(−5) = 15. A negative times a negative is positive. ✓<br><br>III. −5 − (−3) = −5 + 3 = −2. This is negative. ✗<br><br>Only I and II are positive."
  },
  {
    id: "quant_e020",
    section: "quant",
    difficulty: "easy",
    prompt: "A grocer has 400 pounds of coffee in stock, 20 percent of which is decaffeinated. If the grocer buys another 100 pounds of coffee of which 60 percent is decaffeinated, what percent, by weight, of the grocer's stock of coffee is decaffeinated?",
    choices: [
      { id: "A", text: "28%" },
      { id: "B", text: "30%" },
      { id: "C", text: "32%" },
      { id: "D", text: "34%" },
      { id: "E", text: "40%" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find the total decaffeinated coffee.<br>From original stock: 20% of 400 = 80 lbs.<br>From new purchase: 60% of 100 = 60 lbs.<br>Total decaf = 80 + 60 = 140 lbs.<br><br>Step 2: Find the total coffee.<br>400 + 100 = 500 lbs.<br><br>Step 3: Calculate the percentage.<br><span class='math-frac'><span class='num'>140</span><span class='den'>500</span></span> × 100 = 28%.<br><br>The answer is 28%."
  },
  {
    id: "quant_e021",
    section: "quant",
    difficulty: "easy",
    prompt: "The toll T, in dollars, for a truck using a certain bridge is given by the formula T = 1.50 + 0.50(x − 2), where x is the number of axles on the truck. What is the toll for an 18-wheel truck that has 2 wheels on its front axle and 4 wheels on each of its other axles?",
    choices: [
      { id: "A", text: "$2.50" },
      { id: "B", text: "$3.00" },
      { id: "C", text: "$3.50" },
      { id: "D", text: "$4.00" },
      { id: "E", text: "$5.00" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the number of axles.<br>Front axle has 2 wheels. Remaining wheels: 18 − 2 = 16.<br>Each other axle has 4 wheels: 16 ÷ 4 = 4 additional axles.<br>Total axles: 1 + 4 = 5.<br><br>Step 2: Plug x = 5 into the toll formula.<br>T = 1.50 + 0.50(5 − 2) = 1.50 + 0.50(3) = 1.50 + 1.50 = $3.00.<br><br>The toll is $3.00."
  },
  {
    id: "quant_e022",
    section: "quant",
    difficulty: "easy",
    prompt: "For what value of x between −4 and 4, inclusive, is the value of x<sup>2</sup> − 10x + 16 the greatest?",
    choices: [
      { id: "A", text: "−4" },
      { id: "B", text: "−2" },
      { id: "C", text: "0" },
      { id: "D", text: "2" },
      { id: "E", text: "4" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: This is an upward-opening parabola (positive x<sup>2</sup> coefficient). Its vertex (minimum) is at x = <span class='math-frac'><span class='num'>10</span><span class='den'>2</span></span> = 5, which is outside our range.<br><br>Step 2: Since the parabola opens upward and the vertex is to the right of our range [−4, 4], the function decreases throughout the entire range. The greatest value occurs at the left endpoint.<br><br>Step 3: Verify at x = −4:<br>(−4)<sup>2</sup> − 10(−4) + 16 = 16 + 40 + 16 = 72.<br><br>The greatest value occurs at x = −4."
  },
  {
    id: "quant_e023",
    section: "quant",
    difficulty: "easy",
    prompt: "If x = −<span class='math-frac'><span class='num'>5</span><span class='den'>8</span></span> and y = −<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>, what is the value of the expression −2x − y<sup>2</sup>?",
    choices: [
      { id: "A", text: "−<span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>" },
      { id: "B", text: "−1" },
      { id: "C", text: "1" },
      { id: "D", text: "<span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>7</span><span class='den'>4</span></span>" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Calculate −2x.<br>−2 × (−<span class='math-frac'><span class='num'>5</span><span class='den'>8</span></span>) = <span class='math-frac'><span class='num'>10</span><span class='den'>8</span></span> = <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span>.<br><br>Step 2: Calculate y<sup>2</sup>.<br>(−<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>2</sup> = <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>.<br><br>Step 3: Combine.<br>−2x − y<sup>2</sup> = <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span> − <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> = <span class='math-frac'><span class='num'>4</span><span class='den'>4</span></span> = 1.<br><br>The answer is 1."
  },
  {
    id: "quant_e024",
    section: "quant",
    difficulty: "easy",
    prompt: "If x − y = R and xy = S, then (x − 2)(y + 2) =",
    choices: [
      { id: "A", text: "R + S − 4" },
      { id: "B", text: "R + 2S − 4" },
      { id: "C", text: "2R − S − 4" },
      { id: "D", text: "2R + S − 4" },
      { id: "E", text: "2R + S" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Expand (x − 2)(y + 2) using FOIL.<br>(x − 2)(y + 2) = xy + 2x − 2y − 4.<br><br>Step 2: Rewrite using the given variables.<br>= xy + 2(x − y) − 4.<br><br>Step 3: Substitute R and S.<br>= S + 2R − 4 = 2R + S − 4.<br><br>The answer is 2R + S − 4."
  },
  {
    id: "quant_e025",
    section: "quant",
    difficulty: "easy",
    prompt: "For positive integers a and b, the remainder when a is divided by b is equal to the remainder when b is divided by a. Which of the following could be a value of ab?<br><br>I. 24<br>II. 30<br>III. 36",
    choices: [
      { id: "A", text: "II only" },
      { id: "B", text: "III only" },
      { id: "C", text: "I and II only" },
      { id: "D", text: "II and III only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Think about when the remainders are equal. If a ≠ b, say a &gt; b, then the remainder of b ÷ a is just b (since b &lt; a). For the remainder of a ÷ b to also equal b, we'd need b as a remainder when dividing by b, which is impossible (remainders are always less than the divisor).<br><br>Step 2: So the condition requires a = b. Then both remainders are 0.<br><br>Step 3: If a = b, then ab = a<sup>2</sup>, which must be a perfect square.<br>• 24 is not a perfect square. ✗<br>• 30 is not a perfect square. ✗<br>• 36 = 6<sup>2</sup> is a perfect square. ✓<br><br>Only III is possible."
  },
  {
    id: "quant_e026",
    section: "quant",
    difficulty: "easy",
    prompt: "List S consists of the positive integers that are multiples of 9 and are less than 100. What is the median of the integers in S?",
    choices: [
      { id: "A", text: "36" },
      { id: "B", text: "45" },
      { id: "C", text: "49" },
      { id: "D", text: "54" },
      { id: "E", text: "63" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: List all multiples of 9 less than 100.<br>9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99.<br>That's 11 numbers.<br><br>Step 2: The median of an odd-numbered list is the middle value. For 11 numbers, the median is the 6th number.<br><br>Step 3: Count to the 6th number: 9, 18, 27, 36, 45, <strong>54</strong>.<br><br>The median is 54."
  },
  {
    id: "quant_e027",
    section: "quant",
    difficulty: "easy",
    prompt: "A rope 20.6 meters long is cut into two pieces. If the length of one piece of rope is 2.8 meters shorter than the length of the other, what is the length, in meters, of the longer piece of rope?",
    choices: [
      { id: "A", text: "7.5" },
      { id: "B", text: "8.9" },
      { id: "C", text: "9.9" },
      { id: "D", text: "10.3" },
      { id: "E", text: "11.7" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Let x = length of the longer piece. Then the shorter piece = x − 2.8.<br><br>Step 2: The two pieces add up to 20.6.<br>x + (x − 2.8) = 20.6<br>2x − 2.8 = 20.6<br>2x = 23.4<br>x = 11.7 meters.<br><br>The longer piece is 11.7 meters."
  },
  {
    id: "quant_e028",
    section: "quant",
    difficulty: "easy",
    prompt: "If x and y are integers and x − y is odd, which of the following must be true?<br><br>I. xy is even.<br>II. x<sup>2</sup> + y<sup>2</sup> is odd.<br>III. (x + y)<sup>2</sup> is even.",
    choices: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "III only" },
      { id: "D", text: "I and II only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: If x − y is odd, then one of x, y must be even and the other must be odd (since even − odd = odd, and odd − even = odd).<br><br>I. xy = even × odd = even. ✓ Must be true.<br><br>II. x<sup>2</sup> + y<sup>2</sup> = even<sup>2</sup> + odd<sup>2</sup> = even + odd = odd. ✓ Must be true.<br><br>III. (x + y)<sup>2</sup>: Since x + y = even + odd = odd, we get odd<sup>2</sup> = odd, not even. ✗ Not true.<br><br>Only I and II must be true."
  },
  {
    id: "quant_e029",
    section: "quant",
    difficulty: "easy",
    prompt: "On Monday, the opening price of a certain stock was $100 per share and its closing price was $110 per share. On Tuesday the closing price was 10 percent less than its closing price on Monday, and on Wednesday the closing price was 4 percent greater than its closing price on Tuesday. What was the approximate percent change in the price from its opening price on Monday to its closing price on Wednesday?",
    choices: [
      { id: "A", text: "A decrease of 6%" },
      { id: "B", text: "A decrease of 4%" },
      { id: "C", text: "A decrease of 1%" },
      { id: "D", text: "An increase of 3%" },
      { id: "E", text: "An increase of 4%" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Find Tuesday's closing price.<br>10% less than $110: $110 × 0.90 = $99.<br><br>Step 2: Find Wednesday's closing price.<br>4% greater than $99: $99 × 1.04 = $102.96.<br><br>Step 3: Calculate the percent change from Monday's opening ($100) to Wednesday's close ($102.96).<br><span class='math-frac'><span class='num'>$102.96 − $100</span><span class='den'>$100</span></span> × 100 = 2.96% ≈ 3% increase.<br><br>The answer is an increase of approximately 3%."
  },
  {
    id: "quant_e030",
    section: "quant",
    difficulty: "easy",
    prompt: "1 − 0.000001 =",
    choices: [
      { id: "A", text: "(1.01)(0.99)" },
      { id: "B", text: "(1.11)(0.99)" },
      { id: "C", text: "(1.001)(0.999)" },
      { id: "D", text: "(1.111)(0.999)" },
      { id: "E", text: "(1.0101)(0.0909)" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Calculate the left side.<br>1 − 0.000001 = 0.999999.<br><br>Step 2: Use the difference of squares identity: a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b).<br>Notice that 1 − 0.000001 = 1<sup>2</sup> − (0.001)<sup>2</sup> = (1 + 0.001)(1 − 0.001) = (1.001)(0.999).<br><br>Step 3: Verify: (1.001)(0.999) = 0.999 + 0.000999 = 0.999999. ✓<br><br>The answer is (1.001)(0.999)."
  },
  {
    id: "quant_e031",
    section: "quant",
    difficulty: "easy",
    prompt: "In a certain history class of 17 juniors and seniors, each junior has written 2 book reports and each senior has written 3 book reports. If the 17 students have written a total of 44 book reports, how many juniors are in the class?",
    choices: [
      { id: "A", text: "7" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "10" },
      { id: "E", text: "11" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Set up two equations. Let j = juniors and s = seniors.<br>j + s = 17 (total students)<br>2j + 3s = 44 (total book reports)<br><br>Step 2: Solve by substitution. From the first equation: s = 17 − j.<br>2j + 3(17 − j) = 44<br>2j + 51 − 3j = 44<br>−j = −7<br>j = 7.<br><br>There are 7 juniors in the class."
  },
  {
    id: "quant_e032",
    section: "quant",
    difficulty: "easy",
    prompt: "|−4| × (|−20| − |5|) =",
    choices: [
      { id: "A", text: "−100" },
      { id: "B", text: "−60" },
      { id: "C", text: "60" },
      { id: "D", text: "75" },
      { id: "E", text: "100" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: The absolute value of a number is its distance from 0, always non-negative.<br><br>Step 1: Evaluate each absolute value.<br>|−4| = 4, |−20| = 20, |5| = 5.<br><br>Step 2: Substitute and calculate.<br>4 × (20 − 5) = 4 × 15 = 60.<br><br>The answer is 60."
  },
  {
    id: "quant_e033",
    section: "quant",
    difficulty: "easy",
    prompt: "Of the total amount that Jill spent on a shopping trip, excluding taxes, she spent 50 percent on clothing, 20 percent on food, and 30 percent on other items. If Jill paid a 4 percent tax on the clothing, no tax on the food, and an 8 percent tax on all other items, then the total tax that she paid was what percent of the total amount that she spent, excluding taxes?",
    choices: [
      { id: "A", text: "2.8%" },
      { id: "B", text: "3.6%" },
      { id: "C", text: "4.4%" },
      { id: "D", text: "5.2%" },
      { id: "E", text: "6.0%" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let T = total spent (excluding taxes). Calculate tax on each category.<br>• Clothing tax: 4% of 50% of T = 0.04 × 0.50T = 0.02T.<br>• Food tax: 0% of 20% of T = 0.<br>• Other items tax: 8% of 30% of T = 0.08 × 0.30T = 0.024T.<br><br>Step 2: Find total tax.<br>0.02T + 0 + 0.024T = 0.044T.<br><br>Step 3: Express as a percent of T.<br>0.044T ÷ T = 0.044 = 4.4%.<br><br>The total tax was 4.4% of the pre-tax spending."
  },
  {
    id: "quant_e034",
    section: "quant",
    difficulty: "easy",
    prompt: "How many integers x satisfy both 2 &lt; x ≤ 4 and 0 ≤ x ≤ 3?",
    choices: [
      { id: "A", text: "5" },
      { id: "B", text: "4" },
      { id: "C", text: "3" },
      { id: "D", text: "2" },
      { id: "E", text: "1" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: List integers satisfying 2 &lt; x ≤ 4 (x is strictly greater than 2).<br>x = 3 or x = 4.<br><br>Step 2: List integers satisfying 0 ≤ x ≤ 3.<br>x = 0, 1, 2, or 3.<br><br>Step 3: Find the intersection (values in both lists).<br>Only x = 3 appears in both.<br><br>There is 1 integer that satisfies both conditions."
  },
  {
    id: "quant_e035",
    section: "quant",
    difficulty: "easy",
    prompt: "At the opening of a trading day at a certain stock exchange, the price per share of stock K was $8. If the price per share of stock K was $9 at the closing of the day, what was the percent increase in the price per share of stock K for that day?",
    choices: [
      { id: "A", text: "1.4%" },
      { id: "B", text: "5.9%" },
      { id: "C", text: "11.1%" },
      { id: "D", text: "12.5%" },
      { id: "E", text: "23.6%" }
    ],
    correctAnswer: "D",
    explanation: "Percent increase formula: <span class='math-frac'><span class='num'>New − Original</span><span class='den'>Original</span></span> × 100.<br><br>Step 1: Find the change.<br>$9 − $8 = $1.<br><br>Step 2: Divide by the original price.<br><span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span> = 0.125.<br><br>Step 3: Convert to percent.<br>0.125 × 100 = 12.5%.<br><br>The percent increase is 12.5%."
  },
  {
    id: "quant_e036",
    section: "quant",
    difficulty: "easy",
    prompt: "A lever resting on a fulcrum has weights of w<sub>1</sub> pounds and w<sub>2</sub> pounds, located d<sub>1</sub> feet and d<sub>2</sub> feet from the fulcrum, respectively. The lever is balanced when w<sub>1</sub>d<sub>1</sub> = w<sub>2</sub>d<sub>2</sub>. Suppose w<sub>1</sub> is 50 pounds and w<sub>2</sub> is 30 pounds. If d<sub>1</sub> is 4 feet less than d<sub>2</sub>, what is d<sub>2</sub>, in feet?",
    choices: [
      { id: "A", text: "1.5" },
      { id: "B", text: "2.5" },
      { id: "C", text: "6" },
      { id: "D", text: "10" },
      { id: "E", text: "20" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Express d<sub>1</sub> in terms of d<sub>2</sub>.<br>d<sub>1</sub> = d<sub>2</sub> − 4.<br><br>Step 2: Use the balance equation w<sub>1</sub>d<sub>1</sub> = w<sub>2</sub>d<sub>2</sub>.<br>50(d<sub>2</sub> − 4) = 30 × d<sub>2</sub>.<br><br>Step 3: Solve for d<sub>2</sub>.<br>50d<sub>2</sub> − 200 = 30d<sub>2</sub><br>20d<sub>2</sub> = 200<br>d<sub>2</sub> = 10 feet.<br><br>The answer is 10 feet."
  },
  {
    id: "quant_e037",
    section: "quant",
    difficulty: "easy",
    prompt: "If r and s are positive integers such that (2<sup>r</sup>)(4<sup>s</sup>) = 16, then 2r + s =",
    choices: [
      { id: "A", text: "2" },
      { id: "B", text: "3" },
      { id: "C", text: "4" },
      { id: "D", text: "5" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Rewrite everything with base 2.<br>4<sup>s</sup> = (2<sup>2</sup>)<sup>s</sup> = 2<sup>2s</sup>, and 16 = 2<sup>4</sup>.<br><br>Step 2: Combine the left side.<br>2<sup>r</sup> × 2<sup>2s</sup> = 2<sup>r + 2s</sup> = 2<sup>4</sup>.<br>So r + 2s = 4.<br><br>Step 3: Since r and s are positive integers, try s = 1: r + 2 = 4, so r = 2. ✓<br><br>Step 4: Calculate 2r + s.<br>2(2) + 1 = 5.<br><br>The answer is 5."
  },
  {
    id: "quant_e038",
    section: "quant",
    difficulty: "easy",
    prompt: "Three people each contributed x dollars toward the purchase of a car. They then bought the car for y dollars, an amount less than the total contributed. If the excess amount is to be refunded to the three people in equal amounts, each person should receive a refund of how many dollars?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>3x − y</span><span class='den'>3</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>x − y</span><span class='den'>3</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>x − 3y</span><span class='den'>3</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>y − 3x</span><span class='den'>3</span></span>" },
      { id: "E", text: "3(x − y)" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find the total amount contributed.<br>3 people × x dollars each = 3x dollars.<br><br>Step 2: Find the excess (leftover) amount.<br>Excess = Total contributed − Car price = 3x − y.<br><br>Step 3: Divide equally among 3 people.<br>Each person's refund = <span class='math-frac'><span class='num'>3x − y</span><span class='den'>3</span></span>.<br><br>The answer is <span class='math-frac'><span class='num'>3x − y</span><span class='den'>3</span></span>."
  },
  {
    id: "quant_e039",
    section: "quant",
    difficulty: "easy",
    prompt: "Last week Jack worked 70 hours and earned $1,260. If he earned his regular hourly wage for the first 40 hours worked, 1<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> times his regular hourly wage for the next 20 hours worked, and 2 times his regular hourly wage for the remaining 10 hours worked, what was his regular hourly wage?",
    choices: [
      { id: "A", text: "$7.00" },
      { id: "B", text: "$14.00" },
      { id: "C", text: "$18.00" },
      { id: "D", text: "$22.00" },
      { id: "E", text: "$31.50" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Let w = regular hourly wage. Set up the earnings equation.<br>40w + 20(1.5w) + 10(2w) = 1,260.<br><br>Step 2: Simplify each term.<br>40w + 30w + 20w = 1,260.<br>90w = 1,260.<br><br>Step 3: Solve for w.<br>w = 1,260 ÷ 90 = $14.00.<br><br>Jack's regular hourly wage was $14.00."
  },
  {
    id: "quant_e040",
    section: "quant",
    difficulty: "easy",
    prompt: "If a and b are positive integers and (2<sup>a</sup>)<sup>b</sup> = 2<sup>3</sup>, what is the value of 2<sup>a</sup> · 2<sup>b</sup>?",
    choices: [
      { id: "A", text: "6" },
      { id: "B", text: "8" },
      { id: "C", text: "16" },
      { id: "D", text: "32" },
      { id: "E", text: "64" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Simplify the left side using the power rule (x<sup>m</sup>)<sup>n</sup> = x<sup>mn</sup>.<br>(2<sup>a</sup>)<sup>b</sup> = 2<sup>ab</sup> = 2<sup>3</sup>.<br>So ab = 3.<br><br>Step 2: Since a and b are positive integers and ab = 3, the only possibilities are (a, b) = (1, 3) or (3, 1).<br><br>Step 3: In either case, a + b = 4.<br>2<sup>a</sup> · 2<sup>b</sup> = 2<sup>a + b</sup> = 2<sup>4</sup> = 16.<br><br>The answer is 16."
  },
  {
    id: "quant_e041",
    section: "quant",
    difficulty: "easy",
    prompt: "Five machines at a certain factory operate at the same constant rate. If four of these machines, operating simultaneously, take 30 hours to fill a certain production order, how many fewer hours does it take all five machines, operating simultaneously, to fill the same production order?",
    choices: [
      { id: "A", text: "3" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "16" },
      { id: "E", text: "24" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Find the total work in machine-hours.<br>4 machines × 30 hours = 120 machine-hours of work.<br><br>Step 2: Find how long 5 machines take to do the same work.<br>120 machine-hours ÷ 5 machines = 24 hours.<br><br>Step 3: Find the difference.<br>30 − 24 = 6 fewer hours.<br><br>The answer is 6 hours."
  },
  {
    id: "quant_e042",
    section: "quant",
    difficulty: "easy",
    prompt: "A certain toll station on a highway has 7 tollbooths, and each tollbooth collects $0.75 from each vehicle that passes through it. From 6 o'clock yesterday morning to 12 o'clock midnight, vehicles passed through each of the tollbooths at the average rate of 4 vehicles per minute. Approximately how much money did the toll station collect during that time period?",
    choices: [
      { id: "A", text: "$1,500" },
      { id: "B", text: "$3,000" },
      { id: "C", text: "$11,500" },
      { id: "D", text: "$23,000" },
      { id: "E", text: "$30,000" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Find the collection rate per minute.<br>7 booths × 4 vehicles/min × $0.75 = $21 per minute.<br><br>Step 2: Find the total time in minutes.<br>6 AM to midnight = 18 hours = 18 × 60 = 1,080 minutes.<br><br>Step 3: Calculate total collection.<br>$21 × 1,080 = $22,680 ≈ $23,000.<br><br>The answer is approximately $23,000."
  },
  {
    id: "quant_e043",
    section: "quant",
    difficulty: "easy",
    prompt: "How many integers between 1 and 16, inclusive, have exactly 3 different positive integer factors?<br><br>(Note: 6 is NOT such an integer because 6 has 4 different positive integer factors: 1, 2, 3, and 6.)",
    choices: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: A number has exactly 3 factors only if it is the square of a prime number. The factors of p<sup>2</sup> are: 1, p, and p<sup>2</sup>.<br><br>Step 1: Find squares of primes between 1 and 16.<br>• 2<sup>2</sup> = 4 → factors: 1, 2, 4. ✓ (3 factors)<br>• 3<sup>2</sup> = 9 → factors: 1, 3, 9. ✓ (3 factors)<br>• 4<sup>2</sup> = 16, but 4 is not prime. Check 16's factors: 1, 2, 4, 8, 16 → 5 factors. ✗<br><br>Step 2: Only 4 and 9 qualify.<br><br>The answer is 2 integers."
  },
  {
    id: "quant_e044",
    section: "quant",
    difficulty: "easy",
    prompt: "Stephanie has 2<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> cups of milk on hand and makes 2 batches of cookies, using <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> cup of milk for each batch. Which of the following describes the amount of milk remaining after she makes the cookies?",
    choices: [
      { id: "A", text: "Less than <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> cup" },
      { id: "B", text: "Between <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> cup and <span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> cup" },
      { id: "C", text: "Between <span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> cup and 1 cup" },
      { id: "D", text: "Between 1 cup and 1<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> cups" },
      { id: "E", text: "More than 1<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> cups" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Calculate milk used.<br>2 batches × <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> cup = <span class='math-frac'><span class='num'>4</span><span class='den'>3</span></span> cups.<br><br>Step 2: Calculate remaining milk.<br>2<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> − <span class='math-frac'><span class='num'>4</span><span class='den'>3</span></span> = <span class='math-frac'><span class='num'>9</span><span class='den'>4</span></span> − <span class='math-frac'><span class='num'>4</span><span class='den'>3</span></span>.<br><br>Step 3: Find a common denominator (12).<br><span class='math-frac'><span class='num'>27</span><span class='den'>12</span></span> − <span class='math-frac'><span class='num'>16</span><span class='den'>12</span></span> = <span class='math-frac'><span class='num'>11</span><span class='den'>12</span></span>.<br><br>Step 4: Determine the range. Since <span class='math-frac'><span class='num'>9</span><span class='den'>12</span></span> = <span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> and <span class='math-frac'><span class='num'>11</span><span class='den'>12</span></span> &lt; 1, the remaining milk is between <span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> cup and 1 cup."
  },
  {
    id: "quant_e045",
    section: "quant",
    difficulty: "easy",
    prompt: "The expression n! is defined as the product of the integers from 1 through n. If p is the product of the integers from 100 through 299 and q is the product of the integers from 200 through 299, which of the following is equal to <span class='math-frac'><span class='num'>p</span><span class='den'>q</span></span>?",
    choices: [
      { id: "A", text: "99!" },
      { id: "B", text: "199!" },
      { id: "C", text: "<span class='math-frac'><span class='num'>199!</span><span class='den'>99!</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>299!</span><span class='den'>99!</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>299!</span><span class='den'>199!</span></span>" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Write out what p and q represent.<br>p = 100 × 101 × 102 × ... × 299.<br>q = 200 × 201 × 202 × ... × 299.<br><br>Step 2: Divide p by q. The terms from 200 to 299 cancel out.<br><span class='math-frac'><span class='num'>p</span><span class='den'>q</span></span> = 100 × 101 × 102 × ... × 199.<br><br>Step 3: Express this using factorials.<br>100 × 101 × ... × 199 = <span class='math-frac'><span class='num'>199!</span><span class='den'>99!</span></span> (since 199! = 1 × 2 × ... × 99 × 100 × ... × 199, and dividing by 99! removes the 1 through 99 part).<br><br>The answer is <span class='math-frac'><span class='num'>199!</span><span class='den'>99!</span></span>."
  },
  {
    id: "quant_e046",
    section: "quant",
    difficulty: "easy",
    prompt: "A school club purchased 12 containers of dried fruit, each containing 16<span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> pounds. What is the maximum number of individual bags of dried fruit, each containing <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> pound, that can be filled from the dried fruit the club purchased?",
    choices: [
      { id: "A", text: "50" },
      { id: "B", text: "64" },
      { id: "C", text: "67" },
      { id: "D", text: "768" },
      { id: "E", text: "804" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Find the total weight of dried fruit.<br>12 × 16<span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> = 12 × <span class='math-frac'><span class='num'>67</span><span class='den'>4</span></span> = <span class='math-frac'><span class='num'>804</span><span class='den'>4</span></span> = 201 pounds.<br><br>Step 2: Divide by the weight per bag.<br>201 ÷ <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> = 201 × 4 = 804 bags.<br><br>The maximum number of bags is 804."
  },
  {
    id: "quant_e047",
    section: "quant",
    difficulty: "easy",
    prompt: "A nursery sells fruit trees priced as follows:<br><br><table><tr><th>Height</th><th>Price</th></tr><tr><td>Less than 5 ft</td><td>$14.95</td></tr><tr><td>5 ft to 6 ft</td><td>$17.95</td></tr><tr><td>Over 6 ft</td><td>$21.95</td></tr></table><br>In its inventory, 54 trees are less than 5 feet in height. If the expected revenue from the sale of its entire stock is estimated at $2,450, approximately how much of this revenue will come from the sale of trees that are at least 5 feet tall?",
    choices: [
      { id: "A", text: "$1,730" },
      { id: "B", text: "$1,640" },
      { id: "C", text: "$1,410" },
      { id: "D", text: "$1,080" },
      { id: "E", text: "$810" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Calculate revenue from trees less than 5 ft tall.<br>54 × $14.95 ≈ $807.30.<br><br>Step 2: Subtract from total expected revenue to find revenue from taller trees.<br>$2,450 − $807.30 = $1,642.70 ≈ $1,640.<br><br>The answer is approximately $1,640."
  },
  {
    id: "quant_e048",
    section: "quant",
    difficulty: "easy",
    prompt: "A certain bridge is 4,024 feet long. Approximately how many minutes does it take to cross this bridge at a constant speed of 20 miles per hour? (1 mile = 5,280 feet)",
    choices: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "4" },
      { id: "D", text: "6" },
      { id: "E", text: "7" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Convert the bridge length to miles.<br>4,024 ÷ 5,280 ≈ 0.762 miles.<br><br>Step 2: Use Time = Distance ÷ Speed.<br>0.762 ÷ 20 = 0.0381 hours.<br><br>Step 3: Convert hours to minutes.<br>0.0381 × 60 ≈ 2.3 minutes ≈ 2 minutes.<br><br>The answer is approximately 2 minutes."
  },
  {
    id: "quant_e049",
    section: "quant",
    difficulty: "easy",
    prompt: "A purse contains 57 coins, all of which are nickels, dimes, or quarters. If the purse contains x dimes and 8 more nickels than dimes, which of the following gives the number of quarters the purse contains, in terms of x?",
    choices: [
      { id: "A", text: "2x − 49" },
      { id: "B", text: "2x + 49" },
      { id: "C", text: "2x − 65" },
      { id: "D", text: "49 − 2x" },
      { id: "E", text: "65 − 2x" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Express each coin type.<br>Dimes = x.<br>Nickels = x + 8.<br>Quarters = Q (what we want to find).<br><br>Step 2: Use the total coin count.<br>x + (x + 8) + Q = 57.<br>2x + 8 + Q = 57.<br><br>Step 3: Solve for Q.<br>Q = 57 − 2x − 8 = 49 − 2x.<br><br>The number of quarters is 49 − 2x."
  },
  {
    id: "quant_e050",
    section: "quant",
    difficulty: "easy",
    prompt: "The annual interest rate earned by an investment increased by 10 percent from last year to this year. If the annual interest rate earned by the investment this year was 11 percent, what was the annual interest rate last year?",
    choices: [
      { id: "A", text: "1%" },
      { id: "B", text: "1.1%" },
      { id: "C", text: "9.1%" },
      { id: "D", text: "10%" },
      { id: "E", text: "10.8%" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: \"Increased by 10 percent\" means the new rate is 110% of the old rate (not 10 percentage points more).<br><br>Step 1: Set up the equation. Let L = last year's rate.<br>1.10 × L = 11%.<br><br>Step 2: Solve for L.<br>L = 11% ÷ 1.10 = 10%.<br><br>Last year's interest rate was 10%."
  },
  {
    id: "quant_e051",
    section: "quant",
    difficulty: "easy",
    prompt: "A total of 5 liters of gasoline is to be poured into two empty containers with capacities of 2 liters and 6 liters, respectively, such that both containers will be filled to the same percent of their respective capacities. What amount of gasoline, in liters, must be poured into the 6-liter container?",
    choices: [
      { id: "A", text: "4<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>" },
      { id: "B", text: "4" },
      { id: "C", text: "3<span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span>" },
      { id: "D", text: "3" },
      { id: "E", text: "1<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let x = liters in the 6-liter container. Then 5 − x goes in the 2-liter container.<br><br>Step 2: Set the fill percentages equal.<br><span class='math-frac'><span class='num'>x</span><span class='den'>6</span></span> = <span class='math-frac'><span class='num'>5 − x</span><span class='den'>2</span></span>.<br><br>Step 3: Cross-multiply and solve.<br>2x = 6(5 − x)<br>2x = 30 − 6x<br>8x = 30<br>x = <span class='math-frac'><span class='num'>30</span><span class='den'>8</span></span> = 3<span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> liters.<br><br>The 6-liter container gets 3<span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> liters."
  },
  {
    id: "quant_e052",
    section: "quant",
    difficulty: "easy",
    prompt: "What is the larger of the 2 solutions of the equation x<sup>2</sup> − 4x = 96?",
    choices: [
      { id: "A", text: "8" },
      { id: "B", text: "12" },
      { id: "C", text: "16" },
      { id: "D", text: "32" },
      { id: "E", text: "100" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Rearrange into standard form.<br>x<sup>2</sup> − 4x − 96 = 0.<br><br>Step 2: Factor the quadratic. We need two numbers that multiply to −96 and add to −4.<br>Those numbers are −12 and +8.<br>(x − 12)(x + 8) = 0.<br><br>Step 3: Solve.<br>x = 12 or x = −8.<br><br>The larger solution is 12."
  },
  {
    id: "quant_e053",
    section: "quant",
    difficulty: "easy",
    prompt: "In the formula x = <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span>gt<sup>2</sup>, if g is a constant and x = −6 when t = 2, what is the value of x when t = 4?",
    choices: [
      { id: "A", text: "−24" },
      { id: "B", text: "−20" },
      { id: "C", text: "−15" },
      { id: "D", text: "20" },
      { id: "E", text: "24" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find the value of g using x = −6 and t = 2.<br>−6 = <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span> × g × (2)<sup>2</sup><br>−6 = <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span> × g × 4<br>−6 = <span class='math-frac'><span class='num'>4g</span><span class='den'>6</span></span> = <span class='math-frac'><span class='num'>2g</span><span class='den'>3</span></span><br>g = −9.<br><br>Step 2: Now find x when t = 4.<br>x = <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span> × (−9) × (4)<sup>2</sup> = <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span> × (−9) × 16 = <span class='math-frac'><span class='num'>−144</span><span class='den'>6</span></span> = −24.<br><br>The answer is −24."
  },
  {
    id: "quant_e054",
    section: "quant",
    difficulty: "easy",
    prompt: "<span class='math-frac'><span class='num'>(39,897)(0.0096)</span><span class='den'>198.76</span></span> is approximately",
    choices: [
      { id: "A", text: "0.02" },
      { id: "B", text: "0.2" },
      { id: "C", text: "2" },
      { id: "D", text: "20" },
      { id: "E", text: "200" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Round each number to make estimation easier.<br>39,897 ≈ 40,000<br>0.0096 ≈ 0.01<br>198.76 ≈ 200.<br><br>Step 2: Calculate the approximation.<br><span class='math-frac'><span class='num'>40,000 × 0.01</span><span class='den'>200</span></span> = <span class='math-frac'><span class='num'>400</span><span class='den'>200</span></span> = 2.<br><br>The answer is approximately 2."
  },
  {
    id: "quant_e055",
    section: "quant",
    difficulty: "easy",
    prompt: "The \"prime sum\" of an integer n greater than 1 is the sum of all the prime factors of n, including repetitions. For example, the prime sum of 12 is 7, since 12 = 2 × 2 × 3 and 2 + 2 + 3 = 7. For which of the following integers is the prime sum greater than 35?",
    choices: [
      { id: "A", text: "440" },
      { id: "B", text: "512" },
      { id: "C", text: "620" },
      { id: "D", text: "700" },
      { id: "E", text: "750" }
    ],
    correctAnswer: "C",
    explanation: "Find the prime factorization and prime sum of each choice:<br><br>(A) 440 = 2<sup>3</sup> × 5 × 11 → prime sum = 2+2+2+5+11 = 22. ✗<br>(B) 512 = 2<sup>9</sup> → prime sum = 2×9 = 18. ✗<br>(C) 620 = 2<sup>2</sup> × 5 × 31 → prime sum = 2+2+5+31 = 40. ✓ (greater than 35)<br>(D) 700 = 2<sup>2</sup> × 5<sup>2</sup> × 7 → prime sum = 2+2+5+5+7 = 21. ✗<br>(E) 750 = 2 × 3 × 5<sup>3</sup> → prime sum = 2+3+5+5+5 = 20. ✗<br><br>Only 620 has a prime sum greater than 35."
  },
  {
    id: "quant_e056",
    section: "quant",
    difficulty: "easy",
    prompt: "Each machine at a toy factory assembles a certain kind of toy at a constant rate of one toy every 3 minutes. If 40 percent of the machines at the factory are to be replaced by new machines that assemble this kind of toy at a constant rate of one toy every 2 minutes, what will be the percent increase in the number of toys assembled in one hour by all the machines at the factory, after the replacement?",
    choices: [
      { id: "A", text: "20%" },
      { id: "B", text: "25%" },
      { id: "C", text: "30%" },
      { id: "D", text: "40%" },
      { id: "E", text: "50%" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Let n = total number of machines. Old rate: each machine makes 20 toys/hour (60 ÷ 3).<br>Old total output = 20n toys/hour.<br><br>Step 2: After replacement:<br>• 60% of machines (0.6n) still make 20 toys/hour → 0.6n × 20 = 12n.<br>• 40% of machines (0.4n) now make 30 toys/hour (60 ÷ 2) → 0.4n × 30 = 12n.<br>New total output = 12n + 12n = 24n toys/hour.<br><br>Step 3: Calculate percent increase.<br><span class='math-frac'><span class='num'>24n − 20n</span><span class='den'>20n</span></span> × 100 = <span class='math-frac'><span class='num'>4n</span><span class='den'>20n</span></span> × 100 = 20%.<br><br>The percent increase is 20%."
  },
  {
    id: "quant_e057",
    section: "quant",
    difficulty: "easy",
    prompt: "When a subscription to a new magazine was purchased for m months, the publisher offered a discount of 75 percent off the regular monthly price. If the total value of the discount was equivalent to buying the magazine at its regular monthly price for 27 months, what was the value of m?",
    choices: [
      { id: "A", text: "18" },
      { id: "B", text: "24" },
      { id: "C", text: "30" },
      { id: "D", text: "36" },
      { id: "E", text: "48" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Let P = regular monthly price. The discount per month is 75% of P = 0.75P.<br><br>Step 2: The total discount over m months equals the cost of 27 months at full price.<br>0.75P × m = 27P.<br><br>Step 3: Divide both sides by P.<br>0.75m = 27.<br><br>Step 4: Solve for m.<br>m = 27 ÷ 0.75 = 36.<br><br>The subscription was for 36 months."
  },
  {
    id: "quant_e058",
    section: "quant",
    difficulty: "easy",
    prompt: "At a garage sale, all of the prices of the items sold were different. If the price of a radio sold at the garage sale was both the 15th highest price and the 20th lowest price among the prices of the items sold, how many items were sold at the garage sale?",
    choices: [
      { id: "A", text: "33" },
      { id: "B", text: "34" },
      { id: "C", text: "35" },
      { id: "D", text: "36" },
      { id: "E", text: "37" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: \"15th highest\" means 14 items had a higher price than the radio.<br><br>Step 2: \"20th lowest\" means 19 items had a lower price than the radio.<br><br>Step 3: Count all items: items above + the radio + items below.<br>14 + 1 + 19 = 34 items.<br><br>The answer is 34 items."
  },
  {
    id: "quant_e059",
    section: "quant",
    difficulty: "easy",
    prompt: "Half of a large pizza is cut into 4 equal-sized pieces, and the other half is cut into 6 equal-sized pieces. If a person were to eat 1 of the larger pieces and 2 of the smaller pieces, what fraction of the pizza would remain uneaten?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>5</span><span class='den'>12</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>13</span><span class='den'>24</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>7</span><span class='den'>12</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>17</span><span class='den'>24</span></span>" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Find the size of each piece type.<br>Larger pieces: half the pizza cut into 4 → each is <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> ÷ 4 = <span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span> of the pizza.<br>Smaller pieces: half the pizza cut into 6 → each is <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> ÷ 6 = <span class='math-frac'><span class='num'>1</span><span class='den'>12</span></span> of the pizza.<br><br>Step 2: Calculate the total fraction eaten.<br>1 large + 2 small = <span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span> + 2 × <span class='math-frac'><span class='num'>1</span><span class='den'>12</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span> + <span class='math-frac'><span class='num'>1</span><span class='den'>6</span></span> = <span class='math-frac'><span class='num'>3</span><span class='den'>24</span></span> + <span class='math-frac'><span class='num'>4</span><span class='den'>24</span></span> = <span class='math-frac'><span class='num'>7</span><span class='den'>24</span></span>.<br><br>Step 3: Subtract from 1.<br>1 − <span class='math-frac'><span class='num'>7</span><span class='den'>24</span></span> = <span class='math-frac'><span class='num'>17</span><span class='den'>24</span></span>.<br><br>The fraction remaining is <span class='math-frac'><span class='num'>17</span><span class='den'>24</span></span>."
  },
  {
    id: "quant_e060",
    section: "quant",
    difficulty: "easy",
    prompt: "If a = 1 + <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> + <span class='math-frac'><span class='num'>1</span><span class='den'>16</span></span> + <span class='math-frac'><span class='num'>1</span><span class='den'>64</span></span> and b = 1 + <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>a, then what is the value of a − b?",
    choices: [
      { id: "A", text: "−<span class='math-frac'><span class='num'>85</span><span class='den'>256</span></span>" },
      { id: "B", text: "−<span class='math-frac'><span class='num'>1</span><span class='den'>256</span></span>" },
      { id: "C", text: "−<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>125</span><span class='den'>256</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>169</span><span class='den'>256</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find a − b algebraically first.<br>b = 1 + <span class='math-frac'><span class='num'>a</span><span class='den'>4</span></span>, so:<br>a − b = a − 1 − <span class='math-frac'><span class='num'>a</span><span class='den'>4</span></span> = <span class='math-frac'><span class='num'>3a</span><span class='den'>4</span></span> − 1.<br><br>Step 2: Calculate a using a common denominator of 64.<br>a = <span class='math-frac'><span class='num'>64</span><span class='den'>64</span></span> + <span class='math-frac'><span class='num'>16</span><span class='den'>64</span></span> + <span class='math-frac'><span class='num'>4</span><span class='den'>64</span></span> + <span class='math-frac'><span class='num'>1</span><span class='den'>64</span></span> = <span class='math-frac'><span class='num'>85</span><span class='den'>64</span></span>.<br><br>Step 3: Substitute into a − b.<br><span class='math-frac'><span class='num'>3</span><span class='den'>4</span></span> × <span class='math-frac'><span class='num'>85</span><span class='den'>64</span></span> − 1 = <span class='math-frac'><span class='num'>255</span><span class='den'>256</span></span> − <span class='math-frac'><span class='num'>256</span><span class='den'>256</span></span> = −<span class='math-frac'><span class='num'>1</span><span class='den'>256</span></span>.<br><br>The answer is −<span class='math-frac'><span class='num'>1</span><span class='den'>256</span></span>."
  }
);

// Second batch of easy questions (Q61–Q82)

GMAT_QUESTIONS.push(
  {
    id: "quant_e061",
    section: "quant",
    difficulty: "easy",
    prompt: "In a certain learning experiment, each participant had three trials and was assigned, for each trial, a score of either −2, −1, 0, 1, or 2. The participant's final score consisted of the sum of the first trial score, 2 times the second trial score, and 3 times the third trial score. If Anne received scores of 1 and −1 for her first two trials, not necessarily in that order, which of the following could NOT be her final score?",
    choices: [
      { id: "A", text: "−4" },
      { id: "B", text: "−2" },
      { id: "C", text: "1" },
      { id: "D", text: "5" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Anne's first two scores are 1 and −1 (in either order). Let the third trial score = x, where x ∈ {−2, −1, 0, 1, 2}.<br><br>Case 1: First = 1, Second = −1.<br>Final = 1 + 2(−1) + 3x = −1 + 3x.<br>Possible values: −7, −4, −1, 2, 5.<br><br>Case 2: First = −1, Second = 1.<br>Final = −1 + 2(1) + 3x = 1 + 3x.<br>Possible values: −5, −2, 1, 4, 7.<br><br>Step 2: Combine all possible final scores:<br>{−7, −5, −4, −2, −1, 1, 2, 4, 5, 7}.<br><br>Step 3: Check which answer choice is NOT in this set.<br>6 does not appear. The answer is 6."
  },
  {
    id: "quant_e062",
    section: "quant",
    difficulty: "easy",
    prompt: "For all positive integers m and v, the expression m Θ v represents the remainder when m is divided by v. What is the value of ((98 Θ 33) Θ 17) − (98 Θ (33 Θ 17))?",
    choices: [
      { id: "A", text: "−10" },
      { id: "B", text: "−2" },
      { id: "C", text: "8" },
      { id: "D", text: "13" },
      { id: "E", text: "17" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Evaluate the left expression: (98 Θ 33) Θ 17.<br>• 98 Θ 33: 98 ÷ 33 = 2 remainder 32. So 98 Θ 33 = 32.<br>• 32 Θ 17: 32 ÷ 17 = 1 remainder 15. So 32 Θ 17 = 15.<br>Left side = 15.<br><br>Step 2: Evaluate the right expression: 98 Θ (33 Θ 17).<br>• 33 Θ 17: 33 ÷ 17 = 1 remainder 16. So 33 Θ 17 = 16.<br>• 98 Θ 16: 98 ÷ 16 = 6 remainder 2. So 98 Θ 16 = 2.<br>Right side = 2.<br><br>Step 3: Subtract.<br>15 − 2 = 13.<br><br>The answer is 13."
  },
  {
    id: "quant_e063",
    section: "quant",
    difficulty: "easy",
    prompt: "A chart shows year-end investment values for Darnella using stacked bars for bonds, stocks, and cash for the years 2000–2003. From the chart, in 2000 the total value of bonds was $6,000 and the combined value of bonds and stocks reached $9,000. In 2003, the total value of bonds was $5,000 and the combined value of bonds and stocks reached $10,000. For just the stocks portion, what was the increase in value from year-end 2000 to year-end 2003?",
    choices: [
      { id: "A", text: "$1,000" },
      { id: "B", text: "$2,000" },
      { id: "C", text: "$3,000" },
      { id: "D", text: "$4,000" },
      { id: "E", text: "$5,000" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the value of stocks in 2000.<br>Bonds + Stocks = $9,000 and Bonds = $6,000.<br>Stocks in 2000 = $9,000 − $6,000 = $3,000.<br><br>Step 2: Find the value of stocks in 2003.<br>Bonds + Stocks = $10,000 and Bonds = $5,000.<br>Stocks in 2003 = $10,000 − $5,000 = $5,000.<br><br>Step 3: Calculate the increase.<br>$5,000 − $3,000 = $2,000.<br><br>The increase in stock value was $2,000."
  },
  {
    id: "quant_e064",
    section: "quant",
    difficulty: "easy",
    prompt: "If the sum of the reciprocals of two consecutive odd integers is <span class='math-frac'><span class='num'>12</span><span class='den'>35</span></span>, then the greater of the two integers is",
    choices: [
      { id: "A", text: "3" },
      { id: "B", text: "5" },
      { id: "C", text: "7" },
      { id: "D", text: "9" },
      { id: "E", text: "11" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Try consecutive odd integer pairs from the answer choices. If the greater integer is 7, the pair is 5 and 7.<br><br>Step 2: Check: <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span> + <span class='math-frac'><span class='num'>1</span><span class='den'>7</span></span> = <span class='math-frac'><span class='num'>7</span><span class='den'>35</span></span> + <span class='math-frac'><span class='num'>5</span><span class='den'>35</span></span> = <span class='math-frac'><span class='num'>12</span><span class='den'>35</span></span>. ✓<br><br>This matches! The greater integer is 7."
  },
  {
    id: "quant_e065",
    section: "quant",
    difficulty: "easy",
    prompt: "What is the sum of the odd integers from 35 to 85, inclusive?",
    choices: [
      { id: "A", text: "1,560" },
      { id: "B", text: "1,500" },
      { id: "C", text: "1,240" },
      { id: "D", text: "1,120" },
      { id: "E", text: "1,100" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Count the odd integers from 35 to 85.<br>The odd integers are 35, 37, 39, ..., 85. Using the formula: count = <span class='math-frac'><span class='num'>85 − 35</span><span class='den'>2</span></span> + 1 = 26 numbers.<br><br>Step 2: Use the sum formula: Sum = count × average.<br>Average of an arithmetic sequence = <span class='math-frac'><span class='num'>first + last</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>35 + 85</span><span class='den'>2</span></span> = 60.<br><br>Step 3: Calculate the sum.<br>26 × 60 = 1,560.<br><br>The answer is 1,560."
  },
  {
    id: "quant_e066",
    section: "quant",
    difficulty: "easy",
    prompt: "For all numbers a, b, c, and d, the expression |a b; c d| is defined as ad − cb. Which of the following is equal to |s t; 1 3| − |−t 2; s 4| + |2 2; t s|?",
    choices: [
      { id: "A", text: "|s t; 1 5|" },
      { id: "B", text: "|s t; 7 1|" },
      { id: "C", text: "|s t; 5 7|" },
      { id: "D", text: "|s −t; 1 5|" },
      { id: "E", text: "|s −t; 1 7|" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Evaluate each determinant using the rule |a b; c d| = ad − cb.<br>• |s t; 1 3| = 3s − t(1) = 3s − t.<br>• |−t 2; s 4| = (−t)(4) − 2(s) = −4t − 2s.<br>• |2 2; t s| = 2s − 2t.<br><br>Step 2: Combine the expression.<br>(3s − t) − (−4t − 2s) + (2s − 2t)<br>= 3s − t + 4t + 2s + 2s − 2t<br>= 7s + t.<br><br>Step 3: Check which answer equals 7s + t.<br>|s −t; 1 7| = s(7) − (−t)(1) = 7s + t. ✓<br><br>The answer is |s −t; 1 7|."
  },
  {
    id: "quant_e067",
    section: "quant",
    difficulty: "easy",
    prompt: "In a certain sequence, each term after the first term is one-half the previous term. If the tenth term of the sequence is between 0.0001 and 0.001, then the twelfth term of the sequence is between",
    choices: [
      { id: "A", text: "0.0025 and 0.025" },
      { id: "B", text: "0.00025 and 0.0025" },
      { id: "C", text: "0.000025 and 0.00025" },
      { id: "D", text: "0.0000025 and 0.000025" },
      { id: "E", text: "0.00000025 and 0.0000025" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Each term is half the previous term. To go from the 10th term to the 12th term, we multiply by <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> twice.<br>12th term = 10th term × (<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>2</sup> = 10th term × <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>.<br><br>Step 2: Apply this to both bounds.<br>Lower bound: 0.0001 × <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> = 0.000025.<br>Upper bound: 0.001 × <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> = 0.00025.<br><br>The 12th term is between 0.000025 and 0.00025."
  },
  {
    id: "quant_e068",
    section: "quant",
    difficulty: "easy",
    prompt: "A certain drive-in movie theater has a total of 17 rows of parking spaces. There are 20 parking spaces in the first row and 21 parking spaces in the second row. In each subsequent row there are 2 more parking spaces than in the previous row. What is the total number of parking spaces in the movie theater?",
    choices: [
      { id: "A", text: "412" },
      { id: "B", text: "544" },
      { id: "C", text: "596" },
      { id: "D", text: "632" },
      { id: "E", text: "692" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Row 1 has 20 spaces (it's separate from the pattern).<br><br>Step 2: Rows 2 through 17 form an arithmetic sequence.<br>First term (row 2) = 21, common difference = 2, number of terms = 16.<br>Last term (row 17) = 21 + (16 − 1) × 2 = 21 + 30 = 51.<br><br>Step 3: Sum of rows 2–17 using the arithmetic series formula.<br>Sum = <span class='math-frac'><span class='num'>number of terms</span><span class='den'>2</span></span> × (first + last) = <span class='math-frac'><span class='num'>16</span><span class='den'>2</span></span> × (21 + 51) = 8 × 72 = 576.<br><br>Step 4: Add row 1.<br>Total = 20 + 576 = 596.<br><br>The answer is 596 parking spaces."
  },
  {
    id: "quant_e069",
    section: "quant",
    difficulty: "easy",
    prompt: "Ada and Paul received their scores on three tests. On the first test, Ada's score was 10 points higher than Paul's score. On the second test, Ada's score was 4 points higher than Paul's score. If Paul's average (arithmetic mean) score on the three tests was 3 points higher than Ada's average score on the three tests, then Paul's score on the third test was how many points higher than Ada's score?",
    choices: [
      { id: "A", text: "9" },
      { id: "B", text: "14" },
      { id: "C", text: "17" },
      { id: "D", text: "23" },
      { id: "E", text: "25" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: On the first two tests, Ada scored a total of 10 + 4 = 14 points more than Paul.<br><br>Step 2: Paul's average is 3 points higher than Ada's over 3 tests, so Paul's total is 3 × 3 = 9 points higher than Ada's total.<br><br>Step 3: Let d = how many points higher Paul scored on test 3.<br>Paul's total advantage = d − 14 (he gains d on test 3 but is behind 14 on tests 1–2).<br>Set this equal to 9: d − 14 = 9, so d = 23.<br><br>Paul scored 23 points higher than Ada on the third test."
  },
  {
    id: "quant_e070",
    section: "quant",
    difficulty: "easy",
    prompt: "The price of a certain stock increased by 0.25 of 1 percent on a certain day. By what fraction did the price of the stock increase that day?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>2,500</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>400</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>40</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>25</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Convert \"0.25 of 1 percent\" to a fraction.<br>0.25 of 1% = <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> × 1% = <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> × <span class='math-frac'><span class='num'>1</span><span class='den'>100</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>400</span></span>.<br><br>The stock increased by <span class='math-frac'><span class='num'>1</span><span class='den'>400</span></span>."
  },
  {
    id: "quant_e071",
    section: "quant",
    difficulty: "easy",
    prompt: "For each trip, a taxicab company charges $4.25 for the first mile and $2.65 for each additional mile or fraction thereof. If the total charge for a certain trip was $62.55, how many miles at most was the trip?",
    choices: [
      { id: "A", text: "21" },
      { id: "B", text: "22" },
      { id: "C", text: "23" },
      { id: "D", text: "24" },
      { id: "E", text: "25" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Subtract the first-mile charge.<br>$62.55 − $4.25 = $58.30 remaining for additional miles.<br><br>Step 2: Divide by the per-mile charge.<br>$58.30 ÷ $2.65 = 22 additional miles (exact division).<br><br>Step 3: Add the first mile.<br>Total = 1 + 22 = 23 miles.<br><br>Since the division is exact (no fraction), the trip was at most 23 miles."
  },
  {
    id: "quant_e072",
    section: "quant",
    difficulty: "easy",
    prompt: "When 24 is divided by the positive integer n, the remainder is 4. Which of the following statements about n must be true?<br><br>I. n is even.<br>II. n is a multiple of 5.<br>III. n is a factor of 20.",
    choices: [
      { id: "A", text: "III only" },
      { id: "B", text: "I and II only" },
      { id: "C", text: "I and III only" },
      { id: "D", text: "II and III only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: If 24 ÷ n has remainder 4, then 24 − 4 = 20 is divisible by n, and n must be greater than 4 (the remainder must be less than the divisor).<br><br>Step 2: Find all factors of 20 that are greater than 4.<br>Factors of 20: 1, 2, 4, 5, 10, 20.<br>Greater than 4: n = 5, 10, or 20.<br><br>Step 3: Check each statement.<br>I. n is even? n = 5 is odd. ✗ Not always true.<br>II. n is a multiple of 5? 5, 10, 20 are all multiples of 5. ✓ Always true.<br>III. n is a factor of 20? 5, 10, 20 are all factors of 20. ✓ Always true.<br><br>Only II and III must be true."
  },
  {
    id: "quant_e073",
    section: "quant",
    difficulty: "easy",
    prompt: "Terry needs to purchase pipe for a plumbing job requiring the following lengths: 1 ft 4 in, 2 ft 8 in, 3 ft 4 in, 3 ft 8 in, 4 ft 8 in, 5 ft 8 in, and 9 ft 4 in. The store sells pipe only in 10-foot lengths. If each 10-foot length can be cut into shorter pieces, what is the minimum number of 10-foot pipe lengths that Terry needs to purchase? (1 ft = 12 in)",
    choices: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
      { id: "E", text: "7" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the total pipe needed.<br>1'4\" + 2'8\" + 3'4\" + 3'8\" + 4'8\" + 5'8\" + 9'4\" = 30'8\" (30 feet 8 inches).<br>This means at least 4 pipes (since 3 pipes = 30 ft, which is not enough).<br><br>Step 2: Verify that 4 pipes work by finding an efficient cutting arrangement.<br>• Pipe 1: 9'4\" (leaves 0'8\" — too short for any piece).<br>• Pipe 2: 5'8\" + 3'8\" = 9'4\" (leaves 0'8\").<br>• Pipe 3: 4'8\" + 3'4\" + 1'4\" = 9'4\" (leaves 0'8\").<br>• Pipe 4: 2'8\" (leaves 7'4\" — unused but all pieces are cut).<br><br>All 7 pieces fit into 4 pipes. The minimum is 4."
  },
  {
    id: "quant_e074",
    section: "quant",
    difficulty: "easy",
    prompt: "What is the thousandths digit in the decimal equivalent of <span class='math-frac'><span class='num'>53</span><span class='den'>5,000</span></span>?",
    choices: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "3" },
      { id: "D", text: "5" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Convert the fraction to a decimal.<br><span class='math-frac'><span class='num'>53</span><span class='den'>5,000</span></span> = <span class='math-frac'><span class='num'>53 × 2</span><span class='den'>5,000 × 2</span></span> = <span class='math-frac'><span class='num'>106</span><span class='den'>10,000</span></span> = 0.0106.<br><br>Step 2: Identify the thousandths digit (3rd decimal place).<br>0.0106 → tenths = 0, hundredths = 1, thousandths = 0.<br><br>The thousandths digit is 0."
  },
  {
    id: "quant_e075",
    section: "quant",
    difficulty: "easy",
    prompt: "If a equals the sum of the even integers from 2 to 20, inclusive, and b equals the sum of the odd integers from 1 to 19, inclusive, what is the value of a − b?",
    choices: [
      { id: "A", text: "1" },
      { id: "B", text: "10" },
      { id: "C", text: "19" },
      { id: "D", text: "20" },
      { id: "E", text: "21" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Pair up corresponding even and odd integers.<br>a − b = (2 − 1) + (4 − 3) + (6 − 5) + (8 − 7) + (10 − 9) + (12 − 11) + (14 − 13) + (16 − 15) + (18 − 17) + (20 − 19).<br><br>Step 2: Each pair gives a difference of 1.<br>= 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 10.<br><br>The answer is 10."
  },
  {
    id: "quant_e076",
    section: "quant",
    difficulty: "easy",
    prompt: "If a, b, c, and d are consecutive even integers and a &lt; b &lt; c &lt; d, then the value of (a + b) is how much less than the value of (c + d)?",
    choices: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "6" },
      { id: "D", text: "8" },
      { id: "E", text: "10" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Express all four integers in terms of a.<br>b = a + 2, c = a + 4, d = a + 6.<br><br>Step 2: Calculate each sum.<br>a + b = a + (a + 2) = 2a + 2.<br>c + d = (a + 4) + (a + 6) = 2a + 10.<br><br>Step 3: Find the difference.<br>(c + d) − (a + b) = (2a + 10) − (2a + 2) = 8.<br><br>The answer is 8."
  },
  {
    id: "quant_e077",
    section: "quant",
    difficulty: "easy",
    prompt: "A retailer sold an appliance for $80. If the retailer's gross profit on the appliance was 25 percent of the retailer's cost for the appliance, how many dollars was the retailer's gross profit?",
    choices: [
      { id: "A", text: "$10" },
      { id: "B", text: "$16" },
      { id: "C", text: "$20" },
      { id: "D", text: "$24" },
      { id: "E", text: "$25" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Set up the relationship. Let C = cost.<br>Selling price = Cost + Profit = C + 0.25C = 1.25C.<br><br>Step 2: Solve for C.<br>1.25C = $80<br>C = $80 ÷ 1.25 = $64.<br><br>Step 3: Calculate the profit.<br>Profit = 25% of $64 = 0.25 × $64 = $16.<br><br>The gross profit was $16."
  },
  {
    id: "quant_e078",
    section: "quant",
    difficulty: "easy",
    prompt: "Beth has a collection of 8 boxes of clothing for a charity, and the average (arithmetic mean) number of pieces of clothing per box is c. If she replaces a box that contains 12 pieces of clothing with a box that contains 22 pieces of clothing, what is the average number of pieces of clothing per box for the new collection, in terms of c?",
    choices: [
      { id: "A", text: "c − <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span>" },
      { id: "B", text: "c + <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span>" },
      { id: "C", text: "8 − <span class='math-frac'><span class='num'>10</span><span class='den'>c</span></span>" },
      { id: "D", text: "8 + <span class='math-frac'><span class='num'>10</span><span class='den'>c</span></span>" },
      { id: "E", text: "8c − 10" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the original total pieces.<br>Average = c, boxes = 8, so total = 8c.<br><br>Step 2: Find the new total after the swap.<br>Remove 12, add 22: new total = 8c − 12 + 22 = 8c + 10.<br><br>Step 3: Find the new average (still 8 boxes).<br>New average = <span class='math-frac'><span class='num'>8c + 10</span><span class='den'>8</span></span> = c + <span class='math-frac'><span class='num'>10</span><span class='den'>8</span></span> = c + <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span>.<br><br>The new average is c + <span class='math-frac'><span class='num'>5</span><span class='den'>4</span></span>."
  },
  {
    id: "quant_e079",
    section: "quant",
    difficulty: "easy",
    prompt: "The value of <span class='math-frac'><span class='num'>1 + 0.0001</span><span class='den'>0.04 + 10</span></span> is closest to which of the following?",
    choices: [
      { id: "A", text: "0.0001" },
      { id: "B", text: "0.001" },
      { id: "C", text: "0.01" },
      { id: "D", text: "1" },
      { id: "E", text: "10" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Simplify the numerator and denominator.<br>Numerator: 1 + 0.0001 ≈ 1.<br>Denominator: 0.04 + 10 ≈ 10.<br><br>Step 2: Estimate the fraction.<br><span class='math-frac'><span class='num'>1</span><span class='den'>10</span></span> = 0.1.<br><br>Step 3: The answer choices are spaced by factors of 10 (0.0001, 0.001, 0.01, 1, 10). The value 0.1 falls between 0.01 and 1. Since 0.1 is closer to 0.01 on a logarithmic scale (one factor of 10 away from each), but looking at the choices, 0.1 is the geometric mean of 0.01 and 1. The closest listed option is 0.01 (choice C), as the answer choices suggest order-of-magnitude estimation."
  },
  {
    id: "quant_e080",
    section: "quant",
    difficulty: "easy",
    prompt: "If x + 1 = t and t = 3 − x, then x =",
    choices: [
      { id: "A", text: "−2" },
      { id: "B", text: "−1" },
      { id: "C", text: "0" },
      { id: "D", text: "1" },
      { id: "E", text: "2" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Since both expressions equal t, set them equal to each other.<br>x + 1 = 3 − x.<br><br>Step 2: Solve for x.<br>x + x = 3 − 1<br>2x = 2<br>x = 1.<br><br>The answer is x = 1."
  },
  {
    id: "quant_e081",
    section: "quant",
    difficulty: "easy",
    prompt: "If x = kc and y = kt, then y − x =",
    choices: [
      { id: "A", text: "k(t − c)" },
      { id: "B", text: "k(c − t)" },
      { id: "C", text: "c(k − t)" },
      { id: "D", text: "t(k − c)" },
      { id: "E", text: "k(1 − t)" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Substitute the given expressions.<br>y − x = kt − kc.<br><br>Step 2: Factor out the common factor k.<br>kt − kc = k(t − c).<br><br>The answer is k(t − c)."
  },
  {
    id: "quant_e082",
    section: "quant",
    difficulty: "easy",
    prompt: "If k is a positive even integer, which of the following must be an odd integer?<br><br>I. k<sup>2</sup> − 3k + 4<br>II. k<sup>5</sup> + 3<br>III. 7k − 7",
    choices: [
      { id: "A", text: "II only" },
      { id: "B", text: "III only" },
      { id: "C", text: "I and III only" },
      { id: "D", text: "II and III only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: Even ± Even = Even. Even ± Odd = Odd. Even × anything = Even.<br><br>Since k is even:<br><br>I. k<sup>2</sup> − 3k + 4 = even − even + even = even. ✗ Not odd.<br><br>II. k<sup>5</sup> + 3 = even + odd = odd. ✓ Must be odd.<br><br>III. 7k − 7 = even − odd = odd. ✓ Must be odd.<br><br>Only II and III must be odd."
  }
);
