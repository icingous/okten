{
  document.addEventListener('DOMContentLoaded', (e) => {
    checkPrice();
  });

  function getSessions(): number[] {
    let sessions: number[] = [];
    const reloads = localStorage.getItem('priceReloads');

    if (reloads) {
      sessions = JSON.parse(reloads) as number[];
    }

    return sessions;
  }

  function setPrice(sessions: number[]): void {
    const priceEl: HTMLElement = document.getElementById('price')!;
    const initialPrice = parseInt(priceEl.innerText);

    if (!sessions?.length) {
      localStorage.setItem('price', String(initialPrice));

      return;
    }

    const dd = Date.now() - sessions[sessions.length - 1]!;
    let price = initialPrice;
    const storedPrice = localStorage.getItem('price');

    if (storedPrice) {
      price = +storedPrice;
    }

    if (Math.floor(dd / 1000) > 10) {
      price += 10;
    }

    priceEl.innerText = `${price}грн`;
    localStorage.setItem('price', String(price));
  }

  function checkPrice() {
    let sessions = getSessions() || [];

    setPrice(sessions);
    sessions.push(Date.now());
    localStorage.setItem('priceReloads', JSON.stringify(sessions));
  }
}
