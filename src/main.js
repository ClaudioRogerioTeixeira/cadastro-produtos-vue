import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from 'jquery'

createApp(App).use(router).use(jQuery).mount('#app')
