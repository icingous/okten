// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
//  ‘lorem ipsum’
//  ‘javascript is cool’

['hello world', 'lorem ipsum', 'javascript is cool'].forEach((item) =>
  console.log(item.length)
);

// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

['hello world', 'lorem ipsum', 'javascript is cool'].forEach((item) =>
  console.log(item.toUpperCase())
);

// #ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].forEach((item) =>
  console.log(item.toLowerCase())
);

// #0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

console.log(str.trim());

// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

const stringToarray = (str) => str.split(' ');

console.log(stringToarray('Ревуть воли як ясла повні'));

// #Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

const strArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0].map((item) =>
  String(item)
);

console.log(strArr);

// #5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

const sortNums = (array, direction) => {
  const compareAsc = (a, b) => (a > b ? 1 : a < b ? -1 : 0);
  const compareDesc = (a, b) => (a > b ? -1 : a < b ? 1 : 0);

  switch (direction) {
    case 'ascending':
      return array.sort(compareAsc);
    case 'descending':
      return array.sort(compareDesc);
    default:
      return array;
  }
};

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// #yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];

//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
]
  .sort((a, b) =>
    a.monthDuration < b.monthDuration
      ? 1
      : a.monthDuration > b.monthDuration
      ? -1
      : 0
  )
  .filter((item) => item.monthDuration > 5)
  .map((item, i) => ({
    id: i + 1,
    title: item.title,
    monthDuration: item.monthDuration,
  }));

console.log(coursesAndDurationArray);

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
    ],
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced',
    ],
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced',
    ],
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java',
    ],
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'sass',
    ],
  },
];

const sassArr = coursesArray.filter((item) => item.modules.includes('sass'));
const dockerArr = coursesArray.filter((item) =>
  item.modules.includes('docker')
);

console.log(sassArr, dockerArr);

// #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше

// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const getSuitColor = (suit) =>
  ['diamond', 'heart'].includes(suit) ? 'red' : 'black';
const isValueGT9 = (value) => !['6', '7', '8', '9'].includes(value);

const cards = [];

for (const cardSuit of ['spade', 'diamond', 'heart', 'clubs']) {
  for (const value of [
    '6',
    '7',
    '8',
    '9',
    '10',
    'ace',
    'jack',
    'queen',
    'king',
  ]) {
    cards.push({ cardSuit, value, color: getSuitColor(cardSuit) });
  }
}

//  – знайти піковий туз
const spadeAce = cards.find(
  (item) => item.cardSuit === 'spade' && item.value === 'ace'
);
//  – всі шістки
const sixes = cards.filter((item) => item.value === '6');
//  – всі червоні карти
const reds = cards.filter((item) => item.color === 'red');
//  – всі буби
const diamonds = cards.filter((item) => item.cardSuit === 'diamond');
//  – всі трефи від 9 та більше
const clubs = cards.filter(
  (item) => item.cardSuit === 'clubs' && isValueGT9(item.value)
);

console.log(spadeAce, sixes, reds, diamonds, clubs);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const cardsObj = cards.reduce(
  (a, c) => {
    switch (c.cardSuit) {
      case 'spade':
        a.spades.push(c);
        break;
      case 'diamond':
        a.diamonds.push(c);
        break;
      case 'heart':
        a.hearts.push(c);
        break;
      case 'clubs':
        a.clubs.push(c);
        break;
      default:
    }

    return a;
  },
  {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
  }
);

console.log(cardsObj);
