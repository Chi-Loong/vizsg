<template>
  <v-app dark>
  <v-sheet
    class="overflow-hidden"
    style="position: relative;"
  >    
    <v-navigation-drawer v-model="drawer" fixed left app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <div class="menuIcon">
          <v-icon large color="white" @click.stop="drawer = !drawer">mdi-menu</v-icon>
        </div>
        <Nuxt />
      </v-container>
    </v-main>
  </v-sheet>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Visualizations',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        }
      ],
  })
}
</script>

<style>
.menuIcon {
  position: fixed;
  top: 2%;
  right: 2%;
  z-index: 100;
}
</style>