/*
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-09-19 18:25:58
 */
import './assets/styles/base.scss';
import { createApp } from 'vue'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import App from './App.vue'
import router from './router';
import store from './store';

createApp(App).use(router).use(store).use(Element3).mount('#app')
