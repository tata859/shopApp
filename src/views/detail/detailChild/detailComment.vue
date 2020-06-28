<template>
  <div class="comment-info">
    <div class="comment-title">
      <span class="title-left">用户评价</span>
      <span class="title-right">更多⇨</span>
    </div>
    <div v-if="commentInfo">
      <div v-if="commentInfo.user" class="com-info">
        <img :src="commentInfo.user.avatar" alt="">
        <div class="commentInfo-time">
          <p>{{commentInfo.user.uname}}</p>
          <span>{{Ttime}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
      <div class="commentInfo-content">{{commentInfo.content}}</div>
      <div v-if="commentInfo.images&&commentInfo.images.length !==0">
        <div v-for="item in commentInfo.images" class="comitem-img">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailComment",
    props:{
      commentInfo:{
        type:Object,
        default:{}
      },
    },
    computed:{
      Ttime(){
        return (new Date(this.commentInfo.created * 1000)).toLocaleString('chinese',{hour12:false})
      }
    },
  }
</script>

<style scoped>
  .comment-info{
    margin: 20px 0;
    background-color: #fff;
  }
  .comment-title{
    position: relative;
    padding: 20px;
    height: 50px;
    line-height: 50px;
    color: #656567;
    border-top: 3px solid rgba(213, 213, 213, 0.51);
    border-bottom: 2px solid rgba(213, 213, 213, 0.51);

  }
  .comment-title .title-left{
    position: absolute;
    left: 10px;
  }
  .comment-title .title-right{
    position: absolute;
    right: 10px;
  }
  .com-info img{
    margin: 10px;
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
  .com-info p{
    font-size: 15px;
    color: #4e4e4e;
  }
  .commentInfo-content{
    font-size: 14px;
    text-indent: 2em;
    color:gray;
  }
  .commentInfo-time{
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color:gray;
  }
  .commentInfo-time p{
    margin: 2px;
  }
  .comitem-img{
    display: inline-block;
    overflow: hidden;
    padding: 2px;
    width: 100px;
    height: 100px;
    border-radius: 10px 10px 10px 10px;
  }
  .comitem-img img{
    border-radius: 10px 10px 10px 10px;
    width: 100px;
    height: 100px;
  }
</style>
