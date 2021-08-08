import Login from '../../src/views/Login.vue'
import {mount } from '@vue/test-utils'

describe('Login.vue', () => {
    it('renders a greeting', () => {
      const wrapper = mount(Login)
  
      expect(wrapper.text()).toMatch("Welcome to MarketPlace")
    })
  })