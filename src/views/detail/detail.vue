<template>
  <div id="detail">
    <detail-navi id="detatil-navi" @detailClick="detailClick" ref="navi"/>
    <betterScroll id="detail-scroll" ref = "descroll" @scroll="scrollY">
      <div class="detail-content">
        <detail-swiper class="detailSwiper" :topImages="topImages" :probe-type="3" ref="detailSwiper"/>
        <detail-baseInfo :goods = "goods" ref="baseInfo"/>
        <detail-shopInfo :shops = "shops"/>
        <detail-commodity :detailInfo = 'detailInfo'/>
        <param-info :itemParams = "itemParams" ref="paraminfo"/>
        <detail-comment :commentInfo = "commentInfo" ref="commentinfo"/>
        <detail-recommend :recommendinfo="recommendinfo" class="recommend" ref="recommendinfo"/>
      </div>
    </betterScroll>
    <bar-foot class="bar-foot" @addtoCart="addtoCart"/>
    <toast :message="message" :isshow="isshow"></toast>
  </div>
</template>

<script>
  import betterScroll from 'components/common/betterScroll/betterScroll'
  import detailNavi from "views/detail/detailChild/detailNavi"
  import detailSwiper from './detailChild/detailSwiper'
  import detailBaseInfo from './detailChild/detailBaseInfo'
  import detailShopInfo from './detailChild/detailShopInfo'
  import detailCommodity from './detailChild/detailCommodity'
  import paramInfo from './detailChild/paramInfo'
  import detailComment from './detailChild/detailComment'
  import detailRecommend from './detailChild/detailRecommend'
  import barFoot from './detailChild/barFoot'
  import toast from  'components/common/toast/toast'

  import {mapActions} from 'vuex'  //导入vuex里映射的函数接受

  import {getDetail,Goods,shop,getRecommend} from "network/detail"

  export default {
    name: "detail",
    data(){
      return {
        iid:null,
        topImages:[],             //轮播数据
        goods:{
          type:Object,
          default:{}
        },    //基本详情
        shops:{
          type:Object,
          default:{}
        },      //店铺信息
        detailInfo:{
          type:Object,
          default:{}
        },  //商品展示
        itemParams:{
          type:Object,
          default:{}
        },   //商品参数信息
        commentInfo:{
          type:Object,
          default:{}
        },   //商品评论信息
        recommendinfo:{
          type:Object,
          default:{}
        },
        topy:[],
        topYlength:0,
        isshow:false,
        message:null

      }
    },
    components:{
      betterScroll,     //betterScroll滚动
      detailNavi,       //导航栏
      detailSwiper,     //轮播
      detailBaseInfo,   //详情基础信息
      detailShopInfo,   //详情店铺信息
      detailCommodity,  //商品详情
      paramInfo,        //商品参数
      detailComment,    //评论信息
      detailRecommend,  //推荐
      barFoot,           //底部导航
      toast

    },
    created(){
      //console.log(this.goods);
      //保存iid
      this.iid = this.$route.params.iid

      //详情数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        //轮播数据
        this.topImages = res.data.result.itemInfo.topImages
        //  基本详情
        let data = res.data.result
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //店铺信息
        this.shops = new shop(data.shopInfo)
        //商品展示
        this.detailInfo = data.detailInfo
        //商品参数信息
        this.itemParams = data.itemParams
        //评论信息
        if(data.cRate !== 0)
        this.commentInfo = data.rate.list[0]
      })
      //推荐数据
      getRecommend()
        .then(res=>{
          this.recommendinfo = res.data.data
          })
        .catch(e=>{console.log(e);})
    },
    mounted(){
      this.$nextTick(()=>{

        const drefresh = this.antiShake(this.$refs.descroll.brefresh,50)
        const getTopy = this.antiShake(this.getTopY,50)
        this.$bus.$on('refimg',()=>{

          getTopy()
          drefresh()
        })
      })
      console.log(this.iid);

    },
    updated(){
      this.$refs.descroll.brefresh()

    },
    methods:{
      ...mapActions(['addCart']),//映射addCart函数
      antiShake(func,time){
        let stimer = null
        return function (...regs) {
          if(stimer)clearTimeout(stimer)
          stimer = setTimeout(()=>{
            func();
          },time)
        }
      },
      //检测滚动
      scrollY(position){
        const positionY = -position.y
        if(positionY>this.topy[this.topYlength-1]){
          this.$refs.navi.current = this.topYlength-1
        }
        for(let i=0;i<this.topYlength;i++){
          if(i<this.topYlength-1){
            //console.log(i);
            if(positionY>=this.topy[i]&&positionY<this.topy[i+1]){
              this.$refs.navi.current = i

            }
          }

        }




      },
      detailClick(index){
        //console.log(index);
        this.$refs.descroll.bscrollTo(0,-this.topy[index],500)



      },
      getTopY(){
        if(this.$refs.paraminfo&&this.$refs.paraminfo.$el){   //if判断   防止图片加载过快，dom节点还没渲染完成，$el报错
          this.topy = []
          this.topy.push(0)
          this.topy.push(this.$refs.paraminfo.$el.offsetTop)
          this.topy.push(this.$refs.commentinfo.$el.offsetTop)
          this.topy.push(this.$refs.recommendinfo.$el.offsetTop)
          this.topYlength = this.topy.length
        }
      },
      addtoCart(){
        //获取购物车商品信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        //将商品添加到购物车
        // this.$store.commit('addCart',product)    //这是mutations
        /*this.$store.dispatch('addCart',product).then((res)=>{
          console.log(res);
        })*/   //这是actions，可以返回promise


        //当addCart函数被映射之后可以直接使用，
        this.addCart(product).then(res=>{
          console.log(res);
          this.isshow = true
          this.message = res
          setTimeout(()=>{
            this.isshow =false
          },1000)
        })
      },
    },
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
  }
  #detail-scroll{
    position: absolute;
    overflow: hidden;
    height: calc(100% - 93px);
    z-index: 4;
    background-color: rgba(236, 236, 236, 0.53);

  }

  .detail-content{
  }
  .detailSwiper{
    height: 270px;
  }
</style>
