// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
  .then((res) => res.json())
  .then(({ carts }) => {
    const section = document.getElementById('carts');

    for (const cart of carts) {
      section.appendChild(createCart(cart));
    }
  })
  .catch(({ message }) => console.error(message));

function createProduct(product) {
  const {
    id,
    title,
    price,
    quantity,
    total,
    discountPercentage,
    discountedTotal,
    thumbnail,
  } = product;

  const card = document.createElement('li');

  card.className = 'cart__product';
  card.dataset.id = id;

  const caption = document.createElement('h4');

  caption.innerText = title;
  card.appendChild(caption);

  const image = document.createElement('img');

  image.className = 'cart__product-image';
  image.src = thumbnail;
  image.alt = title;
  image.loading = 'lazy';
  card.appendChild(image);

  const propList = document.createElement('dl');

  propList.className = 'cart__product-props';

  Object.entries({
    price,
    quantity,
    total,
    discountPercentage,
    discountedTotal,
  }).forEach(([key, value]) => {
    const dt = document.createElement('dt');
    dt.innerText = key;
    propList.appendChild(dt);

    const dd = document.createElement('dd');
    dd.innerText = value;
    propList.appendChild(dd);
  });

  card.appendChild(propList);

  return card;
}

function createCart(cart) {
  const {
    id,
    userId,
    products,
    total,
    discountedTotal,
    totalProducts,
    totalQuantity,
  } = cart;

  const card = document.createElement('div');

  card.className = 'cart';
  card.dataset.id = id;

  const caption = document.createElement('h3');

  caption.innerText = `Cart of user with id ${userId}`;
  card.appendChild(caption);

  const productList = document.createElement('ul');

  productList.className = 'cart__products';

  for (const product of products) {
    productList.appendChild(createProduct(product));
  }

  card.appendChild(productList);

  const propList = document.createElement('dl');

  propList.className = 'cart__props';

  Object.entries({
    total,
    discountedTotal,
    totalProducts,
    totalQuantity,
  }).forEach(([key, value]) => {
    const dt = document.createElement('dt');

    dt.innerText = key;
    propList.appendChild(dt);

    const dd = document.createElement('dd');

    dd.innerText = value;
    propList.appendChild(dd);
  });

  card.appendChild(propList);

  return card;
}
