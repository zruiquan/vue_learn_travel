<template>
  <div id="app">
    <!--
      keep-alive: 路由的内容被加载过一次后就把路由中的内容放在内存中，下载再进这个路由的时候，
                  不需要重新渲染这个组件和重新执行钩子函数，只需要从内存中把之前的内容拿出来显示在页面上就可以了
      exclude: 除了Detail页面，其他页面都要缓存
    -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
