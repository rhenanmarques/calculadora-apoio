<template>
    <ion-footer class="ion-margin-top">
        <ion-toolbar color="light" class="ion-text-center ">


            <ul class="horizontal-list">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <router-link to="/privacidade">Privacidade</router-link>
                </li>
                <li>
                    <router-link to="/termos-e-condicoes">Termos e Condições</router-link>
                </li>
            </ul>





        </ion-toolbar>

        <ion-toolbar color="medium" class="ion-text-center">
            <ion-row>
                <ion-col size="6">
                    <div class="contact">
                        Dúvidas ou sugestões, envie um email para: <a
                            href="mailto:contato@seudominio.com">contato@seudominio.com</a>
                    </div>
                </ion-col>
                <ion-col size="6">
                    <ion-label style="font-size: 10pt;">
                        Todos os direitos reservados. &copy; BlueCondition 2023
                    </ion-label>
                </ion-col>

            </ion-row>

        </ion-toolbar>
    </ion-footer>
</template>

<script lang="ts">
export default {
    name: "Footer"
}
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
    text-decoration: none;
    /* Adiciona um espaço entre os elementos da lista */
}

.contact {
    font-size: 10pt;
}

ul li {
    color: white;
    text-decoration: none;
}
</style>