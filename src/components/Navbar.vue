<template>
    <ion-header>
        <ion-toolbar color="light">
                <ion-title>Apoio Habitação<span v-if="contextName">: {{ contextName }}</span></ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">

import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Navbar",
    props: {
        contextName: String,
    }
})

</script>