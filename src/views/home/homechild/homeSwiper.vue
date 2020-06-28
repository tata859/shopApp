<template>
    <swiper  v-if="banners.length">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" :title="item.title" @load="swiperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import swiper from 'components/common/swiper/swiper'
  import swiperItem from 'components/common/swiper/swiperItem'

  export default {
    name: "homeSwiper",
    props:{
      banners:{
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

</style>
