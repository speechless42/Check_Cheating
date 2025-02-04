<script setup >
import carousel from './components/carousel.vue'
import navbar from './components/navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid grid-cols-4 grid-rows-3 gap-1 w-full h-[calc(100vh-3rem)]">
    <main class="col-span-full row-span-2 rounded-sm bg-white md:row-span-3 md:col-span-2" >
      <header class=""><navbar /></header>
      <RouterView />
    </main>
    <article class="col-span-full row-span-1 rounded-sm bg-white md:row-span-1 md:col-span-2">
      <h2 class="text-5xl font-bold">預防詐騙網站</h2>
      <p class="text-2xl font-bold text-justify leading-[1.5] md:text-4xl">
        此作品網站串接政府API方便您搜尋是否為詐騙LINEID或者假投資詐騙網站。讓我們一起預防
          <font class="text-3xl text-red-600 md:text-5xl lg:text-9xl">詐騙</font>
      </p>
    </article>
    <aside class="col-span-full row-span-1 md:row-span-2 md:col-span-2 hidden md:grid">
      <div class="flex items-center w-full h-full justify-evenly md:hidden lg:flex">
        <img class=" object-cover md:h-full lg:h-full" src="/newyearwoman.png"/>
        <img class=" lg:flex lg:h-full" src="/newyeartext.png" />
      </div>
      <div class="w-full h-full lg:hidden bg-white">
        <carousel />
      </div>
    </aside>
  </div>
  <aside class="mt-px flex w-full h-full bg-[#F28181] md:hidden ">
    <carousel />
  </aside>
  <footer class="absolute buttom-0 right-0 border-2 border-black m-auto font-bold text-black bg-[#F28181] text-justify">
    LineID範例數據:lai659。webURL範例數據:www.2okextw.net。此網站圖片來自https://www.irasutoya.com/
  </footer>
 
</template>

