// GMAT Quant Review — Medium Questions (Q83–Q147)
// Source: GMAT Focus Edition Quantitative Review

GMAT_QUESTIONS.push(
  {
    id: "quant_m083",
    section: "quant",
    difficulty: "medium",
    prompt: "If <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> of the result obtained when 2 is subtracted from 5x is equal to the sum of 10 and 3x, what is the value of x?",
    choices: [
      { id: "A", text: "−22" },
      { id: "B", text: "−4" },
      { id: "C", text: "4" },
      { id: "D", text: "18" },
      { id: "E", text: "22" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Translate the words into an equation. 'The result when 2 is subtracted from 5x' is (5x − 2). Half of that equals the sum of 10 and 3x:<br><br><span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>(5x − 2) = 10 + 3x<br><br>Step 2: Multiply both sides by 2 to eliminate the fraction:<br>5x − 2 = 20 + 6x<br><br>Step 3: Subtract 5x from both sides:<br>−2 = 20 + x<br><br>Step 4: Subtract 20 from both sides:<br>x = −22<br><br>The answer is (A)."
  },
  {
    id: "quant_m084",
    section: "quant",
    difficulty: "medium",
    prompt: "If Car A took n hours to travel 2 miles and Car B took m hours to travel 3 miles, which of the following expresses the time it would take Car C, traveling at the average (arithmetic mean) of those rates, to travel 5 miles?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>10nm</span><span class='den'>3n + 2m</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>3n + 2m</span><span class='den'>10nm</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>2n + 3m</span><span class='den'>5nm</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>10(n + m)</span><span class='den'>2n + 3m</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>5(n + m)</span><span class='den'>2n + 3m</span></span>" }
    ],
    correctAnswer: "A",
    explanation: "Key concept: Rate = Distance ÷ Time, and Time = Distance ÷ Rate.<br><br>Step 1: Find each car's rate.<br>Rate of Car A = <span class='math-frac'><span class='num'>2</span><span class='den'>n</span></span> miles per hour<br>Rate of Car B = <span class='math-frac'><span class='num'>3</span><span class='den'>m</span></span> miles per hour<br><br>Step 2: Find the average of the two rates.<br>Average rate = <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × (<span class='math-frac'><span class='num'>2</span><span class='den'>n</span></span> + <span class='math-frac'><span class='num'>3</span><span class='den'>m</span></span>) = <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='math-frac'><span class='num'>2m + 3n</span><span class='den'>nm</span></span> = <span class='math-frac'><span class='num'>2m + 3n</span><span class='den'>2nm</span></span><br><br>Step 3: Find the time for Car C to travel 5 miles.<br>Time = 5 ÷ <span class='math-frac'><span class='num'>2m + 3n</span><span class='den'>2nm</span></span> = 5 × <span class='math-frac'><span class='num'>2nm</span><span class='den'>2m + 3n</span></span> = <span class='math-frac'><span class='num'>10nm</span><span class='den'>3n + 2m</span></span><br><br>The answer is (A)."
  },
  {
    id: "quant_m085",
    section: "quant",
    difficulty: "medium",
    prompt: "If x, y, and k are positive numbers and x is less than y, then <span class='math-frac'><span class='num'>x + k</span><span class='den'>y + k</span></span> is",
    choices: [
      { id: "A", text: "equal to 1" },
      { id: "B", text: "greater than <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>" },
      { id: "C", text: "equal to <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>" },
      { id: "D", text: "less than <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>" },
      { id: "E", text: "less than or greater than <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>, depending on the value of k" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: Adding the same positive number to both the numerator and denominator of a proper fraction makes it closer to 1 (i.e., larger).<br><br>Step 1: Since x &lt; y and both are positive, <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> &lt; 1.<br><br>Step 2: Try a concrete example. Let x = 1, y = 4, k = 3.<br><span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span> = 0.25<br><span class='math-frac'><span class='num'>x + k</span><span class='den'>y + k</span></span> = <span class='math-frac'><span class='num'>4</span><span class='den'>7</span></span> ≈ 0.57<br><br>Step 3: Algebraic proof: We want to show (x+k)/(y+k) &gt; x/y.<br>Cross-multiply (all positive): y(x+k) vs. x(y+k)<br>xy + ky vs. xy + kx<br>Since y &gt; x and k &gt; 0, we get ky &gt; kx, so (x+k)/(y+k) &gt; x/y. ✓<br><br>The answer is (B)."
  },
  {
    id: "quant_m086",
    section: "quant",
    difficulty: "medium",
    prompt: "Consider the following set of inequalities: p &gt; q, s &gt; r, q &gt; t, s &gt; p, and r &gt; q. Between which two quantities is no relationship established?",
    choices: [
      { id: "A", text: "p and r" },
      { id: "B", text: "s and t" },
      { id: "C", text: "s and q" },
      { id: "D", text: "p and t" },
      { id: "E", text: "r and t" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Chain the inequalities together to see what we can determine.<br>From the given: s &gt; p &gt; q &gt; t and s &gt; r &gt; q &gt; t.<br><br>Step 2: Check each pair:<br>• (B) s and t: s &gt; p &gt; q &gt; t, so s &gt; t. ✓ Relationship exists.<br>• (C) s and q: s &gt; p &gt; q, so s &gt; q. ✓ Relationship exists.<br>• (D) p and t: p &gt; q &gt; t, so p &gt; t. ✓ Relationship exists.<br>• (E) r and t: r &gt; q &gt; t, so r &gt; t. ✓ Relationship exists.<br><br>Step 3: Check p and r. We know s &gt; p and s &gt; r, and both p &gt; q and r &gt; q. But there is no chain connecting p to r directly — p could be greater than, less than, or equal to r.<br><br>The answer is (A)."
  },
  {
    id: "quant_m087",
    section: "quant",
    difficulty: "medium",
    prompt: "Carl averaged 2m miles per hour on a trip that took him h hours. If Ruth made the same trip in <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>h hours, what was her average speed in miles per hour?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>mh</span><span class='den'>3</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>2mh</span><span class='den'>3</span></span>" },
      { id: "C", text: "m" },
      { id: "D", text: "<span class='math-frac'><span class='num'>3m</span><span class='den'>2</span></span>" },
      { id: "E", text: "3m" }
    ],
    correctAnswer: "E",
    explanation: "Key concept: Distance = Rate × Time, and Rate = Distance ÷ Time.<br><br>Step 1: Find the total distance of the trip using Carl's information.<br>Distance = Rate × Time = 2m × h = 2mh miles<br><br>Step 2: Ruth travels the same distance in <span class='math-frac'><span class='num'>2h</span><span class='den'>3</span></span> hours.<br>Ruth's speed = Distance ÷ Time = 2mh ÷ <span class='math-frac'><span class='num'>2h</span><span class='den'>3</span></span><br><br>Step 3: Dividing by a fraction means multiplying by its reciprocal:<br>= 2mh × <span class='math-frac'><span class='num'>3</span><span class='den'>2h</span></span> = <span class='math-frac'><span class='num'>6mh</span><span class='den'>2h</span></span> = 3m<br><br>The answer is (E)."
  },
  {
    id: "quant_m088",
    section: "quant",
    difficulty: "medium",
    prompt: "Of three persons, two take relish, two take pepper, and two take salt. The one who takes no salt takes no pepper, and the one who takes no pepper takes no relish. Which of the following statements must be true?<br><br>I. The person who takes no salt also takes no relish.<br>II. Any of the three persons who takes pepper also takes relish and salt.<br>III. The person who takes no relish is not one of those who takes salt.",
    choices: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "III only" },
      { id: "D", text: "I and II only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Use the chain of logic from the given clues.<br>• 'No salt → no pepper' means: if a person doesn't take salt, they also don't take pepper.<br>• 'No pepper → no relish' means: if a person doesn't take pepper, they also don't take relish.<br><br>Step 2: Combine these: No salt → no pepper → no relish. So one person takes none of the three condiments, and the other two must take all three.<br><br>Step 3: Check each statement:<br>• I. 'No salt → no relish': True, because no salt → no pepper → no relish. ✓<br>• II. 'Pepper → relish and salt': The two people who take pepper are the same two who take all three. ✓<br>• III. 'No relish → no salt': The one person who takes no relish is the one who takes nothing. ✓<br><br>All three statements are true. The answer is (E)."
  },
  {
    id: "quant_m089",
    section: "quant",
    difficulty: "medium",
    prompt: "If the smaller of 2 consecutive odd integers is a multiple of 5, which of the following could NOT be the sum of these 2 integers?",
    choices: [
      { id: "A", text: "−8" },
      { id: "B", text: "12" },
      { id: "C", text: "22" },
      { id: "D", text: "52" },
      { id: "E", text: "252" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let the smaller odd integer be a multiple of 5. Since it must be odd, it has the form 5k where k is odd (e.g., −5, 5, 15, 25, 35, ...).<br><br>Step 2: The two consecutive odd integers are 5k and 5k + 2. Their sum is:<br>5k + (5k + 2) = 10k + 2<br><br>Step 3: Test each answer choice by solving 10k + 2 = sum, then checking if 5k is odd.<br>• (A) 10k + 2 = −8 → k = −1 → 5(−1) = −5 (odd ✓)<br>• (B) 10k + 2 = 12 → k = 1 → 5(1) = 5 (odd ✓)<br>• (C) 10k + 2 = 22 → k = 2 → 5(2) = 10 (even ✗ — not an odd integer!)<br>• (D) 10k + 2 = 52 → k = 5 → 5(5) = 25 (odd ✓)<br>• (E) 10k + 2 = 252 → k = 25 → 5(25) = 125 (odd ✓)<br><br>The sum 22 is impossible. The answer is (C)."
  },
  {
    id: "quant_m090",
    section: "quant",
    difficulty: "medium",
    prompt: "Eight light bulbs numbered 1 through 8 are arranged in a circle. The bulbs are wired so that every third bulb, counting in a clockwise direction, flashes until all bulbs have flashed once. If the bulb numbered 1 flashes first, which numbered bulb will flash last?",
    choices: [
      { id: "A", text: "2" },
      { id: "B", text: "3" },
      { id: "C", text: "4" },
      { id: "D", text: "6" },
      { id: "E", text: "7" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Start at bulb 1 and count 3 positions clockwise each time, skipping bulbs that have already flashed.<br><br>Step 2: Trace the sequence:<br>• Flash 1: Bulb 1 (start)<br>• Count 3 from 1 → 2, 3, 4 → Flash 2: Bulb 4<br>• Count 3 from 4 → 5, 6, 7 → Flash 3: Bulb 7<br>• Count 3 from 7 → 8, 1(skip), 2 → Flash 4: Bulb 2<br>• Count 3 from 2 → 3, 4(skip), 5 → Flash 5: Bulb 5<br>• Count 3 from 5 → 6, 7(skip), 8 → Flash 6: Bulb 8<br>• Count 3 from 8 → 1(skip), 2(skip), 3 → Flash 7: Bulb 3<br>• Count 3 from 3 → 4(skip), 5(skip), 6 → Flash 8: Bulb 6<br><br>The last bulb to flash is bulb 6. The answer is (D)."
  },
  {
    id: "quant_m091",
    section: "quant",
    difficulty: "medium",
    prompt: "The closing prices of Stock X during a certain week were as follows:<br><br><table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr><tr><td>$21</td><td>$19</td><td>$22</td><td>$24.50</td><td>$23</td></tr></table><br>A financial analyst defines the 'volatility' of a stock during a given week as the average (arithmetic mean) of the absolute values of the differences between consecutive days' closing prices. What is the volatility of Stock X for this week?",
    choices: [
      { id: "A", text: "$0.50" },
      { id: "B", text: "$1.80" },
      { id: "C", text: "$2.00" },
      { id: "D", text: "$2.25" },
      { id: "E", text: "$2.50" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Find the absolute difference between each pair of consecutive days.<br>• Mon→Tue: |19 − 21| = 2<br>• Tue→Wed: |22 − 19| = 3<br>• Wed→Thu: |24.50 − 22| = 2.50<br>• Thu→Fri: |23 − 24.50| = 1.50<br><br>Step 2: Add up all the differences.<br>2 + 3 + 2.50 + 1.50 = 9<br><br>Step 3: Divide by the number of differences (there are 4 consecutive pairs for 5 days).<br>Volatility = <span class='math-frac'><span class='num'>9</span><span class='den'>4</span></span> = 2.25<br><br>The answer is (D)."
  },
  {
    id: "quant_m092",
    section: "quant",
    difficulty: "medium",
    prompt: "If y = <span class='math-frac'><span class='num'>|3x − 5|</span><span class='den'>−x<sup>2</sup> − 3</span></span>, for what value of x will the value of y be greatest?",
    choices: [
      { id: "A", text: "−5" },
      { id: "B", text: "−<span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>" },
      { id: "C", text: "0" },
      { id: "D", text: "<span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>5</span><span class='den'>3</span></span>" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Analyze the numerator and denominator separately.<br>• Numerator: |3x − 5| is an absolute value, so it is always ≥ 0.<br>• Denominator: −x<sup>2</sup> − 3. Since x<sup>2</sup> ≥ 0, we have −x<sup>2</sup> ≤ 0, so −x<sup>2</sup> − 3 ≤ −3. The denominator is always negative.<br><br>Step 2: Since the numerator is ≥ 0 and the denominator is always negative, y ≤ 0 for all x.<br><br>Step 3: The greatest possible value of y is 0. This happens when the numerator equals 0:<br>|3x − 5| = 0 → 3x − 5 = 0 → x = <span class='math-frac'><span class='num'>5</span><span class='den'>3</span></span><br><br>The answer is (E)."
  },
  {
    id: "quant_m093",
    section: "quant",
    difficulty: "medium",
    prompt: "What values of x have a corresponding value of y that satisfies both xy &gt; 0 and xy = x + y?",
    choices: [
      { id: "A", text: "x ≤ −1" },
      { id: "B", text: "−1 &lt; x ≤ 0" },
      { id: "C", text: "0 &lt; x ≤ 1" },
      { id: "D", text: "x &gt; 1" },
      { id: "E", text: "All real numbers" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Solve xy = x + y for y. Rearrange:<br>xy − y = x → y(x − 1) = x → y = <span class='math-frac'><span class='num'>x</span><span class='den'>x − 1</span></span> (requires x ≠ 1)<br><br>Step 2: Now apply the condition xy &gt; 0. Substitute y:<br>xy = x · <span class='math-frac'><span class='num'>x</span><span class='den'>x − 1</span></span> = <span class='math-frac'><span class='num'>x<sup>2</sup></span><span class='den'>x − 1</span></span><br><br>Step 3: For this to be &gt; 0, note that x<sup>2</sup> is always ≥ 0. For the fraction to be strictly positive, we need x<sup>2</sup> &gt; 0 (so x ≠ 0) and (x − 1) &gt; 0 (so x &gt; 1).<br><br>Step 4: Therefore x &gt; 1 satisfies both conditions.<br><br>The answer is (D)."
  },
  {
    id: "quant_m094",
    section: "quant",
    difficulty: "medium",
    prompt: "Employee X's annual salary is $12,000 more than half of Employee Y's annual salary. Employee Z's annual salary is $15,000 more than half of Employee X's annual salary. If Employee X's annual salary is $27,500, which of the following lists these three people in order of increasing annual salary?",
    choices: [
      { id: "A", text: "Y, Z, X" },
      { id: "B", text: "Y, X, Z" },
      { id: "C", text: "Z, X, Y" },
      { id: "D", text: "X, Y, Z" },
      { id: "E", text: "X, Z, Y" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: We are given X = $27,500.<br><br>Step 2: Find Y's salary. X = 12,000 + <span class='math-frac'><span class='num'>Y</span><span class='den'>2</span></span><br>27,500 = 12,000 + <span class='math-frac'><span class='num'>Y</span><span class='den'>2</span></span><br>15,500 = <span class='math-frac'><span class='num'>Y</span><span class='den'>2</span></span><br>Y = $31,000<br><br>Step 3: Find Z's salary. Z = 15,000 + <span class='math-frac'><span class='num'>X</span><span class='den'>2</span></span><br>Z = 15,000 + <span class='math-frac'><span class='num'>27,500</span><span class='den'>2</span></span> = 15,000 + 13,750 = $28,750<br><br>Step 4: Order from least to greatest: X ($27,500) &lt; Z ($28,750) &lt; Y ($31,000).<br><br>The answer is (E)."
  },
  {
    id: "quant_m095",
    section: "quant",
    difficulty: "medium",
    prompt: "Under a certain profit-sharing plan, the annual contribution C (in dollars) for a participant with salary s (in dollars) is given by:<br><br>C = 0.10s &nbsp;&nbsp; if s ≤ $60,000<br>C = 0.10s + 0.04(s − 60,000) &nbsp;&nbsp; if s &gt; $60,000<br><br>How many more dollars is the contribution for a participant with a salary of $70,000 than for a participant with a salary of $50,000?",
    choices: [
      { id: "A", text: "$800" },
      { id: "B", text: "$1,400" },
      { id: "C", text: "$2,000" },
      { id: "D", text: "$2,400" },
      { id: "E", text: "$2,800" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Calculate the contribution for the $70,000 salary. Since 70,000 &gt; 60,000, use the second formula:<br>C = 0.10(70,000) + 0.04(70,000 − 60,000)<br>C = 7,000 + 0.04(10,000)<br>C = 7,000 + 400 = $7,400<br><br>Step 2: Calculate the contribution for the $50,000 salary. Since 50,000 ≤ 60,000, use the first formula:<br>C = 0.10(50,000) = $5,000<br><br>Step 3: Find the difference:<br>$7,400 − $5,000 = $2,400<br><br>The answer is (D)."
  },
  {
    id: "quant_m096",
    section: "quant",
    difficulty: "medium",
    prompt: "Next month, Ron and Cathy will each begin working part-time at <span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span> of their respective current salaries. If the sum of their reduced salaries will be equal to Cathy's current salary, then Ron's current salary is what fraction of Cathy's current salary?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>2</span><span class='den'>5</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Let R = Ron's current salary and C = Cathy's current salary.<br><br>Step 2: Their reduced salaries are <span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>R and <span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>C. Set up the equation:<br><span class='math-frac'><span class='num'>3R</span><span class='den'>5</span></span> + <span class='math-frac'><span class='num'>3C</span><span class='den'>5</span></span> = C<br><br>Step 3: Subtract <span class='math-frac'><span class='num'>3C</span><span class='den'>5</span></span> from both sides:<br><span class='math-frac'><span class='num'>3R</span><span class='den'>5</span></span> = C − <span class='math-frac'><span class='num'>3C</span><span class='den'>5</span></span> = <span class='math-frac'><span class='num'>2C</span><span class='den'>5</span></span><br><br>Step 4: Solve for R:<br>3R = 2C → R = <span class='math-frac'><span class='num'>2C</span><span class='den'>3</span></span><br><br>So Ron's salary is <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> of Cathy's. The answer is (E)."
  },
  {
    id: "quant_m097",
    section: "quant",
    difficulty: "medium",
    prompt: "For a certain catering order, David thinks there should be twice as many sandwiches as pastries, but Ron thinks the number of pastries should be 12 more than one-fourth of the number of sandwiches. How many sandwiches should be ordered so that David and Ron can agree on the number of pastries to order?",
    choices: [
      { id: "A", text: "12" },
      { id: "B", text: "16" },
      { id: "C", text: "20" },
      { id: "D", text: "24" },
      { id: "E", text: "48" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Let S = number of sandwiches and P = number of pastries.<br><br>Step 2: Translate each person's opinion into an equation.<br>David: S = 2P (twice as many sandwiches as pastries), so P = <span class='math-frac'><span class='num'>S</span><span class='den'>2</span></span><br>Ron: P = 12 + <span class='math-frac'><span class='num'>S</span><span class='den'>4</span></span><br><br>Step 3: For them to agree, both expressions for P must be equal:<br><span class='math-frac'><span class='num'>S</span><span class='den'>2</span></span> = 12 + <span class='math-frac'><span class='num'>S</span><span class='den'>4</span></span><br><br>Step 4: Subtract <span class='math-frac'><span class='num'>S</span><span class='den'>4</span></span> from both sides:<br><span class='math-frac'><span class='num'>S</span><span class='den'>4</span></span> = 12<br><br>Step 5: Multiply both sides by 4:<br>S = 48<br><br>The answer is (E)."
  },
  {
    id: "quant_m098",
    section: "quant",
    difficulty: "medium",
    prompt: "The cost of purchasing each box of candy from a certain catalog is v dollars per pound plus a shipping charge of h dollars per box. How many dollars does it cost to purchase 2 boxes of candy, one weighing s pounds and the other weighing t pounds?",
    choices: [
      { id: "A", text: "h + stv" },
      { id: "B", text: "2h + stv" },
      { id: "C", text: "2hstv" },
      { id: "D", text: "2h + s + t + v" },
      { id: "E", text: "2h + v(s + t)" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Calculate the cost for each box.<br>• Box 1 (s pounds): cost of candy = vs, shipping = h → total = vs + h<br>• Box 2 (t pounds): cost of candy = vt, shipping = h → total = vt + h<br><br>Step 2: Add the costs together:<br>(vs + h) + (vt + h) = vs + vt + 2h = v(s + t) + 2h<br><br>This can be written as 2h + v(s + t).<br><br>The answer is (E)."
  },
  {
    id: "quant_m099",
    section: "quant",
    difficulty: "medium",
    prompt: "If x ≠ −<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>, then <span class='math-frac'><span class='num'>6x<sup>3</sup> + 3x<sup>2</sup> − 8x − 4</span><span class='den'>2x + 1</span></span> =",
    choices: [
      { id: "A", text: "3x<sup>2</sup> + <span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>x − 8" },
      { id: "B", text: "3x<sup>2</sup> + <span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>x − 4" },
      { id: "C", text: "3x<sup>2</sup> − 4" },
      { id: "D", text: "3x − 4" },
      { id: "E", text: "3x + 4" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: Factor by grouping to simplify the fraction.<br><br>Step 1: Group the numerator into two pairs:<br>6x<sup>3</sup> + 3x<sup>2</sup> − 8x − 4 = (6x<sup>3</sup> + 3x<sup>2</sup>) + (−8x − 4)<br><br>Step 2: Factor each group:<br>= 3x<sup>2</sup>(2x + 1) − 4(2x + 1)<br><br>Step 3: Factor out the common term (2x + 1):<br>= (3x<sup>2</sup> − 4)(2x + 1)<br><br>Step 4: Divide by (2x + 1):<br><span class='math-frac'><span class='num'>(3x<sup>2</sup> − 4)(2x + 1)</span><span class='den'>2x + 1</span></span> = 3x<sup>2</sup> − 4<br><br>The answer is (C)."
  },
  {
    id: "quant_m100",
    section: "quant",
    difficulty: "medium",
    prompt: "If x<sup>2</sup> + bx + 5 = (x + c)<sup>2</sup> for all numbers x, where b and c are positive constants, what is the value of b?",
    choices: [
      { id: "A", text: "√5" },
      { id: "B", text: "√10" },
      { id: "C", text: "2√5" },
      { id: "D", text: "2√10" },
      { id: "E", text: "10" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: Expand the perfect square and match coefficients.<br><br>Step 1: Expand (x + c)<sup>2</sup>:<br>(x + c)<sup>2</sup> = x<sup>2</sup> + 2cx + c<sup>2</sup><br><br>Step 2: Match coefficients with x<sup>2</sup> + bx + 5:<br>• Coefficient of x: b = 2c<br>• Constant term: c<sup>2</sup> = 5<br><br>Step 3: Solve for c. Since c is positive:<br>c = √5<br><br>Step 4: Find b:<br>b = 2c = 2√5<br><br>The answer is (C)."
  },
  {
    id: "quant_m101",
    section: "quant",
    difficulty: "medium",
    prompt: "Last year Shannon listened to a certain public radio station 10 hours per week and contributed $35 to the station. Of the following, which is closest to Shannon's contribution per minute of listening time last year?",
    choices: [
      { id: "A", text: "$0.001" },
      { id: "B", text: "$0.010" },
      { id: "C", text: "$0.025" },
      { id: "D", text: "$0.058" },
      { id: "E", text: "$0.067" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find the total number of minutes Shannon listened in a year.<br>Hours per year = 10 hours/week × 52 weeks = 520 hours<br>Minutes per year = 520 × 60 = 31,200 minutes<br><br>Step 2: Divide the contribution by total minutes:<br><span class='math-frac'><span class='num'>$35</span><span class='den'>31,200</span></span> ≈ $0.00112<br><br>Step 3: This is closest to $0.001.<br><br>The answer is (A)."
  },
  {
    id: "quant_m102",
    section: "quant",
    difficulty: "medium",
    prompt: "Each of the 20 employees at Company J is to receive an end-of-year bonus. Agnes will receive a larger bonus than any other employee, but only $500 more than Cheryl. None of the employees will receive a smaller bonus than Cheryl. If the total of all bonuses is $60,000, what is the largest bonus Agnes can receive?",
    choices: [
      { id: "A", text: "$3,250" },
      { id: "B", text: "$3,325" },
      { id: "C", text: "$3,400" },
      { id: "D", text: "$3,475" },
      { id: "E", text: "$3,500" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: To maximize Agnes's bonus, minimize everyone else's bonus.<br><br>Step 1: Let A = Agnes's bonus. Cheryl's bonus = A − 500 (since Agnes gets exactly $500 more).<br><br>Step 2: To maximize A, give every other employee the minimum possible bonus. The minimum is Cheryl's amount (A − 500). So all 19 other employees get (A − 500).<br><br>Step 3: Set up the equation for the total:<br>A + 19(A − 500) = 60,000<br>A + 19A − 9,500 = 60,000<br>20A = 69,500<br>A = $3,475<br><br>The answer is (D)."
  },
  {
    id: "quant_m103",
    section: "quant",
    difficulty: "medium",
    prompt: "Beth, Naomi, and Juan raised a total of $55 for charity. Naomi raised $5 less than Juan, and Juan raised twice as much as Beth. How much did Beth raise?",
    choices: [
      { id: "A", text: "$9" },
      { id: "B", text: "$10" },
      { id: "C", text: "$12" },
      { id: "D", text: "$13" },
      { id: "E", text: "$15" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let B = Beth's amount. Express the others in terms of B.<br>Juan raised twice as much as Beth: J = 2B<br>Naomi raised $5 less than Juan: N = J − 5 = 2B − 5<br><br>Step 2: Set up the equation using the total:<br>B + J + N = 55<br>B + 2B + (2B − 5) = 55<br>5B − 5 = 55<br><br>Step 3: Solve for B:<br>5B = 60<br>B = $12<br><br>Check: Beth = $12, Juan = $24, Naomi = $19. Total = 12 + 24 + 19 = $55. ✓<br><br>The answer is (C)."
  },
  {
    id: "quant_m104",
    section: "quant",
    difficulty: "medium",
    prompt: "The set of solutions for the equation (x<sup>2</sup> − 25)<sup>2</sup> = x<sup>2</sup> − 10x + 25 contains how many real numbers?",
    choices: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "3" },
      { id: "E", text: "4" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Factor both sides.<br>Left side: (x<sup>2</sup> − 25)<sup>2</sup> = [(x + 5)(x − 5)]<sup>2</sup> = (x + 5)<sup>2</sup>(x − 5)<sup>2</sup><br>Right side: x<sup>2</sup> − 10x + 25 = (x − 5)<sup>2</sup><br><br>Step 2: The equation becomes:<br>(x + 5)<sup>2</sup>(x − 5)<sup>2</sup> = (x − 5)<sup>2</sup><br><br>Step 3: Move everything to one side:<br>(x − 5)<sup>2</sup>[(x + 5)<sup>2</sup> − 1] = 0<br><br>Step 4: Factor (x + 5)<sup>2</sup> − 1 as a difference of squares:<br>(x − 5)<sup>2</sup>(x + 5 + 1)(x + 5 − 1) = 0<br>(x − 5)<sup>2</sup>(x + 6)(x + 4) = 0<br><br>Step 5: Set each factor to zero:<br>x − 5 = 0 → x = 5<br>x + 6 = 0 → x = −6<br>x + 4 = 0 → x = −4<br><br>There are 3 distinct real solutions. The answer is (D)."
  },
  {
    id: "quant_m105",
    section: "quant",
    difficulty: "medium",
    prompt: "An aerosol can is designed so that its bursting pressure, B, in pounds per square inch, is 120 percent of the pressure, F, to which it is initially filled. Which of the following formulas expresses the relationship between B and F?",
    choices: [
      { id: "A", text: "B = 1.2F" },
      { id: "B", text: "B = 120F" },
      { id: "C", text: "B = 1 + 0.2F" },
      { id: "D", text: "B = F ÷ 1.2" },
      { id: "E", text: "B = 1.2 ÷ F" }
    ],
    correctAnswer: "A",
    explanation: "Key concept: 'B is 120% of F' means B = 120% × F.<br><br>Step 1: Convert the percentage to a decimal:<br>120% = <span class='math-frac'><span class='num'>120</span><span class='den'>100</span></span> = 1.2<br><br>Step 2: Write the formula:<br>B = 1.2 × F = 1.2F<br><br>The answer is (A)."
  },
  {
    id: "quant_m106",
    section: "quant",
    difficulty: "medium",
    prompt: "The average (arithmetic mean) of the positive integers x, y, and z is 3. If x &lt; y &lt; z, what is the greatest possible value of z?",
    choices: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
      { id: "E", text: "9" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: From the average, find the sum.<br>Average = <span class='math-frac'><span class='num'>x + y + z</span><span class='den'>3</span></span> = 3, so x + y + z = 9.<br><br>Step 2: To maximize z, minimize x + y. Since x &lt; y &lt; z and all are positive integers, the smallest possible values are x = 1 and y = 2.<br><br>Step 3: Calculate z:<br>z = 9 − 1 − 2 = 6<br><br>Step 4: Verify: 1 &lt; 2 &lt; 6 ✓, and the average is (1 + 2 + 6)/3 = 3 ✓.<br><br>The answer is (B)."
  },
  {
    id: "quant_m107",
    section: "quant",
    difficulty: "medium",
    prompt: "The product of 3,305 and the 1-digit integer x is a 5-digit integer. The units (ones) digit of the product is 5 and the hundreds digit is y. If A is the set of all possible values of x and B is the set of all possible values of y, which of the following gives the members of A and B?",
    choices: [
      { id: "A", text: "A = {1, 3, 5, 7, 9}, B = {0, 1, …, 9}" },
      { id: "B", text: "A = {1, 3, 5, 7, 9}, B = {1, 3, 5, 7, 9}" },
      { id: "C", text: "A = {3, 5, 7, 9}, B = {1, 5, 7, 9}" },
      { id: "D", text: "A = {5, 7, 9}, B = {1, 5, 7}" },
      { id: "E", text: "A = {5, 7, 9}, B = {1, 5, 9}" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: The product 3,305 × x must be a 5-digit number (10,000 to 99,999).<br>3,305 × 3 = 9,915 (4 digits — too small)<br>3,305 × 4 = 13,220 (5 digits, but units digit is 0, not 5)<br>So x ≥ 4, and x is a single digit so x ≤ 9.<br><br>Step 2: The units digit of the product must be 5. Since 3,305 ends in 5, we need 5 × x to end in 5. This happens when x is odd: x ∈ {5, 7, 9}.<br>(x = 4, 6, 8 give units digits of 0.)<br><br>Step 3: Compute each product and find the hundreds digit (y):<br>• 3,305 × 5 = 16,525 → hundreds digit = 5<br>• 3,305 × 7 = 23,135 → hundreds digit = 1<br>• 3,305 × 9 = 29,745 → hundreds digit = 7<br><br>Step 4: A = {5, 7, 9} and B = {1, 5, 7}.<br><br>The answer is (D)."
  },
  {
    id: "quant_m108",
    section: "quant",
    difficulty: "medium",
    prompt: "If x and y are integers such that 2 &lt; x ≤ 8 and 2 &lt; y ≤ 9, what is the maximum value of <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>?",
    choices: [
      { id: "A", text: "−3<span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span>" },
      { id: "B", text: "0" },
      { id: "C", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>5</span><span class='den'>18</span></span>" },
      { id: "E", text: "2" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: To maximize <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>, we want <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> to be as large as possible and <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> to be as small as possible.<br><br>Step 2: Maximize <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>: use the smallest x. Since x is an integer and x &gt; 2, the smallest x is 3.<br><br>Step 3: Minimize <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>: use the smallest x and largest y. With x = 3 and y = 9:<br><span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> = <span class='math-frac'><span class='num'>3</span><span class='den'>9</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span><br><br>Step 4: Calculate the expression:<br><span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span> − <span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span> = 0<br><br>The answer is (B)."
  },
  {
    id: "quant_m109",
    section: "quant",
    difficulty: "medium",
    prompt: "Items purchased together at a certain discount store are priced at $3 for the first item and $1 for each additional item. What is the maximum number of items that could be purchased together for a total price that is strictly less than $30?",
    choices: [
      { id: "A", text: "25" },
      { id: "B", text: "26" },
      { id: "C", text: "27" },
      { id: "D", text: "28" },
      { id: "E", text: "29" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Write the cost formula. If you buy n items:<br>Total cost = $3 (first item) + $1 × (n − 1) additional items = 3 + (n − 1) = n + 2<br><br>Step 2: We need the total cost to be strictly less than $30:<br>n + 2 &lt; 30<br>n &lt; 28<br><br>Step 3: Since n must be a whole number, the maximum is n = 27.<br><br>Check: 27 items cost 3 + 26(1) = $29 &lt; $30. ✓<br>28 items would cost 3 + 27(1) = $30, which is not less than $30. ✗<br><br>The answer is (C)."
  },
  {
    id: "quant_m110",
    section: "quant",
    difficulty: "medium",
    prompt: "What is the least integer z for which (0.000125)(0.0025)(0.00000125) × 10<sup>z</sup> is an integer?",
    choices: [
      { id: "A", text: "18" },
      { id: "B", text: "10" },
      { id: "C", text: "0" },
      { id: "D", text: "−10" },
      { id: "E", text: "−18" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Convert each decimal to a fraction with powers of 10.<br>0.000125 = 125 × 10<sup>−6</sup><br>0.0025 = 25 × 10<sup>−4</sup><br>0.00000125 = 125 × 10<sup>−8</sup><br><br>Step 2: Multiply them together:<br>(125 × 10<sup>−6</sup>)(25 × 10<sup>−4</sup>)(125 × 10<sup>−8</sup>) = (125 × 25 × 125) × 10<sup>−18</sup><br><br>Step 3: Calculate 125 × 25 × 125:<br>125 × 25 = 3,125<br>3,125 × 125 = 390,625<br><br>Step 4: So the product is 390,625 × 10<sup>−18</sup>. For this times 10<sup>z</sup> to be an integer:<br>390,625 × 10<sup>z−18</sup> must be an integer.<br><br>Step 5: Since 390,625 is already an integer (and it's odd, so no factors of 10), we need z − 18 ≥ 0, meaning z ≥ 18. The least such z is 18.<br><br>The answer is (A)."
  },
  {
    id: "quant_m111",
    section: "quant",
    difficulty: "medium",
    prompt: "The average length per film for a group of 21 films is t minutes. If a film that runs for 66 minutes is removed from the group and replaced by one that runs for 52 minutes, what is the average length per film for the new group of 21 films, in terms of t?",
    choices: [
      { id: "A", text: "t + <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>" },
      { id: "B", text: "t − <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>" },
      { id: "C", text: "21t + 14" },
      { id: "D", text: "t + <span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>" },
      { id: "E", text: "t − <span class='math-frac'><span class='num'>3</span><span class='den'>2</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: The original total length of all 21 films is 21t minutes.<br><br>Step 2: Remove the 66-minute film and add the 52-minute film:<br>New total = 21t − 66 + 52 = 21t − 14<br><br>Step 3: The new average (still 21 films):<br>New average = <span class='math-frac'><span class='num'>21t − 14</span><span class='den'>21</span></span> = t − <span class='math-frac'><span class='num'>14</span><span class='den'>21</span></span> = t − <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span><br><br>The answer is (B)."
  },
  {
    id: "quant_m112",
    section: "quant",
    difficulty: "medium",
    prompt: "A garden center sells grass seed in 5-pound bags at $13.85 per bag, 10-pound bags at $20.43 per bag, and 25-pound bags at $32.25 per bag. If a customer needs to buy at least 65 pounds of grass seed but no more than 80 pounds, what is the least possible cost?",
    choices: [
      { id: "A", text: "$94.03" },
      { id: "B", text: "$96.75" },
      { id: "C", text: "$98.78" },
      { id: "D", text: "$102.07" },
      { id: "E", text: "$105.36" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: To minimize cost, buy the largest bags (best price per pound) and find a combination between 65 and 80 pounds.<br><br>Step 1: Check the price per pound for each bag size:<br>• 25-lb bag: $32.25 ÷ 25 = $1.29/lb (cheapest per pound)<br>• 10-lb bag: $20.43 ÷ 10 = $2.04/lb<br>• 5-lb bag: $13.85 ÷ 5 = $2.77/lb<br><br>Step 2: Try buying only 25-lb bags:<br>• 3 bags = 75 lbs → cost = 3 × $32.25 = $96.75 (within 65–80 range ✓)<br>• 2 bags = 50 lbs (not enough)<br><br>Step 3: Compare with other combinations that reach at least 65 lbs:<br>• 2 × 25-lb + 2 × 10-lb = 70 lbs → $64.50 + $40.86 = $105.36<br>• 2 × 25-lb + 1 × 10-lb + 1 × 5-lb = 65 lbs → $64.50 + $20.43 + $13.85 = $98.78<br><br>The cheapest option is 3 × 25-lb bags at $96.75.<br><br>The answer is (B)."
  },
  {
    id: "quant_m113",
    section: "quant",
    difficulty: "medium",
    prompt: "If x = −|w|, which of the following must be true?",
    choices: [
      { id: "A", text: "x = −w" },
      { id: "B", text: "x = w" },
      { id: "C", text: "x<sup>2</sup> = w" },
      { id: "D", text: "x<sup>2</sup> = w<sup>2</sup>" },
      { id: "E", text: "x<sup>3</sup> = w<sup>3</sup>" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: We know x = −|w|. Let's square both sides:<br>x<sup>2</sup> = (−|w|)<sup>2</sup> = |w|<sup>2</sup><br><br>Step 2: A key property of absolute value is that |w|<sup>2</sup> = w<sup>2</sup> for any real number w. (Squaring removes the sign.)<br>So x<sup>2</sup> = w<sup>2</sup>.<br><br>Step 3: Check why the others don't always work. Try w = 3: x = −|3| = −3.<br>• (A) x = −w → −3 = −3 ✓ for w = 3, but try w = −3: x = −|−3| = −3, and −w = 3. So −3 ≠ 3. ✗<br>• (B) x = w → −3 ≠ 3. ✗<br>• (D) x<sup>2</sup> = w<sup>2</sup> → 9 = 9 ✓ (works for both w = 3 and w = −3)<br><br>The answer is (D)."
  },
  {
    id: "quant_m114",
    section: "quant",
    difficulty: "medium",
    prompt: "A certain financial institution reported that its assets totaled $2,377,366.30. Of this amount, $31,724.54 was held in cash. Approximately what percent of the total reported assets was held in cash?",
    choices: [
      { id: "A", text: "0.00013%" },
      { id: "B", text: "0.0013%" },
      { id: "C", text: "0.013%" },
      { id: "D", text: "0.13%" },
      { id: "E", text: "1.3%" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Set up the percentage calculation:<br>Percent = <span class='math-frac'><span class='num'>31,724.54</span><span class='den'>2,377,366.30</span></span> × 100%<br><br>Step 2: Estimate using round numbers:<br>≈ <span class='math-frac'><span class='num'>32,000</span><span class='den'>2,400,000</span></span> × 100%<br><br>Step 3: Simplify the fraction:<br>= <span class='math-frac'><span class='num'>32</span><span class='den'>2,400</span></span> × 100% = <span class='math-frac'><span class='num'>1</span><span class='den'>75</span></span> × 100% ≈ 1.33%<br><br>Step 4: This is closest to 1.3%.<br><br>The answer is (E)."
  },
  {
    id: "quant_m115",
    section: "quant",
    difficulty: "medium",
    prompt: "In the correctly worked addition problem shown below, where A, B, and C represent three different digits, what is the units digit of the three-digit integer AAC?<br><br>&nbsp;&nbsp;A B<br>+ B A<br>———<br>A A C",
    choices: [
      { id: "A", text: "9" },
      { id: "B", text: "6" },
      { id: "C", text: "3" },
      { id: "D", text: "2" },
      { id: "E", text: "0" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Write the numbers in expanded form.<br>AB = 10A + B<br>BA = 10B + A<br>AAC = 100A + 10A + C = 110A + C<br><br>Step 2: Set up the equation:<br>(10A + B) + (10B + A) = 110A + C<br>11A + 11B = 110A + C<br>11B = 99A + C<br><br>Step 3: Since A, B, and C are single digits (0–9) and C = 11B − 99A, C must be between 0 and 9. Also, 11B − 99A = 11(B − 9A) = C.<br><br>Step 4: For C to be a non-negative single digit and divisible by 11, the only possibility is C = 0.<br>(If B − 9A = 0, then B = 9A. With A = 1, B = 9, C = 0. Check: 19 + 91 = 110 = AAC ✓)<br><br>The units digit of AAC is 0. The answer is (E)."
  },
  {
    id: "quant_m116",
    section: "quant",
    difficulty: "medium",
    prompt: "The hard drive, monitor, and printer for a certain computer system cost a total of $2,500. The cost of the printer and monitor together is <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> of the cost of the hard drive. If the printer costs $100 more than the monitor, what is the cost of the printer?",
    choices: [
      { id: "A", text: "$800" },
      { id: "B", text: "$600" },
      { id: "C", text: "$550" },
      { id: "D", text: "$500" },
      { id: "E", text: "$350" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Let D = hard drive cost, M = monitor cost, P = printer cost.<br>Given: D + M + P = 2,500 and M + P = <span class='math-frac'><span class='num'>2D</span><span class='den'>3</span></span> and P = M + 100.<br><br>Step 2: Substitute M + P = <span class='math-frac'><span class='num'>2D</span><span class='den'>3</span></span> into the first equation:<br>D + <span class='math-frac'><span class='num'>2D</span><span class='den'>3</span></span> = 2,500<br><span class='math-frac'><span class='num'>5D</span><span class='den'>3</span></span> = 2,500<br>D = $1,500<br><br>Step 3: Find M + P:<br>M + P = <span class='math-frac'><span class='num'>2(1,500)</span><span class='den'>3</span></span> = $1,000<br><br>Step 4: Use P = M + 100 and M + P = 1,000:<br>M + (M + 100) = 1,000<br>2M = 900<br>M = $450, so P = $550<br><br>The answer is (C)."
  },
  {
    id: "quant_m117",
    section: "quant",
    difficulty: "medium",
    prompt: "Given the inequalities 3r ≤ 4s + 5 and |s| ≤ 5, which of the following CANNOT be the value of r?",
    choices: [
      { id: "A", text: "−20" },
      { id: "B", text: "−5" },
      { id: "C", text: "0" },
      { id: "D", text: "5" },
      { id: "E", text: "20" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Find the maximum possible value of 4s + 5.<br>From |s| ≤ 5, we know −5 ≤ s ≤ 5. The maximum value of s is 5.<br><br>Step 2: Plug in the maximum s:<br>4(5) + 5 = 25<br><br>Step 3: Since 3r ≤ 4s + 5 ≤ 25, we get:<br>3r ≤ 25 → r ≤ <span class='math-frac'><span class='num'>25</span><span class='den'>3</span></span> ≈ 8.33<br><br>Step 4: Check r = 20: 3(20) = 60, but the maximum of 4s + 5 is 25. Since 60 &gt; 25, there is no value of s that satisfies the inequality. So r = 20 is impossible.<br><br>The answer is (E)."
  },
  {
    id: "quant_m118",
    section: "quant",
    difficulty: "medium",
    prompt: "If m is an even integer, v is an odd integer, and m &gt; v &gt; 0, which of the following represents the number of even integers less than m and greater than v?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>m − v</span><span class='den'>2</span></span> − 1" },
      { id: "B", text: "<span class='math-frac'><span class='num'>m − v − 1</span><span class='den'>2</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>m − v</span><span class='den'>2</span></span>" },
      { id: "D", text: "m − v − 1" },
      { id: "E", text: "m − v" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Use a concrete example to test. Let m = 10 (even) and v = 3 (odd).<br>Even integers between 3 and 10 (exclusive): 4, 6, 8 → count = 3.<br><br>Step 2: Test each formula with m = 10, v = 3:<br>• (A) (10 − 3)/2 − 1 = 3.5 − 1 = 2.5 ✗<br>• (B) (10 − 3 − 1)/2 = 6/2 = 3 ✓<br>• (C) (10 − 3)/2 = 3.5 ✗<br>• (D) 10 − 3 − 1 = 6 ✗<br>• (E) 10 − 3 = 7 ✗<br><br>Step 3: Verify with another example. Let m = 6, v = 1.<br>Even integers between 1 and 6 (exclusive): 2, 4 → count = 2.<br>(B) (6 − 1 − 1)/2 = 4/2 = 2 ✓<br><br>The answer is (B)."
  },
  {
    id: "quant_m119",
    section: "quant",
    difficulty: "medium",
    prompt: "A positive integer is divisible by 9 if and only if the sum of its digits is divisible by 9. If n is a positive integer, for which of the following values of k is 25 × 10<sup>n</sup> + k × 10<sup>2n</sup> divisible by 9?",
    choices: [
      { id: "A", text: "9" },
      { id: "B", text: "16" },
      { id: "C", text: "23" },
      { id: "D", text: "35" },
      { id: "E", text: "47" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Understand the structure of the number. For example, if n = 1:<br>25 × 10<sup>1</sup> + k × 10<sup>2</sup> = 250 + 100k<br>If k = 47: 250 + 4700 = 4950. Digits: 4 + 9 + 5 + 0 = 18 (divisible by 9 ✓).<br><br>Step 2: In general, the number looks like the digits of k followed by 2, 5, and then zeros. The digit sum equals (sum of digits of k) + 2 + 5 = (sum of digits of k) + 7.<br><br>Step 3: Check each answer choice:<br>• k = 9: digit sum = 9 + 7 = 16 (not divisible by 9) ✗<br>• k = 16: digit sum = 1 + 6 + 7 = 14 ✗<br>• k = 23: digit sum = 2 + 3 + 7 = 12 ✗<br>• k = 35: digit sum = 3 + 5 + 7 = 15 ✗<br>• k = 47: digit sum = 4 + 7 + 7 = 18 (divisible by 9 ✓)<br><br>The answer is (E)."
  },
  {
    id: "quant_m120",
    section: "quant",
    difficulty: "medium",
    prompt: "On the number line, the shaded interval representing all values of x from −8 to 4, inclusive, is the graph of which of the following inequalities?",
    choices: [
      { id: "A", text: "|x| ≤ 4" },
      { id: "B", text: "|x| ≤ 8" },
      { id: "C", text: "|x − 2| ≤ 4" },
      { id: "D", text: "|x − 2| ≤ 6" },
      { id: "E", text: "|x + 2| ≤ 6" }
    ],
    correctAnswer: "E",
    explanation: "Key concept: |x − a| ≤ d represents all points within distance d of the point a on the number line, giving the interval [a − d, a + d].<br><br>Step 1: Find the midpoint of the interval [−8, 4]:<br>Midpoint = <span class='math-frac'><span class='num'>−8 + 4</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>−4</span><span class='den'>2</span></span> = −2<br><br>Step 2: Find the half-length (distance from midpoint to either endpoint):<br>Half-length = <span class='math-frac'><span class='num'>4 − (−8)</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>12</span><span class='den'>2</span></span> = 6<br><br>Step 3: Write the inequality: |x − (−2)| ≤ 6, which simplifies to |x + 2| ≤ 6.<br><br>Check: |x + 2| ≤ 6 → −6 ≤ x + 2 ≤ 6 → −8 ≤ x ≤ 4. ✓<br><br>The answer is (E)."
  },
  {
    id: "quant_m121",
    section: "quant",
    difficulty: "medium",
    prompt: "Last year, members of a professional organization for teachers consisted of teachers from 49 different school districts, with an average (arithmetic mean) of 9.8 schools per district. The average number of member teachers per school was 22. Which of the following is closest to the total number of members of the organization last year?",
    choices: [
      { id: "A", text: "10<sup>7</sup>" },
      { id: "B", text: "10<sup>6</sup>" },
      { id: "C", text: "10<sup>5</sup>" },
      { id: "D", text: "10<sup>4</sup>" },
      { id: "E", text: "10<sup>3</sup>" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: Total = districts × schools per district × teachers per school.<br><br>Step 1: Estimate using round numbers:<br>49 ≈ 50, 9.8 ≈ 10, 22 ≈ 20<br><br>Step 2: Multiply:<br>50 × 10 × 20 = 10,000 = 10<sup>4</sup><br><br>The answer is (D)."
  },
  {
    id: "quant_m122",
    section: "quant",
    difficulty: "medium",
    prompt: "Of all students in a certain dormitory, <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> are first-year students and the rest are second-year students. If <span class='math-frac'><span class='num'>4</span><span class='den'>5</span></span> of the first-year students have not declared a major, and if the fraction of second-year students who have declared a major is 3 times the fraction of first-year students who have declared a major, what fraction of all the students in the dormitory are second-year students who have not declared a major?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>15</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>4</span><span class='den'>15</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>2</span><span class='den'>5</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Let T = total students. First-year = <span class='math-frac'><span class='num'>T</span><span class='den'>2</span></span>, Second-year = <span class='math-frac'><span class='num'>T</span><span class='den'>2</span></span>.<br><br>Step 2: Find the fraction of first-year students who declared a major.<br><span class='math-frac'><span class='num'>4</span><span class='den'>5</span></span> have NOT declared, so <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span> HAVE declared.<br>First-year declared = <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span> × <span class='math-frac'><span class='num'>T</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>T</span><span class='den'>10</span></span><br><br>Step 3: The fraction of second-year students who declared is 3 times the fraction of first-year who declared: 3 × <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span> = <span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>.<br>Second-year declared = <span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span> × <span class='math-frac'><span class='num'>T</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>3T</span><span class='den'>10</span></span><br><br>Step 4: Second-year NOT declared = Total second-year − second-year declared:<br>= <span class='math-frac'><span class='num'>T</span><span class='den'>2</span></span> − <span class='math-frac'><span class='num'>3T</span><span class='den'>10</span></span> = <span class='math-frac'><span class='num'>5T − 3T</span><span class='den'>10</span></span> = <span class='math-frac'><span class='num'>2T</span><span class='den'>10</span></span> = <span class='math-frac'><span class='num'>T</span><span class='den'>5</span></span><br><br>Step 5: As a fraction of all students: <span class='math-frac'><span class='num'>T/5</span><span class='den'>T</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span><br><br>The answer is (B)."
  },
  {
    id: "quant_m123",
    section: "quant",
    difficulty: "medium",
    prompt: "If the average (arithmetic mean) of x, y, and z is 7x, and x ≠ 0, what is the ratio of x to the sum y + z?",
    choices: [
      { id: "A", text: "1 : 21" },
      { id: "B", text: "1 : 20" },
      { id: "C", text: "1 : 6" },
      { id: "D", text: "6 : 1" },
      { id: "E", text: "20 : 1" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Write the average equation:<br><span class='math-frac'><span class='num'>x + y + z</span><span class='den'>3</span></span> = 7x<br><br>Step 2: Multiply both sides by 3:<br>x + y + z = 21x<br><br>Step 3: Solve for y + z:<br>y + z = 21x − x = 20x<br><br>Step 4: Find the ratio x : (y + z):<br>x : 20x = 1 : 20<br><br>The answer is (B)."
  },
  {
    id: "quant_m124",
    section: "quant",
    difficulty: "medium",
    prompt: "Jonah drove the first half of a 100-mile trip in x hours and the second half in y hours. Which of the following is equal to Jonah's average speed, in miles per hour, for the entire trip?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>50</span><span class='den'>x + y</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>100</span><span class='den'>x + y</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>25</span><span class='den'>x</span></span> + <span class='math-frac'><span class='num'>25</span><span class='den'>y</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>50</span><span class='den'>x</span></span> + <span class='math-frac'><span class='num'>50</span><span class='den'>y</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>100</span><span class='den'>x</span></span> + <span class='math-frac'><span class='num'>100</span><span class='den'>y</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: Average speed = <span class='math-frac'><span class='num'>Total Distance</span><span class='den'>Total Time</span></span> (not the average of the two speeds!).<br><br>Step 1: Total distance = 100 miles.<br><br>Step 2: Total time = x + y hours.<br><br>Step 3: Average speed = <span class='math-frac'><span class='num'>100</span><span class='den'>x + y</span></span> miles per hour.<br><br>The answer is (B)."
  },
  {
    id: "quant_m125",
    section: "quant",
    difficulty: "medium",
    prompt: "If the federal estate tax due on an estate valued at $1.35 million is $437,000 plus 43 percent of the value of the estate in excess of $1.25 million, then the federal estate tax due is approximately what percent of the value of the estate?",
    choices: [
      { id: "A", text: "30%" },
      { id: "B", text: "35%" },
      { id: "C", text: "40%" },
      { id: "D", text: "45%" },
      { id: "E", text: "50%" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Calculate the excess over $1.25 million:<br>$1,350,000 − $1,250,000 = $100,000<br><br>Step 2: Calculate the total tax:<br>Tax = $437,000 + 0.43 × $100,000 = $437,000 + $43,000 = $480,000<br><br>Step 3: Find the tax as a percent of the estate value:<br><span class='math-frac'><span class='num'>$480,000</span><span class='den'>$1,350,000</span></span> × 100% ≈ 35.6%<br><br>Step 4: This is approximately 35%.<br><br>The answer is (B)."
  },
  {
    id: "quant_m126",
    section: "quant",
    difficulty: "medium",
    prompt: "A manufacturer produces x balls and y boxes, subject to the following resource constraints:<br><br>7x + 6y ≤ 38,000<br>4x + 5y ≤ 28,000<br><br>What is the maximum number of balls and boxes combined (x + y) that can be produced?",
    choices: [
      { id: "A", text: "5,000" },
      { id: "B", text: "6,000" },
      { id: "C", text: "7,000" },
      { id: "D", text: "8,000" },
      { id: "E", text: "10,000" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: Add the two inequalities to get a bound on x + y.<br><br>Step 1: Add the two constraints:<br>(7x + 6y) + (4x + 5y) ≤ 38,000 + 28,000<br>11x + 11y ≤ 66,000<br><br>Step 2: Factor out 11:<br>11(x + y) ≤ 66,000<br>x + y ≤ 6,000<br><br>Step 3: Verify this maximum is achievable. Try x = 2,000 and y = 4,000:<br>• 7(2,000) + 6(4,000) = 14,000 + 24,000 = 38,000 ≤ 38,000 ✓<br>• 4(2,000) + 5(4,000) = 8,000 + 20,000 = 28,000 ≤ 28,000 ✓<br><br>The maximum is 6,000. The answer is (B)."
  },
  {
    id: "quant_m127",
    section: "quant",
    difficulty: "medium",
    prompt: "If <span class='math-frac'><span class='num'>3</span><span class='den'>10<sup>4</sup></span></span> = x%, then x =",
    choices: [
      { id: "A", text: "0.3" },
      { id: "B", text: "0.03" },
      { id: "C", text: "0.003" },
      { id: "D", text: "0.0003" },
      { id: "E", text: "0.00003" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: x% means <span class='math-frac'><span class='num'>x</span><span class='den'>100</span></span>.<br><br>Step 1: Set up the equation:<br><span class='math-frac'><span class='num'>3</span><span class='den'>10<sup>4</sup></span></span> = <span class='math-frac'><span class='num'>x</span><span class='den'>100</span></span><br><br>Step 2: Solve for x by multiplying both sides by 100:<br>x = <span class='math-frac'><span class='num'>3 × 100</span><span class='den'>10<sup>4</sup></span></span> = <span class='math-frac'><span class='num'>300</span><span class='den'>10,000</span></span> = 0.03<br><br>The answer is (B)."
  },
  {
    id: "quant_m128",
    section: "quant",
    difficulty: "medium",
    prompt: "What is the remainder when 3<sup>24</sup> is divided by 5?",
    choices: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "3" },
      { id: "E", text: "4" }
    ],
    correctAnswer: "B",
    explanation: "Key concept: Look for a repeating pattern in the remainders when powers of 3 are divided by 5.<br><br>Step 1: Compute the first few powers of 3 modulo 5:<br>• 3<sup>1</sup> = 3 → remainder 3<br>• 3<sup>2</sup> = 9 → remainder 4<br>• 3<sup>3</sup> = 27 → remainder 2<br>• 3<sup>4</sup> = 81 → remainder 1<br>• 3<sup>5</sup> = 243 → remainder 3 (pattern repeats!)<br><br>Step 2: The remainders cycle with period 4: {3, 4, 2, 1, 3, 4, 2, 1, ...}<br><br>Step 3: Since 24 ÷ 4 = 6 with remainder 0, 3<sup>24</sup> falls at the end of a complete cycle. The 4th position in the cycle has remainder 1.<br><br>The answer is (B)."
  },
  {
    id: "quant_m129",
    section: "quant",
    difficulty: "medium",
    prompt: "José has a collection of 100 coins consisting of nickels, dimes, quarters, and half-dollars. He has 35 nickels and dimes combined, 45 dimes and quarters combined, and 50 nickels and quarters combined. How many half-dollars does José have?",
    choices: [
      { id: "A", text: "15" },
      { id: "B", text: "20" },
      { id: "C", text: "25" },
      { id: "D", text: "30" },
      { id: "E", text: "35" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Let n = nickels, d = dimes, q = quarters, h = half-dollars.<br>We know: n + d + q + h = 100<br><br>Step 2: Write the given information:<br>n + d = 35<br>d + q = 45<br>n + q = 50<br><br>Step 3: Add all three equations:<br>(n + d) + (d + q) + (n + q) = 35 + 45 + 50<br>2n + 2d + 2q = 130<br>n + d + q = 65<br><br>Step 4: Find the number of half-dollars:<br>h = 100 − (n + d + q) = 100 − 65 = 35<br><br>The answer is (E)."
  },
  {
    id: "quant_m130",
    section: "quant",
    difficulty: "medium",
    prompt: "David used part of $100,000 to purchase a house. Of the remaining portion, he invested <span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span> at 4 percent simple annual interest and <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span> at 6 percent simple annual interest. If after one year the income from the two investments totaled $320, what was the purchase price of the house?",
    choices: [
      { id: "A", text: "$96,000" },
      { id: "B", text: "$94,000" },
      { id: "C", text: "$88,000" },
      { id: "D", text: "$75,000" },
      { id: "E", text: "$40,000" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Let P = house price. The remaining amount is (100,000 − P).<br><br>Step 2: Set up the interest equation:<br><span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>(100,000 − P)(0.04) + <span class='math-frac'><span class='num'>2</span><span class='den'>3</span></span>(100,000 − P)(0.06) = 320<br><br>Step 3: Factor out (100,000 − P):<br>(100,000 − P) × [<span class='math-frac'><span class='num'>0.04</span><span class='den'>3</span></span> + <span class='math-frac'><span class='num'>0.12</span><span class='den'>3</span></span>] = 320<br>(100,000 − P) × <span class='math-frac'><span class='num'>0.16</span><span class='den'>3</span></span> = 320<br><br>Step 4: Solve for (100,000 − P):<br>100,000 − P = 320 × <span class='math-frac'><span class='num'>3</span><span class='den'>0.16</span></span> = <span class='math-frac'><span class='num'>960</span><span class='den'>0.16</span></span> = 6,000<br><br>Step 5: Solve for P:<br>P = 100,000 − 6,000 = $94,000<br><br>The answer is (B)."
  },
  {
    id: "quant_m131",
    section: "quant",
    difficulty: "medium",
    prompt: "A manufacturer sells its product to stores in 113 regions, with an average (arithmetic mean) of 181 stores per region. If the stores in these regions sold an average of 51,752 units of the manufacturer's product per store last year, which of the following is closest to the total number of units of the manufacturer's product sold last year?",
    choices: [
      { id: "A", text: "10<sup>6</sup>" },
      { id: "B", text: "10<sup>7</sup>" },
      { id: "C", text: "10<sup>8</sup>" },
      { id: "D", text: "10<sup>9</sup>" },
      { id: "E", text: "10<sup>10</sup>" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: Estimate by rounding each number, then multiply.<br><br>Step 1: Round each value:<br>113 ≈ 100 = 10<sup>2</sup><br>181 ≈ 200 = 2 × 10<sup>2</sup><br>51,752 ≈ 50,000 = 5 × 10<sup>4</sup><br><br>Step 2: Multiply the estimates:<br>10<sup>2</sup> × (2 × 10<sup>2</sup>) × (5 × 10<sup>4</sup>) = 10 × 10<sup>8</sup> = 10<sup>9</sup><br><br>The answer is (D)."
  },
  {
    id: "quant_m132",
    section: "quant",
    difficulty: "medium",
    prompt: "Andrew saved $240 by the end of his first year of work and a total of $540 by the end of his second year. Which of the following is closest to the percent increase in the amount he saved during the second year compared to the amount he saved during the first year?",
    choices: [
      { id: "A", text: "11%" },
      { id: "B", text: "25%" },
      { id: "C", text: "44%" },
      { id: "D", text: "56%" },
      { id: "E", text: "125%" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the amount saved during each year.<br>Year 1 savings: $240<br>Year 2 savings: $540 − $240 = $300<br><br>Step 2: Calculate the percent increase from Year 1 to Year 2:<br>Percent increase = <span class='math-frac'><span class='num'>Year 2 − Year 1</span><span class='den'>Year 1</span></span> × 100%<br>= <span class='math-frac'><span class='num'>300 − 240</span><span class='den'>240</span></span> × 100%<br>= <span class='math-frac'><span class='num'>60</span><span class='den'>240</span></span> × 100%<br>= 25%<br><br>The answer is (B)."
  },
  {
    id: "quant_m133",
    section: "quant",
    difficulty: "medium",
    prompt: "If x is a positive integer, r is the remainder when x is divided by 4, and R is the remainder when x is divided by 9, what is the greatest possible value of r<sup>2</sup> + R?",
    choices: [
      { id: "A", text: "25" },
      { id: "B", text: "21" },
      { id: "C", text: "17" },
      { id: "D", text: "13" },
      { id: "E", text: "11" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Determine the possible ranges for r and R.<br>• When dividing by 4, the remainder r can be 0, 1, 2, or 3. Maximum r = 3.<br>• When dividing by 9, the remainder R can be 0, 1, 2, ..., or 8. Maximum R = 8.<br><br>Step 2: To maximize r<sup>2</sup> + R, use the largest possible values:<br>r<sup>2</sup> + R = 3<sup>2</sup> + 8 = 9 + 8 = 17<br><br>Step 3: Verify that such an x exists. We need x with remainder 3 when divided by 4 and remainder 8 when divided by 9. Try x = 35:<br>35 ÷ 4 = 8 remainder 3 ✓<br>35 ÷ 9 = 3 remainder 8 ✓<br><br>The answer is (C)."
  },
  {
    id: "quant_m134",
    section: "quant",
    difficulty: "medium",
    prompt: "Each of the nine digits 0, 1, 1, 4, 5, 6, 8, 8, and 9 is used once to form three 3-digit integers. What is the greatest possible sum of these three integers?",
    choices: [
      { id: "A", text: "1,752" },
      { id: "B", text: "2,616" },
      { id: "C", text: "2,652" },
      { id: "D", text: "2,775" },
      { id: "E", text: "2,958" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: To maximize the sum, place the largest digits in the highest place values (hundreds place).<br><br>Step 1: Sort the digits from largest to smallest: 9, 8, 8, 6, 5, 4, 1, 1, 0.<br><br>Step 2: Assign the three largest digits to the hundreds places:<br>Hundreds: 9, 8, 8 → contributes (9 + 8 + 8) × 100 = 2,500<br><br>Step 3: Assign the next three largest to the tens places:<br>Tens: 6, 5, 4 → contributes (6 + 5 + 4) × 10 = 150<br><br>Step 4: Assign the remaining three to the ones places:<br>Ones: 1, 1, 0 → contributes 1 + 1 + 0 = 2<br><br>Step 5: Total = 2,500 + 150 + 2 = 2,652<br><br>The answer is (C)."
  },
  {
    id: "quant_m135",
    section: "quant",
    difficulty: "medium",
    prompt: "Given that 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + … + 10<sup>2</sup> = 385, what is the value of 3<sup>2</sup> + 6<sup>2</sup> + 9<sup>2</sup> + … + 30<sup>2</sup>?",
    choices: [
      { id: "A", text: "1,155" },
      { id: "B", text: "1,540" },
      { id: "C", text: "1,925" },
      { id: "D", text: "2,310" },
      { id: "E", text: "3,465" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Notice that each term in the new sum is a multiple of 3:<br>3<sup>2</sup> + 6<sup>2</sup> + 9<sup>2</sup> + … + 30<sup>2</sup> = (3·1)<sup>2</sup> + (3·2)<sup>2</sup> + (3·3)<sup>2</sup> + … + (3·10)<sup>2</sup><br><br>Step 2: Factor out 3<sup>2</sup> = 9 from each term:<br>= 9·1<sup>2</sup> + 9·2<sup>2</sup> + 9·3<sup>2</sup> + … + 9·10<sup>2</sup><br>= 9(1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + … + 10<sup>2</sup>)<br><br>Step 3: Substitute the given value:<br>= 9 × 385 = 3,465<br><br>The answer is (E)."
  },
  {
    id: "quant_m136",
    section: "quant",
    difficulty: "medium",
    prompt: "If water is leaking from a certain tank at a constant rate of 1,200 milliliters per hour, how many seconds does it take for 1 milliliter of water to leak from the tank?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>" },
      { id: "C", text: "2" },
      { id: "D", text: "3" },
      { id: "E", text: "20" }
    ],
    correctAnswer: "D",
    explanation: "Step 1: Convert the rate from milliliters per hour to milliliters per second.<br>1 hour = 3,600 seconds<br>Rate = 1,200 mL per 3,600 seconds<br><br>Step 2: Find the time for 1 mL to leak:<br>Time per mL = <span class='math-frac'><span class='num'>3,600 seconds</span><span class='den'>1,200 mL</span></span> = 3 seconds per mL<br><br>The answer is (D)."
  },
  {
    id: "quant_m137",
    section: "quant",
    difficulty: "medium",
    prompt: "When the positive integer k is divided by the positive integer n, the remainder is 11. If <span class='math-frac'><span class='num'>k</span><span class='den'>n</span></span> = 81.2, what is the value of n?",
    choices: [
      { id: "A", text: "9" },
      { id: "B", text: "20" },
      { id: "C", text: "55" },
      { id: "D", text: "70" },
      { id: "E", text: "81" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: When you divide k by n, the quotient is 81 and the decimal part represents the remainder.<br><br>Step 1: The decimal 81.2 means the integer quotient is 81 and the fractional part is 0.2.<br>0.2 = <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span><br><br>Step 2: The fractional part equals <span class='math-frac'><span class='num'>remainder</span><span class='den'>n</span></span>:<br><span class='math-frac'><span class='num'>remainder</span><span class='den'>n</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span><br><br>Step 3: We are told the remainder is 11:<br><span class='math-frac'><span class='num'>11</span><span class='den'>n</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span><br><br>Step 4: Cross-multiply:<br>n = 11 × 5 = 55<br><br>The answer is (C)."
  },
  {
    id: "quant_m138",
    section: "quant",
    difficulty: "medium",
    prompt: "The total area of a certain continent is approximately 3.8 × 10<sup>16</sup> square inches. Which of the following is closest to the total area of the continent in square miles? (1 square mile ≈ 4.0 × 10<sup>9</sup> square inches)",
    choices: [
      { id: "A", text: "6.7 × 10<sup>5</sup>" },
      { id: "B", text: "2.0 × 10<sup>6</sup>" },
      { id: "C", text: "9.5 × 10<sup>6</sup>" },
      { id: "D", text: "1.1 × 10<sup>7</sup>" },
      { id: "E", text: "9.5 × 10<sup>8</sup>" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: To convert from square inches to square miles, divide by the conversion factor:<br>Area in sq miles = <span class='math-frac'><span class='num'>3.8 × 10<sup>16</sup></span><span class='den'>4.0 × 10<sup>9</sup></span></span><br><br>Step 2: Divide the coefficients and subtract the exponents:<br>= <span class='math-frac'><span class='num'>3.8</span><span class='den'>4.0</span></span> × 10<sup>16−9</sup> = 0.95 × 10<sup>7</sup><br><br>Step 3: Rewrite in standard scientific notation:<br>= 9.5 × 10<sup>6</sup><br><br>The answer is (C)."
  },
  {
    id: "quant_m139",
    section: "quant",
    difficulty: "medium",
    prompt: "If xy = 1, what is the value of <span class='math-frac'><span class='num'>2<sup>(x+y)<sup>2</sup></sup></span><span class='den'>2<sup>(x−y)<sup>2</sup></sup></span></span>?",
    choices: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "8" },
      { id: "D", text: "16" },
      { id: "E", text: "32" }
    ],
    correctAnswer: "D",
    explanation: "Key concept: When dividing powers with the same base, subtract the exponents: <span class='math-frac'><span class='num'>a<sup>m</sup></span><span class='den'>a<sup>n</sup></span></span> = a<sup>m−n</sup>.<br><br>Step 1: Simplify the expression:<br><span class='math-frac'><span class='num'>2<sup>(x+y)<sup>2</sup></sup></span><span class='den'>2<sup>(x−y)<sup>2</sup></sup></span></span> = 2<sup>(x+y)<sup>2</sup> − (x−y)<sup>2</sup></sup><br><br>Step 2: Expand the exponent using the difference of squares formula:<br>(x+y)<sup>2</sup> − (x−y)<sup>2</sup> = [(x+y) + (x−y)][(x+y) − (x−y)]<br>= (2x)(2y) = 4xy<br><br>Step 3: Substitute xy = 1:<br>4xy = 4(1) = 4<br><br>Step 4: The expression equals 2<sup>4</sup> = 16.<br><br>The answer is (D)."
  },
  {
    id: "quant_m140",
    section: "quant",
    difficulty: "medium",
    prompt: "Of the 20 members of a kitchen crew, 17 can use the meat-cutting machine, 18 can use the bread-slicing machine, and 15 can use both machines. If one crew member is chosen at random, what is the probability that the member chosen can use neither machine?",
    choices: [
      { id: "A", text: "0" },
      { id: "B", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>10</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>7</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>4</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span>" }
    ],
    correctAnswer: "A",
    explanation: "Key concept: Use the inclusion-exclusion formula: |A ∪ B| = |A| + |B| − |A ∩ B|.<br><br>Step 1: Find the number who can use at least one machine:<br>|A ∪ B| = 17 + 18 − 15 = 20<br><br>Step 2: Find the number who can use neither machine:<br>Neither = Total − |A ∪ B| = 20 − 20 = 0<br><br>Step 3: The probability of choosing someone who can use neither machine:<br>P = <span class='math-frac'><span class='num'>0</span><span class='den'>20</span></span> = 0<br><br>The answer is (A)."
  },
  {
    id: "quant_m141",
    section: "quant",
    difficulty: "medium",
    prompt: "Which of the following is an integer?<br><br>I. <span class='math-frac'><span class='num'>12!</span><span class='den'>6!</span></span><br><br>II. <span class='math-frac'><span class='num'>12!</span><span class='den'>8!</span></span><br><br>III. <span class='math-frac'><span class='num'>12!</span><span class='den'>7! × 5!</span></span>",
    choices: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "III only" },
      { id: "D", text: "I and II only" },
      { id: "E", text: "I, II, and III" }
    ],
    correctAnswer: "E",
    explanation: "Key concept: n! = n × (n−1) × (n−2) × … × 1. Dividing factorials cancels out the smaller terms.<br><br>Step 1: Evaluate I. <span class='math-frac'><span class='num'>12!</span><span class='den'>6!</span></span> = 7 × 8 × 9 × 10 × 11 × 12 = 665,280. This is an integer. ✓<br><br>Step 2: Evaluate II. <span class='math-frac'><span class='num'>12!</span><span class='den'>8!</span></span> = 9 × 10 × 11 × 12 = 11,880. This is an integer. ✓<br><br>Step 3: Evaluate III. <span class='math-frac'><span class='num'>12!</span><span class='den'>7! × 5!</span></span> is the combination formula C(12, 5) = <span class='math-frac'><span class='num'>12!</span><span class='den'>5! × 7!</span></span> = 792. Combinations always produce integers. ✓<br><br>All three are integers. The answer is (E)."
  },
  {
    id: "quant_m142",
    section: "quant",
    difficulty: "medium",
    prompt: "The function f is defined for all nonzero numbers x by f(x) = x − <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>. If x ≠ 0, which of the following equals f(<span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>)?",
    choices: [
      { id: "A", text: "f(x)" },
      { id: "B", text: "f(−x)" },
      { id: "C", text: "f(−<span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>)" },
      { id: "D", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>f(x)</span></span>" },
      { id: "E", text: "−<span class='math-frac'><span class='num'>1</span><span class='den'>f(x)</span></span>" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Compute f(<span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>) by substituting <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> into the function:<br>f(<span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>) = <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>1</span><span class='den'>1/x</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − x<br><br>Step 2: Now compute f(−x) to compare:<br>f(−x) = (−x) − <span class='math-frac'><span class='num'>1</span><span class='den'>(−x)</span></span> = −x + <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − x<br><br>Step 3: Compare the results:<br>f(<span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span>) = <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> − x = f(−x) ✓<br><br>The answer is (B)."
  },
  {
    id: "quant_m143",
    section: "quant",
    difficulty: "medium",
    prompt: "In the arithmetic sequence t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub>, …, the first term t<sub>1</sub> = 23 and each subsequent term is defined by t<sub>n</sub> = t<sub>n−1</sub> − 3 for n &gt; 1. What is the value of n when t<sub>n</sub> = −4?",
    choices: [
      { id: "A", text: "−1" },
      { id: "B", text: "7" },
      { id: "C", text: "10" },
      { id: "D", text: "14" },
      { id: "E", text: "20" }
    ],
    correctAnswer: "C",
    explanation: "Key concept: In an arithmetic sequence, t<sub>n</sub> = t<sub>1</sub> + (n − 1) × d, where d is the common difference.<br><br>Step 1: Identify the values. t<sub>1</sub> = 23, d = −3 (each term decreases by 3).<br><br>Step 2: Use the formula and set t<sub>n</sub> = −4:<br>−4 = 23 + (n − 1)(−3)<br><br>Step 3: Solve for n:<br>−4 = 23 − 3(n − 1)<br>−4 = 23 − 3n + 3<br>−4 = 26 − 3n<br>3n = 30<br>n = 10<br><br>Check: t<sub>10</sub> = 23 + 9(−3) = 23 − 27 = −4 ✓<br><br>The answer is (C)."
  },
  {
    id: "quant_m144",
    section: "quant",
    difficulty: "medium",
    prompt: "How many seconds will it take for a car traveling at a constant rate of 45 miles per hour to travel a distance of 220 yards? (1 mile = 1,760 yards)",
    choices: [
      { id: "A", text: "8" },
      { id: "B", text: "9" },
      { id: "C", text: "10" },
      { id: "D", text: "11" },
      { id: "E", text: "12" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Convert the car's speed from miles per hour to yards per second.<br>45 miles/hour = 45 × 1,760 yards/hour = 79,200 yards/hour<br><br>Step 2: Convert to yards per second (1 hour = 3,600 seconds):<br><span class='math-frac'><span class='num'>79,200</span><span class='den'>3,600</span></span> = 22 yards/second<br><br>Step 3: Find the time to travel 220 yards:<br>Time = <span class='math-frac'><span class='num'>Distance</span><span class='den'>Speed</span></span> = <span class='math-frac'><span class='num'>220</span><span class='den'>22</span></span> = 10 seconds<br><br>The answer is (C)."
  },
  {
    id: "quant_m145",
    section: "quant",
    difficulty: "medium",
    prompt: "A store's selling price of $2,240 for a certain computer would yield a profit of 40 percent of the store's cost for the computer. What selling price would yield a profit of 50 percent of the store's cost?",
    choices: [
      { id: "A", text: "$2,400" },
      { id: "B", text: "$2,464" },
      { id: "C", text: "$2,650" },
      { id: "D", text: "$2,732" },
      { id: "E", text: "$2,800" }
    ],
    correctAnswer: "A",
    explanation: "Key concept: Selling Price = Cost + Profit = Cost × (1 + profit percentage).<br><br>Step 1: Find the store's cost. A 40% profit means:<br>Selling Price = 1.40 × Cost<br>$2,240 = 1.40 × Cost<br>Cost = <span class='math-frac'><span class='num'>$2,240</span><span class='den'>1.40</span></span> = $1,600<br><br>Step 2: Find the selling price for a 50% profit:<br>Selling Price = 1.50 × Cost = 1.50 × $1,600 = $2,400<br><br>The answer is (A)."
  },
  {
    id: "quant_m146",
    section: "quant",
    difficulty: "medium",
    prompt: "If a certain coin is flipped, the probability that it will land heads up is <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>. If the coin is flipped 5 times, what is the probability that it will land heads up on the first 3 flips and not on the last 2 flips?",
    choices: [
      { id: "A", text: "<span class='math-frac'><span class='num'>3</span><span class='den'>5</span></span>" },
      { id: "B", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>" },
      { id: "C", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>5</span></span>" },
      { id: "D", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>8</span></span>" },
      { id: "E", text: "<span class='math-frac'><span class='num'>1</span><span class='den'>32</span></span>" }
    ],
    correctAnswer: "E",
    explanation: "Key concept: For independent events, multiply the individual probabilities.<br><br>Step 1: Each flip is independent with P(heads) = <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> and P(tails) = <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>.<br><br>Step 2: We need a specific sequence: H, H, H, T, T.<br>P = P(H) × P(H) × P(H) × P(T) × P(T)<br>= <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span> × <span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span><br>= (<span class='math-frac'><span class='num'>1</span><span class='den'>2</span></span>)<sup>5</sup> = <span class='math-frac'><span class='num'>1</span><span class='den'>32</span></span><br><br>The answer is (E)."
  },
  {
    id: "quant_m147",
    section: "quant",
    difficulty: "medium",
    prompt: "The operation ⊗ is defined for all nonzero numbers a and b by a ⊗ b = <span class='math-frac'><span class='num'>a</span><span class='den'>b</span></span> − <span class='math-frac'><span class='num'>b</span><span class='den'>a</span></span>. If x and y are nonzero numbers, which of the following statements must be true?<br><br>I. x ⊗ xy = x(1 ⊗ y)<br>II. x ⊗ y = −(y ⊗ x)<br>III. <span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> ⊗ <span class='math-frac'><span class='num'>1</span><span class='den'>y</span></span> = y ⊗ x",
    choices: [
      { id: "A", text: "I only" },
      { id: "B", text: "II only" },
      { id: "C", text: "III only" },
      { id: "D", text: "I and II" },
      { id: "E", text: "II and III" }
    ],
    correctAnswer: "E",
    explanation: "Step 1: Check Statement II. Compute both sides:<br>x ⊗ y = <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> − <span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span><br>y ⊗ x = <span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span><br>−(y ⊗ x) = −(<span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>) = <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span> − <span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span> = x ⊗ y ✓<br><br>Step 2: Check Statement III. Compute the left side:<br><span class='math-frac'><span class='num'>1</span><span class='den'>x</span></span> ⊗ <span class='math-frac'><span class='num'>1</span><span class='den'>y</span></span> = <span class='math-frac'><span class='num'>1/x</span><span class='den'>1/y</span></span> − <span class='math-frac'><span class='num'>1/y</span><span class='den'>1/x</span></span> = <span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span><br>And y ⊗ x = <span class='math-frac'><span class='num'>y</span><span class='den'>x</span></span> − <span class='math-frac'><span class='num'>x</span><span class='den'>y</span></span>. These are equal. ✓<br><br>Step 3: Check Statement I. Try x = 2, y = 3:<br>Left: x ⊗ xy = 2 ⊗ 6 = <span class='math-frac'><span class='num'>2</span><span class='den'>6</span></span> − <span class='math-frac'><span class='num'>6</span><span class='den'>2</span></span> = <span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span> − 3 = −<span class='math-frac'><span class='num'>8</span><span class='den'>3</span></span><br>Right: x(1 ⊗ y) = 2(1 ⊗ 3) = 2(<span class='math-frac'><span class='num'>1</span><span class='den'>3</span></span> − 3) = 2(−<span class='math-frac'><span class='num'>8</span><span class='den'>3</span></span>) = −<span class='math-frac'><span class='num'>16</span><span class='den'>3</span></span><br>−<span class='math-frac'><span class='num'>8</span><span class='den'>3</span></span> ≠ −<span class='math-frac'><span class='num'>16</span><span class='den'>3</span></span>, so Statement I is false. ✗<br><br>Only II and III are true. The answer is (E)."
  }
);
