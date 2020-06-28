<template>
  <div class="cart-content" v-if="this.cartlist.length">
    <div class="to-select" v-for="item in this.cartlist">
      <div class="select">
        <div class="select-radius" :class="{isAtive:item.isred}" @click="isClick(item)">
        </div>
      </div>
      <div class="cart-image">
        <img :src="item.image" alt="">
      </div>
      <div class="cart-info">
        <p class="cart-title">{{item.title}}</p>
        <p class="cart-desc">{{item.desc}}</p>
        <div class="cart-price">
          <div class="shop-price">${{item.price}}</div>
          <div class="shop-count">
            <span>-</span>
            <span>{{item.count}}</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "cartList",
    props:{
      cartlist:{},
      /*isred:{
        type:Boolean,
        default:true
      }*/
    },
    computed:{

    },
    methods:{
      isClick(item){
        //console.log(1);
        item.isred = !item.isred
      },
    }
  }
</script>

<style scoped>
  .to-select{
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    height: 120px;
    overflow: hidden;
  }

  .select{
    flex: 1;
    position: relative;
  }
  .select-radius{
    position: absolute;
    margin-left: 5px;
    margin-top: -10px;
    top:45%;
    width: 20px;
    height: 20px;
    border:2px solid gray;
    border-radius: 50%;
  }
  .cart-image{
    flex: 3;
  }
  .cart-image img{
    width: 100%;
    height: 100%;
  }
  .cart-info{
    flex: 6;
    margin-left: 10px;
    overflow: hidden;
  }
  .cart-info p{
    margin: 0;
    padding: 8px 0 4px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cart-title{
    font-size: 20px;
    letter-spacing: 2px;
  }
  .cart-desc{
    font-size: 14px;
  }
  .cart-price{
    margin-top: 10px;
    padding: 5px 0;
  }
  .shop-price{
    display: inline-block;
  }
  .shop-count{
    display: inline-block;
    margin-right: 20px;
    float: right;
  }
  .shop-count span{
    padding: 0 4px;
  }
  .isAtive{
    background-color:red;
  }
</style>
