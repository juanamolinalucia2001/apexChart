<template>
  <v-container>
    <v-select
      v-model="selectedYear"
      :items="years"
      label="Año"
      dense
    />
    <apexchart
      type="line"
      height="350"
      :options="options"
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
      idEmpresa:this.$route.params.id,
      datos: null,
      options: {},
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
  mounted(){
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

      // Array para las fechas con información de año y mes
      const dates = filteredData.map(item => {
        const year = item.año
        const month = item.mes < 10 ? `0${item.mes}` : item.mes
        return `${year}-${month}`
      })

      // Array para los valores
      const incomes = filteredData.map(item => item.ingresos)
      const expenses = filteredData.map(item => item.gastos)
      const profits = filteredData.map(item => item.ganancias)
      const losses = filteredData.map(item => item.perdidas)

      // Configuración de la gráfica
      this.options = {
        chart: {
          type: 'line'
        },
        series: [
          {
            name: 'Ingresos',
            data: incomes
          },
          {
            name: 'Gastos',
            data: expenses
          },
          {
            name: 'Ganancias',
            data: profits
          },
          {
            name: 'Perdidas',
            data: losses
          }
        ],
        xaxis: {
          categories: dates
        },
        tooltip: {
          x: {
            format: 'yyyy-MM'
          }
        }
      }
    }
  }
}
</script>

