<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="tab-bar-item-ico"><img src="~assets/icon/home.png" alt=""></div>
      <div slot="tab-bar-item-icos"><img src="~assets/icon/ohome.png" alt=""></div>
      <div slot="tab-bar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categopy">
      <div slot="tab-bar-item-ico"><img src="~assets/icon/cation.png" alt=""></div>
      <div slot="tab-bar-item-icos"><img src="~assets/icon/ocation.png" alt=""></div>
      <div slot="tab-bar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="tab-bar-item-ico"><img src="~assets/icon/cart.png" alt=""></div>
      <div slot="tab-bar-item-icos"><img src="~assets/icon/ocart.png" alt=""></div>
      <div slot="tab-bar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="tab-bar-item-ico"><img src="~assets/icon/mycon.png" alt=""></div>
      <div slot="tab-bar-item-icos"><img src="~assets/icon/omycon.png" alt=""></div>
      <div slot="tab-bar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import tabBar from 'components/common/tabBar/tabBar'
  import tabBarItem from 'components/common/tabBar/tabBarItem'

  export default {
    name: "maintabBar",
    components:{
      tabBar,
      tabBarItem
    },
    mounted(){

    },

  }
</script>

<style scoped>

</style>
