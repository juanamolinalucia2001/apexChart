<template>
  <div>   
   <Empleados/>
    <Nav/>
  </div>
</template>
<script>
   import Empleados from '@/components/Empleados.vue'
   import Nav from '../components/commons/NavEmpresa.vue'

  export default {
    name: 'empleadoView',

    components: {
      Empleados,
      Nav
    },
  }
</script>
