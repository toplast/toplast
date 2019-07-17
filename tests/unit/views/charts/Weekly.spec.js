// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
// Utilities
import { mount, createLocalVue } from '@vue/test-utils'
// Components
import weeklyAsset from '@/assets/weekly.json'
import Weekly from '@/views/charts/Weekly.vue'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Weekly.vue', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('title should be WeeklyChart', () => {
    wrapper = mount(Weekly, { localVue })

    expect(wrapper.name()).toEqual('WeeklyChart')
  })

  it('renders sections title', () => {
    wrapper = mount(Weekly, { localVue })

    expect(wrapper.text()).toContain('Most listened album')
    expect(wrapper.text()).toContain('Most listened artist')
    expect(wrapper.text()).toContain('Most listened track')
  })

  it('json asset is properly set on data', () => {
    wrapper = mount(Weekly, { localVue })

    expect(wrapper.vm.$data).toEqual(weeklyAsset)
  })
})
