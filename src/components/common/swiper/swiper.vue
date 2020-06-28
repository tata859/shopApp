<template>
  <div class="hy-swiper">
    <div class="swiper" >
      <slot></slot>
    </div>
    <div  v-if="slideCount>1&&showIndicator" class="indicator">
      <div v-for="(showitem,index) in slideCount" class="ind-itm" :class="{active:index===currentIndex-1}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "swiper",
    props:{
      interval:{    //滚动时间，多久滚动一张
        type:Number,
        default:3000
      },
      animtran:{    //过度时间
        type:Number,
        default:2000
      },
      showIndicator: {    //小点点，指示器
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        slideCount: 0, // 元素个数
        swiperW:0,     //swiper宽度
        swiperStyle: {}, // swiper样式
        currentIndex: 1, // 当前的index

      }
    },
    mounted:function () {
      this.$nextTick(()=>{

        //操作dom
        this.handleDom()
        //开启定时器
        this.startTimer();
      })

      /*setTimeout(()=>{
        this.handleDom()
        //开启定时器
        this.startTimer();
      },500)*/
    },
    methods:{
      //定时器
      startTimer(){
        this.playTimer = setInterval(() => {
          this.currentIndex++
          this.swiperStyle.transition =  'all ' + '2s'
          if(this.currentIndex>this.slideCount){

            this.currentIndex=1
            this.swiperStyle.transition =  'all ' + '0s'
          }
          this.setTransform(-this.swiperW*this.currentIndex)
        },this.interval)
      },

      //操作DOM
      handleDom(){
        let oswiper = document.querySelector('.swiper')
        let oswiperItem = oswiper.getElementsByClassName('slide')
        //console.log(oswiperItem);
        //轮播图length.width
        this.slideCount = oswiperItem.length
        this.swiperW = oswiper.offsetWidth
        //console.log(this.swiperW);
        //如果length个数大于1
        if(this.slideCount>1){
          //console.log('22');
          let cloneFirt = oswiperItem[0].cloneNode(true)
          let cloneLast = oswiperItem[this.slideCount-1].cloneNode(true)
          oswiper.appendChild(cloneFirt)
          oswiper.insertBefore(cloneLast,oswiperItem[0])
          this.swiperStyle = oswiper.style
          //console.log(this.swiperStyle);
          //让图片显示未插入前的第一个
          this.setTransform( -this.swiperW)
          //this.swiperStyle.transform = `translateX(${-this.swiperW}px)`

        }
      },

      //更改样式
      setTransform: function (position) {
        //this.swiperStyle.transition =  'all ' + '2s'
        this.swiperStyle.transform = `translateX(${position}px)`
      }
    }
  }

</script>

<style scoped>
  .hy-swiper{
    overflow: hidden;
    /*position: relative;*/
  }
  .swiper{
    display: flex;
    /*width: 120px;*/
  }
  .indicator{
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    bottom: 10px;
  }
  .ind-itm{
    margin: 0 5px;
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
  }
  .ind-itm.active{
    background-color: rgba(212,62,46,1.0);
  }
</style>
