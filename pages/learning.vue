<template>
  <v-container grid-list-lg>
  <v-flex d-flex>
  <v-layout row wrap>

    <v-flex xl3 lg4 md6 sm12 xs12>
    <v-card class="teal darken-1 pa-5 mt-5">
        <h1 class="pb-4 text-center">Meet-ups</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in meetups" :key="ele.name">
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

    <v-flex xl3 lg4 md6 sm12 xs12>
    <v-card class="cyan darken-2 pa-5 mt-5">
        <h1 class="pb-4 text-center">Course Syllabi</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in syllabi" :key="ele.name">
        <v-card height="100%" class="ma-2" outlined @click="cardClicked(ele)">
            <v-expand-transition>
                <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                    <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
                </div>
            </v-expand-transition>
            <v-card-title style="word-break: break-word">{{ ele.name }}</v-card-title>
            <v-card-subtitle>{{ ele.school }}, by {{ ele.instructor }} ({{ ele.year }})</v-card-subtitle>
        </v-card>
        </v-hover>
    </v-card>
    </v-flex>

    <v-flex xl3 lg4 md6 sm12 xs12>
    <v-card class="blue-grey darken-2 pa-5 mt-5">
        <h1 class="pb-4 text-center">Newsletters</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in newsletters" :key="ele.name">
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

    <v-flex xl3 lg4 md6 sm12 xs12>
    <v-card class="green darken-3 pa-5 mt-5">
        <h1 class="pb-4 text-center">Programmes</h1>
        <v-hover v-slot="{ hover }" class="ma-2" v-for="(ele, index) in programmes" :key="ele.name">
        <v-card height="100%" class="ma-2" outlined @click="cardClicked(ele)">
            <v-expand-transition>
                <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                    <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
                </div>
            </v-expand-transition>
            <v-card-title style="word-break: break-word">{{ ele.name }}</v-card-title>
            <v-card-subtitle>{{ ele.organizer }}</v-card-subtitle>
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
        meetups: state => state.learning.meetups,
        syllabi: state => state.learning.syllabi,
        newsletters: state => state.learning.newsletters,
        programmes: state => state.learning.programmes,
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

<style>
h1, h2 {
    font-family: 'Lato', Arial, sans-serif;
    text-transform: capitalize;
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