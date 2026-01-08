{
    // #sH8c4er
    // – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
    var hideTextButton_1 = document.querySelector('#text+button');
    if (hideTextButton_1) {
        hideTextButton_1.addEventListener('click', function (e) {
            var el = document.getElementById('text');
            if (el) {
                document.body.removeChild(el);
            }
            hideTextButton_1.disabled = true;
        });
    }
    // #j693ca8
    // – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
    var ageInput_1 = document.getElementById('age');
    if (ageInput_1) {
        var ageButton = ageInput_1.nextElementSibling;
        ageButton.addEventListener('click', function (e) {
            var age = +ageInput_1.value;
            if (!isNaN(age) && age > 0) {
                alert("You are ".concat(age < 18 ? 'under 18' : 'ok'));
            }
            else {
                alert('Please, fill in the age input');
            }
        });
    }
    // #ymAmN2xJ
    // Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
    var form1 = document.forms.namedItem('form1');
    form1.addEventListener('submit', function (e) {
        e.preventDefault();
        // const {
        //   name: { value: name },
        //   surname: { value: surname },
        //   age: { value: age },
        // } = e.target;
        var formData = new FormData(e.target);
        var name = formData.get('name');
        var surname = formData.get('surname');
        var age = formData.get('age');
        var reportEl = document.getElementById('form_data');
        if (reportEl) {
            reportEl.innerText = "name: ".concat(name, "\n    surname: ").concat(surname, "\n    age: ").concat(age);
        }
    });
    document.addEventListener('readystatechange', function (e) {
        if (document.readyState !== 'complete')
            return;
        var counter = localStorage.getItem('load_counter') || 0;
        var counterValue = String(+counter + 1);
        localStorage.setItem('load_counter', counterValue);
        var counterEl = document.getElementById('load_counter');
        if (counterEl) {
            counterEl.innerText = counterValue;
        }
    });
    // #LhSfdhM3
    // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
    document.addEventListener('readystatechange', function (e) {
        if (document.readyState === 'complete') {
            var sessions = [];
            var storedSessions = localStorage.getItem('sessionsList');
            if (storedSessions) {
                sessions = JSON.parse(storedSessions);
            }
            sessions.push(Date.now());
            localStorage.setItem('sessionsList', JSON.stringify(sessions));
        }
    });
    // #Jg0gPO00
    // створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
    var kgInputEl = document.getElementById('kg_weight');
    var poundViewEl_1 = document.getElementById('pound_weight');
    if (kgInputEl && poundViewEl_1) {
        kgInputEl.addEventListener('input', function (e) {
            var input = e.target;
            var kg = +(input.value || 0);
            poundViewEl_1.innerText = (kg * 2.2).toFixed(2);
        });
    }
    // #RbQGnH5DuC
    // В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
    // сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
    // document.addEventListener('DOMContentLoaded', e => {
    //   addToLocalStorage('arr1', { now: new Date() });
    //   addToLocalStorage('arr2', { path: '/' });
    // })
    function addToLocalStorage(arrayName, objToAdd) {
        var array = [];
        var storedArray = localStorage.getItem(arrayName);
        if (storedArray) {
            array = JSON.parse(storedArray);
        }
        array.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(array));
    }
    // #kUSgFqWY
    //  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
    // При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
    var tableForm = document.forms.namedItem('table_form');
    tableForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var table = document.getElementById('table');
        if (!table)
            return;
        var formData = new FormData(e.target);
        var rows = +(formData.get('rows') || 0);
        var cols = +(formData.get('cols') || 0);
        var content = formData.get('content');
        // const {
        //   rows: { value: rows },
        //   cols: { value: cols },
        //   content: { value: content },
        // } = e.target;
        var markup = '<tbody>';
        for (var i = 0; i < rows; ++i) {
            markup += '<tr>';
            for (var j = 0; j < cols; ++j) {
                markup += "<td>".concat(content, "</td>");
            }
            markup += '</tr>';
        }
        markup += '</tbody>';
        table.innerHTML = markup;
    });
    // #NKB0tgWIK1G
    // ***PAGINATION
    // зробити масив на 100 об’єктів та дві кнопки prev next
    // при завантаженні сторінки з’являються перші 10 об’єктів.
    // При натисканні next виводяться наступні 10 об’єктів
    // При натисканні prev виводяться попередні 10 об’єктів
    var items_1 = Array(100);
    for (var i = 0; i < 100; ++i) {
        items_1[i] = { id: i + 1, name: "Name".concat(i) };
    }
    var pageInfo_1 = {
        pageSize: 10,
        totalItems: 100,
        currentPage: 0,
    };
    var page_1 = document.querySelector('#page .page__items');
    var btnPrev_1 = page_1.nextElementSibling;
    var btnNext_1 = btnPrev_1.nextElementSibling;
    var dislplayCurrentPage_1 = function () {
        var currentPage = pageInfo_1.currentPage, pageSize = pageInfo_1.pageSize, totalItems = pageInfo_1.totalItems;
        var markup = items_1
            .filter(function (_, i) { return i >= currentPage * pageSize && i < currentPage * pageSize + 10; })
            .map(function (_a) {
            var id = _a.id, name = _a.name;
            return "<div class='page__item'>id: ".concat(id, ", name: ").concat(name, "</div>");
        })
            .join('');
        page_1.innerHTML = markup;
        btnPrev_1.disabled = currentPage < 1;
        btnNext_1.disabled = currentPage === Math.floor(totalItems / pageSize) - 1;
    };
    var onPrev = function () {
        --pageInfo_1.currentPage;
        dislplayCurrentPage_1();
    };
    var onNext = function () {
        ++pageInfo_1.currentPage;
        dislplayCurrentPage_1();
    };
    btnPrev_1.disabled = true;
    btnPrev_1.addEventListener('click', onPrev);
    btnNext_1.addEventListener('click', onNext);
    dislplayCurrentPage_1();
}
