<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar color="light">
        <ion-title>Calculadora Apoio + Habitação</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <Navbar />

    <ion-content>
      <ion-grid>
        <ion-row class="banner">
          <ion-col size="12" size-sm="2"></ion-col>

          <ion-col>
            <ion-row>
              <ion-col style="background-color: rgba(255, 255, 255, 0.57);">
                <div class="ion-padding-top" style="line-height: 1.5; padding-left: 16px; padding-right: 16px;">
                  Utilize nossa calculadora para descobrir se tem direito ao apoio +habitação, e o valor que pode receber:
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col class="ion-padding" style="background-color: rgba(255, 255, 255, 0.57);">

                <form @submit.prevent="handleSubmit">
                  <ion-input type="number" v-model="rendimento" label="Rendimento Médio Mensal (€)"
                    label-placement="floating" fill="solid" placeholder="Informe o valor do rendimento mensal" required
                    @input="resetMostrarResultado" :class="{ 'ion-invalid': rendimentoError }"></ion-input>
                  <div v-if="rendimentoError" class="error-message">{{ messageError }}</div>

                  <br>
                  <ion-input type="number" v-model="renda" label="Valor da Renda Mensal (€)" label-placement="floating"
                    fill="solid" placeholder="Informe o valor da renda mensal" required @input="resetMostrarResultado"
                    :class="{ 'ion-invalid': rendaError }"></ion-input>
                  <div v-if="rendaError" class="error-message">Campo obrigatório</div>

                  <br>
                  <ion-button type="submit" expand="block" class="full">Calcular
                    Apoio</ion-button>
                </form>

                <div v-if="mostrarResultado" class="ion-padding">
                  <div class="ion-text-center">
                    <ion-icon name="checkmark-circle-outline" size="large" style="color:black"></ion-icon>
                    <div class="text-result">
                      Você tem direito a um apoio de até
                    </div>
                    <div class="value">{{ valorApoio }}</div>
                  </div>
                </div>

                <div v-if="!mostrarResultado && mostrarMensagem" class="ion-padding">
                  <div class="ion-text-center">
                    <ion-icon name="close-circle-outline" size="large" style="color:black"></ion-icon>
                    <div class="text-result">{{ mensagem }}</div>
                  </div>
                </div>
              </ion-col>
            </ion-row>

          </ion-col>
          <ion-col size="12" size-sm="2"></ion-col>
        </ion-row>

        <!-- Acordeon  -->
        <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8">
            <ion-accordion-group>
              <ion-accordion value="first" expanded>
                <ion-item slot="header" color="light">
                  <ion-label style="display: flex; align-items: center;">
                    <ion-icon name="warning-outline" size="large"></ion-icon>
                    <ion-title>Atenção</ion-title>
                  </ion-label>
                </ion-item>
                <div class="ion-padding note" slot="content">

                  Este serviço não possui nenhuma conexão com o governo de Portugal. O nosso site não é
                  responsável pela interposição, acompanhamento, processamento ou pagamento de qualquer benefício
                  relacionado ao apoio habitacional. Todas as informações fornecidas são apenas para fins informativos
                  e educacionais. É importante ressaltar que cada indivíduo é responsável por seguir os procedimentos
                  oficiais estabelecidos pelo governo de Portugal para a obtenção de benefícios. Não nos
                  responsabilizamos por quaisquer problemas, perdas ou danos decorrentes do uso deste serviço.

                </div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-col>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
        </ion-row>

        <!-- info -->

        <ion-row>
          <ion-col size="12" size-sm="2" class="ion-text-center"
            style="display: flex; align-items: center; justify-content: center;">Publicidade</ion-col>
          <ion-col>
            <ion-row>
              <ion-item class="ion-margin" lines="none">
                <div class="guidelines">
                  <h3>O que é o Programa + Habitação?</h3>
                  Mais Habitação é o programa do Governo que responde à crise na habitação. Nesta página, explicam-se as
                  medidas através das quais se pretende aumentar o número de imóveis no mercado, travar o aumento das
                  rendas
                  e proteger as famílias. Para que haja mais construção, mais casas e, sobretudo, mais justiça.
                </div>
              </ion-item>
            </ion-row>

            <ion-row>
              <ion-item class="ion-margin" lines="none">
                <div class="guidelines">
                  <h3>Quem pode beneficiar deste apoio?</h3>
                  São elegíveis os agregados com taxas de esforço superiores a 35%, até ao limite máximo do sexto escalão
                  de IRS (38.632€ de rendimento coletável anual), com contratos de arrendamento ou subarrendamento para
                  habitação permanente, celebrados até 15.03.2023, devidamente registados na Autoridade Tributária e
                  Aduaneira.
                </div>
              </ion-item>
            </ion-row>

          </ion-col>
          <ion-col size="12" size-sm="2" class="ion-text-center"
            style="display: flex; align-items: center; justify-content: center;">Publicidade</ion-col>

        </ion-row>

        <!-- duvidas -->
        <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8" class="ion-padding">
            <h4> Dúvidas?</h4>

            <ion-list>
              <ion-item lines="none">
                <a href="https://maishabitacao.gov.pt/" target="blank">Mais Habitação</a>
              </ion-item>
              <ion-item lines="none">
                <a href="https://www.portugal.gov.pt/pt/gc23/comunicacao/noticia?i=governo-aprova-pacote-mais-habitacao"
                  target="blank">Apoio a Renda </a>
              </ion-item>
            </ion-list>
          </ion-col>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
        </ion-row>
      </ion-grid>
      <MyFooter />

      <!-- <ion-footer class="ion-margin-top">
        <ion-toolbar color="light" class="ion-text-center ">
            <ul class="horizontal-list">
                <li>
                  <a href="/">Home</a>
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
                <ion-col size="12" size-sm="6">
                    <div class="contact">
                        Dúvidas ou sugestões, envie um email para: <a
                            href="mailto:contato@seudominio.com">contato@seudominio.com</a>
                    </div>
                </ion-col>
                <ion-col size="12" size-sm="6">
                    <ion-label class="contact">
                        Todos os direitos reservados. &copy; BlueCondition 2023
                    </ion-label>
                </ion-col>
            </ion-row>
        </ion-toolbar>
    </ion-footer> -->
    </ion-content>

  </ion-page>
</template>



<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonFooter, IonList, IonCard, IonAccordion, IonAccordionGroup, IonCol, IonRow, IonIcon } from '@ionic/vue';

import { addIcons } from 'ionicons';
import Navbar from "../components/Navbar.vue";
import MyFooter from "../components/MyFooter.vue";
import { heart, warningOutline, checkmarkOutline, checkmarkCircleOutline, closeCircleOutline, closeOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonFooter,
    IonList,
    IonCard,
    IonAccordion,
    IonAccordionGroup,
    IonCol,
    IonRow,
    IonIcon,
    Navbar,
    MyFooter,

  },

  created() {
    addIcons({
      heart: heart,
      'warning-outline': warningOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'close-circle-outline': closeCircleOutline,
      'checkmark-outline': checkmarkOutline,
      'close-outline': closeOutline,
    });
  },

  data() {
    return {
      rendimento: undefined as number | undefined,
      renda: undefined as number | undefined,
      valorApoio: undefined as number | string | undefined,
      mensagem: '',
      mostrarResultado: false,
      mostrarMensagem: false,
      inputError: false,
      rendimentoError: false,
      rendaError: false,
      messageError: '',
    };
  },

  watch: {
    rendimento(value) {
      this.rendimentoError = !value;
      this.messageError = 'Campo obrigatório'
    },
    renda(value) {
      this.rendaError = !value;
      this.messageError = 'Campo obrigatório'
    },
  },

  methods: {
    handleSubmit() {
      if (!this.rendimento || !this.renda) {

      }
      else {
        if (this.rendimento <= 0) {
          this.rendimentoError = true;
          this.messageError = 'Valor inválido'
          return;
        } else {
          this.rendimentoError = false;
        }

        if (this.renda <= 0) {
          this.rendaError = true;
          this.messageError = 'Valor inválido'
          return;
        } else {
          this.rendaError = false;
        }

        const rendimentoAnual = this.rendimento * 14;

        if (rendimentoAnual > 38632) {
          this.mensagem = 'Não é elegível porque o seu rendimento é maior que 38.632 €';
          this.mostrarMensagem = true;
          this.mostrarResultado = false;
        }
        else {
          const valorMaximoApoio = 200;
          const taxaEsforco = this.rendimento * 0.35;
          if (taxaEsforco > this.renda) {
            this.mensagem = 'Você não tem direito ao apoio porque sua margem de esforço é menor que 35%';
            this.mostrarMensagem = true;
            this.mostrarResultado = false;
          }
          else {
            this.valorApoio = this.renda - taxaEsforco;
            this.valorApoio = Math.min(this.valorApoio, valorMaximoApoio);
            this.valorApoio = this.valorApoio.toLocaleString('pt', { style: 'currency', currency: 'EUR' });
            this.mostrarResultado = true;
            this.mostrarMensagem = false;
          }
        }
      }
    },

    resetMostrarResultado() {
      this.mostrarResultado = false;
      this.mostrarMensagem = false;
    },

  },
});
</script>

<style>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  appearance: textfield;
}

.banner {
  background-image: url('https://catracalivre.com.br/wp-content/uploads/2021/09/portugal-libera-turistas-brasileiros-veja-regras.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

form {
  padding-top: 10px;
  padding-bottom: 10px;
}

.error-message {
  color: red;
  font-size: 8pt;
  font-weight: 500;
  padding-left: 25px;
  padding-top: 5px;
}

ion-input.ion-invalid {
  --border-color: red;
  color: red;
}

.note {
  font-size: 10pt;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

.guidelines {
  line-height: 1.5;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.text-result {
  text-align: center;
  color: black;
  font-size: large;
}

.value {
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color: black;
  
}

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

</style>
