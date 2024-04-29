<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const now_url = new URL(location as unknown as string)
if (route.query.path || route.query.search) {
  const path = decodeURIComponent(route.query.path)
  const search = decodeURIComponent(route.query.search)
  now_url.pathname = path
  now_url.search = search

  history.replaceState({}, "", now_url)
}

</script>

<template>
  <div class="flex flex-col items-center text-2xl lg:text-2.5xl 2xl:text-4xl 3xl:text-4.5xl font-bold text-gray-500 text-center h-screen">
    <div class="m-5 mt-[100px]">
      500 - Internal Server Error
    </div>
    <div class="m-5">
      內部伺服器錯誤
    </div>
    <div class="max-w-screen-2xl mx-auto px-8 py-8 flex flex-row items-center space-x-2 max-lg:px-4">
      <img
        class="w-[342px] lg:w-[471px] 2xl:w-[660px] 3xl:w-[1000px]"
        src="../assets/imgs/500-server-error.png"
        alt="500 internal server error"
      />
    </div>
  </div>
</template>
