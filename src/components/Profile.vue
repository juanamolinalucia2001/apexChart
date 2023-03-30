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
      <Graficos />
      <Nav/>
   </v-row>
  </v-container>
</template>

<script>
import empresas from '@/store/empresas'
import Graficos from '@/components/graficos/Graficos.vue'
import Nav from '@/components/commons/NavEmpresa.vue'

export default {
  components: {
    Graficos,
    Nav
  },
  data() {
    return {
      empresa: {},
      servicios: {},
      loader: true
    }
  },
  async created() {
    document.title = 'Digicard | Cliente Perfil'
    const id = this.$route.params.id
    await empresas.dispatch('getEmpresas')
    const filteredEmpresa = empresas.state.allEmpresas.filter(
      empresa => empresa.id === id
    )
    this.empresa = filteredEmpresa[0]
    this.loader = false
  },
  computed: {
    allEmpresas() {
      return empresas.state.allEmpresas
    },

  },
}
</script>

<style>
.bg-green {
  background-color: #49d9a0;
}
</style>
