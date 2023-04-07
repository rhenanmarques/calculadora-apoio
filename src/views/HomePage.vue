<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>Calculadora de Apoio + Habitação</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row class="banner" style="background-color: aqua;">
          <ion-col size="12" size-sm="2"></ion-col>

          <ion-col>
            <ion-row>
              <ion-col style="background-color: rgba(255, 255, 255, 0.57); margin-top: 10px;">
                Utilize nossa calculadora para descobrir se tem direito ao apoio +habitação, e o valor que pode receber:
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col style="background-color: rgba(255, 255, 255, 0.57);">

                <form @submit.prevent="handleSubmit">
                  <ion-input type="number" v-model="rendimento" label="Rendimento Médio Mensal (€)"
                    label-placement="floating" fill="solid" placeholder="1200.00" required></ion-input>
                  <div v-if="rendimentoError" class="error-message">{{ messageError }}</div>

                  <br>
                  <ion-input type="number" v-model="renda" label="Valor da Renda Mensal (€)" label-placement="floating"
                    fill="solid" placeholder="350.00" required></ion-input>
                  <div v-if="rendaError" class="error-message">Campo obrigatório</div>

                  <br>
                  <ion-button type="submit" expand="block" class="full" style="width: 80%; margin: auto;">Calcular Apoio</ion-button>
                </form>

                <div style="width: 80%; margin: auto;">
                  <ion-card v-if="mostrarResultado" class="ion-text-center" color="success">
                    <ion-card-header style="display: flex; align-items: center;">
                      <ion-icon name="checkmark-circle-outline" size="large"></ion-icon>
                      <ion-card-subtitle>Você tem direito um apoio de até (€)</ion-card-subtitle>
                      <ion-card-title>{{ valorApoio }}</ion-card-title>
                    </ion-card-header>
                  </ion-card>
                </div>

                <div style="width: 80%; margin: auto;">
                  <ion-card v-if="!mostrarResultado && mostrarMensagem" class="ion-text-center" color="danger">
                    <ion-card-header style="display: flex; align-items: center;">
                      <ion-icon name="close-circle-outline" size="large"></ion-icon>
                      <p>{{ mensagem }}</p>
                    </ion-card-header>
                  </ion-card>
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
          <ion-col size="12" size-sm="2"></ion-col>
          <ion-col>
            <ion-row>
              <ion-item class="ion-margin">
                <div>
                  <h3>O que é o Programa + Habitação?</h3>
                  Mais Habitação é o programa do Governo que responde à crise na habitação. Nesta página, explicam-se as
                  medidas através das quais se pretende aumentar o número de imóveis no mercado, travar o aumento das
                  rendas
                  e proteger as famílias. Para que haja mais construção, mais casas e, sobretudo, mais justiça.
                </div>
              </ion-item>
            </ion-row>

            <ion-row>
              <ion-item class="ion-margin">
                <div>
                  <h3>Quem pode beneficiar deste apoio?</h3>
                  São elegíveis os agregados com taxas de esforço superiores a 35%, até ao limite máximo do sexto escalão
                  de IRS (38.632€ de rendimento coletável anual), com contratos de arrendamento ou subarrendamento para
                  habitação permanente, celebrados até 15.03.2023, devidamente registados na Autoridade Tributária e
                  Aduaneira.
                </div>
              </ion-item>
            </ion-row>

          </ion-col>
          <ion-col size="12" size-sm="2"></ion-col>
        </ion-row>

        <!-- <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8">
            <ion-item class="ion-margin">
              <div>
                <h3>O que é o Programa + Habitação?</h3>
                Mais Habitação é o programa do Governo que responde à crise na habitação. Nesta página, explicam-se as
                medidas através das quais se pretende aumentar o número de imóveis no mercado, travar o aumento das rendas
                e proteger as famílias. Para que haja mais construção, mais casas e, sobretudo, mais justiça.
              </div>
            </ion-item>
          </ion-col>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8">
            <ion-item class="ion-margin">
              <div>
                <h3>Quem pode beneficiar deste apoio?</h3>
                São elegíveis os agregados com taxas de esforço superiores a 35%, até ao limite máximo do sexto escalão
                de IRS (38.632€ de rendimento coletável anual), com contratos de arrendamento ou subarrendamento para
                habitação permanente, celebrados até 15.03.2023, devidamente registados na Autoridade Tributária e
                Aduaneira.
              </div>
            </ion-item>
          </ion-col>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
        </ion-row> -->

        <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8">
            <h4> Dúvidas?</h4>

            <ion-list>
              <ion-item>
                <a href="https://maishabitacao.gov.pt/" target="blank">Mais Habitação</a>
              </ion-item>
              <ion-item>
                <a href="https://www.portugal.gov.pt/pt/gc23/comunicacao/noticia?i=governo-aprova-pacote-mais-habitacao"
                  target="blank">Apoio a Renda </a>
              </ion-item>
            </ion-list>
          </ion-col>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
        </ion-row>
      </ion-grid>



      <ion-footer>
        <ion-toolbar color="light" class="ion-text-center">
          <ion-title>Contato</ion-title>
          <ion-label style="font-size: 10pt;">
            Para dúvidas ou sugestões, envie um email para: <a
              href="mailto:contato@seudominio.com">contato@seudominio.com</a>
          </ion-label>
        </ion-toolbar>

        <ion-toolbar color="light" class="ion-text-center">
          <ion-label style="font-size: 10pt;">
            Todos os direitos reservados. &copy; BlueCondition 2023
          </ion-label>
        </ion-toolbar>
      </ion-footer>


    </ion-content>

  </ion-page>
</template>



<script lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonFooter, IonList, IonCard, IonAccordion,
  IonAccordionGroup, IonCol, IonRow, IonIcon
} from '@ionic/vue';

import { addIcons } from 'ionicons';
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
      valorApoio: undefined as number | undefined,
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
            this.mostrarResultado = true;
            this.mostrarMensagem = false;
          }
        }
      }
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
  -moz-appearance: textfield;
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

.ion-invalid {
  --border-color: red;
}

.note {
  font-size: 10pt;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.circle {
  width: 200px;
  height: 200px;
  border: solid 1px green;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* .circle i {
  color: white;
  font-size: 60px;
  margin-bottom: 20px;
} */

.text {
  text-align: center;
}

.text p {
  margin: 0;
  font-size: 16px;
  color: green;
}

.value {
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
  color: green;
}
</style>
