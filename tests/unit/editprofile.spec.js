import { mount} from "@vue/test-utils";
import EditProfile from "../../src/components/EditProfile.vue";

test("Check conditional rendering in EditProfile", async () => {
  const wrapper = mount(EditProfile);

  // check if spinner will show on when loading
  expect(wrapper.find("[data-test=spinner]").exists()).toBe(true);
  //check if products render when loading
  expect(wrapper.find('[data-test="edit-profile-form"]').exists()).toBe(false);

  // alternatively
  await wrapper.setData({ isLoading: false });

  // check if spinner will show on when loading
  expect(wrapper.find("[data-test=spinner]").exists()).toBe(false);
  //check if form render when loading is complete
  expect(wrapper.find('[data-test="edit-profile-form"]').exists()).toBe(true);
});
