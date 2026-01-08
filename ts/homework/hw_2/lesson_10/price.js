{
    document.addEventListener('DOMContentLoaded', function (e) {
        checkPrice();
    });
    function getSessions() {
        var sessions = [];
        var reloads = localStorage.getItem('priceReloads');
        if (reloads) {
            sessions = JSON.parse(reloads);
        }
        return sessions;
    }
    function setPrice(sessions) {
        var priceEl = document.getElementById('price');
        var initialPrice = parseInt(priceEl.innerText);
        if (!(sessions === null || sessions === void 0 ? void 0 : sessions.length)) {
            localStorage.setItem('price', String(initialPrice));
            return;
        }
        var dd = Date.now() - sessions[sessions.length - 1];
        var price = initialPrice;
        var storedPrice = localStorage.getItem('price');
        if (storedPrice) {
            price = +storedPrice;
        }
        if (Math.floor(dd / 1000) > 10) {
            price += 10;
        }
        priceEl.innerText = "".concat(price, "\u0433\u0440\u043D");
        localStorage.setItem('price', String(price));
    }
    function checkPrice() {
        var sessions = getSessions() || [];
        setPrice(sessions);
        sessions.push(Date.now());
        localStorage.setItem('priceReloads', JSON.stringify(sessions));
    }
}
