import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
//"serve": "node ./node_modules/@drama_llama/rift/lib/Terminal.js && vue-cli-service serve",
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
