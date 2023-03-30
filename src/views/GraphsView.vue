<template>
  <v-container class="d-flex align-center justify-center text-center">
    <NavBar />
    <Graphs/>
  </v-container>
</template>
<script>
   import Graphs from '@/components/graphs/Ganancias.vue';
   import NavBar from '@/components/commons/Navbar.vue';

  export default {
    name: 'graphs',

    components: {
      Graphs,
      NavBar
    },
  }
</script>
