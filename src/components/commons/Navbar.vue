<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="80">
    <v-avatar class="d-block text-center mx-auto mt-4">
      <v-icon color="#49D9A0" large>mdi-domain</v-icon>
    </v-avatar>
    <v-divider class="mx-3 my-5"></v-divider>
    <v-list flat class="mt-5">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.route" class="custom-link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { id: 0, icon: "mdi-home", route: "/" },
      { id: 1, icon: "mdi-chart-bar", route: "/graphs" },
    ],
  }),
};
</script>
<style scoped>
.custom-link {
  text-decoration: none;
  color: inherit;
}
.v-list-item-group .v-list-item--active .v-list-item__content {
  background-color: #49D9A0 ;
  border-radius: 50px;
}

</style>
