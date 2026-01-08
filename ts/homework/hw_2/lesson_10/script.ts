{
  // #sH8c4er

  // – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

  const hideTextButton: HTMLButtonElement | null =
    document.querySelector('#text+button');

  if (hideTextButton) {
    hideTextButton.addEventListener('click', (e) => {
      const el = document.getElementById('text');

      if (el) {
        document.body.removeChild(el);
      }

      hideTextButton.disabled = true;
    });
  }

  // #j693ca8

  // – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

  const ageInput = document.getElementById('age') as HTMLInputElement | null;

  if (ageInput) {
    const ageButton = ageInput.nextElementSibling as HTMLButtonElement;

    ageButton.addEventListener('click', (e) => {
      const age = +ageInput.value;

      if (!isNaN(age) && age > 0) {
        alert(`You are ${age < 18 ? 'under 18' : 'ok'}`);
      } else {
        alert('Please, fill in the age input');
      }
    });
  }

  // #ymAmN2xJ

  // Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

  const form1 = document.forms.namedItem('form1')!;

  form1.addEventListener('submit', (e) => {
    e.preventDefault();

    // const {
    //   name: { value: name },
    //   surname: { value: surname },
    //   age: { value: age },
    // } = e.target;

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const age = formData.get('age');

    const reportEl = document.getElementById('form_data');

    if (reportEl) {
      reportEl.innerText = `name: ${name}
    surname: ${surname}
    age: ${age}`;
    }
  });

  document.addEventListener('readystatechange', (e) => {
    if (document.readyState !== 'complete') return;

    const counter = localStorage.getItem('load_counter') || 0;
    const counterValue = String(+counter + 1);

    localStorage.setItem('load_counter', counterValue);

    const counterEl = document.getElementById('load_counter') as HTMLDivElement;

    if (counterEl) {
      counterEl.innerText = counterValue;
    }
  });

  // #LhSfdhM3

  // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

  document.addEventListener('readystatechange', (e) => {
    if (document.readyState === 'complete') {
      let sessions: number[] = [];

      const storedSessions = localStorage.getItem('sessionsList');

      if (storedSessions) {
        sessions = JSON.parse(storedSessions) as number[];
      }

      sessions.push(Date.now());
      localStorage.setItem('sessionsList', JSON.stringify(sessions));
    }
  });

  // #Jg0gPO00

  // створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

  const kgInputEl = document.getElementById('kg_weight') as HTMLInputElement;
  const poundViewEl = document.getElementById('pound_weight');

  if (kgInputEl && poundViewEl) {
    kgInputEl.addEventListener('input', (e) => {
      const input = e.target as HTMLInputElement;

      const kg = +(input.value || 0);

      poundViewEl.innerText = (kg * 2.2).toFixed(2);
    });
  }

  // #RbQGnH5DuC

  // В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
  // сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void

  // document.addEventListener('DOMContentLoaded', e => {
  //   addToLocalStorage('arr1', { now: new Date() });
  //   addToLocalStorage('arr2', { path: '/' });
  // })

  function addToLocalStorage(arrayName: string, objToAdd: any) {
    let array: any[] = [];
    const storedArray = localStorage.getItem(arrayName);

    if (storedArray) {
      array = JSON.parse(storedArray) as any[];
    }

    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
  }

  // #kUSgFqWY

  //  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
  // При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

  const tableForm = document.forms.namedItem('table_form')!;

  tableForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const table = document.getElementById('table');

    if (!table) return;

    const formData = new FormData(e.target as HTMLFormElement);

    const rows = +(formData.get('rows') || 0);
    const cols = +(formData.get('cols') || 0);
    const content = formData.get('content');

    // const {
    //   rows: { value: rows },
    //   cols: { value: cols },
    //   content: { value: content },
    // } = e.target;

    let markup = '<tbody>';

    for (let i = 0; i < rows; ++i) {
      markup += '<tr>';

      for (let j = 0; j < cols; ++j) {
        markup += `<td>${content}</td>`;
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

  const items = Array(100);

  for (let i = 0; i < 100; ++i) {
    items[i] = { id: i + 1, name: `Name${i}` };
  }

  const pageInfo = {
    pageSize: 10,
    totalItems: 100,
    currentPage: 0,
  };

  const page: HTMLDivElement = document.querySelector('#page .page__items')!;
  const btnPrev = page.nextElementSibling as HTMLButtonElement;
  const btnNext = btnPrev.nextElementSibling as HTMLButtonElement;

  const dislplayCurrentPage = () => {
    const { currentPage, pageSize, totalItems } = pageInfo;
    const markup = items
      .filter(
        (_, i) => i >= currentPage * pageSize && i < currentPage * pageSize + 10
      )
      .map(
        ({ id, name }) =>
          `<div class='page__item'>id: ${id}, name: ${name}</div>`
      )
      .join('');

    page.innerHTML = markup;
    btnPrev.disabled = currentPage < 1;
    btnNext.disabled = currentPage === Math.floor(totalItems / pageSize) - 1;
  };

  const onPrev = () => {
    --pageInfo.currentPage;
    dislplayCurrentPage();
  };

  const onNext = () => {
    ++pageInfo.currentPage;
    dislplayCurrentPage();
  };

  btnPrev.disabled = true;
  btnPrev.addEventListener('click', onPrev);
  btnNext.addEventListener('click', onNext);

  dislplayCurrentPage();
}
