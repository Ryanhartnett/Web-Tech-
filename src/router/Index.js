import { createRouter, createWebHistory } from 'vue-router'

import Rollingrecs from '../components/Rollingrecs.vue'
import Article from '../components/Article.vue'
import Signup from '../components/Signup.vue'
import Adminview from "@/components/Adminview.vue";
import Account from "@/components/Account.vue";

const routes = [
    { path: '/', component: Rollingrecs },
    { path: '/article', component: Article },
    { path: '/signup', component: Signup },
    { path: '/Admin', component: Adminview},
    { path: '/Account' ,component: Account}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
