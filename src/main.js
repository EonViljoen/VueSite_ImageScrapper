import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from './components/Home.vue'
import test from './components/test'

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/test', component: test}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
