import { defineStore } from 'pinia'
import * as backendClient from '@/clients/backend-client'

export const useDemoSimpleTableBookStore = defineStore('demoSimpleTableBook', {
  state: () => ({
    books: null,
  }),
  actions: {
    async fetchBook() {
      console.log(`start fetching books data ...`)

      const response = await backendClient.getBooks()

      this.books = response
    },
  },
})


