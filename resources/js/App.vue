<script setup>
import { useRoute } from "vue-router"
const route = useRoute();
import SidebarComponent from "./components/Sidebar/SidebarComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
</script>

<template>
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <!-- ======= Header ======= -->
    <sidebar-component />

    <router-view></router-view>


    <!-- ======= Footer ======= -->
    <footer-component />

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>
