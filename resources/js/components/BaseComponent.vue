<script setup>
import SidebarComponent from "./Sidebar/SidebarComponent.vue";
import HeroComponent from "./Content/HeroComponent.vue";
import FooterComponent from "./Footer/FooterComponent.vue";
</script>

<template>
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <!-- ======= Header ======= -->
    <sidebar-component />

    <!-- ======= Hero Section ======= -->
    <hero-component />


    <!-- ======= Footer ======= -->
    <footer-component />

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>
