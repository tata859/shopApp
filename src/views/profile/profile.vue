<template>
  <div>
      <div>
        <div>{{this.userInfo.name}}</div>
        <div>{{this.userInfo.age}}</div>
        <div>{{this.res}}</div>
        <div>暂时未开发完成</div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import betterScroll from 'components/common/betterScroll/betterScroll'
  export default {
    name: "profile",
    data(){
      return {
        res:{},
        userInfo:{}
      }
    },
    created(){
      axios.get('http://localhost:8082/profile')
        .then(res=>{
          this.res = res
          this.userInfo = res.data
        console.log(res);
        })
    },
    components:{
      betterScroll
    }
  }
</script>

<style scoped>
  .wrap{
    height: 300px;
    overflow: hidden;
    background-color: pink;
  }
</style>
