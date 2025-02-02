app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="product-display">
          <div class="product-container">
            <div class="product-image">
              <img :src="image" :class="{outOfStock: !inStock}" alt="">
            </div>
            <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <product-details :details="details"></product-details>
            <div
              v-for="(variant, index) in variants"  
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }"
            ></div>
            <button
            class="button"
            :class="{ disabledButton: !inStock }"
            @click="addToCart"
            >
            Add to Cart
            </button>
            <button
            class="button"
            @click="removeFromCart"
            >
            Remove from Cart
            </button>
            </div>
          </div>
          <div style="display:flex">
          <review-form @review-submitted="addReview"></review-form>
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          </div>
        </div>`,
    data() {
        return {
            product: "Shoes",
            inventory: 100,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {
                    id: 2234,
                    name: "Shoes Green",
                    color: "green",
                    image: "./assets/images/socks_green.jpg",
                    quantity: 10,
                },
                {
                    id: 2235,
                    name: "Shoes Blue",
                    color: "blue",
                    image: "./assets/images/socks_blue.jpg",
                    quantity: 1,
                },
            ],
            onSale: true,
            brand: "SE 331",
            selectedVariant: 0,
            reviews: [],
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
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return "30";
        },
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.variants[this.selectedVariant]);
        },
        removeFromCart() {
            this.$emit("remove-from-cart", this.variants[this.selectedVariant]);
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
        },
    },
});
