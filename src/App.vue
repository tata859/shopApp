<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>

    <maintabBar></maintabBar>

  </div>
</template>

<script>
  import maintabBar from 'components/content/maintabBar/maintabBar'

  export default {
    name:'App',
    components:{
      maintabBar
    }
  }

</script>

<style>
  @import "./assets/css/base.css";



</style>
