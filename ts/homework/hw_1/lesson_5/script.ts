// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
{
  const rectSquare = (a: number, b: number): number => a * b;

  console.log(rectSquare(5, 5));

  // #ETGAxbEn8l
  // – створити функцію, яка обчислює та повертає площу кола з радіусом r

  const circleSquare = (r: number): number => Math.PI * Math.pow(r, 2);

  console.log(circleSquare(5));

  // #Mbiz5K4yFe7
  // – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

  const circleCylinder = (r: number, h: number): number =>
    2 * Math.PI * r * h + 2 * circleSquare(r);

  console.log(circleCylinder(5, 10));

  // #SIdMd0hQ
  // – створити функцію, яка приймає масив та виводить кожен його елемент

  const printArray = (arr: any[]): void => {
    for (const item of arr) {
      console.log(item);
    }
  };

  printArray([5, 10]);

  // #59g0IsA
  // – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

  const writeParagraph = (text: string): void =>
    document.write(`<p>${text}</p>`);

  writeParagraph('абабагаламага');

  // #hOL6126
  // – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

  const writeList = (listItemText: string): void => {
    document.write('<ul>');
    document.write(`<li>${listItemText}</li>`);
    document.write(`<li>${listItemText}</li>`);
    document.write(`<li>${listItemText}</li>`);
    document.write('</ul>');
  };

  writeList('listItem');

  // #0Kxco1edSN
  // – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

  const writeList2 = (listItemText: string, listLength: number): void => {
    document.write('<ul>');

    for (let i = 0; i < listLength; ++i) {
      document.write(`<li>${listItemText}</li>`);
    }

    document.write('</ul>');
  };

  writeList2('listItem2', 5);

  // #gEFoxMMO
  // – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

  const writeArrayOfPrimitives = (arr: (number | string | boolean)[]): void => {
    document.write('<ul>');

    for (const item of arr) {
      document.write(`<li>${item}</li>`);
    }

    document.write('</ul>');
  };

  writeArrayOfPrimitives(['list', 5, true]);

  // #bovDJDTIjt
  // – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

  const writeArrayOfObjects = (
    arr: {
      id: number;
      name: string;
      age: number;
    }[]
  ): void => {
    for (const item of arr) {
      document.write('<div>');
      document.write(
        `<span>${item.id}</span> <span>${item.name}</span> <span>${item.age}</span>`
      );
      document.write('</div>');
    }
  };

  writeArrayOfObjects([
    { id: 1, name: 'Kokos', age: 18 },
    { id: 2, name: 'Abrykos', age: 19 },
    { id: 3, name: 'Kavun', age: 20 },
  ]);

  // #pghbnSB
  // – створити функцію яка повертає найменьше число з масиву

  const findMinArrayItem = (arr: number[]): number => {
    let min = arr[0]!;

    for (let i = 1; i < arr.length; ++i) {
      if (arr[i]! < min) {
        min = arr[i]!;
      }
    }

    return min;
  };

  console.log(findMinArrayItem([0, 5, -1, 0]));

  // #EKRNVPM
  // – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

  const sumArrayItems = (arr: number[]): number => {
    let sum = arr[0]!;

    for (let i = 1; i < arr.length; ++i) {
      sum += arr[i]!;
    }

    return sum;
  };

  console.log(sumArrayItems([1, 2, 3, 4]));

  // – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
  // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

  const swapArrayItems = (
    arr: any[],
    index1: number,
    index2: number
  ): any[] => {
    let tmp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = tmp;

    return arr;
  };

  const arr = [1, 2, 3, 4, 5];
  swapArrayItems(arr, 0, 1);
  console.log(arr);

  // #mkGDenYnNjn.html
  //  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
  // Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

  const exchange = (
    sumUAH: number,
    currencyValues: { currency: string; value: number }[],
    exchangeCurrency: string
  ): number | undefined => {
    let currency;

    for (const item of currencyValues) {
      if (exchangeCurrency === item.currency) {
        currency = item;
        break;
      }
    }

    if (currency) {
      return sumUAH / currency.value;
    }
  };

  console.log(
    exchange(
      10000,
      [
        { currency: 'USD', value: 25 },
        { currency: 'EUR', value: 42 },
      ],
      'USD'
    )
  );
}
