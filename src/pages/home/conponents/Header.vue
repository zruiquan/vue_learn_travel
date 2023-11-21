<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- lang="stylus": 使用stylus语法编写css, scoped: 样式做限制，只对当前组件有影响，不会影响其他组件 -->
<!-- 1rem = html font-size = 50px -->
<!--
     @import '~@/assets/styles/varibles.styl'
     @import: 样式中引用样式，使用样式变量
     注意：导入的时候区分于其他形式的导入，可以用相对路径的方式，也可以用@符号
     如果用@符号，则代表从src目录开始，但是这里需要在@符号前面加上~
     可以自定义路径别名，在webpack.base.conf.js文件中进行配置，配置完成之后可以进行最终简化路径 @import '~styles/varibles.styl'
-->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-left: .2rem
    margin-top: .12rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
