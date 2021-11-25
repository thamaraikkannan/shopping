import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './css/style.css'
import './assets/tailwind.css'
//import VueObserveVisibility from 'vue-observe-visibility'

createApp(App).use(store).use(router).mount('#app')