<template>
  <v-container grid-list-lg>
  <v-flex d-flex>
  <v-layout row wrap>

    <v-flex xl4 lg4 md6 sm12 xs12>
    <v-card class="pink darken-2 pa-5 mt-5">
        <h1 class="pb-4 text-center">Consultancies</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in consultancies" :key="ele.name">
        <v-card height="100%" class="ma-2" outlined @click="cardClicked(ele)">
            <v-expand-transition>
                <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                    <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
                </div>
            </v-expand-transition>
            <v-card-title style="word-break: break-word">{{ ele.name }}</v-card-title>
            <v-card-subtitle>{{ ele.description }}</v-card-subtitle>
        </v-card>
        </v-hover>
    </v-card>
    </v-flex>

    <v-flex xl4 lg4 md6 sm12 xs12>
    <v-card class="amber darken-3 pa-5 mt-5">
        <h1 class="pb-4 text-center">Newsrooms</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in newsrooms" :key="ele.name">
        <v-card height="100%" class="ma-2" outlined @click="cardClicked(ele)">
            <v-expand-transition>
                <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                    <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
                </div>
            </v-expand-transition>
            <v-card-title style="word-break: break-word">{{ ele.name }}</v-card-title>
            <v-card-subtitle>{{ ele.description }}</v-card-subtitle>
        </v-card>
        </v-hover>
    </v-card>
    </v-flex>

    <v-flex xl4 lg4 md6 sm12 xs12>
    <v-card class="deep-orange darken-3 pa-5 mt-5">
        <h1 class="pb-4 text-center">Software</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in software" :key="ele.name">
        <v-card height="100%" class="ma-2" outlined @click="cardClicked(ele)">
            <v-expand-transition>
                <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                    <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
                </div>
            </v-expand-transition>
            <v-card-title style="word-break: break-word">{{ ele.name }}</v-card-title>
            <v-card-subtitle>{{ ele.description }}</v-card-subtitle>
        </v-card>
        </v-hover>
    </v-card>
    </v-flex>

  </v-layout>
  </v-flex>
  </v-container>
</template>

<script>
// Vuex store for all data. Used pretty trivially for now, but in case needed for any future backend expansion.
import { mapState } from "vuex";

export default {
  data: () => ({
  }),
  computed: {
    ...mapState({
        consultancies: state => state.org.consultancies,
        newsrooms: state => state.org.newsrooms,
        software: state => state.org.software,
    }),
  },
  methods: {
    cardClicked: function(ele) {
      window.location.href = ele.link;
    }
  },  
  mounted: function() {
  },
  beforeDestroy: function() {
  }
}
</script>

<style scoped>
h1 {
    font-family: 'Lato', Arial, sans-serif;
}

.v-card-reveal {
  align-items: center;
  bottom: 0;
  opacity: 0.9;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>