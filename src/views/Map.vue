<template>
  <svg id="my_map" width="300" height="300"></svg>
</template>

<script>
import * as d3 from "d3";
import titles from "../../public/titles_new.csv";

export default {
  props: ["year", "year_titles", "authors_td", "titles_td"],

  data() {
    return {
      titles,
      years: [],
    };
  },

  components: {},

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
    // this.createMap();
  },

  mounted() {},

  methods: {
    getDistinctYear: function () {
      this.years = new Set();
      this.titles.forEach((element) => {
        this.years.add(element["Publication Year"]);
      });
      this.years = [...this.years].sort();
      console.log(this.years);
      return this.years;
    },
    createMap: function () {
      var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      // Map and projection
      var projection = d3
        .geoNaturalEarth1()
        .scale(width / 1.3 / Math.PI)
        .translate([width / 2, height / 2]);

      svg.append("g");

      // Load external data and boot
      d3.json(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
      ).then(function (data) {
        console.log(data);
        // Draw the map
        svg
          .append("g")
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("fill", "white")
          .attr("d", d3.geoPath().projection(projection))
          .style("stroke", "black");
      });
    },
  },
};
</script>

<style scoped>
</style>