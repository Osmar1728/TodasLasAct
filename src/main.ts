import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineComponent } from 'vue';
import type { PropType } from 'vue';


const app = createApp(App)

app.use(router)

app.mount('#app')
