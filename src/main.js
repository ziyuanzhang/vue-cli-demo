// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/router'
import axios from 'axios'
import {store} from './store/store'
/* var $http = axios.create({
  　baseURL: 'http://localhost:8079',
  　timeout: '3000', 

  }) */
Vue.prototype.$http = axios

export const Bus = new Vue()
//directive
Vue.directive('fontColor', {
  bind(el, binding, vnode) {
    el.style.color = "red";
  }
});
Vue.directive("dir", {
  bind(el, binding, vnode) {
    if (binding.value == "w800") {
      el.style.border="1px solid #000";
      el.style.width = "800px";

    } else {
      el.style.width = "600px";
      el.style.border="1px solid #000";
    }
    if (binding.arg == "fs40") {
      el.style.fontSize = "40px";
    }
  }
});
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase()
})



/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

