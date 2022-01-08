// require("./bootstrap");

// import { createApp } from "vue";
// import Home from "./components/Home.vue";

// const app = createApp({
//   components: {
//     Home
//   }
// });

// app.mount("#app");

require('./bootstrap');

require('alpinejs');

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({ color: '#4B5563' })

const el = document.getElementById('app');

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .mixin({ methods: { route } })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .component('inertia-link', Link)
      .component('inertia-head', Head)
      .mount(el)
  },
})