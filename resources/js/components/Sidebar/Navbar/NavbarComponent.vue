<script setup>

import router from "../../../router.js";
</script>

<template>
    <nav id="navbar" class="nav-menu navbar">
        <ul>
            <li><a href="#" class="nav-link scrollto active" @click="router.push('/')"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#" class="nav-link scrollto" @click="router.push('about')"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#" class="nav-link scrollto" @click="router.push('resume')"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#" class="nav-link scrollto" @click="router.push('portfolio')"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#" class="nav-link scrollto" @click="router.push('services')"><i class="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#" class="nav-link scrollto" @click="router.push('contact')"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
    </nav><!-- .nav-menu -->
</template>
