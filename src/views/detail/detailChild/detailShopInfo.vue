<template>
  <div v-if="shops&&Object.keys(shops).length !== 0" class="shop-info">
    <div class="shop-title">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="detail-shop">
      <div class="shop-sell">
        <div>{{shops.fans}}</div>
        <div>总销量</div>
      </div>
      <div class="shop-all">
        <div>{{shops.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="shop-comment" v-if="shops.score&&shops.score.length !== 0">
        <table>
          <tr v-for="item in shops.score" class="item-comment">
            <td class="item-content">{{item.name}}</td>
            <td class="item-score" :class="{scorebetter: item.isBetter}" >{{item.score}}</td>
            <td class="item-better" :class="{better: item.isBetter}">{{item.isBetter?"高":"低"}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props:{
      shops:{
        type:Object,
        default:{}
      },
    },
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  .shop-info{
    margin-top: 10px;
    box-shadow: 0 -3px 4px rgba(214,214,214,.6);
    background-color: #fff;
  }
  .shop-title{
    padding: 15px;
    padding-left: 0px;
  }
  .shop-title img{
    width: 70px;
    height: 70px;
    vertical-align: middle;
  }
  .shop-title span{
    padding-left: 5px;
    vertical-align: middle;
  }
  .detail-shop{
    display: flex;
    text-align: center;
    font-size: 14px;
  }
  .detail-shop .shop-sell,.detail-shop .shop-all{
    margin-top: 20px;
    flex: 25%;

  }
  .detail-shop .shop-comment{
    flex: 50%;
  }
  .item-score{
    padding-left: 10px;
    padding-right: 10px;
  }
  .shop-comment table {
    width: 130px;
    margin-left: 15px;
  }

  .item-content{

  }
  .shop-comment .item-score {
    color: #5ea732;
  }
  .shop-comment .item-better {
    background-color: #5ea732;
  }

  .item-comment .scorebetter{
    color: #f13e3a;
  }
  .item-comment .better{
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin: 10px 0;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
