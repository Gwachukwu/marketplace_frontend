<template>
  <div>
    <div
      v-if="isLoading"
      class="
        text-center
        d-flex
        justify-content-center
        align-items-center
        spinner-container
      "
    >
      <b-spinner type="grow"></b-spinner>
    </div>
    <h1 class="text-capitalize p-3 text-center" v-if="store">{{ store }}</h1>
    <div>
      <b-card-group
        class="d-flex justify-content-evenly flex-wrap"
        v-if="products"
        data-test="products"
      >
        <div v-for="product in products" :key="product.id">
          <b-card
            :title="product.name"
            :sub-title="product.title"
            :img-src="product.image"
            img-alt="Card image"
            img-top
            class="image-card m-2"
          >
            <b-card-text>
              <span>Price: ${{ product.price }}</span
              ><br />
              {{ product.description }}
            </b-card-text>
            <b-button href="#" variant="dark">Add to Cart</b-button>
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StorePage",
  data() {
    return {
      store: null,
      products: null,
      isLoading: true,
    };
  },
  methods: {
    getProducts() {
      //get the store slug from the url params
      const store_slug = this.$router.history.current.params.store_slug;
      axios
        .get(`${process.env.VUE_APP_API}/products/${store_slug}`)
        .then((res) => {
          this.store = res.data.store;
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted: function () {
    this.getProducts();
  },
  beforeDestroy: function () {
    this.products = null;
    this.store = null;
  },
};
</script>

<style scoped>
.spinner-container {
  margin: auto;
  width: 80vw;
  height: 70vh;
}

.image-card {
  max-width: 20rem;
  box-shadow: 1px 4px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
}

.image-card:hover {
  transform: scale(1.2);
  z-index: 2;
}
</style>