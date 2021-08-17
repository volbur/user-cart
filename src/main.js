import { createApp } from 'vue';

import router from './router.js';

import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.component('BaseButton', BaseButton);

app.mount('#app');
