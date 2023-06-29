import BaseComponent from "./components/BaseComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

// Divide project routes on two main parts (user/admin)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: BaseComponent,
        },
    ]
})

export default router
