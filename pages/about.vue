<template>
  <v-container grid-list-lg>
    <div class="splash">
        <titleAnimation />
    </div>
    <v-row class="ma-5">      
    <v-flex d-flex>
      <v-layout row wrap>
        <v-flex xl4 md4 sm12 xs12>
            <v-card class="blue-grey darken-3">
                <v-card-text>
                <h2 class="mb-5">About Viz.SG</h2>
                <div class="body-1">
                    <p>The idea: A free repository of data visualizations on Singapore.</p>
                    <p>Available for anyone to use. Students, general public, businesses.</p>
                    <p>A curation of data visualizations. Coded with love by the community.</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xl4 md4 sm12 xs12>
            <v-card class="blue-grey darken-3">
                <v-card-text>
                <h2  class="mb-5">Data visualization scene</h2>
                <div class="body-1">
                    <p>Welcome to this open list on the data visualization scene in Singapore!</p>
                    <p>This is your friendly local guide to all people, things and places to do with visualization, data-related design and art, and data journalism.</p>
                    <p>If you have any questions, do contact <span class="blue--text lighten-1">Chi-Loong (chiloong@vslashr.com)</span>.</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xl4 md4 sm12 xs12>
            <v-card class="blue-grey darken-3">
                <v-card-text>
                <h2 class="mb-5">Some history</h2>
                <div class="body-1">
                    <p>Viz.sg started in 2015 as a small showcase of visualizations.</p>
                    <p>Then it grew into a list of visualizations by the community.</p>
                    <p>This is the 3rd version of the site, and it is open sourced and community moderated on <a href="https://github.com/Chi-Loong/vizsg">GitHub</a>. We're always looking for people who might be interested to contribute!</p>
                    <p>We hope that you can find useful visualizations, tools and links about the data visualization scene on Singapore here!</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
h1, h2 {
    font-family: "Lato", Arial, sans-serif;
}
.splash {
    max-width: 800px;
    margin: auto;
}
</style>