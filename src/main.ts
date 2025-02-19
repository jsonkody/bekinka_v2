import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'
import IconComponent from '@/components/IconComponent.vue'
import { pop } from '@/directives/Pop'

const app = createApp(App)
app.component('IconComponent', IconComponent)
app.directive('pop', pop)

app.use(createPinia())
app.use(router)

app.mount('#app')
