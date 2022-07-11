const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },
    methods: {
        updateCart(id) {
            // Group the cart by id
            const cartItem = this.cart.find((item) => item.id === id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.cart.push({
                    id,
                    quantity: 1,
                });
            }
        },
    },
});
