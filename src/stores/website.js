import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
export const useMyWebsiteStore = defineStore('myWebsiteStore',()=>{
  //綁定數據
  const All_Web = reactive({statuscode: 0 ,info:{}});
  //爬取function
  async function Get_All_Webs(){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      baseURL:import.meta.env.VITE_BASE_URL,
      url: '/api/v1/rest/datastore/A01010000C-002150-013',
    };   
    //資料爬取與錯誤處理
    await axios.request(config).then((res)=>{ All_Web.statuscode = 200;All_Web.info = res.data;})
    .catch(()=>{All_Web.statuscode = 500});
    console.log(All_Web);
  }

  return {All_Web , Get_All_Webs}
})

