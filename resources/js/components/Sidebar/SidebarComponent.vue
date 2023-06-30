<script setup>
import NavbarComponent from "./Navbar/NavbarComponent.vue";
import ProfileLinkComponent from "./ProfileLink/ProfileLinkComponent.vue";
</script>

<template>
    <header id="header">
        <div class="d-flex flex-column">

            <profile-link-component />

            <navbar-component />
        </div>
    </header><!-- End Header -->
</template>
