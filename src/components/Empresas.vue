<template>
  <div>
      <v-switch inset v-model="showCards" color="#49D9A0" :label="showCards ? 'cards' : 'table'">
      </v-switch>
    <v-row v-if="!showCards" class="ml-5 mr-5">
      <v-col cols="12">
               <v-simple-table dense class="elevation-1" style="max-width: 2000px;" >
                  <template v-slot:default>
                     <thead>
                  <tr dark style="background-color: #49D9A0;">
                     <th class="text-center" style="padding: 8px; font-size: 16px; color: white;">
                        Empresa
                     </th>
                     <th class="text-center" style="padding: 8px; font-size: 16px; color: white;">
                        Correo
                     </th>
                     <th class="text-center" style="padding: 8px; font-size: 16px; color: white;">
                        Telefono
                     </th>
                     <th class="text-center hidden-xs-only" style="padding: 8px; font-size: 16px; color: white;">
                        Direccion
                     </th>
                  </tr>
                  </thead>
                     <tbody>
                        <tr v-for="item in allEmpresas" :key="item.name">
                        <td class="text-center" style="padding: 8px;">{{ item.nombre }}</td>
                        <td class="text-center" style="padding: 8px;">{{ item.correo }}</td>
                        <td class="text-center" style="padding: 8px;">{{ item.telefono }}</td>
                        <td class="text-center hidden-xs-only" style="padding: 8px;">{{ item.direccion }}</td>
                        </tr>
                     </tbody>
                  </template>
                  </v-simple-table>
      </v-col>
    </v-row>
    <v-row v-else class="ml-5 mr-5">
       <v-col v-for="(empresa, index) in allEmpresas" :key="empresa.id" cols="4" >
   <router-link :to="{ name: 'perfilEmpresa', params: { id: empresa.id } }" class="custom-link">
      <v-card class="rounded-lg"  max-width="300" max-height="250" :style="{ backgroundColor: cards[index].isActive ? '#49D9A0' : '#fff' }" @mouseover="cards[index].isActive = true" @mouseleave="cards[index].isActive = false">
      <v-card-text class="text-center">
         <div>
            <v-icon x-large :color="cards[index].isActive ? 'white' : '#49D9A0'">fas fa-chart-bar</v-icon>
         </div>
         <v-list-item-title class="headline mb-1" :class="cards[index].isActive ? 'white--text' : 'black--text'">
            <strong>{{empresa.nombre}}</strong>
         </v-list-item-title>
        <v-list  :color="cards[index].isActive ?   '#49D9A0':'white'" >
         <v-list-item >
                  <p :class="cards[index].isActive ? 'white--text' : 'black--text'">
                    <v-icon class="mr-1" :color="cards[index].isActive ?  'white': '#49D9A0'">mdi-email</v-icon>
                    {{ empresa.correo }}
                  </p>
         </v-list-item>
         <v-list-item>
             <p :class="cards[index].isActive ? 'white--text' : 'black--text'">
                    <v-icon class="mr-1" :color="cards[index].isActive ?  'white': '#49D9A0'">mdi-phone</v-icon>
                    {{ empresa.telefono }}
             </p>
         </v-list-item>
         <v-list-item>
             <p :class="cards[index].isActive ? 'white--text' : 'black--text'">
                    <v-icon class="mr-1" :color="cards[index].isActive ?  'white': '#49D9A0'">mdi-map-marker</v-icon>
                    {{ empresa.direccion }}
               </p>
         </v-list-item>
      </v-list>
      </v-card-text>
      </v-card>
   </router-link>

      </v-col>
    </v-row>
  </div>
</template>
<script>
import empresas from '@/store/empresas'

export default {
  data() {
    return {
      showCards: false,
      isActive: false,
      cards: []
    }
  },
  mounted(){
    empresas.dispatch('getGanacias');
    empresas.dispatch('getLiquidaciones');
  },

  async created() {
    document.title = "Digicard | Clientes";
    await empresas.dispatch('getEmpresas');

    this.cards = this.allEmpresas.map(() => ({ isActive: false }));
  },
  computed: {
    allEmpresas() {
      return empresas.state.allEmpresas;
    },
   allGanancias() {
      return empresas.state.allGanancias;
    },
     allLiquidaciones() {
      return empresas.state.allLiquidaciones;
    }
  }
}
</script>
<style>
.custom-link {
  text-decoration: none;
  color: inherit;
  /* Añade cualquier otro estilo que desees */
}
</style>


