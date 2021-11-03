<template>
  <v-container>
    <div class="splash">
        <titleAnimation />
    </div>
    <v-row class="ma-5">
        <v-expansion-panels accordion class="faq">
        <v-expansion-panel class="blue-grey darken-3 ma-2" v-for="ele in faq" :key="ele.question">
            <v-expansion-panel-header><h3>{{ ele.question }}</h3></v-expansion-panel-header>
            <v-expansion-panel-content>
                <span v-html="ele.answer"></span>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      faq: [
          {
              question: "What is this site about?",
              answer: "<p>The idea: A free listing of data visualizations on Singapore.</p><p>Made and curated with love by the the local SG dataviz community.</p><p>Available for anyone to use. Also: A resource list for anything dataviz centric in Singapore.</p>"
          },
          {
              question: "Who is it for?",
              answer: "<p>Anyone who finds the visualizations useful. Students. Businesses. General public.</p>"
          },
          {
              question: "What is the history of this site?",
              answer: "<p>Viz.sg started in 2015 as a small showcase of personal visualizations.</p><p>Then it grew into a listing of visualizations by the community.</p><p>This is the 3rd version of the site, and it is open sourced and community moderated at a public <a href='https://github.com/Chi-Loong/vizsg'>GitHub</a> repository.</p>"
          },
          {
              question: "Are you related to data.gov.sg?",
              answer: "<p>No we're not. A version of this site was around before the data.gov.sg portal even launched.</p><p>And even with their portal, we still think it is useful to have a place to showcase visualizations from the community.</p>"
          },
          {
              question: "Why are you doing this?",
              answer: "<p>Because we have lots of talented data viz folks in the community who build useful tools that deserve to be shared.</p>"
          },
          {
              question: "Who can contribute?",
              answer: "<p>If you built a visualization on Singapore and wish to showcase your tool, please drop me a mail at <a href='mailto:chiloong@vslashr.com'>chiloong@vslashr.com</a>.</p><p>If you're interested in moderating content for the dataviz community or helping to develop this site, or even just want to stop by and chat, please also drop me a ping!</p>"
          },
          {
              question: "Who are the people behind this site?",
              answer: "<p>Hi, Chi-Loong here. This site was started by me in 2015, and I work and teach in the dataviz space.</p><p>In this 3rd incarnation we're making this bigger by getting more moderators from the Data Vis SG and HHSG meetup folks.</p><p>Right now this is still a beta launch, but this will change. Akang datang.</p><p>And oh, by the way, if you're interested in data viz, please join our meetups!</p>"
          },
          {
              question: "What are future technical plans for the site?",
              answer: "<p>Right now the site is very front-end centric, with no middle/backend stack.</p><p>Eventually we'll probably migrate this to pulling from some tool like Airtable, with a form frontend linking to that. Or something.</p>"
          }
      ]
  })
}
</script>




<style scoped>
h1, h2, h3 {
    font-family: "Lato", Arial, sans-serif;
}
.splash {
    max-width: 800px;
    margin: auto;
}
.faq {
    max-width: 1200px;
    margin: auto;
}
</style>