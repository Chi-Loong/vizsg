<template>
  <v-container grid-list-lg>
    <v-flex d-flex>
      <v-layout row wrap>
        <v-flex xl8 md9 sm12 xs12>
            <titleAnimation />
        </v-flex>
        <v-flex xl2 md3 sm12 xs12>
            <div class="projectPicker" ref="projectPicker">
              <div v-for="(ele, index) in picker" :key="ele.name" :id="'nav-id' + index" class="projectElement" ref="projectElement" :style="drawPosition(index)" @click="filterCategory(ele, index)">
                  <v-icon x-large color="white"> {{ ele.icon }}</v-icon>
              </div>
            </div>
        </v-flex>
      </v-layout>
    </v-flex>

    <h1 class="pa-6 text-center">{{ title }}</h1>

    <v-flex d-flex>
      <v-layout row wrap>
        <transition-group name="vizlist" v-on:enter="cardEnter" v-on:leave="cardLeave" tag="v-flex" class="manual-v-layout">
        <v-flex xl3 md4 sm6 v-for="(ele, index) in viz" :key="ele.name">
          <v-hover v-slot="{ hover }">
          <v-card height="100%" elevation="2" outlined @click.native="cardClicked(index)">
            <v-img :src="ele.image" height="200px">
            <v-expand-transition>
              <div v-if="hover" class="d-flex light-blue darken-3 v-card-reveal" style="height: 100%;">
                <div>
                  <h2>Go!</h2>
                  <v-icon x-large color="white">mdi-arrow-right</v-icon>
                </div>
              </div>
            </v-expand-transition>
            </v-img>
              <v-card-title style="position: relative;">
                {{ ele.name }}
                <v-btn absolute color="grey" class="white--text" fab large right top>
                  <v-icon> {{ showCategoryIcon(ele.category) }}</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>{{ ele.description }}</v-card-text>
          </v-card>
          </v-hover>
        </v-flex>
        </transition-group>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import { gsap, Power2, Back } from "gsap";
import { mapState } from "vuex";

export default {
  data: () => ({
    viz: [],
    picker: [],
    projectPickerWidth: 0,
    projectPickerHeight: 0,
    prevIndex: 0,
    title: "All visualizations"
  }),
  computed: {
    ...mapState(["categories", "visualizations"]),
  },
  methods: {
    drawPosition: function(index) {
        let angle = (360 / (this.picker.length)) * index * Math.PI / 180;
        let radius = Math.min(this.projectPickerWidth / 2, this.projectPickerHeight / 2) - 20;
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

        gsap.to("#nav-id0", {
          left: this.projectPickerWidth / 2 - 10,
          top: this.projectPickerHeight / 2 - 10,
          scale: 2,
          background: "#b62f15",
          duration: 2}, 2);
    },
    showCategoryIcon: function(category) {
        return this.categories.find(ele => ele.name == category).icon;
    },
    filterCategory: function(ele, index) {
      this.viz = this.visualizations.map(all => all);
      if (ele.name != "All visualizations") {
        let filtered = this.viz.filter(element => element.category == ele.name);
        this.viz = filtered;
      }

      let angle = (360 / (this.picker.length)) * this.prevIndex * Math.PI / 180;
      let radius = Math.min(this.projectPickerWidth / 2, this.projectPickerHeight / 2) - 20;
      let leftPosition = Math.cos(angle) * radius + this.projectPickerWidth / 2 - 20;
      let topPosition = Math.sin(angle) * radius + this.projectPickerHeight / 2 - 20;

      gsap.to("#nav-id" + this.prevIndex, {
        left: leftPosition,
        top: topPosition,
        scale: 1,
        background: "#002a42",
        duration: 2});

      gsap.to("#nav-id" + index, {
        left: this.projectPickerWidth / 2 - 10,
        top: this.projectPickerHeight / 2 - 10,
        scale: 2,
        background: "#b62f15",
        duration: 2});

      this.prevIndex = index;
      this.title = ele.name;
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
      window.location.href = this.viz[index].blog;
    },
    getProjectPickerSize: function() {
      if (this.$refs.projectPicker != undefined) {
        this.projectPickerWidth = this.$refs.projectPicker.clientWidth;
        this.projectPickerHeight = this.$refs.projectPicker.clientHeight;
      }

      gsap.to("#nav-id" + this.prevIndex, {
        left: this.projectPickerWidth / 2 - 10,
        top: this.projectPickerHeight / 2 - 10,
        scale: 2,
        background: "#b62f15",
        duration: 2});

    }
  },  
  mounted: function() {
    //on mount, pull from vuex store into
      this.viz = this.visualizations.map(all => all);
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
    font-family: "Comfortaa", Arial, sans-serif;
    text-transform: uppercase;
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
  min-width: 250px;
}
.projectElement {
  position: absolute;
  border-radius: 15px;
  padding: 3px;
  background: #002a42;
}
.vizlist-move {
  transition: transform 2s;
}

</style>