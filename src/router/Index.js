import { createRouter, createWebHistory } from 'vue-router'

import Rollingrecs from '../components/Rollingrecs.vue'
import Article from '../components/Article.vue'
import Signup from '../components/Signup.vue'

const routes = [
    { path: '/', component: Rollingrecs },
    { path: '/article', component: Article },
    { path: '/signup', component: Signup }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
