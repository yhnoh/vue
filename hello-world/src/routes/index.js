import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./Home.vue";
import Movie from "./Movie.vue";
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
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }
    ]
})