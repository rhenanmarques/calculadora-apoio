<template>
  <ion-app ref="appRef">
    <NavBar />
    <ion-router-outlet />
    <Footer />
  </ion-app>
</template>




<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import NavBar from "./components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const components = {
  NavBar,
  Footer,
};


</script>

