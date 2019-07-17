import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders TopLast title', () => {
    const wrapper = shallowMount(Home)

    expect(wrapper.text()).to.include('TopLast')
  })
})
