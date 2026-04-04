GMAT_QUESTIONS.push(
  {
    id: 'ds_e001',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Each car at a certain dealership is either blue or white. What is the average (arithmetic mean) sticker price of all the cars at the dealership?<br><br><strong>1.</strong> Of all the cars at the dealership, are blue and have an average sticker price of $21,000.<br><strong>2.</strong> Of all the cars at the dealership, are white and have an average sticker price of $24,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Statistics</strong><br><br>Let <br> and <br> be the sum of the sticker prices, respectively and in dollars, of the blue cars<br>and the white cars at the dealership, and let n be the number of cars at the dealership.<br>Determine the value of <br>.<br>1. Given that there are <br>n blue cars having an average sticker price of $21,000, it follows<br>that <br>21,000 = 7,000n. Therefore, <br> = 7,000 + <br>,<br>which can have more than one possible value by suitably varying <br> and n; NOT<br>sufficient.<br>2. Given that there are <br>n white cars having an average sticker price of $24,000, it follows<br>that <br>24,000 = 16,000n. Therefore, <br> = <br> +<br>16,000, which can have more than one possible value by suitably varying <br> and n; NOT<br>sufficient.<br>Taking (1) and (2) together, <br> <br> = 23,000.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e002',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A box contains only white balls and black balls. What is the probability that a ball selected at random from the box is white?<br><br><strong>1.</strong> There are 100 balls in the box.<br><strong>2.</strong> There are 40 black balls in the box.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Arithmetic Probability</strong><br><br>Determine the probability of selecting a white ball from a box that contains only white and<br>black balls.<br>1. Given that there are 100 balls in the box, it is impossible to determine the probability of<br>selecting a white ball because there is no information on the white/black split of the 100<br>balls in the box; NOT sufficient.<br>2. Given that there are 40 black balls in the box, it is impossible to determine the probability<br>of selecting a white ball because there is no indication of either the total number of balls<br>in the box or the number of white balls; NOT sufficient.<br>Taking (1) and (2) together, there are 100 balls in the box, 40 of which are black. It follows<br>that the number of white balls is 100 – 40 = 60 and the probability of selecting a white ball is<br> = <br>.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e003',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Rita’s monthly salary is Juanita’s monthly salary. What is their combined monthly salary?<br><br><strong>1.</strong> Rita’s monthly salary is $4,000.<br><strong>2.</strong> Either Rita’s monthly salary or Juanita’s monthly salary is $6,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Let R and J be Rita’s and Juanita’s monthly salaries, respectively, in dollars. It is given that R =<br> J. Determine the value of their combined salary, which can be expressed as R + J = <br> J + J =<br> J.<br>1. Given that R = 4,000, it follows that 4,000 = <br> J, or J = <br> (4,000) = 6,000. Therefore, <br> J<br>= <br> (6,000) = 10,000; SUFFICIENT.<br>2. Given that R = 6,000 or J = 6,000, then J = <br> (6,000) = 9,000 or J = 6,000. Thus,  J = <br>(9,000) = 15,000 or  J =  (6,000) = 10,000, and so it is not possible to determine the<br>value of <br>J; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e004',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Each of the 120 students in a certain dormitory is either a junior or a senior. How many of the juniors have credit cards?<br><br><strong>1.</strong> of the 120 juniors and seniors have credit cards.<br><strong>2.</strong> The number of seniors who have credit cards is 20 more than the number of juniors who have credit cards.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra First-Degree Equations</strong><br><br>Determine the number of juniors who have credit cards among the 120 students in a certain<br>junior/senior dormitory.<br>1. Given that <br> of the 120 students have credit cards, it follows that 80 students have credit<br>cards. There is no information regarding the number of juniors in this group of 80; NOT<br>sufficient.<br>2. Given that the number of seniors with credit cards is 20 more than the number of juniors<br>with credit cards, it is impossible to determine how many juniors have credit cards<br>because no information is given about the junior/senior split nor about the have/do not<br>have credit cards split of the 120 students; NOT sufficient.<br>Taking (1) and (2) together, 80 students have credit cards from (1) and the number of seniors<br>with credit cards is 20 more than the number of juniors with credit cards from (2). Thus, J + S<br>= 80 or J + (J + 20) = 80, which can be solved for a unique value of J.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e005',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'If the average (arithmetic mean) cost per sweater for 3 pullover sweaters and 1 cardigan sweater was $65, what was the cost of the cardigan sweater?<br><br><strong>1.</strong> The average cost per sweater for the 3 pullover sweaters was $55.<br><strong>2.</strong> The most expensive of the 3 pullover sweaters cost $30 more than the least expensive.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Algebra Statistics</strong><br><br>Letting P represent the average cost, in dollars, of 1 pullover sweater and C, the cost, in<br>dollars, of the cardigan, it is given that <br> = 65 or 3P + C = 260. Determine the value of C.<br>1. It is given that P = 55. Therefore, 3P = 3(55) = 165 and C = 260 – 165 = 95; SUFFICIENT.<br>2. Given that the most expensive pullover sweater cost $30 more than the least expensive, it<br>is impossible to determine the value of C. For example, if the price of the most expensive<br>pullover sweater was $60, the price of the least expensive was $30, and the price of the<br>other pullover sweater was $40, then the value of C = 260 – 60 – 30 – 40 = 130. But if the<br>price of the most expensive pullover sweater was $60, the price of the least expensive<br>was $30, and the price of the other pullover sweater was $50, then the value of C = 260 –<br>60 – 30 – 50 = 120; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e006',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'In each quarter of 1998, Company M earned more money than in the previous quarter. What was the range of Company M’s quarterly earnings in 1998?<br><br><strong>1.</strong> In the 2nd and 3rd quarters of 1998, Company M earned $4.0 million and $4.6 million, respectively.<br><strong>2.</strong> In the 1st and 4th quarters of 1998, Company M earned $3.8 million and $4.9 million, respectively.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>We know that for each of the quarters in 1998, Company M earned more money than in the<br>previous quarter. Is it possible to determine the range of the company’s quarterly earnings in<br>1998?<br>1. Although we are told the value of the earnings for the 2nd and 3rd quarters, Company<br>M’s 4th quarter earnings could, consistent with statement 1, be any amount that is<br>greater than the 3rd-quarter earnings. Likewise, the company’s 1st-quarter earnings<br>could be any positive amount that is less than the company’s 2nd-quarter earnings. The<br>difference between these two values would be the range, and we see that it cannot be<br>determined; NOT sufficient.<br>2. We are given the earnings for the 1st and 4th quarters, and we already know that, from<br>quarter to quarter, the earnings in 1998 have always increased. We can thus infer that<br>Company M’s earnings for the 2nd and 3rd quarters are less than the 4th-quarter<br>earnings but greater than the 1st-quarter earnings. The difference between the greatest<br>quarterly earnings and the least quarterly earnings for 1998 is thus the difference<br>between the 4th-quarter earnings and the 1st-quarter earnings—the values $4.9 million<br>and $3.8 million, respectively, that we have been given; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e007',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'The range of the heights of a group of high school juniors and seniors is 20 centimeters. What is the average (arithmetic mean) of the height of the tallest senior in the group and the height of the shortest junior in the group?<br><br><strong>1.</strong> The average of the heights of the juniors in the group is 165 centimeters.<br><strong>2.</strong> The average of the heights of the seniors in the group is 179 centimeters.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Determine the average of the height of the tallest senior and the height of the shortest junior.<br>1. Given that the average of the heights of the juniors is 165 cm, it is not possible to<br>determine the average of the height of the tallest senior and the height of the shortest<br>junior. For example, the heights of the juniors could all be 165 cm and there could be<br>three seniors with heights 176 cm, 176 cm, and 185 cm. In this case the range of all the<br>heights is 185 – 165 = 20 cm, the average of the heights of the juniors is 165 cm, and the<br>average of the height of the tallest senior and the height of the shortest junior is<br> = 175. Or the heights of the seniors could all be 179 cm and there could be<br>three juniors with heights 159 cm, 168 cm, and 168 cm. In this case the range of all the<br>heights is 179 – 159 = 20 cm, the average of the heights of the juniors is 165 cm, and the<br>average of the height of the tallest senior and the height of the shortest junior is<br> = 169; NOT sufficient.<br>2. Given that the average of the heights of the seniors is 179 cm, it is not possible to<br>determine the average of the height of the tallest senior and the height of the shortest<br>junior because, for each of the examples used in (1) above, the average of the heights of<br>the seniors is 179 cm; NOT sufficient.<br>Taking (1) and (2) together, it is not possible to determine the average of the height of the<br>tallest senior and the height of the shortest junior because each of the examples used in (1)<br>above satisfies both (1) and (2).<br><br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e008',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'In a certain factory, hours worked by each employee in excess of 40 hours per week are overtime hours and are paid for at times the employee’s regular hourly pay rate. If an employee worked a total of 42 hours last week, how much was the employee’s gross pay for the hours worked last week?<br><br><strong>1.</strong> The employee’s gross pay for overtime hours worked last week was $30.<br><strong>2.</strong> The employee’s gross pay for all hours worked last week was $30 more than for the previous week.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>If an employee’s regular hourly rate was $R and the employee worked 42 hours last week,<br>then the employee’s gross pay for hours worked last week was 40R + 2(1.5R). Determine the<br>value of 40R + 2(1.5R) = 43R, or equivalently, the value of R.<br>1. Given that the employee’s gross pay for overtime hours worked last week was $30, it<br>follows that 2(1.5R) = 30 and R = 10; SUFFICIENT.<br>2. Given that the employee’s gross pay for all hours worked last week was $30 more than<br>for the previous week, the value of R cannot be determined because nothing specific is<br>known about the value of the employee’s pay for all hours worked the previous week;<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e009',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Did Insurance Company K have more than $300 million in total net profits last year?<br><br><strong>1.</strong> Last year Company K paid out $0.95 in claims for every dollar of premiums collected.<br><strong>2.</strong> Last year Company K earned a total of $150 million in profits from the investment of accumulated surplus premiums from previous years.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Letting R and E, respectively, represent the company’s total revenue and total expenses last<br>year, determine if R − E > $300 million.<br>1. This indicates that, for $x in premiums collected, the company paid $0.95x in claims, but<br>gives no information about other sources of revenue or other types of expenses; NOT<br>sufficient.<br>2. This indicates that the company’s profits from the investment of accumulated surplus<br>premiums was $150 million last year, but gives no information about other sources of<br>revenue or other types of expenses; NOT sufficient.<br>Taking (1) and (2) together gives information on profit resulting from collecting premiums<br>and paying claims as well as profit resulting from investments from accumulated surplus<br>premiums but gives no indication whether there were other sources of revenue or other<br>types of expenses.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e010',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'How many hours would it take Pump A and Pump B working together, each at its own constant rate, to empty a tank that was initially full?<br><br><strong>1.</strong> Working alone at its constant rate, Pump A would empty the full tank in 4 hours 20 minutes.<br><strong>2.</strong> Working alone, Pump B would empty the full tank at its constant rate of 72 liters per minute.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine how long it would take Pumps A and B working together, each at its own constant<br>rate, to empty a full tank.<br>1. This indicates how long it would take Pump A to empty the tank but gives no information<br>about Pump B’s constant rate; NOT sufficient.<br>2. This indicates the rate at which Pump B can empty the tank, but without information<br>about the capacity of the tank or Pump A’s rate, it is not possible to determine how long<br>both pumps working together would take to empty the tank; NOT sufficient.<br>Taking (1) and (2) together gives the amount of time it would take Pump A to empty the tank<br>and the rate at which Pump B can empty the tank, but without knowing the capacity of the<br>tank, it is not possible to determine how long the pumps working together would take to<br>empty the tank.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e011',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Maria left home hour after her husband and drove over the same route as he had in order to overtake him. From the time she left, how many hours did it take Maria to overtake her husband?<br><br><strong>1.</strong> Maria drove 60 miles before overtaking her husband.<br><strong>2.</strong> While overtaking her husband, Maria drove at an average rate of 60 miles per hour, which was 12 miles per hour faster than her husband’s average rate.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Rate Problems</strong><br><br>1. Given that Maria drove 60 miles before overtaking her husband, it is not possible to<br>determine how many hours she spent driving this distance. For example, she could have<br>been driving this distance at a rate of 30 miles per hour and thus spent 2 hours driving<br>this distance. However, she could also have been driving this distance at a rate of 60 miles<br>per hour and thus spent 1 hour driving this distance; NOT sufficient.<br>2. Given that Maria drove at an average of 60 miles per hour and her husband drove at an<br>average of 60 – 12 = 48 miles per hour, and letting t be the number of hours it took for<br>Maria to overtake her husband, it follows that 60t = 48(t + <br>) since the distance Maria<br>drove, 60t miles, is the same as the distance her husband drove, 48(t + <br>) miles.<br>Therefore, 60t = 48t + 12, or t = 1, and hence it took 1 hour for Maria to overtake her<br>husband; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e012',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'In a school that had a total of 600 students enrolled in the junior and senior classes, the students contributed to a certain fund. If all of the juniors but only half of the seniors contributed, was the total amount contributed more than $740?<br><br><strong>1.</strong> Each junior contributed $1 and each senior who contributed gave $3.<br><strong>2.</strong> There were more juniors than seniors enrolled in the school.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>The task in this question is to determine whether the respective statements are sufficient for<br>answering the question of whether the total amount contributed was more than $740. In<br>making this determination, it is important to remember that we are to use only the<br>information that has been given. For example, it may seem plausible to assume that the<br>number of seniors at the school is roughly equal to the number of juniors. However, because<br>no such information has been provided, we cannot assume that this assumption holds. With<br>this in mind, consider statements 1 and 2.<br>1. If it were the case that half of the 600 students were seniors, then, given that half of the<br>300 seniors would have contributed $3, there would have been 150 × $3 = $450 in<br>contributions from the seniors and 300 × $1 = $300 in contributions from the juniors, for<br>a total of $750—more than the figure of $740 with which the question is concerned.<br>However, as noted, we cannot make such an assumption. To test the conditions that we<br>actually have been given, we can consider extreme cases, which are often relatively<br>simple. For example, given the information provided, it is possible that only two of the<br>students are seniors and the other 598 students are juniors. If this were the case, then<br>the contributions from the juniors would be $598 ($1 per student) and the contributions<br>from the seniors would be $3 ($3 for the one senior who contributes, given that only half<br>of the 2 seniors contribute). The total contributions would then be $598 + $3 = $601;<br>NOT sufficient.<br>2. Merely with this statement—and not statement 1—we have no information as to how<br>much the students contributed. We therefore cannot determine the total amount<br>contributed; NOT sufficient.<br>We still need to consider whether statements 1 and 2 are sufficient together for determining<br>whether a minimum of $740 has been contributed. However, note that the reasoning in<br>connection with statement 1 applies here as well. We considered there the possibility that the<br>600 students included only two seniors, with the other 598 students being juniors. Because<br>this scenario also satisfies statement 2, we see that statements 1 and 2 taken together are not<br>sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e013',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'How much did credit-card fraud cost United States banks in year X to the nearest $10 million?<br><br><strong>1.</strong> In year X, counterfeit cards and telephone and mail-order fraud accounted for 39 percent of the total amount that card fraud cost the banks.<br><strong>2.</strong> In year X, stolen cards accounted for $158.4 million, or 16 percent, of the total amount that credit-card fraud cost the banks.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Percents</strong><br><br>1. It is given that certain parts of the total fraud cost have a total that is 39% of the total<br>fraud cost, but since no actual dollar amounts are specified, it is not possible to estimate<br>the total fraud cost to the nearest $10 million; NOT sufficient.<br>2. Given that $158.4 million represents 16% of the total fraud cost, it follows that the total<br>fraud cost equals $158.4 million divided by 0.16; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e014',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Company X’s profits this year increased by 25% over last year’s profits. Was the dollar amount of Company X’s profits this year greater than the dollar amount of Company Y’s?<br><br><strong>1.</strong> Last year, the ratio of Company Y’s profits to Company X’s profits was 5:2.<br><strong>2.</strong> Company Y experienced a 40% drop in profits from last year to this year.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Let <br> and <br>, respectively, be the profits of Company X last year and this year, and let <br> and<br>, respectively, be the profits of Company Y last year and this year. Then <br>. Is<br>?<br>1. Given that <br>, it is not possible to determine whether <br> because nothing is<br>known about the value of <br> other than <br> is positive; NOT sufficient.<br>2. Given that <br>, it is not possible to determine whether <br> because nothing<br>is known that relates the profits of Company X for either year to the profits of Company Y<br>for either year; NOT sufficient.<br>Taking (1) and (2) together, it is given that <br> and from (1) it follows that <br>,<br>or <br>, and thus <br>. From (2) it follows that <br>, or<br>, and thus <br>. Since the last equation expresses <br> as a<br>specific number times <br>, it follows that it can be determined whether or not <br>. Note<br>that <br>, and so the answer to the question “Is <br>”<br>is no.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e015',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A certain company consists of three divisions, A, B, and C. Of the employees in the three divisions, the employees in Division C have the greatest average (arithmetic mean) annual salary. Is the average annual salary of the employees in the three divisions combined less than $55,000?<br><br><strong>1.</strong> The average annual salary of the employees in Divisions A and B combined is $45,000.<br><strong>2.</strong> The average annual salary of the employees in Division C is $55,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Algebra Statistics</strong><br><br>1. Given that the average annual salary of the employees in Divisions A and B combined is<br>$45,000, each of the divisions could have exactly two employees such that the annual<br>salaries in Division A are $45,000 and $45,000, the annual salaries in Division B are<br>$45,000 and $45,000, and the annual salaries in Division C are $50,000 and $50,000, in<br>which case Division C has the greatest average annual salary and the average annual<br>salary in Divisions A, B, and C combined is less than $55,000. On the other hand, each of<br>the divisions could have exactly two employees such that the annual salaries in Division A<br>are $45,000 and $45,000, the annual salaries in Division B are $45,000 and $45,000, and<br>the annual salaries in Division C are $1 million and $1 million, in which case Division C<br>has the greatest average annual salary and the average annual salary in Divisions A, B,<br>and C combined is greater than $55,000; NOT sufficient.<br>2. Given that the average annual salary in Division C is $55,000, we have <br> = 55,000,<br>where ∑C is the sum of the annual salaries, in dollars, of the employees in Division C and<br>NC is the number of employees in Division C. Moreover, letting ∑A and ∑B be the sums of<br><br>the annual salaries, respectively and in dollars, of the employees in Divisions A and B, and<br>letting NA and NB be the numbers of employees, respectively, in Divisions A and B, then<br>we have <br> < 55,000 and <br> < 55,000, since the employees in Division C have the<br>greatest average annual salary. Note that these two inequalities and this equation can be<br>rewritten as ∑A < 55,000NA, ∑B < 55,000NB, and ∑C = 55,000NC. Therefore, the average<br>annual salary of the employees in the three divisions combined is <br> =<br>, which is less than <br> =<br> = 55,000; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e016',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A candle company determines that, for a certain specialty candle, the supply function is p = m1x + b1 and the demand function is p = m2x + b2, where p is the price of each candle, x is the number of candles supplied or demanded, and m1, m2, b1, and b2 are constants. At what value of x do the graphs of the supply function and demand function intersect?<br><br><strong>1.</strong> m1 = –m2 = 0.005<br><strong>2.</strong> b2 – b1 = 6',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra First-Degree Equations</strong><br><br>The graphs will intersect at the value of x such that m1x + b1 = m2x + b2 or (m1 − m2)x = b2 −<br>b1.<br>1. This indicates that m1 = −m2 = 0.005. It follows that m1 − m2 = 0.01, and so 0.01x = b2 −<br>b1 or x = 100(b2 − b1), which can vary as the values of b2 and b1 vary; NOT sufficient.<br>2. This indicates that b2 − b1 = 6. It follows that (m1 − m2)x = 6. This implies that m1 ≠ m2,<br>and so x = <br> = <br>, which can vary as the values of m1 and m2 vary; NOT<br>sufficient.<br>Taking (1) and (2) together, m1 − m2 = 0.01 and b2 − b1 = 6 and so the value of x is <br> =<br>600.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e017',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A certain ski shop sold 125 pairs of skis and 100 pairs of ski boots for a total of $75,000. What was the average (arithmetic mean) selling price of a pair of the ski boots?<br><br><strong>1.</strong> The average selling price of a pair of skis was $300.<br><strong>2.</strong> The selling price of a pair of ski boots varied from $150 to $900.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Let ∑skis be the sum of the selling prices, in dollars, of all 125 pairs of skis and let ∑boots be<br>the sum of the selling prices, in dollars, of all 100 pairs of ski boots. We are given that ∑skis +<br>∑boots = 75,000. Determine the value of <br>, or equivalently, determine the value of ∑boots.<br>1. Given that <br> = 300, or ∑skis = 300(125) = 37,500, it follows from ∑skis + ∑boots =<br>75,000 that ∑boots = 75,000 − ∑skis = 75,000 – 37,500 = 37,500; SUFFICIENT.<br>2. Given that the selling price of a pair of ski boots varied from $150 to $900, it is possible<br>that there were 40 pairs of ski boots each with a selling price of $150, 60 pairs of ski<br>boots each with a selling price of $900, and 125 pairs of skis each with a selling price of<br>$120 for a total selling price of 40($150) + 60($900) + 125($120) = $75,000, and thus it<br>is possible that ∑boots = 40(150) + 60(900) = 6,000 + 54,000 = 60,000. However, it is also<br>possible that there were 60 pairs of ski boots each with a selling price of $150, 40 pairs<br>of ski boots each with a selling price of $900, and 125 pairs of skis each with a selling<br>price of $240 for a total selling price of 60($150) + 40($900) + 125($240) = $75,000, and<br>thus it is also possible that ∑boots = 60(150) + 40(900) = 9,000 + 36,000 = 45,000; NOT<br>sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e018',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Last year Publisher X published 1,100 books, consisting of first editions, revised editions, and reprints. How many first editions did Publisher X publish last year?<br><br><strong>1.</strong> The number of first editions published was 50 more than twice the number of reprints published.<br><strong>2.</strong> The number of revised editions published was half the number of reprints published.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>Let A be the number of first editions, B be the number of revised editions, and C be the<br>number of reprints. Then A + B + C = 1,100. Determine the value of A.<br>1. Given that A = 50 + 2C, it is not possible to determine the value of A. This is because by<br>choosing different values of C, different values of A can be obtained by using the equation<br>A = 50 + 2C, and then the equation A + B + C = 1,100 can be used to determine whether<br>acceptable values of B (nonnegative integers) exist for these values of A and C. For<br>example, choosing C = 100 leads to A = 250 and B = 750, and choosing C = 200 leads to A<br>= 450 and B = 450; NOT sufficient.<br>2. Given that <br>, or C = 2B, it is not possible to determine the value of A. This is<br>because by choosing different values of B, different values of C can be obtained by using<br>the equation C = 2B, and then the equation A + B + C = 1,100 can be used to determine<br>different values of A. For example, choosing B = 100 leads to C = 200 and A = 800, and<br>choosing B = 200 leads to C = 400 and A = 500; NOT sufficient.<br>Taking A = 50 + 2C from (1) and C = 2B from (2) together gives A = 50 + 4B. Thus, in the<br>equation A + B + C = 1,100, A can be replaced with 50 + 4B and C can be replaced with 2B to<br>give (50 + 4B) + B + 2B = 1,100. Solving for B gives B = 150, and hence C = 2B = 300 and A =<br>50 + 2C = 650.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e019',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'How old is Jane?<br><br><strong>1.</strong> Ten years ago she was one-third as old as she is now.<br><strong>2.</strong> In 15 years, she will be twice as old as she is now.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra First-Degree Equations</strong><br><br>Determine the value of J, where J represents Jane’s current age.<br>1. In symbols, J – 10 represents Jane’s age ten years ago and <br> represents one-third her<br>current age. These expressions are equal by (1), so J – 10 = <br>. This is a first-degree<br>equation in the variable J and has a unique solution; SUFFICIENT.<br>2. In symbols, J + 15 represents Jane’s age 15 years from now and 2J represents twice her<br>current age. These expressions are equal by (2), so J + 15 = 2J. This is a first-degree<br>equation in the variable J and has a unique solution; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e020',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'What was the population of City X in 2002?<br><br><strong>1.</strong> X’s population in 2002 increased by 2 percent, or 20,000 people, over 2001.<br><strong>2.</strong> In 2001, X’s population was 1,000,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Algebra Percents</strong><br><br>Letting P1 and P2 represent City X’s population in 2001 and 2002, respectively, the percent<br>increase in population from 2001 to 2002 is given as a decimal by <br>.<br>1. By (1) the percent increase was 2 percent, so <br> = 0.02 or P2 – P1 = 0.02P1. Also, by<br>(1), P2 – P1 = 20,000, so 20,000 = 0.02P1 from which the value of P1 can be uniquely<br>determined. Then P1 + 20,000 = P2, which is the population of City X in 2002;<br>SUFFICIENT.<br>2. Even though (2) gives P1 = 1,000,000, it gives no information about the population of City<br>X in 2002 either by itself or in relation to the population in 2001; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e021',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Yesterday Bookstore B sold twice as many softcover books as hardcover books. Was Bookstore B’s revenue from the sale of softcover books yesterday greater than its revenue from the sale of hardcover books yesterday?<br><br><strong>1.</strong> The average (arithmetic mean) price of the hardcover books sold at the store yesterday was $10 more than the average price of the softcover books sold at the store yesterday.<br><strong>2.</strong> The average price of the softcover and hardcover books sold at the store yesterday was greater than $14.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Letting s represent the number of softcover books sold; h, the number of hardcover books<br>sold; S, the average price of the softcover books sold; and H, the average price of the<br><br>hardcover books sold, determine whether the revenue from the sale of softcover books is<br>greater than the revenue from the sale of hardcover books or if sS > hH, where s = 2h.<br>1. Given that H = S + 10, if S = 10, H = 20, s = 10, and h = 5, then sS = 100 and hH = 100, so sS<br>= hH. On the other hand, if S = 40, H = 50, s = 8, and h = 4, then sS = 320 and hH = 200, so<br>sS > hH; NOT sufficient.<br>2. Given that <br> > 14, if s = 6, S = 10, h = 3, and H = 30, <br> = <br> > 14<br>and 6(10) < 3(30). On the other hand, if s = 10, S = 15, h = 5, and H = 20, <br>= <br> > 14 and 10(15) > 5(20); NOT sufficient.<br>Taking (1) and (2) together,<br>> 14 from (2)<br>> 14 s = 2h (given) and H = S + 10 from (1)<br>> 14 cancel h and simplify<br>3H – 20<br>> 42 multiply both sides by 3<br>H<br>><br>solve for H<br>To show that this leads to sS > hH, start with sS > hH and then reverse the steps.<br>sS<br>> hH<br> <br>2h(H – 10) > hH<br>s = 2h and S = H – 10<br>2hH – 20h > hH<br>distributive property<br>2hH<br>> hH + 20h add 20h to both sides<br>hH<br>> 20h<br>subtract hH from both sides<br>H<br>> 20<br>divide both sides by h > 0<br>Now reverse the steps.<br><br>H<br>><br>derived earlier<br>H<br>> 20<br> > 20<br>hH<br>> 20h<br>multiply both sides by h > 0<br>2hH<br>> hH + 20h add hH to both sides<br>2hH – 20h > hH<br>subtract 20h from both sides<br>2h(H – 10) > hH<br>factor<br>sS<br>> hH<br>s = 2h and S = H – 10<br>Thus, the revenue from the sale of softcover books was greater than the revenue from the<br>sale of hardcover books.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e022',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A customer purchased 6 shirts priced at $10.99 each, excluding sales tax. How much sales tax did he pay on this purchase?<br><br><strong>1.</strong> The customer paid a 5 percent sales tax on the total price of the shirts.<br><strong>2.</strong> The customer paid a total of $11.54 for each shirt, including sales tax.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Percents</strong><br><br>Determine the sales tax paid by a customer who bought six shirts for $10.99 each, excluding<br>sales tax.<br>1. Given that the sales tax was 5%, the customer paid sales tax totaling $3.30, which is<br>6(0.05)($10.99), rounded to the nearest cent; SUFFICIENT.<br>2. Given that each shirt cost $11.54 including sales tax, the customer paid a total of 6($11.54<br>− $10.99) = $3.30 in sales tax; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e023',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'The sum of the lengths of two pieces of rope is 65 feet. How long is the shorter piece?<br><br><strong>1.</strong> The lengths of the pieces of rope are in the ratio 8:5.<br><strong>2.</strong> One piece of rope is 15 feet longer than the other piece.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Ratio and Proportion; First-Degree Equations</strong><br><br>The sum of the lengths of two pieces of rope is 65 feet. Determine the length of the shorter<br>piece of rope.<br>1. Given that the lengths of the pieces of rope are in the ratio 8:5, it follows that 8x + 5x =<br>65, for some value of x. Hence, 13x = 65 and x = 5. The length of the shorter piece is 5(5)<br>= 25; SUFFICIENT.<br>2. Given that one piece is 15 feet longer than the other piece, if s represents the length of<br>the shorter piece, it follows that s + (s + 15) = 65, 2s + 15 = 65, 2s = 50, and s = 25;<br>SUFFICIENT.<br><br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e024',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'An initial investment of $10,000 was deposited in a bank account one year ago, and additional deposits were made during the year. If no withdrawals were made, what was the total amount of interest earned on this account during the year?<br><br><strong>1.</strong> The additional deposits during the year totaled $5,000.<br><strong>2.</strong> The account earned interest at the annual rate of 6 percent compounded quarterly.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine the interest earned in one year by an initial investment of $10,000 with additional<br>deposits, but no withdrawals, during the year.<br>1. Given that the additional deposits total $5,000, it is not possible to determine the interest<br>earned by both the initial investment and the additional deposits together without<br>information about the interest rate and when during the year the additional deposits<br>were made; NOT sufficient.<br>2. Given that the annual interest rate is 6% compounded quarterly, it is not possible to<br>determine the interest earned by both the initial investment and the additional deposits<br>together without information about the amount of the additional deposits and when<br>during the year the additional deposits were made; NOT sufficient.<br>Taking (1) and (2) together, it is not possible to determine the interest earned by both the<br>initial investment and the additional deposits together without information about when during<br>the year the additional deposits were made. For example, if one deposit of $5,000 were made<br>after 6 months, then the interest for the year would be more than it would have been had the<br>$5,000 been deposited after 9 months.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e025',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A poplar tree was 3 feet high when it was planted on January 1, 1970. During what year did it pass the height of 20 feet?<br><br><strong>1.</strong> On January 1, 1973, it was 24 feet high.<br><strong>2.</strong> It doubled its height during each year.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Series and Sequences</strong><br><br>1. Given that the tree was 24 feet high at the beginning of 1973, it is not possible to<br>determine during which year the tree passed the height of 20 feet.<br>year<br>beginning<br>height (ft)<br>ending<br>height (ft) feet grown (ft)<br>1970<br>3<br>15<br>12<br>1971<br>15<br>21<br>6<br>1972<br>21<br>24<br>3<br>1973<br>24<br>30<br>6<br><br>year<br>beginning<br>height (ft)<br>ending<br>height (ft) feet grown (ft)<br>1970<br>3<br>6<br>3<br>1971<br>6<br>12<br>6<br>1972<br>12<br>24<br>12<br>1973<br>24<br>30<br>6<br>The first table shows that the tree could have passed the height of 20 feet during 1971<br>and the second table shows that the tree could have passed the height of 20 feet during<br>1972; NOT sufficient.<br>2. Given that the tree doubled its height during each year, the tree would have been 6 feet<br>high at the beginning of 1971, 12 feet high at the beginning of 1972, and 24 feet high at<br>the beginning of 1973. Therefore, the tree would have passed the height of 20 feet during<br>1972; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e026',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Which weighs more, a cubic unit of water or a cubic unit of liquid X?<br><br><strong>1.</strong> A cubic unit of water weighs more than cubic unit of liquid X.<br><strong>2.</strong> A cubic unit of liquid X weighs less than 3 cubic units of water.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Algebra Inequalities</strong><br><br>Determine which is greater: the weight of a cubic unit of water, represented by W, or a cubic<br>unit of Liquid X, represented by X.<br>1. Given that W > <br>, it is not possible to determine which of W and X is greater. For<br>example, if W = 4 and X = 9, then W > <br> and X is greater than W, but if W = 10 and X =<br>9, then W > <br> and W is greater than X; NOT sufficient.<br>2. Given that X < 3W, it is not possible to determine which of W and X is greater. For<br>example, if X = 9 and W = 4, then X < 3W and X is greater than W, but if X = 9 and W = 10,<br>then X < 3W and W is greater than X; NOT sufficient.<br>Taking (1) and (2) together gives no more information than (1) or (2) alone since the same<br>examples used to show that (1) is not sufficient also show that (2) is not sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e027',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'What were the individual prices of the vases that an antique dealer bought at store X?<br><br><strong>1.</strong> The antique dealer bought exactly 3 vases at store X.<br><strong>2.</strong> The antique dealer’s total bill at store X was $225.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine the individual prices of the vases.<br><br>1. Given that there are 3 vases, it is not possible to determine the individual prices because<br>no information about prices is known or can be determined; NOT sufficient.<br>2. Given that the total bill was $225, it is not possible to determine the individual prices<br>because neither the number of vases nor whether the vases are identically or otherwise<br>priced is known or can be determined; NOT sufficient.<br>Taking (1) and (2) together, it is still not possible to determine the individual prices of the<br>vases. For example, the prices of the 3 vases could be $200, $20, and $5 for a total bill of $225.<br>However, the prices of the 3 vases could also be $100, $100, and $25 for a total bill of $225.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e028',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Was the average (arithmetic mean) sale price of a new home in region R last month at least $100,000?<br><br><strong>1.</strong> Last month the median sale price of a new home in region R was at least $100,000.<br><strong>2.</strong> Last month the sale prices of new homes in region R ranged from $75,000 to $150,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>1. Given that the median price was at least $100,000, the following two examples show that<br>it cannot be determined whether the average price was at least $100,000.<br>Example 1: Average price is greater than $100,000<br> $75,000<br>$100,000<br>$150,000<br>$100,000  <br>$150,000<br>$100,000  <br>$150,000<br>The median of these 7 prices is $100,000 and the average of these prices is greater than<br>$100,000, since the sum of these 7 prices is 7($100,000) + (−$25,000 + $50,000 +<br>$50,000 + $50,000), which is greater than 7($100,000).<br>Example 2: Average price is less than $100,000<br> $75,000<br>$100,000<br>$150,000<br>$100,000  <br>$150,000<br>$100,000  <br>$150,000<br>The median of these 7 prices is $100,000 and the average of these prices is less than<br>$100,000, since the sum of these 7 prices is 7($100,000) + (−$25,000 − $25,000 −<br>$25,000 + $50,000), which is less than 7($100,000); NOT sufficient.<br>2. Given that the prices ranged from $75,000 to $150,000, the same examples above show<br>that it cannot be determined whether the average price was at least $100,000; NOT<br>sufficient.<br>Taking (1) and (2) together, it cannot be determined whether the average price was at least<br>$100,000 because the two examples above each satisfy both (1) and (2).<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e029',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'If the capacity of tank X is less than the capacity of tank Y and both tanks begin to fill at the same time, which tank will be filled first?<br><br><strong>1.</strong> Tank X is filled at a constant rate of 1.5 liters per minute.<br><strong>2.</strong> Tank Y is filled at a constant rate of 120 liters per hour.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine which tank, X or Y, will be filled first if X has less capacity than Y and they start<br>filling at the same time.<br>1. Given that X fills at a rate of 1.5 liters per minute, which is equivalent to 90 liters per hour,<br>it is not possible to determine which tank will be filled first because no information is<br>given about the rate at which Y fills or about how much larger in capacity Y is than X; NOT<br>sufficient.<br>2. Given that Y fills at a rate of 120 liters per hour, it is not possible to determine which tank<br>will be filled first because no information is given about the rate at which X fills or about<br>how much larger in capacity Y is than X; NOT sufficient.<br>Taking (1) and (2) together, if the capacity of X is 90 liters and the capacity of Y is 200 liters,<br>then X will be filled in 1 hour but Y will be only 60% filled in 1 hour. Therefore, X will be filled<br>first. However, if the capacity of X is 90 liters and the capacity of Y is 100 liters, then Y will be<br>filled in  hours while X will take a full hour to be filled. Thus, Y will be filled first.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e030',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'At a certain company, 30 percent of the employees live in City R. If 25 percent of the company’s employees live in apartments in City R, what is the number of the employees who live in apartments in City R?<br><br><strong>1.</strong> Of the employees who live in City R, 6 do not live in apartments.<br><strong>2.</strong> Of the employees, 84 do not live in City R.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Percents</strong><br><br>Determine how many employees of a certain company live in apartments in City R, where 30%<br>of the employees live in City R and 25% of the employees live in apartments in City R. Let T<br>represent the total number of employees at the company.<br>1. Given that 6 of the employees who live in City R do not live in apartments, it follows that 6<br>= (0.30 – 0.25)T. Thus 0.05T = 6, T = 120, and the number of employees who live in<br>apartments in City R can be determined; SUFFICIENT.<br>2. Given that 84 employees do not live in City R, it follows that (1 – 0.3)T = 84, from which it<br>follows that T = 120 and the number of employees who live in apartments in City R can<br>be determined; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e031',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'What was Mary’s average (arithmetic mean) score on 4 tests?<br><br><strong>1.</strong> Her average (arithmetic mean) score on 3 of the tests was 97.<br><strong>2.</strong> Her score on one of the tests was 96.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Since the average of the 4 scores is equal to the sum of the 4 scores divided by 4, it follows<br>that the average of the 4 scores can be determined if and only if the sum of the 4 scores can<br>be determined.<br><br>1. Given that the sum of 3 of the scores was 3(97), it is not possible to determine the sum of<br>the 4 scores, since different values for the remaining score are possible and those<br>different values correspond to different values for the sum of the 4 scores; NOT<br>sufficient.<br>2. Given that one of the scores was 96, it is not possible to determine the sum of the 4<br>scores, since different values for the sum of the remaining 3 scores are possible and<br>those different values correspond to different values for the sum of the 4 scores; NOT<br>sufficient.<br>Taking (1) and (2) together, it is still not possible to determine the sum of the 4 scores. For<br>example, the scores could be 96, 97, 98, 10 (the first 3 listed scores have an average of 97 and<br>one of the scores is 96), which have an average that is less than 96, and the scores could be<br>96, 97, 98, 99 (the first 3 listed scores have an average of 97 and one of the scores is 96),<br>which have an average that is greater than 96.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e032',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Is there a causal relationship between smoking and lung cancer?<br><br><strong>1.</strong> Research consistently shows a strong correlation between smoking and the development of lung cancer.<br><strong>2.</strong> Some medical researchers support a proposed mechanism by which smoking could cause lung cancer.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Research-based evidence has consistently shown a high positive correlation between<br>smoking and lung cancer. A strong positive correlation between two factors P and Q<br>indicates that there is a similar pattern of variation in data for P and data for Q (the<br>degree of similarity can vary). For example, long-term data might show that as smoking<br>increases in a population, the data regarding the incidence of lung cancer increases in<br>tandem. Over several years, if the data regarding smoking in a population decreases, the<br>data for lung cancer might also decrease. In both cases, a positive correlation occurs. But<br>such a statistical pattern, by itself, can, at best, suggest some association or dependency,<br>direct or indirect, between the two factors smoking and lung cancer. But correlation<br>evidence, by itself, provides no proof of a causal relationship; NOT sufficient.<br>2. The information provided is insufficiently specific to sustain a claim that smoking is<br>causally related to lung cancer. What (2) indicates is a hypothesis proposed by some<br>researchers, but no information is provided to indicate confirmation of that hypothesis;<br>NOT sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e033',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A research project has a successful outcome if its research is reported in a blind peer- reviewed academic publication. Can interdisciplinary collaborations on research projects at least sometimes produce a successful outcome?<br><br><strong>1.</strong> Some interdisciplinary research groups experience conflict and rivalry.<br><strong>2.</strong> A peer-reviewed and well-regarded interdisciplinary review of published papers on urban greening trends found that there was little if any evidence that planting more trees in an urban area significantly improved air quality there.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Inference</strong><br><br>1. The information regarding the sometimes dysfunctional social dynamics of research<br>groups is not sufficient to show that research groups with such experiences always fail to<br><br>produce successful research outcomes. So the information given here is not sufficient<br>alone to indicate a yes or a no answer to the question posed; NOT sufficient.<br>2. The information gives us an example of one interdisciplinary collaboration on research<br>that reported in a blind peer-reviewed publication its review of research studies on<br>urban greening. The review found that there was insufficient evidence to show that<br>planting trees in urban areas had a significant impact on air quality in such areas. Even<br>though the result of its review was negative, its review of scientific publications on the<br>issue was approved in a blind peer review and published. Therefore (2), in combination<br>with the stimulus information, is sufficient to provide at least one example of a successful<br>outcome of an interdisciplinary research project. This, in turn, is sufficient to show that<br>interdisciplinary research groups can produce a successful outcome.; SUFFICIENT<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e034',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'It has been proposed that teenagers aged 10 to 15 years be restricted to less than 2 hours per day engaging with social media. Would a significant number of teens aged 10 to 15 years get an overall developmental or health benefit from such a restriction?<br><br><strong>1.</strong> A peer-reviewed study indicates a 23% increase in the incidence of chronic anxiety or depression among teenagers aged 10 to 15 years who average 2 or more hours per day engaging with social media.<br><strong>2.</strong> Certain kinds of engagement with social media averaging 2 or more hours per day by teenagers aged 10 to 15 years lead, in about 28% of cases, to meaningful friendships and social and emotional learning, both of which are valuable for development at those ages.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Inference</strong><br><br>1. This statement cites a study that found an association between social-media use by<br>teenagers 10 to 15 years and an increase in the incidence of chronic anxiety or<br>depression among 23% of the minors observed in the study. A key word here is<br>association: It should be noted that this does not prove a cause-effect relationship, even if<br>the study could motivate further investigation to see whether a causal mechanism could<br>be identified. Even if a causal mechanism were identified, it could turn out that the use of<br>social media was at least in part an effect of chronic anxiety or depression: Some<br>teenagers might resort to social media use as a kind of escape mechanism. We should<br>conclude that the information provided (even if the validity of the study is assumed) does<br>not provide sufficient information to show definitively that the proposed restriction<br>would result in developmental or health benefits for minors aged 10 to 15 years. The<br>conclusion is that (1) is not sufficient alone; NOT sufficient.<br>2. This statement indicates that use of social media by teens aged 10 to 15 years results in<br>significant developmental benefits for 28% of teens in that age group. In other words, it<br>indicates that social-media use by these teens causally contributes to a developmentally<br>valuable effect. This implies that restriction of their social media use risks depriving a<br>significant number of teens of the benefits resulting from their social-media use. So we<br>can conclude that (2) is sufficient alone to provide a negative answer to the question<br>posed; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e035',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'A milk vendor mixes water with milk and sells the mixture at the same price per liter as if it were undiluted milk. The selling price per liter of the mixture is the vendor’s cost per liter of the milk plus a markup of x%. The water costs the vendor nothing. If the vendor gets a 50% profit on the sale of the mixture, what is the value of x?<br><br><strong>1.</strong> If the vendor mixes half the intended quantity of water and sells every liter of the mixture at the cost price per liter of the undiluted milk, the vendor will get a 10% profit.<br><strong>2.</strong> The concentration of milk in the mixture after adding water is 5/6.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Evaluate</strong><br><br>The task is to ascertain whether enough information has been provided to determine the<br>value of x.<br>1. In this hypothetical scenario, we are asked to imagine that the amount of zero-cost water<br>added to the milk is only half as much as was actually used, based on the information<br>given in the stimulus. The profit in this hypothetical scenario is 10%, resulting from<br>selling the mixture at the vendor’s cost price per liter of milk (i.e., without any profit<br>markup). Therefore, the 10% profit per liter in this hypothetical scenario consists, in<br>effect, of selling zero-cost water at the cost price of milk. We can infer from this that the<br>ratio of water to milk in the mixture was 1:10. When 20% zero-cost water is added, it<br>can be inferred from (1) that the ratio of water to milk in the mixture is 2:10. This would<br>result in a 20% profit if every liter of the mixture is sold at the cost price per liter of milk.<br>But suppose that for retail sale, there is a markup of x% over cost on every liter of the<br>mixture. We are told in the preliminary information that a total profit of 50% accrues.<br>The 30% difference between the 20% profit and the 50% profit results from the markup<br>of x%. It is 30% of the cost price of milk. Note that the question concerns the value of x,<br>not the % profit resulting from the markup of x%. The information in (1) and the<br>preliminary information is sufficient to determine that x = 25. In other words, the markup<br>on the vendor’s cost for the milk is 25%. Some simple algebra will show that the x%<br>markup contributes 30% to the 50% profit; SUFFICIENT.<br>2. This information indicates that the water in each liter of the mixture is 1/5 of the amount<br>of milk. So, pricing the zero-cost water as if it were milk accounts for 20% out of the 50%<br>profit. The markup of x% on the whole mixture accounts for the remaining 30%.<br>Therefore, the information in (2) is sufficient by itself to determine the value of x;<br>SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_e036',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Does it benefit a company overall to invest in employee training?<br><br><strong>1.</strong> Companies that invest in comprehensive employee training programs often observe improved job performance among their workforce.<br><strong>2.</strong> Well-trained employees are likely to excel in their roles and take the company forward.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Even if companies that invest in comprehensive employee training programs often<br>observe improved job performance among their workforce, many such companies might<br>not observe any improved job performance. And even for those that do, the<br>improvements might be too minimal to make it beneficial overall for the company to pay<br>the costs for the training programs. Furthermore, even if investing specifically in a<br>comprehensive employee training program did benefit a company overall, investing in<br>most other types of employee training might not be. Thus, whether it benefits an<br>unspecified company overall to invest in an unspecified type of employee training cannot<br>be determined from (1) alone; NOT sufficient.<br>2. A company’s investment in employee training may fail to produce any well-trained<br>employees. And even if well-trained employees are likely to excel in their roles and take<br>the company forward, many well-trained employees may not do so. Furthermore, the<br><br>hazy benefits of some employees “excelling” and taking the company “forward” might not<br>be adequate to justify the costs of employee training. Thus, whether it benefits a company<br>overall to invest in employee training cannot be determined from (2) alone; NOT<br>sufficient.<br>Even if (1) and (2) are both true, we still can’t determine whether the benefits of improved job<br>performance and of more employees excelling and moving a particular company forward<br>would make the training benefit the company overall, considering the costs of the training.<br>Nor can we even determine whether a specific employee training program would yield any<br>such benefits at all.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e037',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Can regular exercise reduce the risk of chronic diseases?<br><br><strong>1.</strong> Regular exercise is often associated with better physical health.<br><strong>2.</strong> Engaging in regular physical activity contributes to overall well-being.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. For all we know from (1), regular exercise may often be associated with better physical<br>health simply because people in better physical health are often more inclined to<br>exercise. And even if regular exercise promotes better physical health in some respects, it<br>might not reduce the risk of chronic diseases specifically. Thus, whether regular exercise<br>can reduce the risk of chronic diseases cannot be determined from (1) alone; NOT<br>sufficient.<br>2. Even if engaging in regular physical activity contributes to overall well-being, it may not<br>reduce the risk of chronic diseases specifically. Thus, whether regular exercise can reduce<br>the risk of chronic diseases cannot be determined from (2) alone; NOT sufficient.<br>Taking (1) and (2) together, even if regular exercise is both associated with better physical<br>health and contributes to overall well-being, it may not reduce the risk of chronic diseases<br>specifically.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_e038',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'easy',
    prompt: 'Does effective advertising require a higher budget expense than ineffective advertising?<br><br><strong>1.</strong> Companies that allocate higher budgets to advertising tend to experience increased sales revenue.<br><strong>2.</strong> Effective advertising can drive higher consumer demand. Yes No Don’t Know Program X 400 200 400 Program Y 300 350 350',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Even if companies that allocate higher budgets to advertising tend to also have increased<br>sales revenue, that might mean only that their increased sales revenue has given them<br>more money to spend on their ineffective advertising. Furthermore, even those<br>companies allocating high budgets to effective advertising might be doing so inefficiently;<br>they might be able to cut their advertising expenses drastically without reducing their<br>advertising effectiveness. Thus, whether effective advertising requires a higher budget<br>expense than ineffective advertising cannot be determined from (1) alone; NOT sufficient.<br>2. Even if effective advertising can drive higher consumer demand, it might not need to cost<br>much. Thus, whether effective advertising requires a higher budget expense than<br>ineffective advertising cannot be determined from (2) alone; NOT sufficient.<br>Taking (1) and (2) together, even if companies that allocate higher budgets to advertising also<br>tend to have increased sales revenue, and even if effective advertising can drive higher<br><br>consumer demand, many companies with higher budgets and increased sales revenue may<br>nonetheless be advertising inefficiently; they might be able to cut their advertising expenses<br>drastically without reducing advertising effectiveness. If so, effective advertising may not<br>require a higher budget expense than ineffective advertising.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  }
);
