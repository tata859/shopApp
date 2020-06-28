<template>
  <div class="home" >
    <navigation class="nav"><div slot="middle">购物街</div></navigation>
    <tab-control :title="['流行','新款','精选']" class="tab-control" ref="tabCont" v-show="istop" @tabClick="tabClick"></tab-control>
    <better-scroll class="content" ref="backscroll" :probe-type="3" :pull-up-load='true' @scroll="contentScroll" @pullingUp="pullingUp">
      <div>
        <home-swiper :banners="banners" @swiperimgLoad="swiperimgLoad"></home-swiper>
        <home-recommend :recommends="recommends" ></home-recommend>
        <feature></feature>
        <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
        <goods :goods="goods[currentType].list"></goods>

      </div>
    </better-scroll>
    <back-top @click.native="backClick" v-show="isshow">
      <img src="~assets/image/common/top.png" alt="">
    </back-top>

  </div>
</template>

<script>

  import homeSwiper from './homechild/homeSwiper'
  import homeRecommend from './homechild/homeRecommend'
  import feature from './homechild/feature'

  import betterScroll from 'components/common/betterScroll/betterScroll'
  import navigation from 'components/common/Navigation/Navigation'
  import backTop from 'components/common/backTop/backTop'

  import tabControl from 'components/content/tabControl/tabControl'
  import goods from 'components/content/goods/goods'
  import goodslist from 'components/content/goods/goodslist'

  import {getHomemutile,getHomeGoods} from 'network/home'   //网络请求

  export default {
    name: "home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isshow:false,           //返回顶部
        istop:false,            //吸顶效果哦
        tabtop:0,
        saveY:0,                //保存home位置
      }
    },
    components:{
      homeSwiper,       //轮播
      homeRecommend,    //精选推荐
      navigation,       //底部导航栏
      feature,          //当前流行
      tabControl,       //流行
      goods,            //商品
      goodslist,        //商品
      betterScroll,     //滑动与下拉加载
      backTop,          //点击返回顶部


    },
    created(){
      console.log('创建');
      //请求轮播数据
      this.getHomemutile()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted(){

      //监听图片加载完成
      const refresh = this.debounce(this.$refs.backscroll.brefresh,50)
      this.$bus.$on('imgLoad',()=>{
        //this.$refs.backscroll.refresh()
        //防抖，优化
        refresh()
      })
    },
    updated(){
      this.$refs.backscroll.brefresh()
    },
    destroyed(){
      console.log('销毁');
    },
    activated(){
      console.log('进入');
      //console.log(this.$refs.backscroll.bscroll);
      this.$refs.backscroll.bscrollTo(0,this.saveY,10)
      this.$refs.backscroll.brefresh()
    },
    deactivated(){
      console.log('离开');
      this.saveY = this.$refs.backscroll.bscroll.y
      //console.log(this.saveY);

    },
    methods:{
     /* 事件监听数据*/
      //吸顶效果
      swiperimgLoad(){
        this.tabtop = this.$refs.tabControl.$el.offsetTop
        //console.log(this.tabtop);
      },
      //防抖
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if(timer)clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      },
      //请求商品数据
      tabClick(index){
        //console.log(index);
        switch (index) {
          case 0:
            this.currentType='pop'
            break;
          case 1:
            this.currentType='new'
            break;
          case 2:
            this.currentType='sell'
            break;
        }
        this.$refs.tabControl.current=index;
        this.$refs.tabCont.current=index;
      },
      //点击返回顶部
      backClick(){
        console.log(1);
        this.$refs.backscroll.bscrollTo(0,0,500);
      },
      //点击返回按钮隐藏与显示
      contentScroll(position){
        this.isshow = Math.abs(position.y) > 2000
        this.istop = Math.abs(position.y) > this.tabtop
      },
      //下拉加载更多
      pullingUp(){
        this.getHomeGoods(this.currentType)
        //console.log(this.currentType);
      },

      /*网络请求数据*/
      getHomemutile(){
        getHomemutile()
          .then((res)=>{
          this.banners=res.data.data.banner.list;
          this.recommends=res.data.data.recommend.list;
          this.$refs.backscroll.brefresh()
        })
          .catch((e)=>{
            console.log('网络请求错误');
          })
      },

      //请求多个商品数据
      getHomeGoods(type){
        const page=this.goods[type].page + 1
        getHomeGoods(type,page)
          .then(res=>{
          //console.log(res);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
          .catch((e)=>{
            console.log('2');
          })
      },

    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    background-color: rgba(219, 219, 221, 0.42);
  }
  .nav{
    /*background-color: #fff;*/
    background-color: rgba(255, 113, 193, 0.54);
    color:white;
  }
  /*.tab-control{
    position: sticky; !*吸顶效果*!
    top:50px;
  }*/
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /*height: 100%;*/
    height: calc(100% - 93px);
  }
  .tab-control{
    position: fixed;
    /*top:44px;*/
    z-index: 3;
  }
</style>
