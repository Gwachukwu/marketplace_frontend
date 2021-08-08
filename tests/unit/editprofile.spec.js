import { mount, createLocalVue } from "@vue/test-utils";
import EditProfile from "../../src/components/EditProfile.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter);
const router = new VueRouter();

test("Check conditional rendering in EditProfile", async () => {
  const wrapper = mount(EditProfile, {
    router,
    localVue,
  });

  // check if spinner will show on when loading
  expect(wrapper.find("[data-test=spinner]").exists()).toBe(true);
  //check if products render when loading
  expect(wrapper.find('[data-test="edit-profile-form"]').exists()).toBe(false);

  // alternatively
  await wrapper.setData({ isLoading: false });

  // check if spinner will show on when loading
  expect(wrapper.find("[data-test=spinner]").exists()).toBe(false);
  //check if form render when loading
  expect(wrapper.find('[data-test="edit-profile-form"]').exists()).toBe(true);
});
