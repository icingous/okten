"use strict";
// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
{
    class User {
        constructor(id, name, surname, email, phone) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
        }
    }
    const users = [];
    for (let i = 0; i < 10; ++i) {
        const id = i + 1;
        users[i] = new User(id, `Name${id}`, `Surname${id}`, `name${id}.surname${id}@google.com`, '+38067' + String(i).repeat(7));
    }
    console.log(users);
    // #2ikXsE2WiKZ
    // – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
    const evenUsers = users.filter((user) => user.id % 2 === 0);
    console.log(evenUsers);
    // #pOeHKct
    // – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
    const sortedUsers = users.sort((a, b) => a.id - b.id);
    console.log(sortedUsers);
    // #nkMXISv
    // – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    // створити пустий масив, наповнити його 10 об’єктами Client
    const words = Array.from(new Set('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, porro. Beatae ipsa provident corrupti similique magnam fugit? Dicta dolorem amet magnam quidem praesentium at consectetur ipsum iure, autem sapiente. Non, dolorum! Recusandae, id quia perspiciatis cupiditate assumenda iure consequatur ex temporibus corrupti nulla, aspernatur suscipit officiis itaque, quam tenetur dicta.'
        .replaceAll('.', '')
        .replaceAll(',', '')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .split(' ')
        .filter((item) => item.length > 2)
        .map((item) => `${item[0].toUpperCase()}${item.substring(1)}`)));
    const makeOrder = () => {
        const order = new Set();
        const size = Math.ceil(Math.random() * 9);
        for (let i = 0; i < size; ++i) {
            order.add(words[Math.floor(Math.random() * words.length)]);
        }
        return Array.from(order).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    };
    class Client extends User {
        constructor(id, name, surname, email, phone, order) {
            super(id, name, surname, email, phone);
            this.order = order;
        }
    }
    const clients = [];
    for (let i = 0; i < 10; ++i) {
        const id = i + 1;
        clients[i] = new Client(id, `Name${id}`, `Surname${id}`, `name${id}.surname${id}@google.com`, '+38067' + String(i).repeat(7), makeOrder());
    }
    console.log(clients);
    // #8abtVjRv
    // – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
    const sortedClients = Array.from(clients).sort((a, b) => a.order.length - b.order.length);
    console.log(sortedClients);
    class Car {
        constructor(model, manufacturer, productionYear, maxSpeed, capacity) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.productionYear = productionYear;
            this.maxSpeed = maxSpeed;
            this.capacity = capacity;
            this.driver = null;
        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info() {
            for (const key in this) {
                console.log(`${key} - ${JSON.stringify(this[key])}`);
            }
        }
        increaseMaxSpeed(increment) {
            if (increment > 0) {
                this.maxSpeed += increment;
            }
        }
        changeYear(year) {
            if (year > 1980) {
                this.productionYear = year;
            }
        }
        addDriver(driver) {
            if (driver && driver.licence) {
                this.driver = driver;
            }
        }
    }
    const myCar = new Car('2103', 'vaz', 1982, 180, 1300);
    myCar.info();
    myCar.drive();
    myCar.increaseMaxSpeed(20);
    myCar.changeYear(1984);
    myCar.addDriver({ name: 'Mango', licence: 'ABC 123456', owner: false });
    myCar.info();
    // #5kla3yMpgp
    // – (Те саме, тільки через клас)
    // Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    // — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    //     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    //     — changeYear (newValue) – змінює рік випуску на значення newValue
    //     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
    class Car2 {
        constructor(model, manufacturer, productionYear, maxSpeed, capacity) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.productionYear = productionYear;
            this.maxSpeed = maxSpeed;
            this.capacity = capacity;
        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info() {
            for (const key in this) {
                console.log(`${key} - ${JSON.stringify(this[key])}`);
            }
        }
        increaseMaxSpeed(increment) {
            if (increment > 0) {
                this.maxSpeed += increment;
            }
        }
        changeYear(year) {
            if (year > 1980) {
                this.productionYear = year;
            }
        }
        addDriver(driver) {
            if (driver && driver.licence) {
                this.driver = driver;
            }
        }
    }
    const myCar2 = new Car2('2108', 'vaz', 1992, 180, 1300);
    myCar2.info();
    myCar2.drive();
    myCar2.increaseMaxSpeed(20);
    myCar2.changeYear(1984);
    myCar2.addDriver({ name: 'Ajax', licence: 'CBA 654321', owner: false });
    myCar2.info();
    // #zg6Fifnqig
    // – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
    // Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
    // За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
    // Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
    class Cinderella {
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }
    class Prince {
        constructor(name, age, slipper) {
            this.name = name;
            this.age = age;
            this.slipper = slipper;
        }
    }
    const prince = new Prince('Prince', 30, {
        size: 27 + Math.floor(Math.random() * 10),
    });
    const cinderellas = Array(10);
    for (let i = 0; i < 10; ++i) {
        cinderellas[i] = new Cinderella(`Cinderella${i + 1}`, 18 + i, 27 + i);
    }
    const trueCinderella = cinderellas.find((item) => item.footSize === prince.slipper.size);
    console.log(trueCinderella);
    // #gsKLAsNWM
    // *Через Array.prototype. створити власний foreach, filter
    Array.prototype.myForEach = function (cb) {
        const a = this;
        for (let i = 0; i < this.length; ++i) {
            cb(a[i], i, a);
        }
    };
    Array.prototype.myFilter = function (cb) {
        const a = this;
        return a.filter((item, i, a) => cb(item, i, a));
    };
    cinderellas.myForEach((c, i, a) => console.log(c.name));
    const cindies = cinderellas.myFilter((c, i, a) => c.footSize > 30 && c.footSize < 35);
    console.log(cindies);
}
