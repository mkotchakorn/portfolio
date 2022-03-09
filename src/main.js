import { createApp } from "vue";

// page
import App from "./App.vue";

// icon
import Unicon from "./assets/unicon";

// loading
// import PulseLoader from "vue-spinner/src/PulseLoader.vue";

// css
import "./assets/css/main.css";

createApp(App).use(Unicon).mount("#app");
