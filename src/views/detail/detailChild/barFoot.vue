<template>
  <div class="bar-foot">
    <div class="bar-left">
      <div>
        <div class="ico shop"></div>
        <div><span>店铺</span></div>
      </div>
      <div>
        <div class="ico service"></div>
        <div><span>客服</span></div>
      </div>
      <div>
        <div class="ico select"></div>
        <div><span>收藏</span></div>
      </div>
    </div>
    <div class="bar-middle" @click="addtoCart">
      <span>加入购物车</span>
    </div>
    <div class="bar-right">
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "barFoot",
    methods:{
      addtoCart(){
        this.$emit('addtoCart')
      },
    },
  }
</script>

<style scoped>
  .bar-foot{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 49px;
    z-index: 4;
    background-color: #fff;
  }
  .bar-left,.bar-middle,.bar-right{
    flex: 1;
    text-align: center;
    font-size: 15px;
  }
  .bar-left{
    display: flex;

  }
  .ico{
    margin-bottom: 3px;
  }
  .shop{
    width: 40px;
    height: 20px;
    background: url("~assets/image/detail/detail_bottom.png");
    background-size: 29px 121px;
    background-repeat: no-repeat;
    background-position: 8px -77px;
  }
  .service{
    width: 40px;
    height: 20px;
    background: url("~assets/image/detail/detail_bottom.png");
    background-size: 26px 145px;
    background-repeat: no-repeat;
    background-position: 8px -50px;
  }
  .select{

    width: 40px;
    height: 20px;
    background: url("~assets/image/detail/detail_bottom.png");
    -webkit-background-size: 30px 150px;
    background-size: 30px 150px;
    background-repeat: no-repeat;
    background-position: 8px 0px;
  }
  .bar-left div{
    flex: 1;
  }
  .bar-middle{
    line-height: 49px;
    color:white;
    letter-spacing: 2px;
    background-color: #ffb157;
    border-radius: 25px 0 0 25px;
  }
  .bar-right{
    line-height: 49px;
    color:white;
    letter-spacing: 2px;
    background-color: rgb(233, 39, 29);
    border-radius: 0 25px 25px 0;
  }

</style>
