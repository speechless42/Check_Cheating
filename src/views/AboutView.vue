<template>
  <div class="flex h-[calc(100%-7rem)] justify-center bg-[#E5D3E4] mx-1.5 mt-1.5">
    <!-- 表單輸入區域 -->
    <div class="relative pt-10">
        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          http://
        </span>
        <input type="text" id="rounded-email" 
            class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
            placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="詐騙網址(http://不用複製從www開始)" v-model="InputWebsite"/>
        <button type="button" @click.enter="SearchWebsite" class="py-2 px-4 mt-1.5 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
            提交
        </button>
        <!-- 載入數據顯示 -->
        <p class="text-center pt-1.5 text-2xl w-full lg:text-4xl">{{ isWebsiteready }}</p>
        <!-- 使否被騙的成果顯示 -->
        <p class="text-center pt-1.5 font-bold text-red-700 text-5xl w-full lg:text-9xl lg:mt-8" v-text="isWebsitecheat"></p>
    </div>
  </div>
</template>


<script setup>
  import { storeToRefs } from 'pinia'
  import { useMyWebsiteStore } from '@/stores/website'
  import { onMounted , ref } from 'vue';
  //piana解構
  const Website_Store = useMyWebsiteStore();
  const { All_Web } = storeToRefs(Website_Store);
  const { Get_All_Webs } = Website_Store;
  //資料加載數據顯示
  const isWebsiteready = ref("資料加載中...")

  onMounted(async ()=>{
    
    if(All_Web.value.statuscode == 200){
      isWebsiteready.value = "資料已加載過!"
      setTimeout(()=>{isWebsiteready.value = null}, 2000)
    }
    else{//如果數據沒有被加載
      await Get_All_Webs();
      //如果加載失敗
      if(All_Web.statuscode == 500){
        isWebsiteready.value = "加載失敗!"
      }
      isWebsiteready.value = "加載成功!"
        setTimeout(()=>{isWebsiteready.value = null}, 2000)
    }
  })

  //搜尋結果區域
  const InputWebsite = ref(''); //綁定輸入數據
  const isWebsitecheat = ref('') //綁定輸出結果
  function SearchWebsite(){
    //如果數據還在加載當中
    if(All_Web.value.info.length == 0){
      isready.value = "還在加載呢!別急~" 
    }
    //執行搜尋
    const result = All_Web.value.info.find((el)=>{return el['WEBURL'] === InputWebsite.value;})
    // console.log(result)
    
    if(typeof(result) == "undefined"){
      //沒找到
      isWebsitecheat.value = "不是詐騙!!!!\nヾ(*´∀ ˋ*)ﾉ"
    }
    else{
      //找到
      isWebsitecheat.value = "騙你錢錢!刪了吧(ノ▼Д▼)ノ"
    }
  }


</script>

