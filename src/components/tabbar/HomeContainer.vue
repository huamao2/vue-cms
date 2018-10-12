<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    
    <h3>HomeContainer</h3>
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data(){
    return{
      lunbotuList: [] //保存轮播图的数组
    }
  },
  created() {  //当页面加载,就调用获取轮播图方法
    this.getLunbotu();
  },
  methods: {
    getLunbotu(){
      this.$http.get('http://vue.studyit.io/api/getlunbo').then(res => {
        // console.log(result.body);
        if(res.body.status === 0) {
          this.lunbotuList = res.body.message;
        }else {
          Toast('加载轮播图失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1){
        background-color: blue;
      }
      &:nth-child(2){
        background-color: red;
      }
      &:nth-child(3){
        background-color: rosybrown;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
