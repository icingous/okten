var _a;
{
    // #8Nmt60ZT
    // – створити блок,
    // – додати йому класи wrap, collapse, alpha, beta
    // – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
    // – додати цей блок в body.
    // – клонувати його повністю, та додати клон в body.
    var div = document.createElement('div');
    div.classList.add('wrap', 'collapse', 'alpha', 'beta');
    div.style.backgroundColor = 'whitesmoke';
    div.style.color = 'maroon';
    div.style.fontSize = '24px';
    div.style.marginBottom = '16px';
    div.innerText = 'A block';
    document.body.appendChild(div);
    var divCopy = div.cloneNode();
    divCopy.innerText = 'A block copy';
    document.body.appendChild(divCopy);
    // #OPLI89c9G
    // – Є масив:
    // [‘Main’,’Products’,’About us’,’Contacts’]
    // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
    var ul_1 = document.createElement('ul');
    ['Main', 'Products', 'About us', 'Contacts'].forEach(function (item) {
        var li = document.createElement('li');
        li.innerText = item;
        ul_1.appendChild(li);
    });
    div.appendChild(ul_1);
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
        var coursesAndDurationArray = [
            { title: 'JavaScript Complex', monthDuration: 5 },
            { title: 'Java Complex', monthDuration: 6 },
            { title: 'Python Complex', monthDuration: 6 },
            { title: 'QA Complex', monthDuration: 4 },
            { title: 'FullStack', monthDuration: 7 },
            { title: 'Frontend', monthDuration: 4 },
        ];
        var blocks = Array(coursesAndDurationArray.length);
        for (var i = 0; i < blocks.length; ++i) {
            var div_1 = document.createElement('div');
            var _b = coursesAndDurationArray[i], title = _b.title, monthDuration = _b.monthDuration;
            div_1.innerText = "course ".concat(title, " - ").concat(monthDuration, " months");
            blocks[i] = div_1;
        }
        divCopy.append.apply(divCopy, blocks);
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
        var coursesAndDurationArray = [
            { title: 'JavaScript Complex', monthDuration: 5 },
            { title: 'Java Complex', monthDuration: 6 },
            { title: 'Python Complex', monthDuration: 6 },
            { title: 'QA Complex', monthDuration: 4 },
            { title: 'FullStack', monthDuration: 7 },
            { title: 'Frontend', monthDuration: 4 },
        ];
        for (var _i = 0, coursesAndDurationArray_1 = coursesAndDurationArray; _i < coursesAndDurationArray_1.length; _i++) {
            var _c = coursesAndDurationArray_1[_i], title = _c.title, monthDuration = _c.monthDuration;
            var div_2 = document.createElement('div');
            var h1 = document.createElement('h1');
            var p = document.createElement('p');
            div_2.classList.add('item');
            h1.classList.add('heading');
            h1.innerText = title;
            p.classList.add('description');
            p.innerText = String(monthDuration);
            div_2.append(h1, p);
            document.body.appendChild(div_2);
        }
    }
    // – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
    // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
    // Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
    var coursesArray = [
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
    var cards = coursesArray.map(function (_a) {
        var title = _a.title, monthDuration = _a.monthDuration, hourDuration = _a.hourDuration, modules = _a.modules;
        var card = document.createElement('div');
        var header = document.createElement('h2');
        var p = document.createElement('p');
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        var list = document.createElement('ul');
        var listItems = modules.map(function (item) {
            var li = document.createElement('li');
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
        list.append.apply(list, listItems);
        card.append(header, p, list);
        return card;
    });
    (_a = document.body).append.apply(_a, cards);
}
