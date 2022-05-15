<template>
  <v-container class="mx-0 px-0" fluid>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col
        id="publisher-text1"
        class="pa-n10"
        style="max-width: 18%; position: fixed"
      >
        <div id="year-text" style="pa-n10">
          {{ year }}
        </div>
        <v-card id="publisher-text" class="mt-10" outlined color="transparent">
          {{ authors_td }}
        </v-card>
        authors translated so far
        <v-card id="author-text" class="mt-5" outlined color="transparent">
          {{ titles_td }}
        </v-card>
        books translated so far
      </v-col>
      <v-col id="publisher-text1" class="pa-n10" style="max-width: 18%">
      </v-col>
      <!-- <v-col>
        <template v-for="(n, i) in events_year">
          <v-col :key="i" cols="auto">
            <v-card color="transparent">
              {{ event }}
            </v-card>
          </v-col>
        </template>
      </v-col> -->
      <v-col>
        <template v-for="(n, i) in past_year_titles.slice().reverse()">
          <v-col :key="i" cols="auto">
            <v-card color="transparent">
               <v-img
                width="20vh"
                height="30vh"
                color="gray"
                :src="n['Book Cover']"
              ></v-img>
              <v-card-subtitle>
                {{ n.Abstract }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as d3 from "d3";
import titles from "../../public/titles_new.csv";
import events from "../../public/events.csv";

export default {
  props: [
    "year",
    "year_titles",
    "authors_td",
    "titles_td",
    "past_year_titles",
    "events_year",
  ],

  watch: {
    year_titles: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      console.log(d3.select("#year1993"));
    },
  },

  data() {
    return {
      titles,
      years: [],
      events,
    };
  },

  components: {},

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
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
  },
};
</script>

<style scoped>
#year-text {
  font-size: 50px;
  color: #264143;
}

#publisher-text {
  font-size: 50px;
  color: #264143;
}

#publisher-text1 {
  font-size: 15px;
  color: #264143;
}

#author-text {
  font-size: 50px;
  color: #264143;
}

.iconclicked {
  color: #79597b !important;
}
</style>