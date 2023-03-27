<template>
    <v-app style="background-color: #ebebeb;">
      <NavBar />
      <v-main>
        <router-view/>
      </v-main>
      <Footer />
    </v-app>
</template>

  <script>
  import NavBar from '@/components/commons/Navbar.vue';
  import Footer from '@/components/commons/Footer.vue';
 

  export default {
    name: 'App',
    components: {NavBar, Footer},

    data: () => ({
      //
    }),
  };
  </script>
  <style>

  </style>
