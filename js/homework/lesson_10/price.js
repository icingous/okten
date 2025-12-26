document.addEventListener('DOMContentLoaded', (e) => {
  checkPrice();
});

function getSessions() {
  return JSON.parse(localStorage.getItem('priceReloads'));
}

function setPrice(sessions) {
  const priceEl = document.getElementById('price');
  const initialPrice = parseInt(priceEl.innerText);

  if (!sessions?.length) {
    localStorage.setItem('price', initialPrice);

    return;
  }

  const dd = Date.now() - sessions[sessions.length - 1];
  const storedPrice = localStorage.getItem('price');
  let price = +storedPrice || initialPrice;

  if (parseInt(dd / 1000) > 10) {
    price += 10;
  }

  priceEl.innerText = `${price}грн`;
  localStorage.setItem('price', price);
}

function checkPrice() {
  let sessions = getSessions() || [];

  setPrice(sessions);
  sessions.push(Date.now());
  localStorage.setItem('priceReloads', JSON.stringify(sessions));
}
