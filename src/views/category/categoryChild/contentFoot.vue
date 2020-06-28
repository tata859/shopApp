<template>
  <div class="content-foot">
    <div class="foot-item" v-for="(item,index) in catefootdata" @click="jumpClick(item.iid)">
        <div class="item-img">
          <img :src="item.img" alt="" @load="imageLoad">
        </div>
        <div class="item-title">{{item.title}}</div>
        <div class="item-price">{{item.price|oPrice}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contentFoot",
    props:{
      catefootdata:{
        type:Array,
        default:[]
      }
    },
    filters:{
      oPrice(items){
        return ('$' + items)
      }
    },
    methods:{
      jumpClick(iid){
        this.$router.push('/detail/'+iid)
      },
      imageLoad(){
        // console.log(22);
        this.$emit('imageLoad')
      },
    }
  }
</script>

<style scoped>
  .content-foot{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  .foot-item{
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 10px;
    width: 45%;
  }
  .foot-item .item-img{
    width: 100%;
  }
  .foot-item .item-img img{
    width: 100%;
  }
  .foot-item .item-title{
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .foot-item .item-price{
    position: absolute;
    bottom: 0px;
    width: 100%;
    font-size: 14px;
    color: red;
    text-align: center;
  }
</style>
