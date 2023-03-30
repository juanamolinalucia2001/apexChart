<template>
<div>
   <NavBar/>
  <Empresa/>
</div>

</template>

<script>
   import Empresa from '@/components/Empresas.vue';
   import NavBar from '@/components/commons/Navbar.vue';

  export default {
    name: 'Home',

    components: {
      Empresa,
      NavBar
    },
  }
</script>
