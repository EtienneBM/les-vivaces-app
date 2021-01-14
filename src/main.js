import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//UI components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import BaseImagebadge from './components/UI/BaseImagebadge.vue';


//import component only when it's required, not in advance
const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'));

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-imagebadge', BaseImagebadge);


app.mount('#app')
