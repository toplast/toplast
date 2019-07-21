import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Home, { localVue })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('title should be Home', () => {
    expect(wrapper.name()).toEqual('Home')
  })
})
