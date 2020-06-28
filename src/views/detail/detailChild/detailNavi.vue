<template>

    <navigation>
      <div slot="left" class="deimg" @click="backClick"><img src="~assets/image/common/back.svg" alt=""></div>
      <div slot="middle" class="nav-detail">
        <div v-for="(item,index) in title" class="nav-detail-item"
             @click="detailClick(index)"
             :class="{detailactive:index===current}"
        >{{item}}</div>
      </div>
    </navigation>

</template>

<script>
  import navigation from 'components/common/Navigation/Navigation'

  export default {
    name: "detailNavi",
    data(){
      return {
        title:['商品','参数','评论','推荐'],
        detailactive:true,
        current:0,
      }
    },
    components:{
      navigation
    },
    methods:{
      /*点击事件*/
      //详情
      detailClick(index){
        //console.log(1);
        this.current = index
        this.$emit('detailClick',index)
      },

      //返回
      backClick(){
        //console.log(1);
        this.$router.back()

      },
    },
  }
</script>

<style scoped>
  .nav-detail{
    display: flex;
    font-size: 15px;
  }
  .nav-detail-item{
    flex: 1;
  }
  .detailactive{
    color:red;
  }
  .deimg img{
    margin-top: 10px;
  }
</style>
