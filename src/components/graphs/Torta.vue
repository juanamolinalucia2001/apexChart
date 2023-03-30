<template>
  <div width="200px">
    <v-container >
      <apexchart type="pie" :options="options" width="300px" />
    </v-container>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

const generarDatos = (idEmpresa, anio) => {
  const datos = []
  for (let mes = 1; mes <= 12; mes++) {
    const ingresos = Math.floor(Math.random() * 10000) + 10000
    const gastos = Math.floor(Math.random() * 8000) + 8000
    const ganancias = ingresos - gastos
    const perdidas = ganancias < 0 ? Math.abs(ganancias) : 0
    const porcentajeGanancia = ganancias / ingresos * 100
    datos.push({
      año: anio,
      mes: mes,
      ingresos: ingresos,
      gastos: gastos,
      ganancias: ganancias,
      perdidas: perdidas,
      porcentajeGanancia: porcentajeGanancia,
      idEmpresa: idEmpresa
    })
  }
  return datos
}

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      idEmpresa: this.$route.params.id,
      datos: [],
      options: {},
      selectedYear: null
    }
  },
  mounted() {
    this.selectedYear = 2021; // Selecciona el año que quieras mostrar
    this.datos = generarDatos(this.idEmpresa, this.selectedYear)

    // Filtrar los datos del año seleccionado
    const filteredData = this.datos.filter(dato => dato.año === this.selectedYear);

    // Sumar los valores filtrados
    const incomes = filteredData.reduce((total, item) => total + item.ingresos, 0)
    const expenses = filteredData.reduce((total, item) => total + item.gastos, 0)
    const profits = filteredData.reduce((total, item) => total + item.ganancias, 0)
    const losses = filteredData.reduce((total, item) => total + item.perdidas, 0)

    // Configuración de la gráfica
    this.options = {
      chart: {
        type: 'pie'
      },
      series: [incomes, expenses, profits, losses],
      labels: ['Ingresos', 'Gastos', 'Ganancias', 'Pérdidas']
    }
  }
}
</script>

