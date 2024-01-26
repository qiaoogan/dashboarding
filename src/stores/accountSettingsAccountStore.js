import { defineStore } from 'pinia'
import avatar1 from '@images/avatars/avatar-1.png'


export const useAccoutSettingAccoutStore = defineStore('accountSettingsAccount', {
  state: () => ({
    account: {
      avatarImg: avatar1,
      firstName: 'john',
      lastName: 'Doe',
      email: 'johnDoe@example.com',
      org: 'ThemeSelection',
      phone: '+1 (917) 543-9876',
      address: '123 Main St, New York, NY 10001',
      state: 'New York',
      zip: '10001',
      country: 'USA',
      language: 'English',
      timezone: '(GMT-11:00) International Date Line West',
      currency: 'USD',
    },
    defaccount: {
      avatarImg: avatar1,
      firstName: 'john',
      lastName: 'Doe',
      email: 'johnDoe@example.com',
      org: 'ThemeSelection',
      phone: '+1 (917) 543-9876',
      address: '123 Main St, New York, NY 10001',
      state: 'New York',
      zip: '10001',
      country: 'USA',
      language: 'English',
      timezone: '(GMT-11:00) International Date Line West',
      currency: 'USD',
    },
  }),
  actions: {
    resetUser() {
      this.account = {
        avatarImg: avatar1,
        firstName: 'john',
        lastName: 'Doe',
        email: 'johnDoe@example.com',
        org: 'ThemeSelection',
        phone: '+1 (917) 543-9876',
        address: '123 Main St, New York, NY 10001',
        state: 'New York',
        zip: '10001',
        country: 'USA',
        language: 'English',
        timezone: '(GMT-11:00) International Date Line West',
        currency: 'USD',
      }
    },

    updateAccountSetting(newValue) {
      this.account = { ...newValue }
      console.log(this.account)
    },
  },
})


