<template>
  <div>
    <v-container>
      <v-select v-model="selectedYear" :items="years" label="Selecciona un año"></v-select>
      <apexchart type="line" :options="options" :series="series"  height="350" />
    </v-container>
  </div>
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
      const filteredData = this.selectedYear ? this.datos.filter(item => item.año === this.selectedYear) : this.datos
      const seriesExpenses = []
      const seriesProfits = []

      filteredData.forEach(item => {
        const date = `${item.año}-${item.mes < 10 ? '0' : ''}${item.mes}-01`
        seriesExpenses.push({
          x: date,
          y: item.gastos
        })
        seriesProfits.push({
          x: date,
          y: item.ganancias
        })
      })

      // Configuración de la gráfica
      this.options = {
        chart: {
          type: 'line'
        },
        xaxis: {
          type: 'datetime',
          labels: {
            datetimeUTC: false,
            format: 'MMM YYYY',
            offsetY: 5,
            style: {
              fontSize: '12px'
            }
          }
        },
        tooltip: {
          x: {
            format: 'MMM YYYY'
          }
        }
      }

      // Datos de la serie
      this.series = [{
        name: 'Gastos',
        data: seriesExpenses
      }, {
        name: 'Ganancias',
        data: seriesProfits
      }]
    }
  }
}
</script>
