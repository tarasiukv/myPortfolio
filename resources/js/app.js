import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
// -- Favicons
import "../js/assets/img/favicon.png"
import "../js/assets/img/apple-touch-icon.png"
// -- Vendor CSS Files
import "../js/assets/vendor/aos/aos.css"
import "../js/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../js/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../js/assets/vendor/boxicons/css/boxicons.min.css"
import "../js/assets/vendor/glightbox/css/glightbox.min.css"
import "../js/assets/vendor/swiper/swiper-bundle.min.css"
// -- Template Main CSS File
import "../js/assets/css/style.css"
// -- Vendor JS Files -->
import "../js/assets/vendor/purecounter/purecounter_vanilla.js"
// import "../js/assets/vendor/aos/aos.js"
import "../js/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
import "../js/assets/vendor/glightbox/js/glightbox.min.js"
import "../js/assets/vendor/isotope-layout/isotope.pkgd.min.js"
import "../js/assets/vendor/swiper/swiper-bundle.min.js"
import "../js/assets/vendor/typed.js/typed.umd.js"
import "../js/assets/vendor/waypoints/noframework.waypoints.js"
import "../js/assets/vendor/php-email-form/validate.js"
// -- Template Main JS File
import "../js/assets/js/main.js"

const app = createApp(App)

app.use(router)
app.mount("#app");
