<template>
  <div class="control">
    <div v-for="(item,index) in title"
         class="controlitem"
         :class="{active:index===current}"
         @click=controlClick(index)
    ><span>{{item}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      title:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        current:0
      }
    },
    methods:{
      controlClick(index){

        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .control{
    display: flex;
    width: 100%;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    background-color: white;
    z-index: 2;
  }
  .controlitem{
    flex: 1;
    padding-bottom: 5px;
  }
  .controlitem.active span{
    padding: 5px;
    color: #ff7daa;
    border-bottom: 1px solid red;
  }
</style>
