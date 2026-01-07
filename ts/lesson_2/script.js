"use strict";
// #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
{
    let arr = [
        true,
        1,
        'abc',
        undefined,
        null,
        { name: 'JS Complex', type: 'VIP' },
        ['html/css', 'js'],
        prompt,
        3.14,
        '',
    ];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
}
// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
{
    let book1 = { title: 'A', pageCount: 25, genre: 'Фантастика' };
    let book2 = { title: 'B', pageCount: 125, genre: 'Мемуари' };
    let book3 = { title: 'C', pageCount: 225, genre: 'Казки' };
    console.log(book1, book2, book3);
}
// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
{
    let book1 = {
        title: 'A',
        pageCount: 25,
        genre: 'Фантастика',
        authors: [
            { name: 'A', age: 25 },
            { name: 'B', age: 35 },
            { name: 'C', age: 45 },
        ],
    };
    let book2 = {
        title: 'B',
        pageCount: 125,
        genre: 'Мемуари',
        authors: [
            { name: 'A', age: 25 },
            { name: 'C', age: 45 },
        ],
    };
    let book3 = {
        title: 'C',
        pageCount: 225,
        genre: 'Казки',
        authors: [
            { name: 'B', age: 35 },
            { name: 'C', age: 45 },
        ],
    };
    console.log(book1, book2, book3);
}
// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
{
    let user1 = { name: 'f', username: 'f', password: '123' };
    let user2 = { name: 'g', username: 'g', password: '123' };
    let user3 = { name: 'h', username: 'h', password: '123' };
    let user4 = { name: 'i', username: 'i', password: '123' };
    let user5 = { name: 'j', username: 'j', password: '123' };
    let users = [
        { name: 'a', username: 'a', password: '123' },
        { name: 'b', username: 'b', password: '123' },
        { name: 'c', username: 'c', password: '123' },
        { name: 'd', username: 'd', password: '123' },
        { name: 'e', username: 'e', password: '123' },
        user1,
        user2,
        user3,
        user4,
        user5,
    ];
    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
}
// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
{
    let temps = [
        {
            day: 'Mon',
            values: {
                morning: 0,
                afternoon: 5,
                evening: 0,
            },
        },
        {
            day: 'Tue',
            values: {
                morning: -1,
                afternoon: 3,
                evening: 0,
            },
        },
        {
            day: 'Wed',
            values: {
                morning: -5,
                afternoon: 0,
                evening: -2,
            },
        },
        {
            day: 'Thu',
            values: {
                morning: -4,
                afternoon: -1,
                evening: 0,
            },
        },
        {
            day: 'Fri',
            values: {
                morning: 0,
                afternoon: 3,
                evening: -1,
            },
        },
        {
            day: 'Sat',
            values: {
                morning: -2,
                afternoon: 2,
                evening: 0,
            },
        },
        {
            day: 'Sun',
            values: {
                morning: -4,
                afternoon: -1,
                evening: -2,
            },
        },
    ];
    console.log(temps);
}
// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let x = 1;
    console.log(x ? 'вірно' : 'невірно');
    x = 0;
    console.log(x ? 'вірно' : 'невірно');
    x = -3;
    console.log(x ? 'вірно' : 'невірно');
}
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю або четверту частину години).
{
    let time = 59;
    let quarter = Math.floor(time / 15);
    let quarters = ['перша', 'друга', 'третя', 'четверта'];
    console.log(`${quarters[quarter]} чверть`);
}
// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    let day = 31;
    if (day <= 10) {
        console.log('перша декада');
    }
    else if (day <= 20) {
        console.log('друга декада');
    }
    else {
        console.log('третя декада');
    }
}
// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
{
    let day = 1;
    switch (day) {
        case 1:
            console.log('розпорядок 1');
            break;
        case 2:
            console.log('розпорядок 2');
            break;
        case 3:
            console.log('розпорядок 3');
            break;
        case 4:
            console.log('розпорядок 4');
            break;
        case 5:
            console.log('розпорядок 5');
            break;
        case 6:
            console.log('розпорядок 6');
            break;
        case 7:
            console.log('розпорядок 7');
            break;
        default:
            console.log('щось пішло не так, спробуйте ще');
    }
}
// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.
{
    let a = 5;
    let b = 6;
    if (a > b) {
        console.log(a);
    }
    else if (b > a) {
        console.log(b);
    }
    else {
        console.log('числа рівні');
    }
}
// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
{
    let x;
    if (!x) {
        x = 'default';
    }
    console.log(x);
}
// #awLXL6TBzg
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
{
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 },
    ];
    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log('Супер');
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log('Супер');
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log('Супер');
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log('Супер');
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log('Супер');
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log('Супер');
    }
}
