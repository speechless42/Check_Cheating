import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
export const useMyLine_idStore = defineStore('myLine_idStore',()=>{
  //綁定數據
  const All_IDs = reactive({statuscode: 0 ,info:{}});
  //爬取function
  async function Get_All_Line_IDs(){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      baseURL: '/api',
      url: '/A01010000C-001277-053',
    };
    //資料爬取與錯誤處理   
    await axios.request(config).then((res)=>{ All_IDs.statuscode = 200;All_IDs.info = res.data;})
    .catch(()=>{All_IDs.statuscode = 500});
  }

  return {All_IDs , Get_All_Line_IDs}
})
