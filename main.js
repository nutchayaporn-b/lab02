const app = Vue.createApp({
    data() {
        return {
            product: "Shoes",
            inventory: 100,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {
                    id: 2234,
                    color: "green",
                    image: "./assets/images/socks_green.jpg",
                    quantity: 10,
                },
                {
                    id: 2235,
                    color: "blue",
                    image: "./assets/images/socks_blue.jpg",
                    quantity: 0,
                },
            ],
            cart: 0,
            brand: "SE 331",
            selectedVariant: 0,
            onSale: true,
        };
    },
    computed: {
        title() {
            return (
                this.brand +
                " " +
                this.product +
                (this.onSale ? " On Sale" : "")
            );
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
    },
});
