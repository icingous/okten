"use strict";
{
    // #iz6emEsP2BA
    // – є масив
    // let coursesAndDurationArray = [
    //     {title: ‘JavaScript Complex’, monthDuration: 5},
    //     {title: ‘Java Complex’, monthDuration: 6},
    //     {title: ‘Python Complex’, monthDuration: 6},
    //     {title: ‘QA Complex’, monthDuration: 4},
    //     {title: ‘FullStack’, monthDuration: 7},
    //     {title: ‘Frontend’, monthDuration: 4}
    // ];
    // за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
    // Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 },
    ].map((item, i) => ({ ...item, id: i + 1 }));
    console.log(coursesAndDurationArray);
    // #AiN5CoUQ
    // Створити функцію, яка робить глибоку копію об’єкта.
    // Додати перевірки на undefined, null, NaN.
    // Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
    const copyObject = (object) => {
        if (!(object instanceof Object)) {
            return object;
        }
        const copy = JSON.parse(JSON.stringify(object));
        for (const key in object) {
            if (typeof object[key] === 'function') {
                copy[key] = object[key];
            }
        }
        copy.__proto__ = object.__proto__;
        return copy;
    };
    class Prince {
        name;
        age;
        slipper;
        constructor(name, age, slipper) {
            this.name = name;
            this.age = age;
            this.slipper = slipper;
        }
        findCinderella(cinderellas) {
            return cinderellas.find((item) => item.footSize === this.slipper.size);
        }
    }
    const prince = new Prince('Prince', 30, {
        size: 27 + Math.floor(Math.random() * 10),
    });
    const cat = {
        eyesColor: 'yellow',
        sound() {
            console.log('Meow');
        },
    };
    const testItems = [prince, cat, [], 5, undefined, NaN, null];
    const copies = testItems.map((item) => copyObject(item));
    copies.forEach((item, i) => console.log({ item, isEqualToOriginal: item === testItems[i] }));
    class Cinderella {
        name;
        age;
        footSize;
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }
    const cinderellas = Array(10);
    for (let i = 0; i < 10; ++i) {
        cinderellas[i] = new Cinderella(`Cinderella${i + 1}`, 18 + i, 27 + i);
    }
    console.log(prince.findCinderella(cinderellas));
    console.log(copies[0].findCinderella(cinderellas));
}
