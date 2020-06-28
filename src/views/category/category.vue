<template>
  <div class="category">
    <Navigation class="cate-nav"><div slot="middle">商品分类</div></Navigation>
    <div class="cate-content">
      <better-scroll class="cateslist-left">
        <div>
          <shop-list class="content-list" :categories="categories" @listClick="listClick"/>
        </div>
      </better-scroll>
      <better-scroll class="cateslist-right" ref="cateslistright">
        <div class="content-shop">
            <content-top :subcategories="showSubcategory"></content-top>
            <cate-control :title="['流行','新款','精选']" @cateClick="cateClick" ref="catecontrol"></cate-control>
            <contentFoot :catefootdata="catefootdata" @imageLoad="imageLoad"/>
          </div>
      </better-scroll>

    </div>
  </div>
</template>

<script>
  import shopList from './categoryChild/shopList'
  import contentTop from './categoryChild/contentTop'
  import cateControl from './categoryChild/cateControl'
  import contentFoot from './categoryChild/contentFoot'

  import betterScroll from 'components/common/betterScroll/betterScroll'

  import Navigation from 'components/common/Navigation/Navigation'
  import {getCategory,getsublist,getCategoryDetail} from 'network/category'   //网络请求
  export default {
    name: "category",
    components:{
      Navigation,
      shopList,
      contentTop,
      cateControl,
      contentFoot,
      betterScroll,
    },
    data(){
      return {
        categories:[],//分类数据
        categoryData:{},//分数据的子类数据
        currentIndex:-1,
        currentType:'pop',
        refresh:null
      }
    },
    created(){
      this.getCategory()
    },
    activated(){

    },
    mounted(){
      this.refresh=this.debounce()
      //console.log(this.refresh)
    },
    computed:{
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      //新款，
      catefootdata() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods:{
      //分类数据请求
      getCategory(){
        getCategory().then((reg)=>{
          console.log(reg);
          this.categories = reg.data.data.category.list
        //初始化每个类别的子数据
          for(let i=0;i<this.categories.length;i++){
            this.categoryData[i]={
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
        //请求第一个分类数据
          this._getSubcategories(0)
        })
      },
      //
      _getSubcategories(index){
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getsublist(mailKey).then(res => {

          this.categoryData[index].subcategories = res.data.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey,type)
          .then(res=>{
            //console.log(res);
            this.categoryData[this.currentIndex].categoryDetail[type] = res.data
            this.categoryData = {...this.categoryData}
          })
      },

      //点击事件
      listClick(index){
        //console.log(index)
        this._getSubcategories(index)
      },
      cateClick(indexs){
        this.$refs.catecontrol.current = indexs
        //console.log(indexs);
        switch(indexs){
          case 0:
          this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      //防抖
      imageLoad(){
         this.refresh()
      },
      debounce(){
        let Tmir = null
        return function () {
          if(Tmir) clearTimeout(Tmir)
          Tmir = setTimeout(()=>{
            this.$refs.cateslistright.brefresh()
            //console.log(11);
          },500)
          }
        }
    },
  }
</script>

<style scoped>
  .category{
    height: 100vh;
  }
  .cate-nav{
    background-color: hotpink;
    line-height: 44px;
  }
  .cate-content{
    display: flex;
    width: 100%;
    height: calc(100% - 93px);
  }
  .cateslist-left,.cateslist-right{
    overflow: hidden;
    /*height: 300px;*/
    height: 100%;
  }
  .cateslist-left{
    flex: 1;
  }
  .cateslist-right{
    flex: 3;
  }
  .content-list{
    /*height: 100%;*/
    background-color: #fff;
  }
  /*.content-shop{*/
    /*height: 100%;*/

  /*}*/
</style>
