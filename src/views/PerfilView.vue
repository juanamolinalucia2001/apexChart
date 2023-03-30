<template>
<v-container>
   <Perfil/>
   <Nav/>
</v-container>
</template>

<script>
   import Perfil from '@/components/Perfil.vue';
   import Nav from '../components/commons/NavEmpresa.vue'
   
  

  export default {
    name: 'perfilView',

    components: {
      Perfil,
      Nav
    },
  }
</script>
