<template>
  <v-container>
    <v-row class="mb-4 mt-100">
      <v-card id="nav" class="mb-4 mt-100">
        <v-tabs
          background-color="#e99f4c"
          color="#fdf6f0"
          class="active"
          show-arrows
        >
          <v-tabs-slider color="#fdf6f0" ></v-tabs-slider>

          <v-tab
            active-class="active"
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
        :past_year_titles="past_year_titles"
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
      past_year_titles: [],
      titles,
      years: [],
      authors_td: 1,
      titles_td: 1,
    };
  },

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
    this.getTitles();
  },
  mounted() {
    console.log(this.year_now);
  },
  methods: {
    getTitles: function () {
      this.titles_year = [];
      this.past_year_titles = [];
      this.titles.forEach((element) => {
        if (element["Publication Year"] == this.year_now) {
          this.titles_year.push(element);
        }
      });

      this.titles.forEach((element) => {
        if (element["Publication Year"] <= this.year_now) {
          this.past_year_titles.push(element);
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
        // console.log(this.titles_td);
      });
    },
  },
};
</script>

<style>
.active {
  font-size: 30px !important;
  color: bisque;
}
</style>