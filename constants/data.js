const problemStatments = [
  {
    title: "Xenia and Ringroad",
    time_limit_per_test: 2,
    memory_limit_per_test: 256,
    problemStatment:
      "Xenia lives in a city that has n houses built along the main ringroad. The ringroad houses are numbered 1 through n in the clockwise order. The ringroad traffic is one way and also is clockwise.\n Xenia has recently moved into the ringroad house number 1. As a result, she's got m things to do. In order to complete the i-th task, she needs to be in the house number ai and complete all tasks with numbers less than i. Initially, Xenia is in the house number 1, find the minimum time she needs to complete all her tasks if moving from a house to a neighboring one along the ringroad takes one unit of time.",
    input:
      "The first line contains two integers n and m (2 ≤ n ≤ 105, 1 ≤ m ≤ 105). The second line contains m integers a1, a2, ..., am (1 ≤ ai ≤ n). Note that Xenia can have multiple consecutive tasks in one house.",
    output:
      "Print a single integer — the time Xenia needs to complete all tasks.\n Please, do not use the %lld specifier to read or write 64-bit integers in С++. It is preferred to use the cin, cout streams or the %I64d specifier.",
    examples: [
      {
        input: "4 3 3 2 3",
        output: "6",
      },
      {
        input: "4 3 2 3 3",
        output: "2",
      },
    ],
  },
  {
    title: "Way Too Long Words",
    time_limit_per_test: 1,
    memory_limit_per_test: 256,
    problemStatment:
      'Sometimes some words like "localization" or "internationalization" are so long that writing them many times in one text is quite tiresome.\n Let\'s consider a word too long, if its length is strictly more than 10 characters. All too long words should be replaced with a special abbreviation.\n This abbreviation is made like this: we write down the first and the last letter of a word and between them we write the number of letters between the first and the last letters. That number is in decimal system and doesn\'t contain any leading zeroes.\n Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".\n You are suggested to automatize the process of changing the words with abbreviations. At that all too long words should be replaced by the abbreviation and the words that are not too long should not undergo any changes.',
    input:
      "The input file consists of three lines: the first line contains the guest's name, the second line contains the name of the residence host and the third line contains letters in a pile that were found at the door in the morning. All lines are not empty and contain only uppercase Latin letters. The length of each line does not exceed 100.",
    output:
      "Print n lines. The i-th line should contain the result of replacing of the i-th word from the input data.",
    examples: [
      {
        input:
          "4 word localization internationalization pneumonoultramicroscopicsilicovolcanoconiosis",
        output: "word l10n i18n p43s",
      },
    ],
  },
  {
    title: "Amusing Joke",
    time_limit_per_test: 2,
    memory_limit_per_test: 256,
    problemStatment:
      'So, the New Year holidays are over. Santa Claus and his colleagues can take a rest and have guests at last. When two "New Year and Christmas Men" meet, thear assistants cut out of cardboard the letters from the guest\'s name and the host\'s name in honor of this event. Then the hung the letters above the main entrance. One night, when everyone went to bed, someone took all the letters of our characters\' names. Then he may have shuffled the letters and put them in one pile in front of the door.\n The next morning it was impossible to find the culprit who had made the disorder. But everybody wondered whether it is possible to restore the names of the host and his guests from the letters lying at the door? That is, we need to verify that there are no extra letters, and that nobody will need to cut more letters.\n Help the "New Year and Christmas Men" and their friends to cope with this problem. You are given both inscriptions that hung over the front door the previous night, and a pile of letters that were found at the front door next morning.',
    input:
      "The input file consists of three lines: the first line contains the guest's name, the second line contains the name of the residence host and the third line contains letters in a pile that were found at the door in the morning. All lines are not empty and contain only uppercase Latin letters. The length of each line does not exceed 100.",
    output:
      'Print "YES" without the quotes, if the letters in the pile could be permuted to make the names of the "New Year and Christmas Men". Otherwise, print "NO" without the quotes.',
    examples: [
      {
        input: "SANTACLAUS DEDMOROZ SANTAMOROZDEDCLAUS",
        output: "YES",
      },
      {
        input: "PAPAINOEL JOULUPUKKI JOULNAPAOILELUPUKKI",
        output: "NO",
      },
    ],
  },
  {
    title: "Ultra-Fast Mathematician",
    time_limit_per_test: 2,
    memory_limit_per_test: 256,
    problemStatment:
      "Shapur was an extremely gifted student. He was great at everything including Combinatorics, Algebra, Number Theory, Geometry, Calculus, etc. He was not only smart but extraordinarily fast! He could manage to sum 1018 numbers in a single second.\n One day in 230 AD Shapur was trying to find out if any one can possibly do calculations faster than him. As a result he made a very great contest and asked every one to come and take part. In his contest he gave the contestants many different pairs of numbers. Each number is made from digits 0 or 1. The contestants should write a new number corresponding to the given pair of numbers. The rule is simple: The i-th digit of the answer is 1 if and only if the i-th digit of the two given numbers differ. In the other case the i-th digit of the answer is 0.\n Shapur made many numbers and first tried his own speed. He saw that he can perform these operations on numbers of length ∞ (length of a number is number of digits in it) in a glance! He always gives correct answers so he expects the contestants to give correct answers, too. He is a good fellow so he won't give anyone very big numbers and he always gives one person numbers of same length.\n Now you are going to take part in Shapur's contest. See if you are faster and more accurate.",
    input:
      "There are two lines in each input. Each of them contains a single number. It is guaranteed that the numbers are made from 0 and 1 only and that their length is same. The numbers may start with 0. The length of each number doesn't exceed 100.",
    output:
      "Write one line — the corresponding answer. Do not omit the leading 0s.",
    examples: [
      {
        input: "1010100 0100101",
        output: "1110001",
      },
      {
        input: "000 111",
        output: "111",
      },
    ],
  },
  {
    title: "Petya and Strings",
    time_limit_per_test: 2,
    memory_limit_per_test: 256,
    problemStatment:
      "Little Petya loves presents. His mum bought him two strings of the same size for his birthday. The strings consist of uppercase and lowercase Latin letters. Now Petya wants to compare those two strings lexicographically. The letters' case does not matter, that is an uppercase letter is considered equivalent to the corresponding lowercase letter. Help Petya perform the comparison.",
    input:
      "Each of the first two lines contains a bought string. The strings' lengths range from 1 to 100 inclusive. It is guaranteed that the strings are of the same length and also consist of uppercase and lowercase Latin letters.",
    output:
      'If the first string is less than the second one, print "-1". If the second string is less than the first one, print "1". If the strings are equal, print "0". Note that the letters\' case is not taken into consideration when the strings are compared.',
    examples: [
      {
        input: "aaaa aaaA",
        output: "0",
      },
      {
        input: "abs Abz",
        output: "-1",
      },
    ],
  },
  {
    title: "Presents",
    time_limit_per_test: 2,
    memory_limit_per_test: 256,
    problemStatment:
      "Little Petya very much likes gifts. Recently he has received a new laptop as a New Year gift from his mother. He immediately decided to give it to somebody else as what can be more pleasant than giving somebody gifts. And on this occasion he organized a New Year party at his place and invited n his friends there. \nIf there's one thing Petya likes more that receiving gifts, that's watching others giving gifts to somebody else. Thus, he safely hid the laptop until the next New Year and made up his mind to watch his friends exchanging gifts while he does not participate in the process. He numbered all his friends with integers from 1 to n. Petya remembered that a friend number i gave a gift to a friend number pi. He also remembered that each of his friends received exactly one gift. \nNow Petya wants to know for each friend i the number of a friend who has given him a gift.",
    input:
      "The first line contains one integer n (1 ≤ n ≤ 100) — the quantity of friends Petya invited to the party. The second line contains n space-separated integers: the i-th number is pi — the number of a friend who gave a gift to friend number i. It is guaranteed that each friend received exactly one gift. It is possible that some friends do not share Petya's ideas of giving gifts to somebody else. Those friends gave the gifts to themselves.",
    output:
      "Print n space-separated integers: the i-th number should equal the number of the friend who gave a gift to friend number i.",
    examples: [
      {
        input: "4 2 3 4 1",
        output: "4 1 2 3",
      },
      {
        input: "3 1 3 2",
        output: "1 3 2",
      },
    ],
  },
];



export default problemStatments