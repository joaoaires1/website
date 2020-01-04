import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Portifolio from './components/Portifolio'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/projects', component: Portifolio }
]

const router = new VueRouter({
    routes
})

export default router