<template>
    <ion-header>
        <ion-toolbar color="light">
            <ion-grid>
                <ion-row>
                    <ion-col size="11" size-sm="11">
                        <ion-title>
                            Apoio Habitação<span v-if="contextName">: {{ contextName }}</span>
                        </ion-title>
                    </ion-col>
                    <ion-col size="1" size-sm="1">
                        <ion-icon name="search-outline"></ion-icon>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-toolbar>
        <ion-toolbar v-show="showSearchBar">
            <ion-searchbar></ion-searchbar>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">

import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonCol, IonGrid, IonRow, IonIcon } from '@ionic/vue';

import { addIcons } from 'ionicons';
import {  searchOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';


export default defineComponent({
    name: "Navbar",
    props: {
        contextName: String,
    },
    components: { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonCol, IonGrid, IonRow, IonIcon },

    created() {
    addIcons({
      'search-outline': searchOutline,
    });
  },

  data() {
    return {
        showSearchBar: false,
    }
  }

})




</script>