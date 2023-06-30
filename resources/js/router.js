import HeroComponent from "./components/Content/HeroComponent.vue";
import AboutComponent from "./components/Content/AboutComponent.vue";
import ResumeComponent from "./components/Content/ResumeComponent.vue";
import PortfolioComponent from "./components/Content/PortfolioComponent.vue";
import ServicesComponent from "./components/Content/ServicesComponent.vue";
import ContactComponent from "./components/Content/ContactComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

// Divide project routes on two main parts (user/admin)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HeroComponent,
        },
        {
            path: '/about',
            component: AboutComponent,
        },
        {
            path: '/resume',
            component: ResumeComponent,
        },
        {
            path: '/portfolio',
            component: PortfolioComponent,
        },
        {
            path: '/services',
            component: ServicesComponent,
        },
        {
            path: '/contact',
            component: ContactComponent,
        },
    ]
})

export default router
