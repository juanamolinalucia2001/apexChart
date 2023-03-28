<template>
  <v-footer
    color="#ffffff"
    class="custom-footer elevation-3"
    padless
  >
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} © 
      <strong> <a class="footerLink" href="https://github.com/juanamolinalucia2001">Juana Molina</a>
        (Front-End Rookies for Digicard)</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style>
.footerLink {
  color: #49D9A0   !important;
  text-decoration: none;
}

</style>
