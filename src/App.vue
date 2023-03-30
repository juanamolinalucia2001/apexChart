<template>
    <v-app style="background-color: #ebebeb;">
      <v-main>
        <router-view/>
      </v-main>
      <Footer />
    </v-app>
</template>

  <script>
 
  import Footer from '@/components/commons/Footer.vue';
 

  export default {
    name: 'App',
    components: {Footer},

    data: () => ({
      //
    }),
  };
  </script>
  <style>

  </style>
