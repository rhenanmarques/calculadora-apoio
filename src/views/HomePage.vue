<template>
  <ion-page class="page-background">
    <ion-header>
      <ion-toolbar>
        <ion-title>Calculadora de Apoio + Habitação</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="10" size-md="6" offset="1" offset-md="3">
            <ion-item>
              <ion-label position="stacked">Rendimento Médio Mensal (€)</ion-label>
              <ion-input v-model="rendimento" type="number" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Valor da Renda Mensal (€)</ion-label>
              <ion-input v-model="renda" type="number" required></ion-input>
            </ion-item>

            <ion-button @click="calcularApoio()" expand="block">Calcular Apoio</ion-button>

            <ion-card v-if="mostrarResultado" class="ion-text-center">
              <ion-card-header>
                <ion-card-subtitle>Você tem direito um apoio de até (€)</ion-card-subtitle>
                <ion-card-title>{{ valorApoio }}</ion-card-title>
              </ion-card-header>
            </ion-card>

            <ion-card v-if="!mostrarResultado && mostrarMensagem" class="ion-text-center" color="danger">
              <ion-card-header>
                <ion-card-subtitle>{{ mensagem }}</ion-card-subtitle>

                <!--<ion-card-title>{{ mensagem }}</ion-card-title>-->
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="10" size-md="2" ion-hide-md-down></ion-col>
          <ion-col size-md="8">
            <ion-item color="warning" class="ion-margin">
              <div class="ion-text-justify">
                <p>
                  Atenção: Este serviço não possui nenhuma conexão com o governo de Portugal. O nosso site não é
                  responsável pela interposição, acompanhamento, processamento ou pagamento de qualquer benefício
                  relacionado ao apoio habitacional. Todas as informações fornecidas são apenas para fins informativos
                  e educacionais. É importante ressaltar que cada indivíduo é responsável por seguir os procedimentos
                  oficiais estabelecidos pelo governo de Portugal para a obtenção de benefícios. Não nos
                  responsabilizamos por quaisquer problemas, perdas ou danos decorrentes do uso deste serviço.
                </p>
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
        </ion-row>

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
            Todos os direitos reservados. &copy; Julia Ferreira 2023
          </ion-label>
        </ion-toolbar>
      </ion-footer>


    </ion-content>

  </ion-page>
</template>



<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonFooter, IonList, IonCard } from '@ionic/vue';
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
  },
  data() {
    return {
      rendimento: null,
      renda: null,
      valorApoio: null,
      mensagem: '',
      mostrarResultado: false,
      mostrarMensagem: false,
    };
  },
  methods: {
    calcularApoio() {
      const rendimentoAnual = this.rendimento * 14;
      if (rendimentoAnual > 38632) {
        this.mensagem = 'Não é elegível porque o seu rendimento é maior que 38.632 €';
        this.mostrarMensagem = true;
        this.mostrarResultado = false;
      } else {
        const valorMaximoApoio = 200;
        const taxaEsforco = this.rendimento * 0.35;
        if (taxaEsforco > this.renda) {
          this.mensagem = 'Você não tem direito ao apoio porque sua margem de esforço é menor que 35%';
          this.mostrarMensagem = true;
          this.mostrarResultado = false;
        } else {
          this.valorApoio = this.renda - taxaEsforco;
          this.valorApoio = Math.min(this.valorApoio, valorMaximoApoio).toFixed(2).replace('.', ',');
          this.mostrarResultado = true;
          this.mostrarMensagem = false;
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

.page-background {
  background-image: url('assets\\porto-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}</style>
