<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, key) of imgs" :key="key">
          <img  class="gallary-image" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: function () {
    return {
      swiperOptions: {
        // swiper的配置属性可以去swiper官网进行搜索配置 http://3.swiper.com.cn 、https://www.swiper.com.cn/index.html
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // swapper插件如果监听到observer或者父级元素observerParents的DOM元素结构变化的时候，就会自我刷新一次，解决因为v-show造成的宽度计算问题而导致的滑动失败问题
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-image
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
