<template>
  <div class="goodlist" @click="detailClick">
      <img :src="goodlist.show.img" alt="" @load="imgLoad">
      <div class="goodslist-info" >
        <p >{{goodlist.title}}</p>
        <span class="price">{{goodlist.price}}</span>
        <span class="collect">{{goodlist.cfav}}</span>
      </div>

  </div>
</template>

<script>
  export default {
    name: "goodslist",
    props:{
      goodlist:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      detailClick(){
        //console.log(this.goodlist.iid);
        this.$router.push('/detail/'+ this.goodlist.iid)
      }
    }


  }
</script>

<style scoped>
  .goodlist{
    margin-bottom: 10px;
    position: relative;
    padding-bottom: 40px;
    width: 46%;
    background-color: #fff;
    border-radius: 8px 8px 8px 8px;
  }
  .goodlist img{
    position: relative;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
  }
  .goodslist-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodslist-info p{
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goodslist-info .price{
    color:deeppink;
    margin-right: 20px;
  }
  .goodslist-info .price,.goodslist-info .collect{
    position: relative;
  }
  .goodslist-info .price:before{
    content: '￥';
    position: absolute;
    margin-left: -12px;
    width: 14px;
    height: 14px;
  }
  .goodslist-info .collect::before{
    content: ' ';
    position: absolute;
    margin-left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>
