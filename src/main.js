import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

import "./style/app.scss";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import moment from 'moment'
Vue.prototype.moment = moment
//Vue.use(require('vue-moment'));
Vue.filter('format', function (value, display) {
  if (!value) return ''
  return moment(value).format(display);
})

//routes
import routes from './routes';
const router = new VueRouter
({
	mode: 'history',
	routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
