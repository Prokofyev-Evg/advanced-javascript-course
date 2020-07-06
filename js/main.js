const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        goodsList: [],
        imgCatalog: 'https://placehold.it/290',
        isVisibleCart: false,
        searchLine : ''
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            this.goodsList.push(product);
        },
        filterGoods(){
            console.log(this.searchLine);
        },
        toggleCart(){
            this.isVisibleCart = !this.isVisibleCart; 
        },
    },
    computed: {
        cartPrice: function () {
            return this.goodsList.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        }
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
});
