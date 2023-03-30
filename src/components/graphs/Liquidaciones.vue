<template>
  <div>
    <v-container max-width="500px" heigth="200px">
        <apexchart type="line" :options="options" />
    </v-container>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

const generarDatos = (idEmpresa, anioInicio, anioFin) => {
  const datos = []
  for (let anio = anioInicio; anio <= anioFin; anio++) {
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
  }
  return datos
}

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      datos: [],
      options: {}
    }
  },
  mounted() {
    this.datos = generarDatos(3, 2020, 2022)

    // Array para las fechas con información de año y mes
    const dates = this.datos.map(item => {
      const year = item.año
      const month = item.mes < 10 ? `0${item.mes}` : item.mes
      return `${year}-${month}`
    })

    // Array para los valores
    const incomes = this.datos.map(item => item.ingresos)
    const expenses = this.datos.map(item => item.gastos)
    const profits = this.datos.map(item => item.ganancias)
    const losses = this.datos.map(item => item.perdidas)

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
</script>
