app.component("review-form", {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a Review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label for="would-recommend">Would you recommend this product?</label>
        <input id="would-recommend" type="checkbox" v-model="wouldRecommend">
      <input class="button" type="submit" value="Submit">
    </form>`,
    methods: {
        onSubmit() {
            if (!this.name || !this.review || !this.rating) {
                alert("Please fill out all fields");
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                wouldRecommend: this.wouldRecommend,
            };
            this.$emit("review-submitted", productReview);
            this.name = "";
            this.review = "";
            this.rating = null;
            this.wouldRecommend = false;
        },
    },
    data() {
        return {
            name: "",
            review: "",
            rating: null,
            wouldRecommend: false,
        };
    },
});
