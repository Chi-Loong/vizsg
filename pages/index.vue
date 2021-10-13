<template>
  <v-container grid-list-lg>
    <v-flex d-flex>
      <v-layout row>
        <v-flex xl2 lg2 md1 sm12 xs12>
        </v-flex>
        <v-flex xl5 lg6 md7 sm6 xs12>
          <titleAnimation />
        </v-flex>
        <v-flex xl3 lg4 md3 sm6 xs12>
          <div class="projectPicker" ref="projectPicker">
            <div v-for="(ele, index) in picker" :key="ele.name" :id="'nav-id' + index" class="projectElement" ref="projectElement" :style="drawPosition(index)" @click="filterCategory(ele, index)">
                <v-icon x-large color="white"> {{ ele.icon }}</v-icon>
            </div>
          </div>
        </v-flex>
        <v-flex xl2 lg2 md11 sm12 xs12>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex d-flex>
      <v-layout row>
        <v-flex xl2 lg2 md2 sm1 xs1></v-flex>
        <v-flex xl8 lg8 md8 sm10 xs10>
          <div id="searchVizBar">
            <v-autocomplete v-model="searchedViz" :items="getVizTitles" dense small-chips deletable-chips multiple label="Search Visualization Title" @change="searchCards">
            </v-autocomplete>
          </div>
          <h1 id="titleText" class="py-4 text-center">{{ title }}</h1>
        </v-flex>
        <v-flex xl2 lg2 md2 sm1 xs1></v-flex>
      </v-layout>
    </v-flex>

    <v-flex d-flex>
      <v-layout row wrap>
        <transition-group name="vizlist" v-on:enter="cardEnter" v-on:leave="cardLeave" tag="v-flex" class="manual-v-layout">
        <v-flex xl2 lg3 md4 sm6 xs12 v-for="(ele, index) in viz" :key="ele.name">
          <v-hover v-slot="{ hover }">
          <v-card height="100%" elevation="2" outlined @click="cardClicked(index)">
            <v-img :src="ele.image" height="160px">
            <v-expand-transition>
              <div v-if="hover" class="d-flex blue darken-3 v-card-reveal" style="height: 100%;">
                <v-card-text>{{ ele.description }}</v-card-text>
                <v-card-title><v-icon color="white">mdi-play-circle</v-icon></v-card-title>
              </div>
            </v-expand-transition>
            </v-img>
              <v-card-title style="position: relative;">
                {{ ele.name }}
                <v-btn absolute color="red darken-2" class="white--text" fab large right top>
                  <v-icon> {{ showCategoryIcon(ele.category) }}</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-subtitle>Last update: {{ ele.lastupdate }} 
                <span v-if="ele.live" class="yellow--text">(Live!)</span>
              </v-card-subtitle>
          </v-card>
          </v-hover>
        </v-flex>
        </transition-group>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
// Greensock animation library
import { gsap, Power2, Back } from "gsap";

// Datetime library for simplifying parsing
import { DateTime } from "luxon";

// Vuex store for all data. Used pretty trivially for now, but in case needed for any future backend expansion.
import { mapState } from "vuex";

export default {
  data: () => ({
    viz: [],
    picker: [],
    searchList: [],
    searchedViz: [],
    projectPickerWidth: 0,
    projectPickerHeight: 0,
    prevIndex: 0,
    title: "All visualizations"
  }),
  computed: {
    ...mapState({
        categories: state => state.viz.categories,
        visualizations: state => state.viz.visualizations
    }),
    getVizTitles: function() {
      this.searchList = this.visualizations.map(ele => ele.name);
      this.searchList.sort();

      return this.searchList;
    }
  },
  methods: {
    drawPosition: function(index) {
      let angle = (360 / (this.picker.length)) * index * Math.PI / 180;
      let radius = 100;
      let leftPosition = Math.cos(angle) * radius + this.projectPickerWidth / 2 - 20;
      let topPosition = Math.sin(angle) * radius + this.projectPickerHeight / 2 - 20;
      return "left: " + leftPosition +"px; " + "top: " + topPosition + "px; ";
    },
    pickerAnimate: function() {
      for (let i=0; i < this.picker.length; i++) {
            //radians calculation: move to next location in circle multipled by bigger radius = spiral
            var radians = (360 / this.picker.length) * (i + 1) * Math.PI / 180 - 90;
            var radians2 = (360 / this.picker.length) * (i + 2) * Math.PI / 180 - 90;
          gsap.from("#nav-id" + i, 2, {x:Math.cos(radians) * -150, y:Math.sin(radians) * -150, autoAlpha:0, ease: Back.easeOut.config(1.7)},1);
      }
      this.animateIconToCentre(0, 2);

      gsap.from("#searchVizBar", {autoAlpha: 0, duration: 2, delay: 1});
      gsap.from("#titleText", {autoAlpha: 0, duration: 2, delay: 1});
    },
    sortCardsByTime: function(a, b) {
      let dateA = DateTime.fromFormat(a.lastupdate, "dd/MM/yyyy");
      let dateB = DateTime.fromFormat(b.lastupdate, "dd/MM/yyyy");

      // "Live" visualizations" take precedence. Otherwise look at update date
      if (a.live == true && b.live == undefined) {
        return -1;
      } else if (a.live == undefined && b.live == true) {
        return 1;
      }

      return dateB.ts - dateA.ts;
    },
    showCategoryIcon: function(category) {
      return this.categories.find(ele => ele.name == category).icon;
    },
    animateIconToWheel: function(index) {
      let angle = (360 / (this.picker.length)) * index * Math.PI / 180;
      let radius = 100;
      let leftPosition = Math.cos(angle) * radius + this.projectPickerWidth / 2 - 20;
      let topPosition = Math.sin(angle) * radius + this.projectPickerHeight / 2 - 20;
      gsap.to("#nav-id" + index, {
        left: leftPosition,
        top: topPosition,
        scale: 1,
        background: "#1565c0",
        duration: 2});
    },
    animateIconToCentre: function(index, startTime = 0) {
      gsap.to("#nav-id" + index, {
        left: this.projectPickerWidth / 2 - 15,
        top: this.projectPickerHeight / 2 - 15,
        scale: 2,
        background: "#d32f2f",
        duration: 2,
        delay: startTime});
    },
    filterCategory: function(ele, index) {
      this.viz = this.visualizations.map(all => all);
      this.viz.sort(this.sortCardsByTime);

      this.searchedViz = [];

      if (ele.name != "All visualizations") {
        let filtered = this.viz.filter(element => element.category == ele.name);
        this.viz = filtered;
      }

      this.animateIconToWheel(this.prevIndex);
      this.animateIconToCentre(index);
      this.prevIndex = index;
      this.title = ele.name;
    },
    searchCards: function() {
      let result = [];
      this.searchedViz.forEach(ele => {
        result.push(this.visualizations.find(ele2 => ele2.name == ele));
      })

      this.viz = result;

      if (this.prevIndex != 0) {
        this.animateIconToWheel(this.prevIndex);
        this.animateIconToCentre(0);
        this.prevIndex = 0;
      }

      this.title = "Custom Search";
    },
    //Animation transition hooks bound to watched data
    //animation onComplete hooks need to be wrapped in functions and durations specified for GSAP to work properly
    cardEnter: function(ele, done) {
      gsap.from(ele, {
        rotationX: Math.random() * 720 - 360, 
        rotationY: Math.random() * 720 - 360,
        scale:0, autoAlpha:0,
        ease:Power2.easeOut,
        onComplete: function(){ done() }, 
        duration: 1});
    },
    cardLeave: function(ele, done) {
      gsap.set(ele, {position: "absolute"});
      gsap.to(ele, {
        scale:0, autoAlpha:0,
        ease:Power2.easeOut,
        onComplete: function(){ done() },
         duration: 1});
    },
    cardClicked: function(index) {
      window.location.href = this.viz[index].link;
    },
    getProjectPickerSize: function() {
      if (this.$refs.projectPicker != undefined) {
        this.projectPickerWidth = this.$refs.projectPicker.clientWidth;
        this.projectPickerHeight = this.$refs.projectPicker.clientHeight;
      }

      this.animateIconToCentre(this.prevIndex);
    }
  },  
  mounted: function() {
    //on mount, pull all data from vuex store into
      this.viz = this.visualizations.map(all => all);
      this.viz.sort(this.sortCardsByTime);

      this.picker = this.categories.map(all => all);
      this.picker.splice(0, 0, { name: "All visualizations", icon: "mdi-chart-pie" });

      window.addEventListener("resize", this.getProjectPickerSize);
      this.getProjectPickerSize();

      this.$nextTick(function () {
        // Code that will run only after the entire view has been rendered
        this.pickerAnimate();
      })

  },
  beforeDestroy: function() {
      window.removeEventListener("resize", this.getProjectPickerSize);
  }
}
</script>

<style>
h1, h2 {
    font-family: 'Lato', Arial, sans-serif;
    text-transform: capitalize;
}

.manual-v-layout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding-bottom: 8px !important;
  padding-top: 8px !important;
  cursor: pointer;
  width: 100%;
}
.v-card-reveal {
  align-items: center;
  bottom: 0;
  opacity: 0.9;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.projectPicker {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 250px;
}
.projectElement {
  position: absolute;
  border-radius: 15px;
  padding: 3px;
  cursor: pointer;
  background: #1565c0;
}
.findButton {
  position: absolute;
  left: 50%;
  bottom: 10%;
}
.vizlist-move {
  transition: transform 2s;
}
</style>