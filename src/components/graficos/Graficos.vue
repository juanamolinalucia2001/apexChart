<template>
  <v-container >
    <v-row>
      <v-col cols="10">
         <v-tabs class="mx-auto" max-width="500px" v-model="tabIndex" background-color="#49D9A0" dark>
      <v-tab v-for="(tab, index) in tabs" :key="index">
        <v-icon left>{{ tab.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabIndex">
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <v-card>
          <v-card-title>{{ tab.name }}</v-card-title>
          <v-card-text>
            <component :is="tab.component"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
      </v-col>
    </v-row>
   
  </v-container>
</template>

<script>
import Linea from '@/components/graficos/Line.vue'
import Torta from '@/components/graficos/Pie.vue'
import Bar from '@/components/graficos/Bar.vue'
import Variacion from '@/components/graficos/Variaciones.vue'

export default {
  name: 'graphs',

  components: {
    Linea,
    Torta,
    Bar,
    Variacion,
  },

  data() {
    return {
      tabIndex: 0,
      tabs: [
        { name: 'Liquidaciones por año', component: 'Linea', icon: 'mdi-chart-line' },
        { name: 'Liquidaciones anuales en %', component: 'Torta', icon: 'mdi-chart-pie' },
        { name: 'Gastos y Ganancias', component: 'Bar', icon: 'mdi-chart-bar' },
        { name: 'Total Gastos Ganancias', component: 'Variacion', icon: 'mdi-chart-multiline' },
      ],
    };
  },
};
</script>
