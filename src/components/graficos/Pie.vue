<template>
  <v-container>
    <v-select
      v-model="selectedYear"
      :items="years"
      label="Año"
      dense
    />
    <apexchart
      type="pie"
      height="350"
      :options="options"
      :series="series"
    />
  </v-container>
</template>

<script>
import empresas from '@/store/empresas'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      idEmpresa: this.$route.params.id,
      datos: null,
      options: {},
      series: [],
      selectedYear: null,
      years: []
    }
  },
  created() {
    try {
      empresas.dispatch('getLiquidaciones');
      this.datos = empresas.state.allLiquidaciones.filter(liquidacion => liquidacion.idEmpresa === this.idEmpresa)
      this.years = [...new Set(this.datos.map(item => item.año))]
      this.selectedYear = this.years[0] // Seleccionar el primer año por defecto
    } catch(error) {
      console.error('Error al obtener las liquidaciones:', error);
    }
  },
  mounted() {
    this.updateChart()
  },
  watch: {
    selectedYear() {
      this.updateChart()
    }
  },
  methods: {
    updateChart() {
      const filteredData = this.datos.filter(item => item.año === this.selectedYear)

      // Array para los valores
      const incomes = filteredData.reduce((total, item) => total + item.ingresos, 0)
      const expenses = filteredData.reduce((total, item) => total + item.gastos, 0)
      const profits = filteredData.reduce((total, item) => total + item.ganancias, 0)
      const losses = filteredData.reduce((total, item) => total + item.perdidas, 0)

      // Configuración de la gráfica
      this.options = {
        chart: {
          type: 'pie'
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function(val) {
             return val.toLocaleString("en-US", { style: "currency", currency: "USD" });

            }
          }
        },
        labels: [ 'Ingresos','Gastos', 'Ganancias', 'Pérdidas',] // Nuevas etiquetas
      }

      // Datos de la serie
      this.series = [incomes, expenses, profits, losses]
    }
  }
}
</script>
