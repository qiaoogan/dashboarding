<script setup>
import { onMounted, ref } from 'vue'
import { useDemoSimpleTableBookStore } from '@/stores/demoSimpleTableBookStore'

const demoSimpleTableBookStore = useDemoSimpleTableBookStore()

// const books = ref([])

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:3101/tables/stock/book')

//     console.log("******"+ response.data)

//     const parsedBooks = response.data.map(book => ({
//       name: book.name,
//       author: book.author,
//       publishedAt: book.publishedAt,
//       price: book.price,
//       stock: book.stock,
//     }))

//     console.log(parsedBooks)

//     // 更新前端数据
//     books.value = parsedBooks

//     //books.value = response.data
//   } catch (error) {
//     console.error('Failed to fetch books:', error)
//   }
// }

// fetchData() // 在组件创建时立即调用获取数据的函数

onMounted(() => {
  demoSimpleTableBookStore.fetchBook()
})
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          Name
        </th>
        <th class="text-uppercase">
          Author
        </th>
        <th class="text-uppercase">
          Published At
        </th>
        <th class="text-uppercase">
          Price
        </th>
        <th class="text-uppercase">
          Stock
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in demoSimpleTableBookStore.books"
        :key="item.name"
      >
        <td>
          {{ item.name }}
        </td>
        <td class="text-center">
          {{ item.author }}
        </td>
        <td class="text-center">
          {{ item.publishedAt }}
        </td>
        <td class="text-center">
          {{ item.price }}
        </td>
        <td class="text-center">
          {{ item.stock }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
