<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isShow" class="1"><slot name="tab-bar-item-ico"></slot></div>
    <div v-else="!isShow" class="2"><slot name="tab-bar-item-icos"></slot></div>
    <div><slot name="tab-bar-item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props: {
      path: String
    },
    data(){
      return {
        //isShow:true
      }
    },
    computed:{
      isShow(){
        return this.$route.path.indexOf(this.path) !== -1
        console.log(this.$route.path.indexOf(this.path))
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
        this.$bus.$on('cartcount',(msg)=>{
          console.log(11);
          console.log(msg);
        })
        //console.log(1);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height:49px;
    font-size: 15px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
