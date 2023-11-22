<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './conponents/Header.vue'
import HomeSwiper from './conponents/Swiper.vue'
import HomeIcons from './conponents/Icons.vue'
import HomeRecommend from './conponents/Recommend.vue'
import HomeWeekend from './conponents/Weekend.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style>

</style>
