<template>
  <v-container>
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="chartOptions.series"
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
        chartOptions: {},
        chartData: [],
      }
    },
    

    created() {
      empresas.dispatch('getEmpresas');
      empresas.dispatch('getGanacias');
  // Opciones del gráfico
  this.chartOptions = {
    chart: {
      type:'line',
      height: 350,
    },
    series: [],
    xaxis: {
      categories: [],
    },
    title: {
    text: 'Ganancias mensuales ',
    align: 'center',
    },
  yaxis: {
    title: {
      text: 'Ganancia en $USD',
    },
    }
  };
  // Procesamiento de los datos
  const series = [];
  const categories = [];
  const data = empresas.state.allGanancias;
  console.log('data', data)
  data.forEach((item) => {
  // Buscar el nombre de la empresa
  const empresa = this.allEmpresas.find(emp => emp.id === item.idEmpresa);
  const index = series.findIndex((el) => el.name === empresa.nombre);
  if (index !== -1) {
    series[index].data.push(item.monto);
  } else {
    series.push({
      name: empresa.nombre,
      data: [item.monto],
    });
  }
  if (!categories.includes(item.mes)) {
    categories.push(item.mes);
  }
});

  this.chartOptions.series = series;
  this.chartOptions.xaxis.categories = categories;
},
computed:{
  allGanancias() {
      return empresas.state.allGanancias;
    },
 allLiquidaciones() {
      return empresas.state.allLiquidaciones;
    },
  allEmpresas() {
    return empresas.state.allEmpresas;
  },
}

  }
</script>




