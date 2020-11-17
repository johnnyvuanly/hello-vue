import Vue from 'vue'
import App from './App.vue'

import HelloAPI from '@/services/HelloAPI'

Vue.config.productionTip = false

Vue.prototype.$hello_api = HelloAPI // We make it available to all parts of our app by using Vue.prototype this is the vue object. It will make a new method attached to it called $hello_api and setting it equal to whatever we're fetching from the HelloAPI file

new Vue({
  render: h => h(App),
}).$mount('#app')
