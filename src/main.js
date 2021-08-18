import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';

import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBandge from './components/ui/BaseBandge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseBandge', BaseBandge);
app.component('BaseButton', BaseButton);

app.mount('#app');
