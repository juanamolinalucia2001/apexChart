<template>
  <v-container class="text-center mt-5">
    <v-card v-for="(persona, index) in personasPaginadas" :key="index" class="mx-auto mb-4 pa-2" max-width="450">
      <v-row>
        <v-col cols="4" class="text-center mt-10">
          <v-avatar size="90" color="#49D9A0" dark>
            <v-icon size="70">mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col cols="8" class="text-left">
          <v-card-title >{{ persona.nombre }}</v-card-title>
          <v-card-subtitle><strong>{{ persona.puesto }}</strong></v-card-subtitle>
          <v-card-text> 
            <p> 
              <v-icon>mdi-phone</v-icon>
               {{ persona.telefono }}
            </p>
            <p> 
               <v-icon>mdi-email</v-icon>
               {{ persona.correo }}
            </p>
          </v-card-text>
          
        </v-col>
      </v-row>
    </v-card>
    <v-pagination color="#49D9A0" v-model="paginaActual" :length="totalPaginas" />
  </v-container>
</template>

<script>

import empresas from '@/store/empresas'
export default {
   
  data: () => ({
    personas:[],
    paginaActual: 1,
    cantidadPorPagina: 2,
  }),
  async created(){
    document.title = "Digicard | Empleados";
    await empresas.dispatch('getEmpleados');
    const filteredEmpleados = empresas.state.allEmpleados.filter(emp => emp.idEmpresa === this.$route.params.id)
    this.personas = filteredEmpleados;
  },
  computed: {
    totalPaginas() {
      return Math.ceil(this.personas.length / this.cantidadPorPagina);
    },
    personasPaginadas() {
      const inicio = (this.paginaActual - 1) * this.cantidadPorPagina;
      const fin = inicio + this.cantidadPorPagina;
      return this.personas.slice(inicio, fin);
    },
 
  },

};
</script>
