import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

//use, 플러그인 설정할 떼 사용
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
