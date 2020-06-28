<template>
  <div class="wraper" ref="wraper">
      <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "betterScroll",
    data(){
      return {
        bscroll:null,
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default:false
        },
      }
    },
    mounted(){
      this.$nextTick(()=>{
        let wraper = this.$refs.wraper
        this.bscroll = new BScroll(wraper,{
          probeType:this.probeType,  //实时检测
          click:true,     //检测内部点击事件
          pullUpLoad:this.pullUpLoad,   //下拉加载更多
        })
        //调用scrollTo(x,y,time)方法
        this.bscroll.scrollTo(0,0)

        //检测滚动事件
        this.bscroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
        })
        //检测下拉加载事件
        this.bscroll.on('pullingUp',()=>{

          this.bscroll.finishPullUp()
          this.$emit('pullingUp')
        })
        //执行refresh()刷新,处理dom加载完全，但是图片没有加载完全出现滚动到一半不能滚动的bug问题
        this.brefresh()
      })

    },
    methods:{
      bscrollTo(x,y,time){
        //console.log('1');
        this.bscroll&&this.bscroll.scrollTo(x,y,time)
      },
      brefresh(){
        this.bscroll&&this.bscroll.refresh()
        //console.log(ss);
      },
    },
  }
</script>

<style scoped>
  .wraper{

  }
</style>
