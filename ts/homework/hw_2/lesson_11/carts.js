// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(function (res) { return res.json(); })
    .then(function (_a) {
    var carts = _a.carts;
    var section = document.getElementById('carts');
    for (var _i = 0, carts_1 = carts; _i < carts_1.length; _i++) {
        var cart = carts_1[_i];
        section.appendChild(createCart(cart));
    }
})
    .catch(function (_a) {
    var message = _a.message;
    return console.error(message);
});
function createProduct(product) {
    var id = product.id, title = product.title, price = product.price, quantity = product.quantity, total = product.total, discountPercentage = product.discountPercentage, discountedTotal = product.discountedTotal, thumbnail = product.thumbnail;
    var card = document.createElement('li');
    card.className = 'cart__product';
    card.dataset.id = String(id);
    var caption = document.createElement('h4');
    caption.innerText = title;
    card.appendChild(caption);
    var image = document.createElement('img');
    image.className = 'cart__product-image';
    image.src = thumbnail;
    image.alt = title;
    image.loading = 'lazy';
    card.appendChild(image);
    var propList = document.createElement('dl');
    propList.className = 'cart__product-props';
    Object.entries({
        price: price,
        quantity: quantity,
        total: total,
        discountPercentage: discountPercentage,
        discountedTotal: discountedTotal,
    }).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var dt = document.createElement('dt');
        dt.innerText = key;
        propList.appendChild(dt);
        var dd = document.createElement('dd');
        dd.innerText = String(value);
        propList.appendChild(dd);
    });
    card.appendChild(propList);
    return card;
}
function createCart(cart) {
    var id = cart.id, userId = cart.userId, products = cart.products, total = cart.total, discountedTotal = cart.discountedTotal, totalProducts = cart.totalProducts, totalQuantity = cart.totalQuantity;
    var card = document.createElement('div');
    card.className = 'cart';
    card.dataset.id = String(id);
    var caption = document.createElement('h3');
    caption.innerText = "Cart of user with id ".concat(userId);
    card.appendChild(caption);
    var productList = document.createElement('ul');
    productList.className = 'cart__products';
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        productList.appendChild(createProduct(product));
    }
    card.appendChild(productList);
    var propList = document.createElement('dl');
    propList.className = 'cart__props';
    Object.entries({
        total: total,
        discountedTotal: discountedTotal,
        totalProducts: totalProducts,
        totalQuantity: totalQuantity,
    }).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var dt = document.createElement('dt');
        dt.innerText = key;
        propList.appendChild(dt);
        var dd = document.createElement('dd');
        dd.innerText = String(value);
        propList.appendChild(dd);
    });
    card.appendChild(propList);
    return card;
}
