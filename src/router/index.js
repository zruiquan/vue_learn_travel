import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      // 修改成异步组件加载的形式
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      // component: City
      component: () => import('@/pages/city/City')
    },
    // 动态路由
    {
      path: '/detail/:id',
      name: 'Detail',
      // component: Detail
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置,每次做路由切换的时候，目标页面使x和y轴初始位置为0，让页面切换的时候始终回到最顶部
    return {x: 0, y: 0}
  }
})
