app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="review-container">
          <h3>Reviews ({{reviews.length}})</h3>
          <ul>
            <li v-for="review in reviews" style="border: 1px solid black">
              <p>Name: {{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>Review: {{ review.review }}</p>
              <p>Would recommend: {{ review.wouldRecommend ? "yes" : "no" }}</p>
            </li>
          </ul>
        </div>`,
});
