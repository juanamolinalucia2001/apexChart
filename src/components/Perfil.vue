<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="9">
        <v-card>
          <v-row no-gutters>
            <v-col cols="4" color="red" class="text-center">
              <v-avatar size="100" color="grey" class="mt-5">
                <v-img :src="empresa.logo" ></v-img>
              </v-avatar>
               <v-card-subtitle class="text-center headline">{{ empresa.nombre }}</v-card-subtitle>
              <v-card-subtitle class="text-center subtitle-1">{{ empresa.sector }}</v-card-subtitle>
            </v-col>
            <v-col cols="4" class="mt-10">
              <v-card-subtitle><v-icon>mdi-map-marker</v-icon>{{ empresa.direccion }}, {{ empresa.pais }}</v-card-subtitle>
              <v-card-subtitle><v-icon>mdi-phone</v-icon>{{ empresa.telefono }}</v-card-subtitle>
              <v-card-subtitle><v-icon>mdi-email</v-icon>{{ empresa.correo }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" >
      <v-card class="mx-auto pa-2 text-center">
          <v-card-subtitle class="subtitle-2">Cantidad de Empleados</v-card-subtitle>
          <v-card-text class="headline"><strong>{{ empresa.empleados }}</strong></v-card-text>
        </v-card>
         <v-card class="mx-auto mt-2 pa-2 text-center">
          <v-card-subtitle class="subtitle-2">Fecha Fundacion</v-card-subtitle>
          <v-card-text class="headline"><strong>{{ empresa.fundacion }}</strong></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="mt-5 mb-5">Liquidaciones del ultimo mes</h2>
     <v-row>
      
     <v-col cols="6" md="3">
        <v-card color="primary" dark>
          <v-card-title>
            ${{ liquidaciones.ingresos }}
          </v-card-title>
          <v-card-text>Ingresos</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card color="#49D9A0" dark>
          <v-card-title>
            ${{ liquidaciones.ganancias }}
          </v-card-title>
          <v-card-text>Ganancia</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card color="red" dark>
          <v-card-title>
            ${{ liquidaciones.perdidas }}
          </v-card-title>
          <v-card-text>Perdidas</v-card-text>
        </v-card>
      </v-col>
    </v-row>
        
      
  </v-container>
</template>

<script>
import empresas from '@/store/empresas'
import Graficos from '@/components/graficos/Graficos.vue'

export default {
  components:{
    Graficos,
  },
  data() {
    return {
       empresa: {},
       servicios:{},
       liquidaciones:null,
       loader:true,
       selectedYear:2022,
       liquidacion:null
    }
  },
  async created() {
    document.title = "Digicard | Cliente Perfil";
    const id = this.$route.params.id;
    await empresas.dispatch('getEmpresas');
    const filteredEmpresa = empresas.state.allEmpresas.filter(empresa => empresa.id === id);
    this.empresa = filteredEmpresa[0];
    await empresas.dispatch('getServicios');
    this.servicios = this.filterServicios(id);
    await empresas.dispatch('getLiquidaciones');
    const liquidacionesFilter = empresas.state.allLiquidaciones.filter(liquidacion => liquidacion.idEmpresa === id)
    this.liquidaciones= liquidacionesFilter[2]
  },
  computed: {
    allEmpresas() {
      return empresas.state.allEmpresas;
    },
   allGanancias() {
      return empresas.state.allGanancias;
    },
    allServicios(){
      return empresas.state.allServicios
    },
 
  
  },
  methods: {
  filterServicios(id) {
    return this.allServicios.filter(servicio => servicio.idEmpresa === id);
  },
   
},
}
</script>
<style>
.bg-green{
  background-color: #49D9A0;
}
</style>

