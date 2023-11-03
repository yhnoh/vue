import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./Home.vue";
import About from "./About.vue";
export default createRouter({
    // Hash, Histroy
    history: createWebHashHistory(),
    //페이지 구분
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})