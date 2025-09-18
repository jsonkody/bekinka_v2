import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'
import IconComponent from '@/components/IconComponent.vue'
import Toolpop from 'toolpop'

const app = createApp(App)
app.component('IconComponent', IconComponent)
app.use(Toolpop)

app.use(createPinia())
app.use(router)

app.mount('#app')
