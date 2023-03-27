<template>
  <v-container>
    <v-row justify="center" class="mt-5" v-if="loader">
       <v-progress-circular v-if="loader"
            :size="300"
            color="#49D9A0"
            indeterminate
          ></v-progress-circular>
    </v-row>
     
    <v-row justify="center" class="mt-5" v-if="!loader">
      <v-col cols="12" md="6">
        <v-card v-if="!loader">
  <v-card-title>
    {{ empresa.nombre }} 
  </v-card-title>
  <v-card-actions>
    <v-btn :to="{ name: 'graph', params: { id: empresa.id } }" color="#49D9A0" dark>
      <v-icon>mdi-chart-areaspline</v-icon>
    </v-btn>
  </v-card-actions>
  <v-card-subtitle>
    {{ empresa.sector }} | {{ empresa.tamanio }} | {{ empresa.ciudad }}, {{ empresa.pais }}
  </v-card-subtitle>
  <v-card-text>
    <v-list class="text-start">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Dirección:</v-list-item-title>
          <v-list-item-subtitle>{{ empresa.direccion }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Teléfono:</v-list-item-title>
          <v-list-item-subtitle>{{ empresa.telefono }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Correo electrónico:</v-list-item-title>
          <v-list-item-subtitle>{{ empresa.correo }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Empleados:</v-list-item-title>
          <v-list-item-subtitle>{{ empresa.empleados }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Año de fundación:</v-list-item-title>
          <v-list-item-subtitle>{{ empresa.fundacion }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card-text>
</v-card>
      </v-col>
    
        
      <v-col cols="12" md="4">
        <v-card color="#49D9A0" dark v-if="!loader">
          <v-card-title>
            Servicios
          </v-card-title>
          <v-card-text>
           <v-list-item v-for="servicio in servicios" :key="servicio.id">
          <v-list-item-content>
            <v-list-item-title>{{ servicio.nombre }}</v-list-item-title>
            <v-list-item-subtitle>{{ servicio.descripcion }}</v-list-item-subtitle>
            <v-list-item-subtitle>Precio de costo: {{ servicio.costo }}</v-list-item-subtitle>
            <v-list-item-subtitle>Precio de ganancia: {{ servicio.ganancia }}</v-list-item-subtitle>
            <v-list-item-subtitle>Precio de venta: {{ servicio.costo + servicio.ganancia }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
     <Graficos/> 
    </v-row>
 


  </v-container>
</template>
<script>
import empresas from '@/store/empresas'
import Graficos from '@/components/graficos/Graficos.vue'

export default {
  components:{
    Graficos
  },
  data() {
    return {
       empresa: {},
       servicios:{},
       loader:true
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
    this.loader = false;
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
    }

  
  },
  methods: {
  filterServicios(id) {
    return this.allServicios.filter(servicio => servicio.idEmpresa === id);
  },
},
}
</script>
