<template>
  <div v-if="recommendinfo.list" class="recommendinfo">
    <div v-for="item in recommendinfo.list" class="recommendinfo-list" @click="recommend(item.item_id)">
      <img :src="item.image" alt="">
      <div class="recommendinfo-title">
        <p>{{item.title}}</p>
        <span>${{item.price}}</span>
        <span>{{item.itemSale}}</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "detailRecommend",
    // props:['recommendinfo']
    props:{
      recommendinfo:{
        type:Object,
        default:{}
      },
      //lengths:0
    },
    data(){
      return {

      }
    },

    methods:{
      recommend(arg){
        this.iid = arg
        console.log(this.iid)
        this.$router.push('/detail/'+ this.iid)
      },
    },
  }
</script>

<style scoped>
  .recommendinfo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;

  }
  .recommendinfo-list{
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 10px;
    width: 45%;
    background-color: #fff;
    border-radius:8px 8px 0 0;
  }
  .recommendinfo-list img{
    position: relative;
    width: 100%;
    /*height: 170px;*/
    border-radius:8px 8px 0 0;
  }
  .recommendinfo-list .recommendinfo-title{
    font-size: 12px;
    position: absolute;
    width: 100%;
    overflow: hidden;
    text-align: center;
  }
  .recommendinfo-title p{
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recommendinfo-title span:nth-child(2){
    line-height: 20px;
    margin-right: 25px;
    color:red;
  }
  .recommendinfo-title span:nth-child(3)::before{
    content: ' ';
    position: absolute;
    margin-top: 3px;
    margin-left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>
