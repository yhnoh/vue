import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'


//use, 플러그인 설정할 떼 사용
createApp(App)
    .use(router)
    .mount('#app')
