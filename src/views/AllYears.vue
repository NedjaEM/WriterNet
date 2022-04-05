<template>
  <v-container>
    <v-row class="mb-4">
      <v-card id="nav" class="mb-4">
        <v-tabs dark background-color="#79597b darken-3" show-arrows>
          <v-tabs-slider color="#79597b lighten-3"></v-tabs-slider>

          <v-tab
            v-for="i in years"
            :key="i"
            :href="'#tab-' + i"
            @click="
              getYear(i);
              getTitles(i);
              getTitlesTD(i);
              getAuthorsTD(i);
            "
          >
            {{ i }}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-row>
    <v-row class="fill-height">
      <YearVue
        :year="year_now"
        :year_titles="titles_year"
        :authors_td="authors_td"
        :titles_td="titles_td"
      />
    </v-row>
  </v-container>
</template>


<script>
import YearVue from "../views/YearVue.vue";
import * as d3 from "d3";
import titles from "../../public/titles_new.csv";

export default {
  components: {
    YearVue,
  },

  data() {
    return {
      year_now: 1983,
      titles_year: [],
      titles,
      years: [],
      authors_td: 1,
      titles_td: 1,
    };
  },

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
  },
  mounted() {
    console.log(this.year_now);
  },
  methods: {
    getTitles: function () {
      this.titles_year = [];
      this.titles.forEach((element) => {
        if (element["Publication Year"] == this.year_now) {
          this.titles_year.push(element);
          console.log(element["Publication Year"]);
        }
      });
    },
    getYear: function (i) {
      this.year_now = i;
    },
    getDistinctYear: function () {
      this.years = new Set();
      this.titles.forEach((element) => {
        this.years.add(element["Publication Year"]);
      });
      this.years = [...this.years].sort();
      console.log(this.years);
      return this.years;
    },
    getAuthorsTD: function (i) {
      let authors_set = new Set();
      this.titles.forEach((element) => {
        if (element["Publication Year"] <= i) {
          authors_set.add(element.Author);
        }
      });
      this.authors_td = authors_set.size;
    },
    getTitlesTD: function (i) {
      this.titles_td = 0;
      this.titles.forEach((element) => {
        if (element["Publication Year"] <= i) {
          this.titles_td = this.titles_td + 1;
        }
        console.log(this.titles_td);
      });
    },
  },
};
</script>

<style>
#nav {
}
</style>