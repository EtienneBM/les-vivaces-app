import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//UI components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app')
