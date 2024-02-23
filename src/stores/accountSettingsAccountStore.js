import { defineStore } from 'pinia'
import avatar1 from '@images/avatars/avatar-1.png'
import * as backendClient from '@/clients/backend-client'


export const useAccoutSettingAccoutStore = defineStore('accountSettingsAccount', {
  state: () => ({
    account: null,
  }),
  actions: {
    async fetchAccount() {
      console.log(`start fetching account data ...`)

      let response = await backendClient.getDefaultAccount()
      response = await backendClient.searchAccount(response.aid)

      this.account = response
    },

    async updateAccountSetting(newValue) {
      this.account = { ...newValue }

      console.log("new data"+ JSON.stringify(newValue), "*****")

      await backendClient.updateAccount(newValue)
    },
  },
})


