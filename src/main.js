import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from 'vue-google-maps-community-fork'
import ToastPlugin from 'vue-toast-notification';
import Popper from "vue3-popper";
import 'vue-toast-notification/dist/theme-bootstrap.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ToastPlugin);
app.component("Popper", Popper);

app.use(router)
app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDclRsTPAiKysxHZyYhZ4Qn0NBNO6ulHJ8',
    },
  })

app.mount('#app')
