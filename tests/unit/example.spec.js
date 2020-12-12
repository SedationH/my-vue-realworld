import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'
import store from '@/store'
import router from '@/router'
let wrapper

describe('TheHeader.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TheHeader, { store, router })
  })

  it('should show login/register options initially', () => {
    const navItems = wrapper.findAll('.nav-item')
    // 这个组件里有三个
    expect(navItems.length).toBe(3)
  })

  it('should show username after login', async () => {
    await wrapper.vm.$store.dispatch('users/loginUser', {
      email: 'a@cb.lk',
      password: 'aatcbdotlk'
    })
    const navItems = wrapper.findAll('.nav-item')
    const username = navItems.at(navItems.length - 1).text()
    expect(username).toBe('acblk')
  })
})
