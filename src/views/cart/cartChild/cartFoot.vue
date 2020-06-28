<template>
  <div class="cart-foot">
    <div class="select-all" @click="selectClick()">
      <div class="total-select" :class="{isselect:isSelect}"></div>
      <span >全选</span>
    </div>
    <div class="shop-tatol">
      <span >合计：</span>
      <span>{{totalPrice}}</span>
    </div>
    <div class="shop-settlement" >结算({{cartCount}})</div>
  </div>
</template>

<script>
  export default {
    name: "cartFoot",
    data(){
      return {

      }
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item =>{
          return item.isred===true
        }).reduce((preValue,item)=>{
          return preValue + item.price*item.count
        },0)
      },
      cartCount(){
        return this.$store.state.cartList.filter(item => item.isred===true).length||0
      },
      isSelect(){
        if(this.$store.state.cartList.find(item=>item.isred===false))return false
         return true
      }
    },
    methods:{
      selectClick(){
        if(this.$store.state.cartList.find(item=>item.isred ===false)){
          this.$store.state.cartList.forEach(item=>item.isred=true)
        }
        else {
          this.$store.state.cartList.forEach(item=>item.isred=false)
        }
      }
    },
  }
</script>

<style scoped>
  .cart-foot{
    display: flex;
    position: fixed;
    bottom: 49px;
    width: 100%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #d5d5d5;
  }
  .select-all{
    flex: 1;

  }
  .select-all>span{
    vertical-align: middle;
  }
  .total-select{
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid gray;
  }
  .shop-tatol{
    flex: 1;
  }
  .shop-settlement{
    flex: 1;
  }
  .isselect{
    background-color: red;
  }
</style>
