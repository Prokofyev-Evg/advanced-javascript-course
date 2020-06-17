const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img=`https://via.placeholder.com/290?text=${title}`) => {
    return `<div class="product-item">
                <img src="${img}" alt="">
                <div class="product-text">
                    <div class="product-heading">
                        <h3 class="product-name">${title}</h3>
                        <p class="product-price">${price}</p>
                    </div>
                    <button class="button card-button">
                        <span class="button-text">Добавить в корзину</span>
                    </button>
                </div>
              </div>`;
};

const renderProducts = (list) => {
    const productList =  list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
