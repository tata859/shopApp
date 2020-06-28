<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props:{
      message:{
        type:String,
        default:null
      },
      isshow:{
        type:Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    padding:8px 10px;
    background-color: #b9b9b9;
    z-index: 4;
  }
</style>
