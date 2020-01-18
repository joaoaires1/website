import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Portifolio from './components/Portifolio'
import About from './components/About'

Vue.use(VueRouter)

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'home', path: '/home', component: Home },
    { name: 'projects', path: '/projects', component: Portifolio },
    { name: 'about', path: '/about', component: About }
]

const router = new VueRouter({
    routes
})

export default router