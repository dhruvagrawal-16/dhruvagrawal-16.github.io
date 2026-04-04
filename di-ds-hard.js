GMAT_QUESTIONS.push(
  {
    id: 'ds_h001',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'What percent of the students at University X are enrolled in a science course but are not enrolled in a biology course?<br><br><strong>1.</strong> 28 percent of the students at University X are enrolled in a biology course.<br><strong>2.</strong> 70 percent of the students at University X who are enrolled in a science course are enrolled in a biology course.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Percents</strong><br><br>Under the assumption that a biology course is a type of science course, determine the percent<br>of University X students who are enrolled in a science course, but not in a biology course.<br>1. Given that 28% of the students at University X are enrolled in a biology course, if 100%<br>of the students are enrolled in a science course, then (100 – 28)% = 72% are enrolled in<br>a science course, but not in a biology course. On the other hand if 50% of the students at<br>University X are enrolled in a science course, then (50 – 28)% = 22% are enrolled in a<br>science course, but not in a biology course; NOT sufficient.<br>2. Given that 70% of the students at University X who are enrolled in a science course are<br>enrolled in a biology course, if 100% of the students at University X are enrolled in a<br>science course, then (100 – 70)% = 30% are enrolled in a science course, but not in a<br>biology course. On the other hand if 50% of the students at University X are enrolled in a<br>science course, then 70% of 50% = 35% are enrolled in a biology course, (50 – 35)% =<br>15% are enrolled in a science course, but not in a biology course; NOT sufficient.<br>Taking (1) and (2) together, 0.28 = 0.7x where x is the percent of the students at University X<br>who are enrolled in a science course. It follows that x = 0.4 or 40%. Thus, (40 – 28)% = 12%<br>of the students at University X are enrolled in a science course, but not in a biology course.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h002',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Each Type A machine fills 400 cans per minute, each Type B machine fills 600 cans per minute, and each Type C machine installs 2,400 lids per minute. A lid is installed on each can that is filled and on no can that is not filled. For a particular minute, what is the total number of machines working?<br><br><strong>1.</strong> A total of 4,800 cans are filled that minute.<br><strong>2.</strong> For that minute, there are 2 Type B machines working for every Type C machine working.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>1. Given that 4,800 cans were filled that minute, it is possible that 12 Type A machines, no<br>Type B machines, and 2 Type C machines were working, for a total of 14 machines, since<br>(12)(400) + (0)(600) = 4,800 and (2)(2,400) = 4,800. However, it is also possible that no<br><br>Type A machines, 8 Type B machines, and 2 Type C machines were working, for a total of<br>10 machines, since (0)(400) + (8)(600) = 4,800 and (2)(2,400) = 4,800; NOT sufficient.<br>2. Given that there are 2 Type B machines working for every Type C machine working, it is<br>possible that there are 6 machines working—3 Type A machines, 2 Type B machines, and<br>1 Type C machine. This gives 3(400) + 2(600) = 2,400 cans and 1(2,400) = 2,400 lids. It is<br>also possible that there are 12 machines working—6 Type A machines, 4 Type B<br>machines, and 2 Type C machines. This gives 6(400) + 4(600) = 4,800 cans and 2(2,400)<br>= 4,800 lids; NOT sufficient.<br>Taking (1) and (2) together, since there were 4,800 cans filled that minute, there were 4,800<br>lids installed that minute. It follows that 2 Type C machines were working that minute, since<br>(2)(2,400) = 4,800. Since there were twice this number of Type B machines working that<br>minute, it follows that 4 Type B machines were working that minute. These 4 Type B machines<br>filled (4)(600) = 2,400 cans that minute, leaving 4,800 − 2,400 = 2,400 cans to be filled by<br>Type A machines. Therefore, the number of Type A machines working that minute was <br>= 6, and it follows that the total number of machines working that minute was 2 + 4 + 6 = 12.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h003',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'In a two-month survey of shoppers, each shopper bought one of two brands of detergent, X or Y, in the first month and again bought one of these brands in the second month. In the survey, 90 percent of the shoppers who bought Brand X in the first month bought Brand X again in the second month, while 60 percent of the shoppers who bought Brand Y in the first month bought Brand Y again in the second month. What percent of the shoppers bought Brand Y in the second month?<br><br><strong>1.</strong> In the first month, 50 percent of the shoppers bought Brand X.<br><strong>2.</strong> The total number of shoppers surveyed was 5,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Percents</strong><br><br>This problem can be solved by using the following contingency table where A and B represent,<br>respectively, the number of shoppers who bought Brand X and the number of shoppers who<br>bought Brand Y in the first month; C and D represent, respectively, the number of shoppers<br>who bought Brand X and the number of shoppers who bought Brand Y in the second month;<br>and T represents the total number of shoppers in the survey. Also in the table, 0.9A<br>represents the 90% of the shoppers who bought Brand X in the first month and also bought it<br>in the second month, and 0.1A represents the (100 − 90)% = 10% of the shoppers who<br>bought Brand X in the first month and Brand Y in the second month. Similarly, 0.6B represents<br>the 60% of the shoppers who bought Brand Y in the first month and also bought it in the<br>second month, and 0.4B represents the (100 − 60)% = 40% of the shoppers who bought<br>Brand Y in the first month and Brand X in the second month.<br><br>Second Month<br> <br>X<br>Y<br>Total<br>First<br>Month<br>X<br>0.9A 0.1A<br>A<br>Y<br>0.4B 0.6B<br>B<br>Total<br>C<br>D<br>T<br>Determine the value of <br> as a percentage.<br>1. This indicates that 50% of the shoppers bought Brand X in the first month, so A = 0.5T. It<br>follows that the other 50% of the shoppers bought Brand Y in the first month, so B =<br>0.5T. Then, D = 0.1 A + 0.6B = 0.1(0.5T) + 0.6(0.5T) = 0.05T + 0.30T = 0.35T. It follows that<br> = <br> = 0.35, which is 35%; SUFFICIENT.<br>2. This indicates that T = 5,000, as shown in the following table:<br><br>Second Month<br> <br>X<br>Y<br>Total<br>First<br>Month<br>X<br>0.9A 0.1A<br>A<br>Y<br>0.4B 0.6B<br>B<br>Total<br>C<br>D<br>5,000<br>But not enough information is given to be able to determine D or D as a percentage of 5,000;<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h004',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'If the total price of n equally priced shares of a certain stock was $12,000, what was the price per share of the stock?<br><br><strong>1.</strong> If the price per share of the stock had been $1 more, the total price of the n shares would have been $300 more.<br><strong>2.</strong> If the price per share of the stock had been $2 less, the total price of the n shares would have been 5 percent less.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Arithmetic Operations; Percents</strong><br><br>Since the price per share of the stock can be expressed as <br> determining the value of<br>n is sufficient to answer this question.<br><br>1. A per-share increase of $1 and a total increase of $300 for n shares of stock mean<br>together that n($1) = $300. It follows that n = 300; SUFFICIENT.<br>2. If the price of each of the n shares had been reduced by $2, the total reduction in price<br>would have been 5 percent less or 0.05($12,000). The equation 2n = 0.05($12,000)<br>expresses this relationship. The value of n can be determined to be 300 from this<br>equation; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h005',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'In Year X, 8.7 percent of the men in the labor force were unemployed in June compared with 8.4 percent in May. If the number of men in the labor force was the same for both months, how many men were unemployed in June of that year?<br><br><strong>1.</strong> In May of Year X, the number of unemployed men in the labor force was 3.36 million.<br><strong>2.</strong> In Year X, 120,000 more men in the labor force were unemployed in June than in May.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Percents</strong><br><br>Since 8.7 percent of the men in the labor force were unemployed in June, the number of<br>unemployed men could be calculated if the total number of men in the labor force was known.<br>Let t represent the total number of men in the labor force.<br>1. This implies that for May (8.4%)t = 3,360,000, from which the value of t can be<br>determined; SUFFICIENT.<br>2. This implies that (8.7% − 8.4%)t = 120,000 or (0.3%)t = 120,000. This equation can be<br>solved for t; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h006',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'On Monday morning a certain machine ran continuously at a uniform rate to fill a production order. At what time did it completely fill the order that morning?<br><br><strong>1.</strong> The machine began filling the order at 9:30 a.m.<br><strong>2.</strong> The machine had filled of the order by 10:30 a.m. and of the order by 11:10 a.m.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Arithmetic Operations</strong><br><br>1. This merely states what time the machine began filling the order; NOT sufficient.<br>2. In the 40 minutes between 10:30 a.m. and 11:10 a.m., <br> of the order was filled.<br>Therefore, the entire order was completely filled in 3 × 40 = 120 minutes, or 2 hours.<br>Since half the order took 1 hour and was filled by 10:30 a.m., the second half of the order,<br>and thus the entire order, was filled by 11:30 a.m.; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h007',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'After winning 50 percent of the first 20 games it played, Team A won all of the remaining games it played. What was the total number of games that Team A won?<br><br><strong>1.</strong> Team A played 25 games altogether.<br><strong>2.</strong> Team A won 60 percent of all the games it played.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Percents</strong><br><br>Let r be the number of the remaining games played, all of which the team won. Since the team<br>won (50%)(20) = 10 of the first 20 games and the r remaining games, the total number of<br><br>games the team won is 10 + r. Also, the total number of games the team played is 20 + r.<br>Determine the value of r.<br>1. Given that the total number of games played is 25, it follows that 20 + r = 25, or r = 5;<br>SUFFICIENT.<br>2. It is given that the total number of games won is (60%)(20 + r), which can be expanded<br>as 12 + 0.6r. Since it is also known that the number of games won is 10 + r, it follows that<br>12 + 0.6r = 10 + r. Solving this equation gives 12 − 10 = r − 0.6r, or 2 = 0.4r, or r = 5;<br>SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h008',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Michael arranged all his books in a bookcase with 10 books on each shelf and no books left over. After Michael acquired 10 additional books, he arranged all his books in a new bookcase with 12 books on each shelf and no books left over. How many books did Michael have before he acquired the 10 additional books?<br><br><strong>1.</strong> Before Michael acquired the 10 additional books, he had fewer than 96 books.<br><strong>2.</strong> Before Michael acquired the 10 additional books, he had more than 24 books.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Properties of Numbers</strong><br><br>If x is the number of books Michael had before he acquired the 10 additional books, then x is<br>a multiple of 10. After Michael acquired the 10 additional books, he had x + 10 books and x +<br>10 is a multiple of 12.<br>1. If x < 96, where x is a multiple of 10, then x = 10, 20, 30, 40, 50, 60, 70, 80, or 90 and x +<br>10 = 20, 30, 40, 50, 60, 70, 80, 90, or 100. Since x + 10 is a multiple of 12, then x + 10 = 60<br>and x = 50; SUFFICIENT.<br>2. If x > 24, where x is a multiple of 10, then x must be one of the numbers 30, 40, 50, 60,<br>70, 80, 90, 100, 110, …, and x + 10 must be one of the numbers 40, 50, 60, 70, 80, 90, 100,<br>110, 120, …. Since there is more than one multiple of 12 among these numbers (for<br>example, 60 and 120), the value of x + 10, and therefore the value of x, cannot be<br>determined; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h009',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Last year in a group of 30 businesses, 21 reported a net profit and 15 had investments in foreign markets. How many of the businesses did not report a net profit nor invest in foreign markets last year?<br><br><strong>1.</strong> Last year 12 of the 30 businesses reported a net profit and had investments in foreign markets.<br><strong>2.</strong> Last year 24 of the 30 businesses reported a net profit or invested in foreign markets, or both.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Arithmetic Concepts of Sets</strong><br><br>Consider the Venn diagram below in which x represents the number of businesses that<br>reported a net profit and had investments in foreign markets. Since 21 businesses reported a<br>net profit, 21 − x businesses reported a net profit only. Since 15 businesses had investments in<br>foreign markets, 15 − x businesses had investments in foreign markets only. Finally, since<br>there is a total of 30 businesses, the number of businesses that did not report a net profit and<br>did not invest in foreign markets is 30 − (21− x + x + 15 − x) = x − 6.<br>Determine the value of x − 6, or equivalently, the value of x.<br><br>1. It is given that 12 = x; SUFFICIENT.<br>2. It is given that 24 = (21 − x) + x + (15 − x). Therefore, 24 = 36 − x, or x = 12.<br>Alternatively, the information given is exactly the number of businesses that are not<br>among those to be counted in answering the question posed in the problem, and<br>therefore the number of businesses that are to be counted is 30 − 24 = 6; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h010',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'For each landscaping job that takes more than 4 hours, a certain contractor charges a total of r dollars for the first 4 hours plus 0.2r dollars for each additional hour or fraction of an hour, where r > 100. Did a particular landscaping job take more than 10 hours?<br><br><strong>1.</strong> The contractor charged a total of $288 for the job.<br><strong>2.</strong> The contractor charged a total of 2.4r dollars for the job.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>If y represents the total number of hours the particular landscaping job took, determine if y ><br>10.<br>1. This indicates that the total charge for the job was $288, which means that r + 0.2r(y − 4)<br>= 288. From this it cannot be determined if y > 10. For example, if r = 120 and y = 11,<br>then 120 + 0.2(120)(7) = 288, and the job took more than 10 hours. However, if r = 160<br>and y = 8, then 160 + 0.2(160)(4) = 288, and the job took less than 10 hours; NOT<br>sufficient.<br>2. This indicates that r + 0.2r(y − 4) = 2.4r, from which it follows that<br>r + 0.2ry − 0.8r = 2.4r<br>use distributive property<br>0.2ry = 2.2r<br>subtract (r − 0.8r) from both sides<br>y = 11<br>divide both sides by 0.2r<br>Therefore, the job took more than 10 hours; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h011',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'If 75 percent of the guests at a certain banquet ordered dessert, what percent of the guests ordered coffee?<br><br><strong>1.</strong> 60 percent of the guests who ordered dessert also ordered coffee.<br><strong>2.</strong> 90 percent of the guests who ordered coffee also ordered dessert.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Arithmetic Concepts of Sets; Percents</strong><br><br>Consider the Venn diagram below that displays the various percentages of 4 groups of the<br>guests. Thus, x percent of the guests ordered both dessert and coffee and y percent of the<br>guests ordered coffee only. Since 75 percent of the guests ordered dessert, (75 − x)% of the<br>guests ordered dessert only. Also, because the 4 percentages represented in the Venn diagram<br>have a total sum of 100 percent, the percentage of guests who did not order either dessert or<br>coffee is 100 − [(75 − x) + x + y] = 25 − y. Determine the percentage of guests who ordered<br>coffee, or equivalently, the value of x + y.<br>1. Given that x is equal to 60 percent of 75, or 45, the value of x + y cannot be determined;<br>NOT sufficient.<br>2. Given that 90 percent of x + y is equal to x, it follows that 0.9(x + y) = x, or 9(x + y) = 10x.<br>Therefore, 9x + 9y = 10x, or 9y = x. From this the value of x + y cannot be determined. For<br>example, if x = 9 and y = 1, then all 4 percentages in the Venn diagram are between 0 and<br>100, 9y = x, and x + y = 10. However, if x = 18 and y = 2, then all 4 percentages in the Venn<br>diagram are between 0 and 100, 9y = x, and x + y = 20; NOT sufficient.<br>Given both (1) and (2), it follows that x = 45 and 9y = x. Therefore, 9y = 45, or y = 5, and hence<br>x + y = 45 + 5 = 50.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h012',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A tank containing water started to leak. Did the tank contain more than 30 gallons of water when it started to leak? (Note: 1 gallon = 128 ounces)<br><br><strong>1.</strong> The water leaked from the tank at a constant rate of 6.4 ounces per minute.<br><strong>2.</strong> The tank became empty less than 12 hours after it started to leak.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Rate Problems</strong><br><br>1. Given that the water leaked from the tank at a constant rate of 6.4 ounces per minute, it is<br>not possible to determine if the tank leaked more than 30 gallons of water. In fact, any<br>nonzero amount of water leaking from the tank is consistent with a leakage rate of 6.4<br>ounces per minute, since nothing can be determined about the amount of time the water<br>was leaking from the tank; NOT sufficient.<br>2. Given that the tank became empty in less than 12 hours, it is not possible to determine if<br>the tank leaked more than 30 gallons of water because the rate at which water leaked<br>from the tank is unknown. For example, the tank could have originally contained 1 gallon<br>of water that emptied in exactly 10 hours or the tank could have originally contained 31<br>gallons of water that emptied in exactly 10 hours; NOT sufficient.<br><br>Given (1) and (2) together, the tank emptied at a constant rate of<br> <br> for less than 12 hours.<br>If t is the total number of hours the water leaked from the tank, then the total amount of<br>water emptied from the tank, in gallons, is 3t, which is therefore less than (3)(12) = 36. From<br>this it is not possible to determine if the tank originally contained more than 30 gallons of<br>water. For example, if the tank leaked water for a total of 11 hours, then the tank originally<br>contained (3)(11) gallons of water, which is more than 30 gallons of water. However, if the<br>tank leaked water for a total of 2 hours, then the tank originally contained (3)(2) gallons of<br>water, which is not more than 30 gallons of water.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h013',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Each of the 45 books on a shelf is written either in English or in Spanish, and each of the books is either a hardcover book or a paperback. If a book is to be selected at random from the books on the shelf, is the probability less than that the book selected will be a paperback written in Spanish?<br><br><strong>1.</strong> Of the books on the shelf, 30 are paperbacks.<br><strong>2.</strong> Of the books on the shelf, 15 are written in Spanish.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Arithmetic Probability</strong><br><br>1. This indicates that 30 of the 45 books are paperbacks. Of the 30 paperbacks, 25 could be<br>written in Spanish. In this case, the probability of randomly selecting a paperback book<br>written in Spanish is <br>. On the other hand, it is possible that only 5 of the<br>paperback books are written in Spanish. In this case, the probability of randomly<br>selecting a paperback book written in Spanish is <br> < ; NOT sufficient.<br>2. This indicates that 15 of the books are written in Spanish. Then, at most 15 of the 45<br>books on the shelf are paperbacks written in Spanish, and the probability of randomly<br>selecting a paperback book written in Spanish is at most <br> < ; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h014',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A small school has three foreign language classes, one in French, one in Spanish, and one in German. How many of the 34 students enrolled in the Spanish class are also enrolled in the French class?<br><br><strong>1.</strong> There are 27 students enrolled in the French class, and 49 students enrolled in either the French class, the Spanish class, or both of these classes.<br><strong>2.</strong> One-half of the students enrolled in the Spanish class are enrolled in more than one foreign language class.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Sets</strong><br><br>Given that 34 students are enrolled in the Spanish class, how many students are enrolled in<br>both the Spanish and French classes? In other words, given that x + y = 34 in the diagram<br>below, what is the value of y?<br><br>1. It is given that y + z = 27 and x + y + z = 49. Adding the equations x + y = 34 and y + z = 27<br>gives x + 2y + z = 34 + 27 = 61, or y + (x + y + z) = 61. Since x + y + z = 49, it follows that y<br>+ 49 = 61, or y = 12; SUFFICIENT.<br>2. Given that half the students enrolled in the Spanish class are enrolled in more than one<br>foreign language class, then it is possible that no students are enrolled in the French and<br>German classes only and 17 students are enrolled in both the Spanish and French<br>classes. On the other hand, it is also possible that there are 17 students enrolled in the<br>French and German classes only and no students enrolled in both the Spanish and<br>French classes; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h015',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Last year of the members of a certain club were males. This year the members of the club include all the members from last year plus some new members. Is the fraction of the members of the club who are males greater this year than last year?<br><br><strong>1.</strong> More than half of the new members are male.<br><strong>2.</strong> The number of members of the club this year is the number of members last year.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Operations with Fractions</strong><br><br>Let L represent the number of members last year; N the number of new members added this<br>year; and x the number of members added this year who are males. It is given that  of the<br>members last year were males. It follows that the number of members who are male this year<br>is  L + x. Also, the total number of members this year is L + N. Determine if <br> > , or<br>equivalently, determine if 3L + 5x > 3L + 3N or simply if x >  N.<br>1. This indicates that x >  N. If, for example, N = 20 and x = 11, then 11 > (20) = 10, but<br>11 <br>  (20) = 12. On the other hand, if N = 20 and x = 16, then 16 >  (20) = 10, and 16<br>>  (20) = 12; NOT sufficient.<br><br>2. This indicates that L + N =  L. It follows that N =  L. If, for example, L = 100, then N = <br>(100) = 20. If x = 11, then 11 <br>  (20) = 12. On the other hand, if x = 16, then 16 > <br>(20) = 10, and 16 >  (20) = 12; NOT sufficient.<br>Taking (1) and (2) together is of no more help than (1) and (2) taken separately since the<br>same examples were used to show that neither (1) nor (2) is sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h016',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Machines K, M, and N, each working alone at its constant rate, produce 1 widget in x, y, and 2 minutes, respectively. If Machines K, M, and N work simultaneously at their respective constant rates, does it take them less than 1 hour to produce a total of 50 widgets?<br><br><strong>1.</strong> x < 1.5<br><strong>2.</strong> y < 1.2',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra Work Problems</strong><br><br>Because Machine N produces 1 widget every 2 minutes, Machine N produces <br> = 30 widgets<br>in 1 hour = 60 minutes.<br>1. Given that x < 1.5, it follows that Machine K, which produces <br> = widgets in 60 minutes,<br>produces more than <br> = 40 widgets in 1 hour = 60 minutes. Thus, regardless of the<br>number of widgets produced by Machine M, when all three machines are working<br>simultaneously at their respective constant rates, more than 30 + 40 = 70 widgets will be<br>produced in 1 hour. Therefore, the three machines will together have produced 50<br>widgets in less than 1 hour; SUFFICIENT.<br>2. Given that y < 1.2, it follows that Machine M, which produces <br> = widgets in 60 minutes,<br>produces more than <br> = 50 widgets in 1 hour = 60 minutes. Thus, regardless of the<br>number of widgets produced by Machine K, when all three machines are working<br>simultaneously at their respective constant rates, more than 30 + 50 = 80 widgets will be<br>produced in 1 hour. Therefore, the three machines will together have produced 50<br>widgets in less than 1 hour; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h017',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Stations X and Y are connected by two separate, straight, parallel rail lines that are 250 miles long. Train P and train Q simultaneously left Station X and Station Y, respectively, and each train traveled to the other’s point of departure. The two trains passed each other after traveling for 2 hours. When the two trains passed, which train was nearer to its destination?<br><br><strong>1.</strong> At the time when the two trains passed, train P had averaged a speed of 70 miles per hour.<br><strong>2.</strong> Train Q averaged a speed of 55 miles per hour for the entire trip.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Arithmetic Applied Problems; Rates</strong><br><br>1. This indicates that Train P had traveled 2(70) = 140 miles when it passed Train Q. It<br>follows that Train P was 250 − 140 = 110 miles from its destination and Train Q was 140<br>miles from its destination, which means that Train P was nearer to its destination when<br>the trains passed each other; SUFFICIENT.<br>2. This indicates that Train Q averaged a speed of 55 miles per hour for the entire trip, but<br>no information is given about the speed of Train P. If Train Q traveled for 2 hours at an<br>average speed of 55 miles per hour and Train P traveled for 2 hours at an average speed<br>of 70 miles per hour, then Train P was nearer to its destination when the trains passed.<br>However, if Train Q traveled for 2 hours at an average speed of 65 miles per hour and<br>Train P traveled for 2 hours at an average speed of 60 miles per hour, then Train Q was<br>nearer to its destination when the trains passed. Note that if Train Q traveled at<br> miles per hour for the remainder of the trip, then its average speed for<br>the whole trip was 55 miles per hour; NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h018',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'In a two-story apartment complex, each apartment on the upper floor rents for 75 percent as much as each apartment on the lower floor. If the total monthly rent is $15,300 when rent is collected on all of the apartments, what is the monthly rent on each apartment on the lower floor?<br><br><strong>1.</strong> An apartment on the lower floor rents for $150 more per month than an apartment on the upper floor.<br><strong>2.</strong> There are 6 more apartments on the upper floor than on the lower floor.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Algebra Simultaneous Equations</strong><br><br>Let x be the number of apartments on the lower floor, y be the number of apartments on the<br>upper floor, and $R be the monthly rent on each apartment on the lower floor. Then the<br>monthly rent on each apartment on the upper floor is $0.75R and Rx + 0.75Ry = 15,300.<br>Determine the value of R.<br>1. Given that R = 150 + 0.75R, it follows that 0.25R = 150, or R = 600; SUFFICIENT.<br>2. Given that y = x + 6 thus, Rx + 0.75R(x + 6) = 15,300, or 1.75Rx + 4.5R = 15,300, which can<br>be true for more than one value of R and a corresponding positive integer value of x. For<br>example, it is possible that R = 600 and x = 12, and it is possible that R = 425 and x = 18;<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h019',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A motorboat, which is set to travel at k kilometers per hour in still water, travels directly up and down the center of a straight river so that the change in the boat’s speed relative to the shore depends only on the speed and direction of the current. What is the value of k?<br><br><strong>1.</strong> It takes the same amount of time for the boat to travel 4 kilometers directly downstream as it takes for it to travel 3 kilometers directly upstream.<br><strong>2.</strong> The current flows directly downstream at a constant rate of 2.5 kilometers per hour.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Letting c represent the speed of the current, the boat travels (k + c) kilometers per hour (kph)<br>when traveling in the same direction as the current (downstream) and (k – c) kph when<br>traveling in the opposite direction as the current. Determine the value of k.<br><br>1. Given that it takes the same amount of time to travel 4 kilometers (km) downstream as it<br>takes to travel 3 km upstream, it follows that <br> = <br>, or k = 7c, which shows that the<br>value of k depends on the value of c; NOT sufficient.<br>2. Given that c = 2.5 kph, it is not possible to determine the value of k since no information<br>is given about the value of k or its relationship with c; NOT sufficient.<br>Taking (1) and (2) together, k = 7c = 7(2.5) = 17.5.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h020',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'If the book value of a certain piece of equipment was $5,000 exactly 5 years ago, what is its present book value?<br><br><strong>1.</strong> From the time the piece of equipment was purchased, its book value decreased by 10 percent of its purchase price each year of its life.<br><strong>2.</strong> The present book value of another piece of equipment is $2,000.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Determine the present book value of a piece of equipment, of which the book value exactly 5<br>years ago was $5,000.<br>1. Given that the book value decreased 10% of the purchase price each year, it is not<br>possible to determine the present book value because the purchase price is unknown as<br>is the number of years ago the equipment was purchased. Consider the following chart,<br>where P represents the purchase price.<br><br>Years after purchase Depreciation Book value<br>0<br>0<br>P<br>1<br>0.1P<br>0.9P<br>2<br>0.1P<br>0.8P<br>3<br>0.1P<br>0.7P<br>4<br>0.1P<br>0.6P<br>5<br>0.1P<br>0.5P<br>6<br>0.1P<br>0.4P<br>7<br>0.1P<br>0.3P<br>8<br>0.1P<br>0.2P<br>9<br>0.1P<br>0.1P<br>10<br>0.1P<br>0<br>11<br>0<br>0<br>12<br>0<br>0<br>13<br>0<br>0<br>For example, if “5 years ago” was 6 years after purchase and the book value was $5,000,<br>then $5,000 = 0.4P and P = $12,500. In this case, the present book value (i.e., 5 years<br>hence) is $0. On the other hand, if “5 years ago” was 2 years after purchase and the book<br>value was $5,000, then $5,000 = 0.8P and P = $6,250. In this case, the present book value<br>(i.e., 5 years hence) is 0.3($6,250) = $1,875; NOT sufficient.<br>2. Given that the present book value of another piece of equipment is $2,000 gives no<br>information about the certain piece of equipment under consideration; NOT sufficient.<br>Taking (1) and (2) together gives no more information than (1) alone since (2) gives<br>information about another piece of equipment, not the piece under consideration.<br>The correct answer is E; both statements together are not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h021',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'The total cost to charter a bus was shared equally by the people who went on a certain trip. If the total cost to charter the bus was $360, how many people went on the trip?<br><br><strong>1.</strong> Each person who went on the trip paid $9 to charter the bus.<br><strong>2.</strong> If 4 fewer people had gone on the trip, each person’s share of the total cost to charter the bus would have increased by $1.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Algebra First-Degree Equations</strong><br><br>Let n be the number of people who went on the trip and $p be the amount that each person<br>paid. Then np = 360. What is the value of n?<br>1. Given that p = 9, then 9n = 360, or n = 40; SUFFICIENT.<br>2. Given that (n – 4)(p + 1) = 360, or np + n – 4p – 4 = 360, it follows from np = 360 that n –<br>4p – 4 = 0. Multiplying both sides of this last equation by n gives n2 – 4np − 4n = 0, or n2 –<br>4(360) − 4n = 0, or n2 – 4n − 1,440 = 0. Factoring gives (n – 40)(n + 36) = 0, and hence n<br>= 40 since n is a positive integer; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h022',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'If each of the stamps Carla bought cost 20, 25, or 30 cents and she bought at least one of each denomination, what is the number of 25-cent stamps that she bought?<br><br><strong>1.</strong> She spent a total of $1.45 for stamps.<br><strong>2.</strong> She bought exactly 6 stamps.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Let x, y, and z be the number of 20, 25, and 30 cent stamps, respectively, that Carla bought.<br>What is the value of y?<br>1. Given that 20x + 25y + 30z = 145, it is not possible to determine the value of y. For<br>example, if x = 3, y = 1, and z = 2, then each of x, y, and z is a positive integer and 20x +<br>25y + 30z = 145. However, if x = 2, y = 3, and z = 1, then each of x, y, and z is a positive<br>integer and 20x + 25y + 30z = 145; NOT sufficient.<br>2. Given that x + y + z = 6, it is not possible to determine the value of y, because each the two<br>examples used in (1) satisfies x + y + z = 6; NOT sufficient.<br>Taking (1) and (2) together, it is not possible to determine the value of y because the two<br>examples above each satisfy both (1) and (2).<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h023',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A car traveled a distance of d miles in t minutes at an average rate of r miles per minute. What is the ratio of d to r?<br><br><strong>1.</strong> t = 30<br><strong>2.</strong> d = 25',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Algebra Applied Problems</strong><br><br>Determine the ratio of d to r for a car that traveled d miles in t minutes at an average rate of r<br>miles per minute. Note that since d = rt and  = t, determining the ratio of d to r amounts to<br>determining t.<br>1. Given that t = 30, it follows that  = 30; SUFFICIENT.<br>2. Given that d = 25, it is not possible to determine the ratio of d to r since no information is<br>given about the value of r nor is information given from which to obtain the value of r;<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h024',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Pat is reading a book that has a total of 15 chapters. Has Pat read at least of the pages in the book?<br><br><strong>1.</strong> Pat has just finished reading the first 5 chapters.<br><strong>2.</strong> Each of the first 3 chapters has more pages than each of the other 12 chapters in the book.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Arithmetic Applied Problems</strong><br><br>Determine if Pat has read at least  of the pages in a 15-chapter book.<br>1. Given that Pat has just finished reading the first 5 chapters in the book, she may or may<br>not have read  of the pages in the book. If the first 5 chapters were very short and she<br>has read no other pages in the book, it is possible that she has read less than  of the<br>pages in the book. If the first 5 chapters were very long and/or she has read other pages<br>in the book, it is possible that she has read at least  of the pages in the book; NOT<br>sufficient.<br>2. Given that each of the first 3 chapters has more pages than each of the other 12 chapters,<br>it is impossible to determine whether Pat has read at least  of the pages in the book<br>because information is not given about how many chapters or which chapters of the<br>book Pat has read; NOT sufficient.<br>Taking (1) and (2) together, if Pat has read just the first 5 chapters and each of the first 3<br>chapters has 10 pages, each of chapters 4 and 5 has 1 page, and each of the other 10 chapters<br>has 9 pages, then Pat has read 32 pages of the book, which has 32 + 90 = 122 pages and <br>< . On the other hand, if Pat has read at least the first 5 chapters, each of the first 3 chapters<br>has 10 pages and each of the other 12 chapters has 9 pages, then Pat has read at least 48<br>pages of the book, which has 48 + 90 = 138 pages and <br> > .<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h025',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Should the choices made by 100 participants in a survey about Product X be said to proportionately represent the preferences of the entire population?<br><br><strong>1.</strong> In the survey of 100 participants, 70% said they preferred Product X.<br><strong>2.</strong> While the survey provided valuable insights into Product X, the small sample may not be representative of the entire population’s preferences.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Whatever specific percentage of the survey participants said they preferred Product X,<br>the percentage of individuals with that preference in a much larger population might be<br>exactly the same or much different. Thus, whether the survey participants’ choices should<br>be said to proportionately represent the entire population’s preferences cannot be<br>determined from (1) alone; NOT sufficient.<br>2. The statement that a small sample may not be representative of a population’s<br>preferences suggests that the sample also may be representative of that population’s<br>preferences. Thus, whether the survey participants’ choices should be said to<br>proportionately represent the entire population’s preferences cannot be determined<br>from (2) alone; NOT sufficient.<br><br>If (1) and (2) are both true, it is possible that 70% of the broader population prefers Product<br>X, just as 70% of the survey respondents claimed to prefer it, but it’s also possible that some<br>much different percentage of the broader population prefers Product X. Thus, whether the<br>survey participants’ choices should be said to proportionately represent the entire<br>population’s preferences cannot be determined even from both statements together.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h026',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'What is a limiting factor when it comes to us using the most effective solution?<br><br><strong>1.</strong> We have identified several potential solutions, but a lack of funding hinders their implementation.<br><strong>2.</strong> As the most effective solution requires extensive resources, we must opt for a more affordable option given our budget.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'B',
    explanation: '<strong>Inference</strong><br><br>1. Even if a lack of funding hinders the implementation of several potential solutions we<br>have identified, maybe none of those potential solutions is the most effective solution.<br>Perhaps the most effective solution is well within our budget, but we haven’t identified it.<br>Thus, an example of a limiting factor when it comes to us using the most effective solution<br>cannot be determined from (1) alone; NOT sufficient.<br>2. If the extensive resources required by the most effective solution require us to opt for a<br>more affordable option given our budget, then cost must be one limiting factor when it<br>comes to us using the most effective solution. Thus, (2) alone provides an example of a<br>limiting factor when it comes to us using the most effective solution; SUFFICIENT.<br>The correct answer is B; statement 2 alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: green;">✓ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h027',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'What are all the important considerations for making accurate projections?<br><br><strong>1.</strong> Based on the available data, we believe that the market demand for our product will increase by 20% in the next quarter.<br><strong>2.</strong> Without comprehensive market research, our projection may not account for external factors that could influence fluctuations in demand.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. An observation about how “we” believe market demand for a product will change in the<br>next quarter provides no information about important considerations for making<br>accurate projections. Thus, what considerations are important for making accurate<br>projections cannot be determined from (1) alone; NOT sufficient.<br>2. (2)’s claim that our projection may not account for external factors without<br>comprehensive market research doesn’t tell us what considerations are generally<br>important for making accurate projections. (2) leaves open the possibility that our<br>projection may account for external factors without comprehensive market research. It<br>also leaves open the possibility that the projection may be accurate even if it doesn’t<br>account for external factors, or that it may be inaccurate even if it does account for such<br>factors. Furthermore, even if comprehensive market research were one important<br>consideration for making our projection, that wouldn’t tell us what the other important<br>considerations for making the projection are. And finally, even if we knew all the<br>important considerations for making this particular projection, that wouldn’t tell us what<br>considerations are important for making accurate projections in general. Thus, what<br>considerations are important for making accurate projections cannot be determined<br>from (2) alone; NOT sufficient.<br><br>Since (1) is completely irrelevant to determining the considerations important for making<br>accurate projections, while (2) is inadequate for determining them, even both statements<br>together can’t tell us what considerations are important for making accurate projections.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h028',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Does Company X strive to maintain a low defect rate in order to ensure product quality?<br><br><strong>1.</strong> Company X’s manufacturing process has a defect rate of 2% according to quality control data.<br><strong>2.</strong> Monitoring the defect rate in a manufacturing process is essential to ensure product quality, and a low percentage indicates a well-maintained production process.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Inference</strong><br><br>1. Knowing that quality control data says the defect rate for Company’s X’s manufacturing<br>process is 2% tells us nothing about whether Company X strives to maintain a low defect<br>rate. First, the quality control data may be inaccurate or fraudulent. Second, without<br>further context, we can’t tell whether a 2% defect rate is low or high. And finally, even if a<br>2% defect rate is low, we don’t know whether Company X is striving to keep it low to<br>ensure product quality. Thus, whether Company X strives to maintain a low defect rate in<br>order to ensure product quality cannot be determined from (1) alone; NOT sufficient.<br>2. Even if monitoring the defect rate in a manufacturing process is essential to ensure<br>product quality, Company X may not monitor it. And even if a low defect rate indicates a<br>well-maintained production process, Company X’s defect rate may be high. Thus, whether<br>Company X strives to maintain a low defect rate in order to ensure product quality<br>cannot be determined from (2) alone; NOT sufficient.<br>Even if (1) is true, the real defect rate for Company X’s manufacturing process might be higher<br>than the quality control data suggests. And even if the defect rate is really 2%, that might be<br>quite a high rate for Company X’s product and manufacturing process. If the defect rate is<br>high, then (2) does not imply that Company X is striving to maintain a low defect rate. Thus,<br>(1) and (2) together don’t tell us whether Company X strives to maintain a low defect rate.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h029',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'How might career advancement be described as potentially linked to both growth and decline?<br><br><strong>1.</strong> Working long hours and overtime may lead to higher productivity and career advancement but is likely to cause a decline in physical and mental well-being.<br><strong>2.</strong> Maintaining a work-life balance is important to reduce the negative effect that working too much has on a person’s quality of life.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'A',
    explanation: '<strong>Inference</strong><br><br>1. (1) describes how working long hours and overtime is potentially linked to a type of<br>growth (in productivity) and also to a type of decline (in well-being) as well as to career<br>advancement. That is, (1) directly describes a way that career advancement is potentially<br>linked to both growth and decline, via working long hours and overtime. Since (1) itself is<br>an answer to the question, it is sufficient to answer it; SUFFICIENT.<br>2. (2) says nothing about growth or career advancement. Thus, (2) alone doesn’t tell us how<br>career advancement might be described as potentially linked to both growth and decline.<br>NOT sufficient.<br>The correct answer is A; statement 1 alone is sufficient.<br><br><span style="color: green;">✓ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h030',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'What is an example of how investment in healthcare resources might sometimes create a challenge?<br><br><strong>1.</strong> Investment in both advanced medical technology and specialized treatments can improve patient outcomes for certain conditions. Nevertheless, it may put a strain on healthcare budgets.<br><strong>2.</strong> When it comes to allocating resources in the healthcare sector, directing money toward the purchase of advanced medical equipment could potentially limit access to other essential services and treatments.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Inference</strong><br><br>1. (1) gives an example of how investment in certain healthcare resources (advanced<br>medical technology and specialized treatments) might create a challenge (by straining<br>healthcare budgets). Thus, (1) alone directly answers the question; SUFFICIENT.<br>2. (2) gives an example of how investment in certain healthcare resources (advanced<br>medical equipment) might create a challenge (by limiting access to other essential<br>services and treatments). Thus, (2) alone directly answers the question; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h031',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A person bought x number of apples, y number of oranges, and z number of mangoes from a shop. What is the total price of this transaction if each apple costs $2, each orange costs $2.50, and each mango costs $3?<br><br><strong>1.</strong> The number of apples bought is 12 more than the number of oranges bought. The number of mangoes bought is half the number of apples bought.<br><strong>2.</strong> The average number of fruits purchased from the three varieties is greater than 29 and less than 33.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Applied Problems</strong><br><br>1. (1) tells us that x = y + 12 = 2z. But this doesn’t tell us exactly how much fruit was<br>purchased. For example, it could be that x is 14, y is 2, and z is 7. Or it could be that x is<br>16, y is 4, and z is 8. The total price would be greater in the latter case, because more fruit<br>of each type would have been purchased. Thus, the total price of the transaction cannot<br>be determined from (1) alone; NOT sufficient.<br>2. (2) tells us only a range of values for the average number of fruits purchased of the three<br>varieties. Even if we knew more precisely that the average was exactly 30, we still couldn’t<br>tell the total price of the transaction, because the different types of fruit differ in price.<br>For example, this average would be 30 if the transaction included 10 apples, 30 oranges,<br>and 50 mangoes. But the average would also be 30 if the transaction included exactly 30<br>apples, 30 oranges, and 30 mangoes. The total price would be higher in the former case<br>than in the latter, because the mangoes cost more apiece than the apples. Thus, the total<br>price of the transaction cannot be determined from (2) alone; NOT sufficient.<br>If (1) and (2) are both true, then we know from (1) that x = y + 12 = 2z. And we know from<br>(2) that the average number of fruits of the three varieties is greater than 29 and less than 33;<br>that is, 3(29) = 87 < x + y + z < 3(33) = 99. But this still doesn’t tell us exactly how much fruit<br>was purchased. Notice that the average need not be a whole number. It could be a fraction.<br>For example, it’s possible that x is 40, y is 28, and z is 20. That gives us x + y + z = 88, yielding<br>an average of 88/3 = 29 1/3—which is greater than 29 and less than 33. Or it could be that x<br>is 42, y is 30, and z is 21, which gives us x + y + z = 93, yielding an average of 93/3 = 31—<br>which is also greater than 29 and less than 33. The total price would be greater in the latter<br><br>case, because more fruit of each type would have been purchased. Thus, the total price of the<br>transaction cannot be determined even from the two statements together.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h032',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Adam received a certain monetary amount in bills having only three denominations: $1, $5, and $10. What is the total monetary amount in bills that he received?<br><br><strong>1.</strong> The numbers of $1, $5, and $10 bills Adam received, respectively, are in the ratio 3:5:8.<br><strong>2.</strong> The ratio of the monetary amount Adam received in $1 bills to the monetary amount he received in $10 bills is 3:80.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Applied Problems</strong><br><br>1. More than one total monetary amount in bills is possible that satisfies the given<br>information and (1). For example, the numbers of $1, $5, and $10 bills, respectively, could<br>be 3, 5, and 8 for a total monetary amount of $108. Or the numbers of $1, $5, and $10<br>bills, respectively, could be 6, 10, and 16 for a total monetary amount of $216; NOT<br>sufficient.<br>2. Since no information is given about the number of $5 bills, the total monetary amount in<br>bills cannot be determined; NOT sufficient.<br>Letting k be the proportionality constant in (1), it follows that the numbers of $1, $5, and $10<br>bills, respectively, are 3k, 5k, and 8k. Hence, the total monetary amount Adam received in $1<br>bills is 3k($1) = $3k, and the total monetary amount he received in $10 bills is 8k($10) = $80k.<br>Thus, (1) implies that the ratio of the monetary amount Adam received in $1 bills to the<br>monetary amount he received in $10 bills is 3k:80k, or 3:80. Since this result is identical to the<br>information provided by (2), it follows that taking (1) and (2) together provides no more<br>information than (1) alone, which is not sufficient. Therefore, (1) and (2) together are not<br>sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  },
  {
    id: 'ds_h033',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'Exactly 3 investors—A, B, and C—invested in a certain business, each for a certain number of months. For these investments, what is the ratio of the profit earned by A to the profit earned by B to the profit earned by C? (Note: Profit earned is proportional to the product of investment amount and investment duration.)<br><br><strong>1.</strong> A invested twice as much as B, and C invested half as much as A and B together.<br><strong>2.</strong> All 3 investments were for the same number of months.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'C',
    explanation: '<strong>Applied Problems</strong><br><br>Let x, y, and z be the numbers of months, respectively, that A, B, and C invested. Let $a, $b, and<br>$c be the amounts, respectively, that A, B, and C invested. Then, if k is the constant of<br>proportionality associated with these investments, the profits earned by A, B, and C,<br>respectively, are $kax, $kby, and $kcz. We are to determine the ratio kax:kby:kcz. Equivalently,<br>we are to determine the ratio ax:by:cz.<br>1. We are given that a = 2b and c = (a + b). Since we are given no information about x, y, or<br>z, it is not possible to determine the ratio ax:by:cz; NOT sufficient.<br>2. We are given that x = y = z. Since we are given no information about a, b, or c, it is not<br>possible to determine the ratio ax:by:cz; NOT sufficient.<br><br>From (2) we have ax:by:cz = ax:bx:cx = a:b:c. From (1) we have a = 2b and c = a + b, and<br>hence c = (2b) + b, = b. Therefore, a:b:c = 2b:b:  b = 2:1: , or 4:2:3.<br>The correct answer is C; both statements together are sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: green;">✓ C</span> <span style="color: red;">✗ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h034',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'The ratio of A’s current age to B’s current age is 5:8. What will be the sum of their ages 10 years from now? (Note: Assume that neither A nor B dies in the next 10 years.)<br><br><strong>1.</strong> If A had been born 2 years later and B had been born 2 years earlier, then the ratio of A’s current age to B’s current age would be 14:25.<br><strong>2.</strong> A’s age 5 years ago was half the age that B will be 2 years from now.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Applied Problems</strong><br><br>Let k be the constant of proportionality for the 5:8 ratio of A’s current age to B’s current age.<br>Then A’s current age is 5k and B’s current age is 8k. We are to determine the value of (5k +<br>10) + (8k + 10) = 13k + 20, or equivalently, we are to determine the value of k.<br>1. If A had been born 2 years later, then A’s current age would be 5k – 2, and if B had been<br>born 2 years earlier, then B’s current age would be 8k + 2. We are told that the ratio (5k –<br>2):(8k + 2) is equal to 14:25. Thus, <br> = <br>. Cross multiplying gives a first-degree<br>equation that can be solved for a unique value of k. Although it is not necessary to find<br>the value of k, solving this equation gives k = 6; SUFFICIENT.<br>2. We are given that 5k – 5 = (8k + 2), which can be solved for a unique value of k.<br>Although it is not necessary to find the value of k, solving this equation gives k = 6;<br>SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h035',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'A’s father is 6 years older than her mother. The ratio of A’s age to her mother’s age is 1:4. What is the age of A’s father?<br><br><strong>1.</strong> A’s father is 30 years older than A.<br><strong>2.</strong> The ratio of A’s age to her father’s age is 4:19.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'D',
    explanation: '<strong>Applied Problems</strong><br><br>Let a, f, and m be, respectively, the ages of A, A’s father, and A’s mother. We are given that f = m<br>+ 6 and <br> = . Thus, m = f – 6, and hence we get <br> = , or 4a = f – 6. We are to<br>determine the value of f = 4a + 6.<br>1. We are given that f = 30 + a. Since we also know that f = 4a + 6, it follows that 30 + a = 4a<br>+ 6. This is a first-degree equation that can be solved for a unique value of a, which can<br>then be used to determine a unique value of f = 4a + 6. Although it is not necessary to<br>find these values, solving gives a = 8 and f = 38; SUFFICIENT.<br>2. We are given that  = <br> Since we also know that f = 4a + 6, it follows that <br> =<br>. Cross multiplying gives a first-degree equation that can be solved for a unique value<br>of a, which can then be used to determine a unique value of f. Although it is not necessary<br>to find these values, solving gives a = 8 and f = 38; SUFFICIENT.<br>The correct answer is D; each statement alone is sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: green;">✓ D</span> <span style="color: red;">✗ E</span> '
  },
  {
    id: 'ds_h036',
    section: 'data-insights',
    subsection: 'ds',
    difficulty: 'hard',
    prompt: 'The salary of A is what percentage of the combined salaries of B and C?<br><br><strong>1.</strong> Twice the salary of A is equal to three times the salary of B.<br><strong>2.</strong> 150% of B’s salary is $160 more than 120% of C’s salary.',
    choices: [
    { id: 'A', text: 'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.' },
    { id: 'B', text: 'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.' },
    { id: 'C', text: 'BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.' },
    { id: 'D', text: 'EACH statement ALONE is sufficient.' },
    { id: 'E', text: 'Statements (1) and (2) TOGETHER are NOT sufficient.' }
  ],
    correctAnswer: 'E',
    explanation: '<strong>Applied Problems</strong><br><br>Let $a, $b, and $c be the salaries, respectively, of A, B, and C. We are to determine a as a<br>percent of b + c, or equivalently, we are to determine the value of <br>.<br>1. We are given that 2a = 3b, or a = b. Since we are given no information about the value<br>of the positive number c, it follows that the value of <br> cannot be determined; NOT<br>sufficient.<br>2. We are given that 1.5b = 160 + 1.2c. Since we are given no information about the value of<br>the positive number a, it follows that the value of <br> cannot be determined; NOT<br>sufficient.<br>From (1) we have <br> = <br>. From (2) we have 15b = 1,600 + 12c, or 12c = 15b – 1,600. To<br>avoid additional complications with fractions when incorporating 12c = 15b – 1,600 into <br>, multiply the numerator and denominator of this last fraction by 12 to get <br>. Now<br>replace 12c in this fraction with 15b – 1,600 to get <br> = <br>. This<br>last fraction is equal to the value of <br>, and it is clear that the value of this last fraction can<br>vary. For example, if b is very large, then <br> ≈ <br> = ; and if 27b is only a little<br>larger than 1,600, then <br> = <br> will be much larger than <br>(e.g., if b = 60, then the value of this fraction is 54). Therefore, (1) and (2) together are NOT<br>sufficient.<br>The correct answer is E; both statements together are still not sufficient.<br><br><span style="color: red;">✗ A</span> <span style="color: red;">✗ B</span> <span style="color: red;">✗ C</span> <span style="color: red;">✗ D</span> <span style="color: green;">✓ E</span> '
  }
);
