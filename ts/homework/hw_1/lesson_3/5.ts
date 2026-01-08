// #vLSZKMlO
// – Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру за шаблоном

// Масив:

// let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];

// ШАБЛОН:

//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!–
//         і тд інші об’єкти масиву
//          …
//          …
//          …
//     –>
// </ul>

// замість ‘ITEM OF ARRAY’ підставити елемент з масиву, щоб вийшов цілий список з даними з масиву

let listOfItems = [
  'html',
  'css',
  'javascript',
  'mysql',
  'mongodb',
  'react',
  'angular',
  'node.js',
];

document.write('<ul>');

for (let item of listOfItems) {
  document.write(`<li>${item}</li>`);
}

document.write('</ul>');
