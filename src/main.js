import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import FlagIcon from 'vue-flag-icon'
import Vue from 'vue'
import App from './App.vue'

Vue.use(FlagIcon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
