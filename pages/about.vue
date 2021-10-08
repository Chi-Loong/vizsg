<template>
  <div>
    <div class="splash">
        <titleAnimation />
    </div>
  <v-container grid-list-lg>
    <v-row class="ma-5">      
    <v-flex d-flex>
      <v-layout row wrap>
        <v-flex xl4 md4 sm12 xs12>
            <v-card>
                <v-card-text>
                <h2 class="mb-5">About Viz.SG</h2>
                <div class="body-1">
                    <p>The idea: A free repository of data visualizations on Singapore.</p>
                    <p>Available for anyone to use. Students, general public, businesses.</p>
                    <p>We are not affiliated with the government - this is a ground-up initiative!</p>
                    <p>A curation of data visualizations on Singapore. Coded with love, one dataset at a time.</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xl4 md4 sm12 xs12>
            <v-card>
                <v-card-text>
                <h2 class="mb-5">Some history</h2>
                <div class="body-1">
                    <p>This website was originally designed and coded by <a href="https://www.vslashr.com/" target="_blank" class="blue--text lighten-1">V/R</a>, a small data design and web shop in Singapore.</p>
                    <p>Viz.sg started in 2015 as a small showcase for the stuff V/R can do.</p>
                    <p>But it has grown to become a community-based site as we realize that the visualizations are genuinely useful.</p>
                    <p>We hope that you can find useful visualizations, tools and links about Singapore here!</p>
                    <p>This site is open sourced for people to modify as necessary.</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xl4 md4 sm12 xs12>
            <v-card class="mb-5">
                <v-card-text>
                <h2 class="mb-5">Community links</h2>
                <div class="body-1">
                    <ul>
                    <li><p><a href="https://www.meetup.com/Data-Vis-Singapore/" target="_blank" class="blue--text lighten-1">Data Vis SG</a>: Local SG meetup group on data viz</p></li>
                    <li><p><a href="https://www.meetup.com/Hacks-Hackers-Singapore/" target="_blank" class="blue--text lighten-1">Hacks/HackersSG</a>: Local SG meetup group on data journalism/explorables</p></li>
                    </ul>
                </div>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-text>
                <h2 class="mb-5">Moderators</h2>
                <div class="body-1">
                    <p>Chi-Loong: <b class="blue--text lighten-1">chiloong@vslashr.com</b></p>
                    <p>We love feedback, so if you have any, please drop us a note!</p>
                </div>
                </v-card-text>
            </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
    methods: {
    },
    mounted: function() {
    }
}
</script>

<style>
h2 {
    font-family: "Comfortaa", Arial, sans-serif;
    text-transform: uppercase;
}
.splash {
    max-width: 800px;
    margin: auto;
}
</style>