import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chartGenerator',
      name: 'chartGenerator',
      component: () =>
        import(
          /* webpackChunkName: "chart-generator" */ './views/ChartGenerator.vue'
        )
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import(/* webpackChunkName: "chart" */ './views/Chart.vue')
    }
  ]
});