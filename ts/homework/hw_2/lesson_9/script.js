"use strict";
{
    // #8Nmt60ZT
    // – створити блок,
    // – додати йому класи wrap, collapse, alpha, beta
    // – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
    // – додати цей блок в body.
    // – клонувати його повністю, та додати клон в body.
    const div = document.createElement('div');
    div.classList.add('wrap', 'collapse', 'alpha', 'beta');
    div.style.backgroundColor = 'whitesmoke';
    div.style.color = 'maroon';
    div.style.fontSize = '24px';
    div.style.marginBottom = '16px';
    div.innerText = 'A block';
    document.body.appendChild(div);
    const divCopy = div.cloneNode();
    divCopy.innerText = 'A block copy';
    document.body.appendChild(divCopy);
    // #OPLI89c9G
    // – Є масив:
    // [‘Main’,’Products’,’About us’,’Contacts’]
    // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
    const ul = document.createElement('ul');
    ['Main', 'Products', 'About us', 'Contacts'].forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });
    div.appendChild(ul);
    // #jeBqHV525U5
    // – Є масив
    // let coursesAndDurationArray = [
    //     {title: ‘JavaScript Complex’, monthDuration: 5},
    //     {title: ‘Java Complex’, monthDuration: 6},
    //     {title: ‘Python Complex’, monthDuration: 6},
    //     {title: ‘QA Complex’, monthDuration: 4},
    //     {title: ‘FullStack’, monthDuration: 7},
    //     {title: ‘Frontend’, monthDuration: 4}
    // ];
    // Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
    // Завдання робити через цикли
    {
        let coursesAndDurationArray = [
            { title: 'JavaScript Complex', monthDuration: 5 },
            { title: 'Java Complex', monthDuration: 6 },
            { title: 'Python Complex', monthDuration: 6 },
            { title: 'QA Complex', monthDuration: 4 },
            { title: 'FullStack', monthDuration: 7 },
            { title: 'Frontend', monthDuration: 4 },
        ];
        const blocks = Array(coursesAndDurationArray.length);
        for (let i = 0; i < blocks.length; ++i) {
            const div = document.createElement('div');
            const { title, monthDuration } = coursesAndDurationArray[i];
            div.innerText = `course ${title} - ${monthDuration} months`;
            blocks[i] = div;
        }
        divCopy.append(...blocks);
    }
    // #Kx1xgoKy8
    // – Є масив
    // let coursesAndDurationArray = [
    //     {title: ‘JavaScript Complex’, monthDuration: 5},
    //     {title: ‘Java Complex’, monthDuration: 6},
    //     {title: ‘Python Complex’, monthDuration: 6},
    //     {title: ‘QA Complex’, monthDuration: 4},
    //     {title: ‘FullStack’, monthDuration: 7},
    //     {title: ‘Frontend’, monthDuration: 4}
    // ];
    // За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
    // Завдання робити через цикли.
    {
        let coursesAndDurationArray = [
            { title: 'JavaScript Complex', monthDuration: 5 },
            { title: 'Java Complex', monthDuration: 6 },
            { title: 'Python Complex', monthDuration: 6 },
            { title: 'QA Complex', monthDuration: 4 },
            { title: 'FullStack', monthDuration: 7 },
            { title: 'Frontend', monthDuration: 4 },
        ];
        for (const { title, monthDuration } of coursesAndDurationArray) {
            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            div.classList.add('item');
            h1.classList.add('heading');
            h1.innerText = title;
            p.classList.add('description');
            p.innerText = String(monthDuration);
            div.append(h1, p);
            document.body.appendChild(div);
        }
    }
    // – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
    // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
    // Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
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
    const cards = coursesArray.map(({ title, monthDuration, hourDuration, modules }) => {
        const card = document.createElement('div');
        const header = document.createElement('h2');
        const p = document.createElement('p');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const list = document.createElement('ul');
        const listItems = modules.map((item) => {
            const li = document.createElement('li');
            li.innerText = item;
            return li;
        });
        card.style.marginBottom = '24px';
        card.style.border = '1px solid lightgrey';
        card.style.padding = '20px';
        header.style.border = '1px solid lightgrey';
        header.innerText = title;
        p.style.display = 'grid';
        p.style.gridTemplateColumns = '100px 1fr';
        p.style.gap = '20px';
        span1.style.display = 'inline-block';
        span1.style.border = '1px solid lightgrey';
        span1.innerText = String(monthDuration);
        span2.style.display = 'inline-block';
        span2.style.border = '1px solid lightgrey';
        span2.innerText = String(hourDuration);
        p.append(span1, span2);
        list.style.border = '1px solid lightgrey';
        list.append(...listItems);
        card.append(header, p, list);
        return card;
    });
    document.body.append(...cards);
}
