import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from 'vue-google-maps-community-fork'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAu94igMGdWyK9JSVIKwM-e-M9vzZtsTWI',
    },
  })

app.mount('#app')
