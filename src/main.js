// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store/store'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import WebFontLoader from 'webfontloader';
import 'vue-good-table/dist/vue-good-table.css'
import BlockUI from 'vue-blockui'
import axios from "axios";

import VDateRange from 'vuetify-daterange-picker';
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css';

window.Bus=new Vue;
window.axios=axios

window.token= localStorage.getItem('token');
window.user= localStorage.getItem('user');

axios.defaults.baseURL = 'https://reqres.in/api/';
axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;


Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(BlockUI)
Vue.use(VeeValidate, { fieldsBagName: 'veeFields' })
Vue.use(VDateRange);

// Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
