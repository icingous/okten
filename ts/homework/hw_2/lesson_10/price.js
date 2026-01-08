"use strict";
{
    document.addEventListener('DOMContentLoaded', (e) => {
        checkPrice();
    });
    function getSessions() {
        let sessions = [];
        const reloads = localStorage.getItem('priceReloads');
        if (reloads) {
            sessions = JSON.parse(reloads);
        }
        return sessions;
    }
    function setPrice(sessions) {
        const priceEl = document.getElementById('price');
        const initialPrice = parseInt(priceEl.innerText);
        if (!sessions?.length) {
            localStorage.setItem('price', String(initialPrice));
            return;
        }
        const dd = Date.now() - sessions[sessions.length - 1];
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
