<template>
  <div class="cart">
    <navigation class="nav"><div slot="middle">购物车({{shopCount}})</div></navigation>
    <div v-if="cartList.length">
      <cart-list class="cart-content" :cartlist="cartList"/>
      <cart-foot/>
    </div>
    <div v-else class="cart-else">
      <h2>您的购物车空空如也</h2>
    </div>
    <div class="cart-count">
      ({{shopCount}})
    </div>
  </div>
</template>

<script>
  import navigation from 'components/common/Navigation/Navigation'
  import cartList from './cartChild/cartList'
  import cartFoot from './cartChild/cartFoot'

  export default {
    name: "cart",
    components:{
      navigation,
      cartList,
      cartFoot
    },
    mounted(){
      //console.log(this.$store.state.cartList);

    },
    activated(){
      //console.log(this.$store.state.cartList);
    },
    computed:{
      shopCount(){
        return this.$store.state.cartList.length||0
      },
      cartList(){
        return this.$store.state.cartList
      },
    },
    methods:{
      // h(){
      //   console.log(this.$store.state.cartChild);
      // },
    }
  }
</script>

<style scoped>
  .cart{
    width: 100%;
    height: 100vh;
  }
  .cart-content{
    width: 100%;
    height: calc(100% - 44px - 49px);
    /*overflow: hidden;*/
  }
  .cart-else{
    margin-top: -17px;
    background-color: #f7f7f7;
    border-radius: 0 0 10px 10px;
  }
  h2{
    text-align: center;
    padding: 15px 0;
    border-bottom: 6px solid #a5a5a5;
    border-radius: 0 0 10px 10px;
  }
  .cart-count{
    position: absolute;
    bottom: 15px;
    right: 20%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #a146ff;
    z-index: 2;
  }
</style>
