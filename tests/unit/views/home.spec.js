import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper

  before(() => {
    wrapper = shallowMount(Home)
  })

  after(() => {
    wrapper.destroy()
  })

  it('title should be Home', () => {
    expect(wrapper.name()).to.equal('Home')
  })

  it('renders TopLast title', () => {
    expect(wrapper.text()).to.include('TopLast')
  })
})
