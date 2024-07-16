import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/personal-portfolio/', name: 'Home', component: Home},
        {path: '/personal-portfolio/about', name: 'About', component: About}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
