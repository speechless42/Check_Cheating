<template>
  <div class="relative w-full overflow-hidden">
    <div class="w-full flex flex-nowrap carousel-images">
    <img v-for="image in images" :src="image" :key="image" class="w-full object-contain flex-shrink-0" />
    </div>
  </div>
 
</template>

<script setup>
import { reactive } from 'vue';
  const images = reactive(['/newyearwoman.png' , "/newyeartext.png"]);
  
</script>

<style>
  .carousel-images{
    animation: slide 6s infinite;
  }
 @keyframes slide {
            0%, 50% { transform: translateX(0%); } /* 第一張 */
            51%, 100% { transform: translateX(-100%); } /* 第三張 */
        }
</style>