<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const now_url = new URL(location as unknown as string)

if (route.query.path && route.query.search) {
  const path = decodeURIComponent(route.query.path)
  const search = decodeURIComponent(route.query.search)

  now_url.pathname = path
  now_url.search = search

  history.replaceState({}, "", now_url)
}

</script>
<template>
  <div>
    <div class="flex flex-col items-center p-10 font-bold text-2xl space-y-4 lg:text-2.5xl lg:space-y-6 lg:p-16 2xl:text-4xl 2xl:space-y-8 3xl:text-4.5xl 3xl:space-y-10 3xl:p-24 text-gray-500 w-full">
      <div>404 - Page Not Found</div>
      <div>找不到該網址</div>
      <img
        class="w-11/12 lg:w-[540px] 2xl:w-[660px] 3xl:w-[1000px] max-lg:!mt-12"
        src="../assets/imgs/404error.png"
        alt="404 PAGE">
    </div>
  </div>
</template>