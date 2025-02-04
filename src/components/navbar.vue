<template>
  <div>
    <ul class="flex flex-nowrap text-lg font-bold text-center rounded-lg text-gray-500 bg-[#D99AC4] justify-center mt-10 mx-1.5">
        <li class="mr-2">
            <RouterLink to="/" class="inline-block p-4 text-gray-800 hover:bg-gray-50 rounded-t-lg active ">
                Line
            </RouterLink>
        </li>
        <li class="mr-2">
            <RouterLink to="/about" class="inline-block p-4 text-gray-800 hover:bg-gray-50 rounded-t-lg active ">
                網址
            </RouterLink>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>

</style>