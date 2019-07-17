// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
// Utilities
import { mount, createLocalVue } from '@vue/test-utils'
// Components
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    // const vuetify = new Vuetify()
    wrapper = mount(Home, { localVue })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('title should be Home', () => {
    expect(wrapper.name()).toEqual('Home')
  })

  it('renders TopLast title', () => {
    expect(wrapper.text()).toContain('TopLast')
  })
})
