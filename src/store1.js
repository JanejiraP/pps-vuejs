import Vue from 'vue'
import Vuex from 'vuex'
import {actionGetUsers} from '@/actions/get-users'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    // counter: 100,
    // amount: 1000,
    // user: [],
    waiting: false
  },
  getters: {
    userCount(state) {
      return state.users.length
    }
    // doubleCounter(state) {
    //   return state.counter * 2
    // },
    // usAmount(state) {
    //   return state.amount / 30
    // }
  },
  mutations: {
    mutateUsers(state, param) {
      state.users = param
    },
    mutateWaiting(state, param) {
      state.waiting = param
    }
    // mutateCounter(state, param) {
    //   state.counter += param
    // }
  },
  actions: {
    actionGetUsers
    // actionCounter(context) { // $store
    //   context.commit('mutateCounter', 20)
    //   context.dispatch('xxx')
    // }
    // async actionGetUsers(context) {
    //   try {
    //     context.commit('mutateWaiting', true)
    //     const res = await axios.get(url)
    //     context.commit('mutateUsers', res.data)
    //     context.commit('mutateWaiting', false)
    //   } catch(err) {
    //     context.commit('mutateUsers', [])
    //     context.commit('mutateWaiting', false)
    //   }
    // }
  }
})

export default store