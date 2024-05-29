import '../styles/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBasket, faChevronDown);

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
