import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // vuex中的getters的作用有点类似组件中的computed计算属性的作用
  // 当我们需要根据state里面的数据算出一些新的数据的时候，我们就可以借助getter这样的一个工具，来提供新的数据，避免数据的冗余
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
