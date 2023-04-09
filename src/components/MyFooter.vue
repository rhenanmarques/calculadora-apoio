<template>
    <ion-footer class="ion-margin-top">
        <ion-toolbar color="light" class="ion-text-center ">

            <ul class="horizontal-list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/privacidade">Privacidade</a>
                </li>
                <li>
                    <a href="/termos-e-condicoes">Termos e Condições</a>
                </li>
            </ul>
        </ion-toolbar>

        <ion-toolbar color="medium" class="ion-text-center">
            <ion-row>
                <ion-col size="12" size-sm="6">
                    <div class="contact">
                        Dúvidas ou sugestões, envie um email para: <a
                            href="mailto:contato@seudominio.com">contato@seudominio.com</a>
                    </div>
                </ion-col>
                <ion-col size="12" size-sm="6">
                    <ion-label style="font-size: 10pt;">
                        Todos os direitos reservados. &copy; BlueCondition 2023
                    </ion-label>
                </ion-col>
            </ion-row>

        </ion-toolbar>
    </ion-footer>
</template>

<script lang="ts">

import { IonToolbar, IonLabel, IonCol, IonRow, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MyFooter"
})

</script>

<style>
.horizontal-list {
    display: flex;
    justify-content: center;
    list-style: none;
    /* Remove os pontos de listagem padrão do ul */
    padding: 0;
    /* Remove o preenchimento padrão do ul */
}

.horizontal-list li {
    margin: 0 10px;
    /* Adiciona um espaço entre os elementos da lista */
}

.horizontal-list li a {
    text-decoration: none;
}

.contact {
    font-size: 10pt;
}

.contact a {
    text-decoration: none;
}

</style>