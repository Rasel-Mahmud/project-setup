import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { add } from "./math.js";
// import { toast } from 'https://cdn.jsdelivr.net/npm/vue3-toastify@0.1.13/+esm';
import { toast } from 'vue3-toastify';

const app = createApp({
  data() {
    return {
      name: "Hello",
    }
  },
  methods: {
    notify() {
      toast.info('hello', {autoClose: 1000 });
    },
  }
});

// Mount the app to the DOM
app.mount('#app');

console.log(add(2,3));
console.log("Hey!");
