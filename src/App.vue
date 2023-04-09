<template>
  <ion-app ref="appRef">
    <NavBar class="test"/>
    <ion-router-outlet  class="abc"/>
    <Footer />
  </ion-app>
</template>




<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const components = {
  NavBar,
  Footer,
};
</script>

<style>
.test {
  height: 50px;
}
.abc {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>

