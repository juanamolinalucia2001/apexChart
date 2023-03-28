<template>
<v-container>
  <div >
    <apexchart :options="options" :series="series" type="line" />
  </div>
</v-container>
  
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
    apexchart: VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          type: 'line',
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: 'Ingresos',
          data: [],
        },
        {
          name: 'Gastos',
          data: [],
        },
        {
          name: 'Ganancias',
          data: [],
        },
        {
          name: 'Perdidas',
          data: [],
        },
      ],
    }
  },
  mounted() {
    const datos = generarDatos(1, 2020, 2022)
    const ingresos = datos.map((d) => d.ingresos)
    const gastos = datos.map((d) => d.gastos)
    const ganancias = datos.map((d) => d.ganancias)
    const perdidas = datos.map((d) => d.perdidas)
    const categorias = datos.map((d) => `${d.año}-${d.mes}`)

    this.options.xaxis.categories = categorias
    this.series[0].data = ingresos
    this.series[1].data = gastos
    this.series[2].data = ganancias
    this.series[3].data = perdidas
  },
}
</script>




