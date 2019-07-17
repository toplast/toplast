import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Weekly from '@/views/charts/Weekly.vue'
import weeklyAsset from '@/assets/weekly.json'

describe('Weekly.vue', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('title should be WeeklyChart', () => {
    wrapper = shallowMount(Weekly)

    expect(wrapper.name()).to.equal('WeeklyChart')
  })

  it('renders sections title', () => {
    wrapper = shallowMount(Weekly)

    expect(wrapper.text()).to.include('Most listened album')
    expect(wrapper.text()).to.include('Most listened artist')
    expect(wrapper.text()).to.include('Most listened track')
  })

  it('json asset is properly set on data', () => {
    wrapper = shallowMount(Weekly)

    expect(wrapper.vm.$data).to.deep.equal(weeklyAsset)
  })
})
