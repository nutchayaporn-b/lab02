const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },
    computed: {
        cartTotal() {
            let total = 0;
            for (let i = 0; i < this.cart.length; i++) {
                total += this.cart[i].price;
            }
            return total;
        },
        cartAmount() {
            if (this.cart.length == 0) return 0;
            return this.cart.reduce((acc, cur) => {
                return acc + cur.inCart;
            }, 0);
        },
    },
    methods: {
        updateCart(item) {
            // Group the cart by id
            const cartItem = this.cart.find(
                (cartItem) => cartItem.id === item.id
            );
            if (cartItem) {
                cartItem.inCart++;
            } else {
                const newItem = Object.assign({}, item);
                newItem.inCart = 1;
                this.cart.push(newItem);
            }
        },
    },
});
