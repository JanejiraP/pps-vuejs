import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    customer: {
      namespaced: true,
      mutations: {
        foo(state) { // call >> 'customer/foo'
          console.log('customer: foo()', state)
        }
      }
    }
  }
})

export default store