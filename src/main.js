import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import '@/vee-validate'
import ApexChart from 'vue-apexcharts'
Vue.component('ApexChart', ApexChart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
