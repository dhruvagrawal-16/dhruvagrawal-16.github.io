GMAT_QUESTIONS.push(
  {
    id: 'ds_m001',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'The table shows the number of people who responded “yes” or “no” or “don’t know” when asked whether their city council should implement environmental programs X and Y. If a total of 1,000 people responded to the question about both programs, what was the number of people who did not respond “yes” to implementing either of the two programs?<br><br><strong>1.</strong> The number of people who responded “yes” to implementing only Program X was 300.<br><strong>2.</strong> The number of people who responded “no” to implementing Program X and “no” to implementing Program Y was 100.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Interpretation of Tables; Sets (Venn Diagrams)</strong><br><br>1. Given that 300 people responded “yes” to implementing only Program X, and because<br>400 people altogether responded “yes” to implementing Program X, it follows that 400 –<br>300 = 100 people responded “yes” to implementing both Program X and Program Y.<br>Therefore, because 300 people altogether responded “yes” to implementing Program Y,<br>300 – 100 = 200 people responded “yes” to implementing only Program Y. These results<br>are shown in the Venn diagram below.<br>Since the Venn diagram above represents a total of 1,000 people, it follows that the<br>number of people who did not respond “yes” to implementing either Program X or<br>Program Y is 1,000 – (300 + 100 + 200) = 400; SUFFICIENT.<br>2. Given that 100 people responded “no” both to implementing Program X and to<br>implementing Program Y, the table below shows a possibility whereby the number of<br>people who did not respond “yes” to implementing either Program X or Program Y could<br>be 400. Note that for each of the column headings “Yes,” “No,” and “Don’t Know,” the<br>numbers under that column heading satisfy (X answered) + (Y answered) – (both<br>answered) + (neither answered) = 1,000. Indeed, for each of these three columns a Venn<br>diagram can be given that represents the numbers in that column.<br><br>Yes<br>No<br>Don’t Know<br>X<br>  400   200<br>  400<br>Y<br>  300   350<br>  350<br>Both<br>  100   100<br>    0<br>Neither   400   550<br>  250<br>Total<br>1,000 1,000<br>1,000<br>However, the next table shows a possibility whereby the number of people who did not<br>respond “yes” to implementing either Program X or Program Y could be 500.<br> <br>Yes<br>No<br>Don’t Know<br>X<br>  400   200<br>  400<br>Y<br>  300   350<br>  350<br>Both<br>  200   100<br>    0<br>Neither   500   550<br>  250<br>Total<br>1,000 1,000<br>1,000<br>Therefore, among other possibilities, the number of people who did not respond “yes” to<br>implementing either Program X or Program Y could be 400, and this number could also be<br>500; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m002',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'An estimate of an actual data value has an error of p percent if p = , where e is the estimated value and a is the actual value. Emma’s estimate for her total income last year had an error of less than 20 percent. Emma’s estimate of her income from tutoring last year also had an error of less than 20 percent. Was Emma’s actual income from tutoring last year at most 45 percent of her actual total income last year?<br><br><strong>1.</strong> Emma’s estimated income last year from tutoring was 30 percent of her estimated total income last year.<br><strong>2.</strong> Emma’s estimated total income last year was $40,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Estimation</strong><br><br>Given that Emma’s estimates for both her total income and her income from tutoring last year,<br>EI and ET, respectively, were within 20 percent of her actual total income and her actual<br>income from tutoring, AI and AT, respectively, it follows that 0.8EI < AI < 1.2EI and 0.8ET < AT <<br>1.2ET.<br><br>Determine whether Emma’s actual income from tutoring was at most 45 percent of her actual<br>total income or if <br> ≤ 0.45.<br>1. Given that ET = 0.3EI, it follows from 0.8ET < AT < 1.2ET that 0.24EI < AT < 0.36EI. Then,<br>since 0.8EI < AI < 1.2EI, it follows that <br> < <br> < <br>. Multiplying the inequalities<br>gives <br> < <br> < <br> or 0.2 < <br> < 0.45; SUFFICIENT.<br>2. Given that Emma’s estimated total income last year was $40,000, it is impossible to<br>determine whether her actual income from tutoring was at most 45 percent of her actual<br>total income because no information is given about her actual income from tutoring<br>other than it was within 20 percent of her estimated income from tutoring. And there is<br>no information from which her estimated income from tutoring can be determined; NOT<br>sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m003',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Was Store K’s profit last month at least 10 percent greater than its profit the previous month?<br><br><strong>1.</strong> Store K’s expenses last month were 5 percent greater than its expenses the previous month.<br><strong>2.</strong> Store K’s revenues last month were 10 percent greater than its revenues the previous month.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Let Plast, Elast, and Rlast be, respectively, the profit, expenses, and revenues for last month.<br>Also, let Pprevious, Eprevious, and Rprevious be, respectively, the profit, expenses, and revenues<br>for the previous month. Then we have Plast = Rlast − Elast and Pprevious = Rprevious −<br>Eprevious. Determine whether Plast ≥ 1.1Pprevious is true, or equivalently, determine whether<br>Rlast − Elast ≥ 1.1Rprevious – 1.1Eprevious is true.<br>1. Given that Elast = 1.05Eprevious, it follows that the inequality Rlast − Elast ≥ 1.1Rprevious –<br>1.1Eprevious is equivalent to Rlast – 1.1Rprevious ≥ −0.05Eprevious. It is clear that, for<br>suitable values of Rlast, Rprevious, and Eprevious, this last inequality could be true and this<br>last inequality could be false; NOT sufficient.<br>2. Given that Rlast = 1.1Rprevious, it follows that the inequality Rlast − Elast ≥ 1.1Rprevious –<br>1.1Eprevious is equivalent to Elast ≤ 1.1Eprevious. It is clear that, for suitable values of Elast<br>and Eprevious, this last inequality could be true and this last inequality could be false; NOT<br>sufficient.<br>Taking (1) and (2) together, the following shows that Plast ≥ 1.1Pprevious is true.<br>Plast = Rlast – Elast<br> <br>= 1.1Rprevious – 1.05Eprevious<br> <br>≥1.1Rprevious – 1.1Eprevious<br><br>Therefore, Plast ≥ 1.1(Rprevious – Eprevious), and hence Plast ≥ 1.1Pprevious is true. (The reason<br>for using ≥ above instead of > is to allow for the possibility that Eprevious = 0.)<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m004',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Gross profit is equal to selling price minus cost. A car dealer’s gross profit on the sale of a certain car was what percent of the cost of the car?<br><br><strong>1.</strong> The selling price of the car was of the cost of the car.<br><strong>2.</strong> The cost of the car was $14,500.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine the gross profit, P, on the sale of a car as a percent of the cost, C, of the car.<br>1. Given that the selling price of the car was <br>C, P = <br>C – C = <br>C. Thus, the profit was<br>10% of the cost of the car; SUFFICIENT.<br>2. Given that the cost of the car was $14,500, it is impossible to determine the profit<br>because the selling price is not known nor is there enough information to determine it;<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m005',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'When the wind speed is 9 miles per hour, the wind-chill factor w is given by w = −17.366 + 1.19t, where t is the temperature in degrees Fahrenheit. If at noon yesterday the wind speed was 9 miles per hour, was the wind-chill factor greater than 0?<br><br><strong>1.</strong> The temperature at noon yesterday was greater than 10 degrees Fahrenheit.<br><strong>2.</strong> The temperature at noon yesterday was less than 20 degrees Fahrenheit.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Determine whether −17.366 + 1.19t is greater than 0.<br>1. Given that t > 10, it follows that −17.366 + 1.19t > −17.366 + 1.19(10), or −17.366 + 1.19t<br>> −5.466. However, it is not possible to determine whether −17.366 + 1.19t is greater<br>than 0. For example, if t = 19, then −17.366 + 1.19t = 5.244 is greater than 0. However, if t<br>= 11, then −17.366 + 1.19t = −4.276, which is not greater than 0; NOT sufficient.<br>2. Given that t < 20, the same examples used in (1) show that it is not possible to determine<br>whether −17.366 + 1.19t is greater than 0; NOT sufficient.<br>Taking (1) and (2) together is of no more help than either (1) or (2) taken separately because<br>the same examples were used in both (1) and (2).<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m006',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'How many members of a certain legislature voted against the measure to raise their salaries?<br><br><strong>1.</strong> of the members of the legislature did not vote on the measure.<br><strong>2.</strong> If 5 additional members of the legislature had voted against the measure, then the fraction of members of the legislature voting against the measure would have been .',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Ratio and Proportion</strong><br><br>The task in this question is to determine whether, on the basis of statements 1 and 2, it is<br>possible to calculate the number of members of the legislature who voted against a certain<br>measure.<br>1. This statement, that <br> of the members of the legislature did not vote on the measure, is<br>compatible with any number of members of the legislature voting against the measure.<br>After all, any number among the <br> of the remaining members could have voted against<br>the measure. Furthermore, based on statement 1, we do not know the number of<br>members of the legislature (although we do know, based on this statement, that the<br>number of members of the legislature is divisible by 4); NOT sufficient.<br>2. This statement describes a scenario, in which 5 additional members of the legislature<br>vote against the measure and stipulates that <br> of the members of the legislature would<br>have voted against the measure in the scenario. Given this condition, we know that the<br>number of members of the legislature was divisible by 3 and that the legislature had at<br>least 15 members (to allow for the “5 additional members of the legislature” that could<br>have voted against the measure, for a total of <br> of the members voting against it).<br>However, beyond this we know essentially nothing from statement 2. In particular,<br>depending on the number of members of the legislature (which we have not been given),<br>any number of members could have voted against the measure. For example, exactly one<br>member could have voted against the measure, in which case the legislature would have<br>had (1 + 5) × 3 = 18 members. Exactly two members could have voted against the<br>measure, in which case the legislature would have had (2 + 5) × 3 = 21 members, and so<br>on for 3 members voting against, 4 members voting against, and so on; NOT sufficient.<br>Considering the statements 1 and 2 together, the reasoning is similar to the reasoning for<br>statement 2, but with the further condition that the total number of members of the<br>legislature is divisible by 12 (so as to allow that both exactly <br> of the members did not vote<br>on the measure while exactly <br> could have voted against the measure). For example, it could<br>have been the case that the legislature had 24 members. In this case, <br> of the members would<br>have been 8 members, and, consistent with statements 1 and 2, 3 of the members (8 − 5)<br>could have voted against the measure. Or the legislature could have had 36 members, in which<br>case, consistent with statements 1 and 2, <br>(36) − 5 = 12 − 5 = 7 members could have voted<br>against the measure.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m007',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'During a certain bicycle ride, was Sherry’s average speed faster than 24 kilometers per hour? (1 kilometer = 1,000 meters)<br><br><strong>1.</strong> Sherry’s average speed during the bicycle ride was faster than 7 meters per second.<br><strong>2.</strong> Sherry’s average speed during the bicycle ride was slower than 8 meters per second.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>This problem can be solved by converting 24 kilometers per hour into meters per second.<br>First, 24 kilometers is equivalent to 24,000 meters and 1 hour is equivalent to 3,600 seconds.<br>Then, traveling 24 kilometers in 1 hour is equivalent to traveling 24,000 meters in 3,600<br>seconds, or <br> meters per second.<br>1. This indicates that Sherry’s average speed was faster than 7 meters per second, which is<br>faster than <br> meters per second and, therefore, faster than 24 kilometers per hour;<br>SUFFICIENT.<br>2. This indicates that Sherry’s average speed was slower than 8 meters per second. Her<br>average speed could have been 7 meters per second (since 7 < 8), in which case her<br>average speed was faster than <br> meters per second and, therefore, faster than 24<br>kilometers per hour. Or her average speed could have been 5 meters per second (since 5<br>< 8), in which case her average speed was not faster than <br> meters per second and,<br>therefore, not faster than 24 kilometers per hour; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m008',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Working together, Rafael and Salvador can tabulate a certain set of data in 2 hours. In how many hours can Rafael tabulate the data working alone?<br><br><strong>1.</strong> Working alone, Rafael can tabulate the data in 3 hours less time than Salvador, working alone, can tabulate the data.<br><strong>2.</strong> Working alone, Rafael can tabulate the data in the time that Salvador, working alone, can tabulate the data.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>We are given that Rafael and Salvador, working together, can tabulate the set of data in two<br>hours. That is, if Rafael tabulates data at the rate of R units of data per hour and Salvador<br>tabulates the data at the rate of S units per hour, then, if the set of data is made up of D units,<br>then 2R + 2S = D. Can we determine how much time, in hours, it takes Rafael to tabulate the<br>data if working alone?<br>1. First of all, note that the choice of units used to measure the amounts of data doesn’t<br>matter. In particular, we can define one unit of data to be D. Thus, 2R + 2S = 1. With this in<br>mind, consider the condition that Rafael, when working alone, can tabulate the data in 3<br>hours less time than Salvador can when working alone. Given that Rafael tabulates R<br>units of data per unit time, he takes <br> units of time to tabulate one unit of data. Similarly,<br>Salvador takes <br> units of time to tabulate one unit of data. This unit, as defined, is simply<br>the entire set of data. Our given condition thus becomes <br>, and we have the set<br>of simultaneous equations made up of this equation and the equation 2R + 2S = 1.<br>One way to determine the number of hours it would take Rafael to tabulate the data is to<br>solve one of these equations for S and then substitute this solution into the other<br><br>equation. Considering the first of these equations, we multiply both sides by RS and then<br>manipulate the result as follows.<br>S = R −3RS<br>S + 3RS = R<br>S(1 + 3R) = R<br>Substituting into the equation 2R + 2S = 1,<br>Multiplying both sides by 1 + 3R to eliminate the fraction,<br>2R(1 + 3R) + 2R = 1 + 3R<br>2R + 6R2 = 1 + R<br>6R2 + R − 1 = 0<br>(3R − 1)(2R + 1) = 0<br>This equation has two solutions, <br> and <br>. However, because the rate R cannot be<br>negative, we find that Rafael tabulates <br> of a unit of data every hour. Since one unit is the<br>entire set, it takes Rafael 3 hours to tabulate the entire set; SUFFICIENT.<br>2. We are given that Rafael, working alone, can tabulate the data in <br> the amount of time it<br>takes Salvador, working alone, to tabulate the data. As in the discussion of statement 1, we<br>have that Rafael tabulates R units of data every hour, and takes <br> hours to tabulate one<br>unit of data. Similarly, it takes Salvador <br> hours to tabulate one unit of data. One unit of<br>data has been defined to be the size of the entire set to be tabulated, so statement 2<br>becomes the expression<br>We thus have 2S = R. Substituting this value for 2S in the equation 2R + 2S = 1, we have R<br>+ 2R = 1, and 3R = 1. Solving for R we get ; SUFFICIENT.<br>Note that, for both statements 1 and 2, it would have been possible to stop calculating once<br>we had determined whether it was possible to find a unique value for R. The ability to make<br>such judgments accurately is part of what the test has been designed to measure.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m009',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Yesterday between 9:00 a.m. and 6:00 p.m. at Airport X, all flights to Atlanta departed at equally spaced times and all flights to New York City departed at equally spaced times. A flight to Atlanta and a flight to New York City both departed from Airport X at 1:00 p.m. yesterday. Between 1:00 p.m. and 3:00 p.m. yesterday, did another pair of flights to these 2 cities depart from Airport X at the same time?<br><br><strong>1.</strong> Yesterday at Airport X, a flight to Atlanta and a flight to New York City both departed at 10:00 a.m.<br><strong>2.</strong> Yesterday at Airport X, flights to New York City departed every 15 minutes between 9:00 a.m. and 6:00 p.m.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>It is useful to note that although the departures discussed all lie between 9:00 a.m. and 6:00<br>p.m., there is no information concerning when the first departures took place during this time<br>other than what is necessary for the information to be consistent. For example, since<br>departures to both Atlanta and New York City took place at 1:00 p.m., the first departure to<br>either of these cities could not have occurred after 1:00 p.m.<br>1. Given that departures to both Atlanta and New York City took place at 10:00 a.m., it is not<br>possible to determine whether simultaneous departures to these cities occurred between<br>1:00 p.m. and 3:00 p.m. For example, it is possible that departures to both Atlanta and<br>New York City took place every 15 minutes beginning at 9:15 a.m., and thus it is possible<br>that simultaneous departures to both these cities occurred between 1:00 p.m. and 3:00<br>p.m. However, it is also possible that departures to Atlanta took place every 3 hours<br>beginning at 10:00 a.m. and departures to New York City took place every 15 minutes<br>beginning at 9:15 a.m., and thus it is possible that no simultaneous departures to these<br>cities occurred between 1:00 p.m. and 3:00 p.m.; NOT sufficient.<br>2. Given that departures to New York City took place every 15 minutes, the same examples<br>used in (1) can be used to show that it is not possible to determine whether simultaneous<br>departures to these cities occurred between 1:00 p.m. and 3:00 p.m.; NOT sufficient.<br>Taking (1) and (2) together, it is still not possible to determine whether simultaneous<br>departures to these cities occurred between 1:00 p.m. and 3:00 p.m. because both (1) and (2)<br>are true for the examples above.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m010',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Of the total number of copies of Magazine X sold last week, 40 percent were sold at full price. What was the total number of copies of the magazine sold last week?<br><br><strong>1.</strong> Last week, full price for a copy of Magazine X was $1.50 and the total revenue from full- price sales was $112,500.<br><strong>2.</strong> The total number of copies of Magazine X sold last week at full price was 75,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>For the copies of Magazine X sold last week, let n be the total number of copies sold and let $p<br>be the full price of each copy. Then for Magazine X last week, a total of 0.4n copies were each<br>sold at price $p. What is the value of n?<br>1. Given that $p = 1.50 and (0.4n)($p) = $112,500, it follows that (0.4n)(1.5) = 112,500, or<br>0.6n = 112,500, or <br>; SUFFICIENT.<br>2. Given that 0.4n = 75,000, it follows that <br>; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m011',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What is the average (arithmetic mean) annual salary of the 6 employees of a toy company?<br><br><strong>1.</strong> If the 6 annual salaries were ordered from least to greatest, each annual salary would be $6,300 greater than the preceding annual salary.<br><strong>2.</strong> The range of the 6 annual salaries is $31,500.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Can we determine the arithmetic mean of the annual salaries of the 6 employees?<br>1. Given only that the 6 annual salaries can be put into a sequence from least to greatest,<br>with a difference of $6,300 between adjacent members of the sequence, we can infer<br>certain things about the mean of the salaries. For example, because none of the salaries<br>would be negative, we know from statement 1 that the mean of the salaries is greater<br>than or equal to <br>. (It is not<br>necessary to perform this calculation.) However, depending on what the least of the<br>salaries is—that is, the value at which the sequence of salaries begins—the average of the<br>salaries could, consistent with condition 1, take on any value greater than this quotient;<br>NOT sufficient.<br>2. Given the statement that the range of the salaries is $31,500, reasoning similar to the<br>reasoning for statement 1 applies. A difference between least salary and greatest salary<br>of $31,500 is consistent with any value for the least salary, so long as the greatest salary<br>is $31,500 greater than the least salary. Furthermore, even if we knew what the least and<br>the greatest salaries are, it would be impossible to determine the mean merely from the<br>range; NOT sufficient.<br>As reflected in the numerator of the quotient in the discussion of statement 1, we can see that<br>statement 1 implies statement 2. In the sequence of 6 salaries with a difference of $6,300<br>between adjacent members of the sequence, the difference between the least salary and the<br>greatest salary is 5 × $6,300 = $31,500. Therefore, because statement 1 is insufficient for<br>determining the mean of the salaries, the combination of statement 1 and statement 2 is also<br>insufficient for determining the mean of the salaries.<br>The correct answer is E; both statements together are not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m012',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'In a certain order, the pretax price of each regular pencil was $0.03, the pretax price of each deluxe pencil was $0.05, and there were 50% more deluxe pencils than regular pencils. All taxes on the order are a fixed percent of the pretax prices. The sum of the total pretax price of the order and the tax on the order was $44.10. What was the amount, in dollars, of the tax on the order?<br><br><strong>1.</strong> The tax on the order was 5% of the total pretax price of the order.<br><strong>2.</strong> The order contained exactly 400 regular pencils.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Percents</strong><br><br>Let n be the number of regular pencils in the order and let r% be the tax rate on the order as<br>a percent of the pretax price. Then the order contains 1.5n deluxe pencils, the total pretax<br>price of the order is ($0.03)n + ($0.05)(1.5n) = $0.105n, and the sum of the total pretax price<br>of the order and the tax on the order is <br>($0.105n). Given that <br> ($0.105n)<br>= $44.10, what is the value of <br>($0.105n)?<br><br>1. Given that r = 5, then <br>($0.105n) = $44.10 becomes (1.05)(0.105n) = 44.10,<br>which is a first-degree equation that can be solved for n. Since the value of r is known and<br>the value of n can be determined, it follows that the value of <br>($0.105n) can be<br>determined; SUFFICIENT.<br>2. Given that n = 400, then <br>($0.105n) = $44.10 becomes <br>(0.105)(400)<br>= 44.10, which is a first-degree equation that can be solved for r. Since the value of r can<br>be determined and the value of n is known, it follows that the value of <br>($0.105n)<br>can be determined; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m013',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'A total of 20 amounts are entered on a spreadsheet that has 5 rows and 4 columns; each of the 20 positions in the spreadsheet contains one amount. The average (arithmetic mean) of the amounts in row i is Ri (1 ≤ i ≤ 5). The average of the amounts in column j is Cj (1 ≤ j ≤ 4). What is the average of all 20 amounts on the spreadsheet?<br><br><strong>1.</strong> R1 + R2 + R3 + R4 + R5 = 550<br><strong>2.</strong> C1 + C2 + C3 + C4 = 440',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>It is given that Ri represents the average of the amounts in row i. Since there are four amounts<br>in each row, 4Ri represents the total of the amounts in row i. Likewise, it is given that Cj<br>represents the average of the amounts in column j. Since there are five amounts in each<br>column, 5Cj represents the total of the amounts in column j.<br>1. It is given that R1 + R2 + R3 + R4 + R5 = 550, and so 4(R1 + R2 + R3 + R4 + R5) = 4R1 +<br>4R2 + 4R3 + 4R4 + 4R5 = 4(550) = 2,200. Therefore, 2,200 is the sum of all 20 amounts (4<br>amounts in each of 5 rows), and the average of all 20 amounts is <br> = 110;<br>SUFFICIENT.<br>2. It is given that C1 + C2 + C3 + C4 = 440, and so 5(C1 + C2 + C3 + C4) = 5C1 + 5C2 + 5C3 +<br>5C4 = 5(440) = 2,200. Therefore, 2,200 is the sum of all 20 amounts (5 amounts in each<br>of 4 columns), and the average of all 20 amounts is <br> = 110; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m014',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Was the range of the amounts of money that Company Y budgeted for its projects last year equal to the range of the amounts of money that it budgeted for its projects this year?<br><br><strong>1.</strong> Both last year and this year, Company Y budgeted money for 12 projects and the least amount of money that it budgeted for a project was $400.<br><strong>2.</strong> Both last year and this year, the average (arithmetic mean) amount of money that Company Y budgeted per project was $2,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Let G1 and L1 represent the greatest and least amounts, respectively, of money that Company<br>Y budgeted for its projects last year, and let G2 and L2 represent the greatest and least<br>amounts, respectively, of money that Company Y budgeted for its projects this year. Determine<br>if the range of the amounts of money Company Y budgeted for its projects last year is equal to<br>the range of amounts budgeted for its projects this year; that is, determine if G1 − L1 = G2 −<br>L2.<br>1. This indicates that L1 = L2 = $400, but does not give any information about G1 or G2; NOT<br>sufficient.<br>2. This indicates that the average amount Company Y budgeted for its projects both last<br>year and this year was $2,000 per project but does not give any information about the<br>least and greatest amounts that it budgeted for its projects either year; NOT sufficient.<br>Taking (1) and (2) together, it is known that L1 = L2 = $400 and that the average amount<br>Company Y budgeted for its projects both last year and this year was $2,000 per project, but<br>there is no information about G1 or G2. For example, if, for each year, Company Y budgeted<br>$400 for each of 2 projects and $2,320 for each of the 10 others, then (1) and (2) are true<br>and the range for each year was $2,320 − $400 = $1,920. However, if, last year, Company Y<br>budgeted $400 for each of 2 projects and $2,320 for each of the 10 others, and, this year,<br>budgeted $400 for each of 11 projects and $19,600 for 1 project, then (1) and (2) are true,<br>but the range for last year was $1,920 and the range for this year was $19,600 − $400 =<br>$19,200.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m015',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What is the probability that Lee will make exactly 5 errors on a certain typing test?<br><br><strong>1.</strong> The probability that Lee will make 5 or more errors on the test is 0.27.<br><strong>2.</strong> The probability that Lee will make 5 or fewer errors on the test is 0.85.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Arithmetic Probability</strong><br><br>1. Given that 0.27 is the probability that Lee will make 5 or more errors on the test, it is<br>clearly not possible to determine the probability that Lee will make exactly 5 errors on<br>the test; NOT sufficient.<br>2. Given that 0.85 is the probability that Lee will make 5 or fewer errors on the test, it is<br>clearly not possible to determine the probability that Lee will make exactly 5 errors on<br>the test; NOT sufficient.<br>Taking (1) and (2) together, let E be the event that Lee will make 5 or more errors on the test<br>and let F be the event that Lee will make 5 or fewer errors on the test. Then P(E or F) = 1,<br>since it will always be the case that, when taking the test, Lee will make at least 5 errors or at<br>most 5 errors. Also, (1) and (2) can be expressed as P(E) = 0.27 and P(F) = 0.85, and the<br>question asks for the value of P(E and F). Using the identity P(E or F) = P(E) + P(F) – P(E and<br>F), it follows that 1 = 0.27 + 0.85 – P(E and F), or P(E and F) = 0.27 + 0.85 – 1 = 0.12.<br>Therefore, the probability that Lee will make exactly 5 errors on the test is 0.12.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m016',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'A small factory that produces only upholstered chairs and sofas uses 1 cushion for each chair and 4 cushions for each sofa. If the factory used a total of 300 cushions on the furniture it produced last week, how many sofas did it produce last week?<br><br><strong>1.</strong> Last week the factory produced more chairs than sofas.<br><strong>2.</strong> Last week the factory produced a total of 150 chairs and sofas.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>Let c and s be the numbers, respectively, of chairs and sofas produced last week. From the<br>information given about the cushions used last week, we have c + 4s = 300. Can we determine<br>the value of s?<br>1. Given that c > s, it is not possible to determine the value of s. For example, it is possible<br>that c = 200 and s = 25 (for these values, c > s and c + 4s = 200 + 4(25) = 300) and it is<br>possible that c = 100 and s = 50 (for these values, c > s and c + 4s = 100 + 4(50) = 300);<br>NOT sufficient.<br>2. Given that c + s = 150, by subtracting this equation from c + 4s = 300 we get (c + 4s) – (c +<br>s) = 300 – 150, or 3s = 150. Therefore, s = 50; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m017',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'In year X, were there more female salespersons in the securities sector than in the insurance sector?<br><br><strong>1.</strong> There were more male salespersons in the insurance sector than in the securities sector.<br><strong>2.</strong> The total number of salespersons was greater in the securities sector than in the insurance sector.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Percents</strong><br><br>From the graphs, 37.1% of the salespersons in securities are females and (100 – 37.1)% =<br>62.9% are males; 26.2% of the salespersons in insurance are females and (100 – 26.2)% =<br>73.8% are males. Let S and I represent the number of salespersons in securities and<br>insurance, respectively. Let FS, MS, FI, and MI, represent the numbers of female and male<br>salespersons, respectively, in securities and insurance, respectively. Determine if the inequality<br>FS > FI is true.<br>1. Given that MI > MS, it is not possible to determine if FS > FI is true. For example, if S =<br>10,000 and I = 9,000, then MS = 0.629(10,000) = 6,290, MI = 0.738(9,000) = 6,642, FS =<br>0.371(10,000) = 3,710, and FI = 0.262(9,000) = 2,358. These numbers are summarized in<br>the table below, from which it is easy to see that MI > MS and FS > FI.<br>Sector<br>Number of employees Males Females<br>Securities<br>10,000<br>6,290<br>3,710<br>Insurance<br> 9,000<br>6,642<br>2,358<br><br>However, if S = 10,000 and I = 20,000, then MS = 0.629(10,000) = 6,290, MI =<br>0.738(20,000) = 14,760, FS = 0.371(10,000) = 3,710 and FI = 0.262(20,000) = 5,240.<br>These numbers are summarized in the table below, from which it is easy to see that MI ><br>MS and FS < FI; NOT sufficient.<br>Sector<br>Number of employees Males Females<br>Securities<br>10,000<br> 6,290<br>3,710<br>Insurance<br>20,000<br>14,760<br>5,240<br>1. Given that S > I, it follows that 0.371S > 0.371I and 0.371I > 0.262I, so 0.371S > 0.262I<br>and FS > FI; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m018',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'If a club made a gross profit of $0.25 for each candy bar it sold, how many candy bars did the club sell?<br><br><strong>1.</strong> The total revenue from the sale of the candy bars was $300.<br><strong>2.</strong> If the club had sold 80 more candy bars, its gross profits would have increased by 20 percent.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Algebra First-Degree Equations</strong><br><br>Let n be the number of candy bars sold. The gross profit from selling the n candy bars was<br>0.25n. What is the value of n, or equivalently, what is the value of 0.25n?<br>1. Given that the total revenue was $300, it is not possible to determine how many candy<br>bars the club sold because nothing is known about the total cost, which is the value of<br>300 – 0.25n; NOT sufficient.<br>2. Given that the gross profit from selling (n + 80) candy bars is equal to (1.2)(0.25n), it<br>follows that (0.25)(n + 80) = (1.2)(0.25n). Therefore, 0.25n + 20 = (1.2)(0.25n), or 20 =<br>(0.2)(0.25n), and hence 0.25n = 100; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m019',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'In one year 2,100 malpractice claims were filed with insurance company X, and of these resulted in a financial settlement. Of those resulting in a financial settlement of less than $400,000, what was the average payment per claim?<br><br><strong>1.</strong> Company X paid a total of 24.5 million dollars to the claimants.<br><strong>2.</strong> Only 5 claims resulted in payments of $400,000 or more.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>A total of  (2,100) = 525 claims were paid. What was the average payment per claim of those<br>claims having a payment less than $400,000?<br>1. Given that the total payment for the 525 paid claims was $24.5 million, it is not possible to<br>determine the average payment per claim. This is because almost nothing is known about<br>the total payment for those claims less than $400,000 or the number of those claims less<br>than $400,000 (we only know they cannot exceed $24.5 million and 525 paid claims), and<br><br>thus, more than one value is possible for the average payment per claim for those claims<br>less than $400,000; NOT sufficient.<br>2. Given that a total of 5 paid claims had payments of $400,000 or greater, it is not possible<br>to determine the average payment per claim. This is because nothing is known about the<br>total payment for those claims less than $400,000, and thus, more than one value is<br>possible for this total payment divided by 520 (i.e., the average payment per claim for<br>those claims less than $400,000); NOT sufficient.<br>Taking (1) and (2) together, it is still not possible to determine the average payment per claim.<br>For example, if each of the 5 paid claims of over $400,000 was equal to $500,000, then the<br>average payment per claim for those claims less than $400,000 would be<br> = <br>. However, if each of the 5 paid claims of over<br>$400,000 was equal to $4 million, then the average payment per claim for those claims less<br>than $400,000 would be <br> = <br>, which is different from<br>the first example.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m020',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'If there are 13 boys in club X, what is the average age of these boys?<br><br><strong>1.</strong> The oldest boy is 13 years old and the youngest boy is 9 years old.<br><strong>2.</strong> Eleven of the boys are either 10 years old or 11 years old.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>What is the average age of the 13 boys, or equivalently, what is the sum of the ages of the 13<br>boys?<br>1. Given that the oldest boy is 13 and the youngest boy is 9, it is not possible to determine<br>the sum of their ages. For example, if their ages were such that one is 9, eleven are 10,<br>and one is 13, then the sum of their ages would be less than if their ages were such that<br>one is 9, eleven are 11, and one is 13; NOT sufficient.<br>2. Given that eleven of the boys are either 10 or 11, it is not possible to determine the sum<br>of their ages, because the same examples used above are such that eleven of the boys are<br>either 10 or 11; NOT sufficient.<br>Taking (1) and (2) together, it is not possible to determine the sum of their ages because the<br>examples above satisfy both (1) and (2).<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m021',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'If all the employees of a company fall into one and only one of 3 groups, X, Y, or Z, with 250, 100, and 20 members in each group, respectively, what is the average (arithmetic mean) weekly salary of all the employees of this company, if all employees are paid every week of the year?<br><br><strong>1.</strong> The average (arithmetic mean) annual salary of the employees in Group X is $10,000, in Group Y $15,000 and in Group Z $20,000.<br><strong>2.</strong> The total annual payroll is $4,400,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>The average of the weekly salaries is the average of the annual salaries divided by 52, and<br>thus the average of the weekly salaries can be determined if and only if the average of the<br><br>annual salaries can be determined. What is the average of the annual salaries, or equivalently,<br>what is the sum of the annual salaries?<br>1. Given that the average of the annual salaries of employees in Groups X, Y, and Z is<br>$10,000, $15,000, and $20,000, respectively, it follows that the sum of the annual salaries<br>of employees in Groups X, Y, and Z is 250($10,000), 100($15,000), and 20($20,000),<br>respectively. Therefore, the sum of the annual salaries is the sum of these three amounts;<br>SUFFICIENT.<br>2. We are given that the sum of the annual salaries is $4,400,000; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m022',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'According to the graph above, the sale of fruits and vegetables in Store S last week accounted for what percent of the total sales income for the week?<br><br><strong>1.</strong> Last week the total income from the sale of fruits and vegetables in Store S was $16,000.<br><strong>2.</strong> x = 2y',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Percents</strong><br><br>According to the graph, sales of fruits and vegetables accounted for x% of the total sales,<br>baked goods accounted for y%, and all other categories combined accounted for 76%. It<br>follows that x + y = 100 – 76 = 24. Determine the value of x.<br>1. Given that sales of fruits and vegetables accounted for x% of the total sales of $100,000<br>and this amounted to $16,000, it follows that <br> (100,000) = 16,000. Thus, x = 16;<br>SUFFICIENT.<br>2. Given that x = 2y, it follows that x + y = 3y = 24, y = 8, and x = 16; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m023',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Larry saves x dollars per month. Will Larry’s total savings one year from now exceed his present savings by at least $500? (Assume that there is no interest.)<br><br><strong>1.</strong> In 6 months Larry’s total savings will be $900.<br><strong>2.</strong> In 3 months Larry’s total savings will exceed his present savings by $150.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Let $p be Larry’s present savings. Larry saves $x per month. One year from now (i.e., 12<br>months from now), Larry will have saved an additional $12x. Determine if (p + 12x) – p > 500<br>or, equivalently, determine if 12x > 500.<br>1. Given that in 6 months Larry will have saved a total of $900, it follows that p + 6x = 900,<br>but since the value of p is unknown, it cannot be determined if 12x > 500; NOT sufficient.<br>2. Given that (p + 3x) – p = $150, it follows that x = 50, 12x = 600, and 12x > 500;<br>SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m024',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'If Randy has twice as many coins as Alice, and if Maria has 7 times as many coins as Alice, what is the combined number of coins that all three of them have?<br><br><strong>1.</strong> Alice has 4 fewer coins than Randy.<br><strong>2.</strong> Maria has 20 more coins than Randy.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>Determine the total number of coins that Randy, Alice, and Maria have, given that Randy has<br>twice as many coins as Alice and Maria has 7 times as many coins as Alice. In other words,<br>determine the value of R + A + M, where R, A, and M represent the number of coins,<br>respectively, that Randy, Alice, and Maria have, given that R = 2A and M = 7A.<br>1. Given that Alice has 4 fewer coins than Randy, it follows that A = R – 4. Since R = 2A, it<br>follows that A = 2A – 4, from which the value of A can be determined. From the value of A,<br>values for R and M can be determined and R + A + M can also be determined;<br>SUFFICIENT.<br>2. Given that Maria has 20 more coins than Randy, it follows that M = R + 20. Since M = 7A<br>and R = 2A, it follows that 7A = 2A + 20, from which the value of A can be determined.<br>From the value of A, values for R and M can be determined and R + A + M can also be<br>determined; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m025',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'A line of people waiting to enter a theater consists of seven separate and successive groups. The first person in each group purchases one ticket for each person in the group and for no one else. If n is the total number of tickets sold for the first six groups, is n an even number?<br><br><strong>1.</strong> There are no more than 4 people in each group.<br><strong>2.</strong> The 19th person in line purchases the tickets for the seventh group.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine whether the total number of people in the first six groups is an even number.<br>1. Given that each group contains at most 4 people, it is not possible to determine whether<br>the total number of people in the first six groups is an even number. For example, if the<br>numbers of people in the first six groups were 2, 2, 2, 2, 2, and 2, then the total number<br>of people in the first six groups would be 12, which is an even number. However, if the<br>numbers of people in the first six groups were 2, 2, 2, 2, 2, and 3, then the total number<br>of people in the first six groups would be 13, which is not an even number; NOT<br>sufficient.<br><br>2. Given that the 19th person in line purchased the tickets for the seventh group, it follows<br>that the total number of people in the first six groups was 18, which is an even number;<br>SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m026',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'If John has exactly 10 coins each of which was minted in 1910 or 1920 or 1930, how many of his coins were minted in 1920?<br><br><strong>1.</strong> Exactly 6 of his coins were minted in 1910 or 1920.<br><strong>2.</strong> Exactly 7 of his coins were minted in 1920 or 1930.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>Let x, y, and z be the numbers of coins John has that were minted in, respectively, 1910, 1920,<br>and 1930. Then x, y, and z are nonnegative integers and x + y + z = 10. What is the value of y?<br>1. Given that x + y = 6, it is possible that y = 2 (e.g., x = 4, y = 2, and z = 4) and it is possible<br>that y = 4 (e.g., x = 2, y = 4, and z = 4); NOT sufficient.<br>2. Given that y + z = 7, it is possible that y = 3 (e.g., x = 3, y = 3, and z = 4) and it is possible<br>that y = 4 (e.g., x = 3, y = 4, and z = 3); NOT sufficient.<br>Taking (1) and (2) together, from x + y + z = 10 and (1) it follows that 6 + z = 10, or z = 4.<br>Substituting z = 4 into y + z = 7 gives y + 4 = 7, or y = 3.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m027',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'The total profit of corporation K was $3,400,000 in year X. What was the total profit in year Y?<br><br><strong>1.</strong> Income in year Y was 30 percent more than in year X.<br><strong>2.</strong> Costs in year Y were 40 percent more than in year X.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Let $CX be costs in year X, $IX be income in year X, $CY be costs in year Y, and $IY be income in<br>year Y. Given that IX – CX = 3,400,000, determine the value of IY – CY.<br>1. Given that IY = 1.3IX, some information about income in year Y is known, but since<br>nothing is known about costs in year Y, the profit in year Y cannot be determined; NOT<br>sufficient.<br>2. Given that CY = 1.4CX, some information about costs in year Y is known, but since nothing<br>is known about income in year Y, the profit in year Y cannot be determined; NOT<br>sufficient.<br>Taking (1) and (2) together, IY – CY = 1.3IX − 1.4CX = 1.3(IX – CX) – 0.1CX = 1.3(3,400,000) –<br>0.1CX, which can have more than one possible value. The table below gives two specific<br>examples that illustrate this.<br><br>CX<br>1,000,000 2,000,000<br>IX<br>4,400,000 5,400,000<br>IX − CX<br>3,400,000 3,400,000<br>CY = 1.4CX 1,400,000 2,800,000<br>IY = 1.3IX<br>5,720,000 7,020,000<br>IY – CY<br>4,320,000 4,220,000<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m028',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Zelma scored 90, 88, and 92 on 3 of the 6 mathematics tests that she took. What was her average (arithmetic mean) score on the 6 tests?<br><br><strong>1.</strong> Her average (arithmetic mean) score on 5 of the tests was 90.<br><strong>2.</strong> Her score on one of the tests was 91.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Statistics</strong><br><br>Determine the average (arithmetic mean) of Zelma’s 6 test scores, given that 3 of the scores<br>are 90, 88, and 92.<br>1. Given that the average score on 5 of the 6 tests was 90, it is not possible to determine the<br>average of all 6 test scores. For example, the 6 test scores could be 89, 91, 90, 88, 92, and<br>100 for an average score of 91  or the 6 test scores could be 89, 91, 90, 88, 92, and 50<br>for an average score of 83 ; NOT sufficient.<br>2. Given that one of the scores was 91, it is not possible to determine the average of all 6<br>test scores. For example, the 6 test scores could be 89, 91, 90, 88, 92, and 100 for an<br>average score of 91  or the 6 test scores could be 89, 91, 90, 88, 92, and 50 for an<br>average score of 88 ; NOT sufficient.<br>Taking (1) and (2) together and noting that the examples that were used to show that (2) is<br>not sufficient were the same examples that were used to show that (1) is not sufficient, the<br>average of Zelma’s 6 test scores cannot be determined.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m029',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Will a company lose sales if its strategy focuses on consumer well-being rather than exploiting consumer fears?<br><br><strong>1.</strong> The company’s current marketing strategy exploits its consumers’ fears to drive sales, resulting in increased profits.<br><strong>2.</strong> From an ethical standpoint, the company should prioritize consumer well-being over short-term profits and refrain from exploiting their fears.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Even if the company’s current fear-based marketing strategy has increased sales and<br>profits, a new strategy focused on consumer well-being might work even better. Thus,<br>whether the company will lose sales if its strategy focuses on consumer well-being rather<br>than exploiting consumer feats cannot be determined from (1) alone; NOT sufficient.<br>2. What the company should do from an ethical standpoint is irrelevant to whether any<br>marketing strategy will make the company lose sales. Thus, whether the company will<br>lose sales if its strategy focuses on consumer well-being rather than exploiting consumer<br>feats cannot be determined from (2) alone; NOT sufficient.<br>Since (1) alone is insufficient to answer the question, and (2) is completely irrelevant to<br>answering it, both (1) and (2) together are insufficient to answer it. Whether or not the<br>company’s current fear-based marketing strategy has been profitable, and whether or not<br>that strategy is ethical, a new strategy focused on consumer well-being might or might not<br>make the company lose sales.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m030',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Should a holistic approach be used to measure academic success?<br><br><strong>1.</strong> Traditional education policies focus on standardized testing as the primary measure of academic success.<br><strong>2.</strong> To foster holistic learning, education policies should prioritize a well-rounded curriculum that includes critical thinking, creativity, and practical skills.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. The observation that traditional education policies focus on standardized testing to<br>measure academic success tells us nothing about whether or not this traditional<br>approach is better than, worse than, or even distinct from a “holistic” approach. Thus,<br>whether a holistic approach should be used to measure academic success cannot be<br>determined from (1) alone; NOT sufficient.<br>2. Even if education policies should prioritize a well-rounded curriculum to foster holistic<br>learning, a holistic approach might not be the best way to measure academic success.<br>Thus, whether a holistic approach should be used to measure academic success cannot<br>be determined from (2) alone; NOT sufficient.<br>Now suppose traditional education policies measure academic success with standardized<br>testing as (1) says, while education policies should prioritize a well-rounded curriculum to<br>foster holistic learning as (2) says. In that case, a holistic approach to measuring academic<br>success might or might not be better than, worse than, or even distinct from the traditional<br>approach.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m031',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'Can financial budgeting help individuals avoid debt?<br><br><strong>1.</strong> Many individuals struggle with mounting debt due to excessive spending resulting from a lack of financial planning.<br><strong>2.</strong> To avoid taking out loans, individuals should practice responsible budgeting, enabling them to save for emergencies and achieve financial stability.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Inference</strong><br><br>1. The claim that many individuals struggle with mounting debt due to excessive spending<br>resulting from lack of financial planning implies that they might not struggle with<br>mounting debt if they did use financial planning to avoid excessive spending; that is, if<br><br>they practiced financial budgeting. In other words, (1) implies that financial budgeting<br>could help these individuals avoid the mounting debt that they struggle with. Thus, (1)<br>alone entails that financial budgeting can help in avoiding debt; SUFFICIENT.<br>2. The claim that individuals should practice responsible budgeting in order to avoid taking<br>out loans implies that responsible budgeting can help them avoid taking out loans.<br>Assuming that in at least some of these cases, avoiding taking out a loan can allow one to<br>avoid the debt from that loan, this means that responsible financial budgeting can help in<br>avoiding debt. Thus, (2) alone entails that financial budgeting can help in avoiding debt;<br>SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m032',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What kind of behavior is usually displayed by conflicting factions?<br><br><strong>1.</strong> In conflicts, some factions resort to aggression and hostility, which escalates the situation.<br><strong>2.</strong> To promote peaceful resolutions, factions should engage in open communication, empathy, and compromise to find mutually beneficial solutions.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Even if some factions in conflicts resort to hostility and aggression, conflicting factions<br>might not usually display such behavior. Thus, what kind of behavior conflicting factions<br>usually display cannot be determined from (1) alone; NOT sufficient.<br>2. A claim about what conflicting factions should do in order to promote peaceful<br>resolutions doesn’t clearly indicate what they usually do in reality. Thus, what kind of<br>behavior conflicting factions usually display cannot be determined from (2) alone; NOT<br>sufficient.<br>(1)’s observation that some conflicting factions resort to hostility and aggression, even<br>together with (2)’s claim that such factions should behave differently to promote peaceful<br>resolutions, still doesn’t tell us how conflicting factions usually behave.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m033',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What is the probability of landing on tails at least once in a sequence of 100 tosses of a specific coin?<br><br><strong>1.</strong> When tossing the coin, there are only two possible outcomes, heads or tails, and both have an equal chance of occurring.<br><strong>2.</strong> In a series of 100 tosses of the coin, we can expect almost 50 heads.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Evaluate</strong><br><br>1. Since (1) tells us that there are only two possible outcomes to tossing the coin, that each<br>of those outcomes has a 50% chance of occurring, and that one of them is tails, we can<br>calculate the chance of landing on tails at least once in a series of 100 tosses of the coin<br>as 1 – (0.5)^100. Thus, (1) alone lets us determine this probability; SUFFICIENT.<br>2. The vague thought that “we can expect almost 50 heads” in a series of 100 tosses of the<br>coin doesn’t tell us the probability of the coin landing on tails with each toss, so it doesn’t<br>give us enough information to calculate the probability of landing on tails at least once in<br>a series of 100 tosses. Thus, (2) alone doesn’t let us determine this probability. NOT<br>SUFFICIENT.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m034',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What are some possible signs of impending rainfall in Exville today?<br><br><strong>1.</strong> The weather forecast correctly predicts a 90% chance of rain in Exville today based on heavy cloud cover and low-pressure systems moving into the region.<br><strong>2.</strong> Given the darkening sky, the sudden drop in temperature, and strong winds, it is highly likely that a rainstorm is imminent in Exville today.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Inference</strong><br><br>1. If a weather forecast is correct in predicting a 90% chance of rain in a town because of<br>heavy cloud cover and low-pressure systems moving into the region, then heavy cloud<br>cover and low-pressure systems must be two of the possible signs of impending rainfall<br>in that town. Thus, (1) alone provides examples of some possible signs of impending<br>rainfall in Exville today; SUFFICIENT.<br>2. If a darkening sky, a sudden drop in temperature, and strong winds are reasons why it is<br>highly likely that a rainstorm is imminent in Exville today, then those factors must be<br>three of the possible signs of impending rainfall in Exville today. Thus, (2) alone provides<br>examples of some possible signs of impending rainfall in Exville today; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_m035',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'A patient experiencing cold-like symptoms goes to a doctor. Is the patient suffering from a viral infection?<br><br><strong>1.</strong> Based on their symptoms and medical history, the patient thinks they are suffering from a viral infection.<br><strong>2.</strong> Due to their knowledge of common illnesses in the local area, the doctor thinks it is more likely that seasonal allergies are the cause of the patient’s symptoms.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Even if the patient’s symptoms and medical history give the patient reason to believe that<br>a viral infection is causing the symptoms, that belief may be mistaken. Thus, whether the<br>patient is suffering from a viral infection cannot be determined from (1) alone; NOT<br>sufficient.<br>2. Even if the doctor reasonably believes that seasonal allergies are more likely than a viral<br>infection to be causing the patient’s symptoms, a viral infection might still be the cause.<br>Thus, whether the patient is suffering from a viral infection cannot be determined from<br>(2) alone; NOT sufficient.<br>If (1) and (2) are both true, the patient and the doctor have opposing beliefs about the<br>likelihood that the patient has a viral infection. These opposing beliefs don’t settle the<br>question of whether the patient has such an infection or not.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_m036',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'medium',
    prompt: 'What should generally be expected if you venture into areas surrounding a road closure?<br><br><strong>1.</strong> With a major G20 event happening at the Jawahar Lal Nehru Stadium tonight and reports of road closures in the area, there’s a strong likelihood of congestion.<br><strong>2.</strong> Given the large number of attendees expected at an event at the Jawahar Lal Nehru Stadium tonight, shuttle buses will be provided between the stadium and the International Media Centre.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Observations about specific conditions around a stadium on a specific night can’t support<br>any broad generalization about what to expect around areas surrounding road closures.<br><br>Thus, what should generally be expected if you venture into areas surrounding a road<br>closure cannot be determined from (1) alone; NOT sufficient.<br>2. Observations about specific conditions around a stadium on a specific night can’t support<br>any broad generalization about what to expect around areas surrounding road closures.<br>Thus, what should generally be expected if you venture into areas surrounding a road<br>closure cannot be determined from (2) alone; NOT sufficient.<br>(1) and (2) both describe conditions around the same stadium on a specific night. Thus, even<br>both statements together can’t support any broad generalization about what to expect around<br>areas surrounding road closures.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  }
);
