import Vue from 'vue'
import Vuex from 'vuex'
import info from './store/modules/info'

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({ //ここに実装を書く
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    info
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

// export default {
//     el: '#app',
//     store,
//     computed: {
//         gender: { 
//      get() { 
//      return this.$store.state.gender; 
//      }, 
//      set(value) { 
//      this.$store.commit("SET_GENDER", value); 
//      } 
 
//     } 
 
//     } 
// }