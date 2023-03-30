<template>
  <div class="ma-12 pa-12" >
    <v-card>
      <v-navigation-drawer
        app
        permanent
        expand-on-hover
        color="#49D9A0"
        dark
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="empresa.logo"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav flat  >
           <v-list-item :to="{ name: 'home'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item flat  :to="{ name: 'perfilView',  params: { id: empresa.id } }">
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{empresa.nombre}}</v-list-item-title>
          </v-list-item>
      
           <v-list-item link  :to="{ name: 'perfilEmpresa',  params: { id: empresa.id } }">
            <v-list-item-icon>
              <v-icon>mdi-file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Graficos</v-list-item-title>
          </v-list-item>
        
          <v-list-item link :to="{ name: 'empleados',  params: { id: empresa.id } }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Empleados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import empresas from '@/store/empresas'
  export default {
    data(){
        return{
        empresa:null,
        empresaId:this.$route.params.id
    }
    },
     async created() {
    document.title = 'Digicard | Cliente Perfil'
    await empresas.dispatch('getEmpresas')
    const filteredEmpresa = empresas.state.allEmpresas.filter(
      empresa => empresa.id === this.empresaId
    )
    this.empresa = filteredEmpresa[0]
    await empresas.dispatch('getServicios')
    this.loader = false
  },
  computed: {
    allEmpresas() {
      return empresas.state.allEmpresas
    },
  }
  }
</script>
<style scoped>
.sidebar {
  position:sticky;
  right:0;
}
</style>


