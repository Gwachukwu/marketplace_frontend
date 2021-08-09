<template>
  <div class="text-center">
    <h1 class="p-2">Stores</h1>
    <div class="d-flex justify-content-evenly flex-wrap">
      <div v-for="store in storesData" :key="store.store_slug">
        <b-card
          :title="store.name"
          :img-src="store.logo"
          img-alt="logo"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 stores-card"
        >
          <b-card-text>
            {{ store.description }}
          </b-card-text>

          <b-button @click="gotoStore(store.store_slug)" variant="primary"
            >Shop</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import stores from "../utils/stores";

export default {
  name: "Stores",
  data() {
    return {
      storesData: stores,
    };
  },
  methods: {
    gotoStore(slug) {
      this.$router.push(`/s/${slug}`);
    },
  },
};
</script>

<style scoped>
.stores-card {
  box-shadow: 1px 4px 30px rgba(0, 0, 0, 0.2);
}
</style>