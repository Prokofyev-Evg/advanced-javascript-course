class ShoppingCart{
    constructor(items) { /*  */ }
    addItem(ShoppingCartItem) {    /* Добавить товар*/ }
    removeItem(ShoppingCartItem) {    /* Удалить товар*/ }
}

class ShoppingCartItem{
    constructor(name, price) { /*  */ }
    incCount() {    /* Добавить добавку */}
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    calcSum()
    {
        return this.goods.reduce((sum, item) => sum + item.price, 0);
    }
}

class ProductItem {
    constructor(product, img=`https://via.placeholder.com/290?text=${product.title}`) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="">
                    <div class="product-text">
                        <div class="product-heading">
                            <h3 class="product-name">${this.title}</h3>
                            <p class="product-price">${this.price}</p>
                        </div>
                        <button class="button card-button">
                            <span class="button-text">Добавить в корзину</span>
                        </button>
                    </div>
                </div>`;
    }
}

const pList = new ProductList();
