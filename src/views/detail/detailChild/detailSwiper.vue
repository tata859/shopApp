<template>
  <div>
    <swiper  v-if="topImages.length">
      <swiper-item class="detail-item" v-for="item in topImages">
          <img :src="item" alt="" @load="swiperLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import swiper from 'components/common/swiper/swiper'
  import swiperItem from 'components/common/swiper/swiperItem'

  export default {
    name: "detailSwiper",
    props:{
      topImages:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        isimgLoad:true
      }
    },
    components:{
      swiper,
      swiperItem,
    },
    methods:{
      swiperLoad() {
        if (this.isimgLoad) {
          this.$emit('swiperimgLoad')
          this.isimgLoad = false
        }
      }
    },
  }
</script>

<style scoped>
  .detail-item{
    height: 270px;
  }
</style>

