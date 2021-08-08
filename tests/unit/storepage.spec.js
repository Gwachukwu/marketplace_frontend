import { mount, createLocalVue } from "@vue/test-utils";
import StorePage from "../../src/components/StorePage.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
const router = new VueRouter();

test("Check conditional renderings", async () => {
  const wrapper = mount(StorePage, {
    router,
    localVue,
  });

  // check if spinner will show on when loading
  expect(wrapper.find(".spinner-container").exists()).toBe(true);
  //check if products render when loading
  expect(wrapper.find('[data-test="products"]').exists()).toBe(false);

  // alternatively
  await wrapper.setData({ products: [], isLoading: false });

  // check if spinner will show on when loading
  expect(wrapper.find(".spinner-container").exists()).toBe(false);
  //check if products render when loading
  expect(wrapper.find('[data-test="products"]').exists()).toBe(true);
});
