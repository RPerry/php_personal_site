import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import home from './components/home.vue'
import aboutC from './components/aboutC.vue';
import trivia from './components/trivia.vue';
import dogs from './components/dogs.vue';
import contact from './components/contact.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: home
	},
	{
		path: '/about',
		component: aboutC
	},
  {
		path: '/trivia',
		component: trivia
	},
  {
		path: '/dogs',
		component: dogs
	},
  {
		path: '/contact',
		component: contact,
	}
  
];

const router = new VueRouter({ routes });


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
