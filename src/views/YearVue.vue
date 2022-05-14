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

      <v-col style="max-height = 100%;">
        <div
          style="pa-n10; font-size: 25px; color: #79597b; text-align: center"
        >
          Where were they published
        </div>
        <v-row>
          <v-col style="max-width: 12%; color: #79597b; font-weight: bold;">
            US
          </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'US - New York'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-hover v-slot="{ hover }" close-delay="100">
                          <v-icon
                            slot="activator"
                            v-on="on"
                            :class="hover ? 'iconclicked' : 'icon'"
                            :id="'year' + n.Date"
                          >
                            mdi-book-open-variant
                          </v-icon>
                        </v-hover>
                      </template>
                      <v-card :key="i" class="pa-1" outlined tile dark>
                        <v-card-title class="text-right">
                          <span class="title font-weight-light"
                            >{{ n["Date of Translation"] }}
                          </span>
                        </v-card-title>
                        <v-card-subtitle class="text-right">
                          <span class="title font-weight-light"
                            >{{ n.Author }}
                          </span>
                        </v-card-subtitle>

                        <v-list-item class="font-weight-light">
                          <v-list-item-avatar size="100" class="mb-auto">
                            <v-img :src="n['Author Image']"> </v-img>
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <div class="overline mb-4"></div>
                            <v-list-item-title
                              class="headline font-weight-light mb-3 text-wrap"
                              style="word-break: normal"
                              >{{ n["Title"] }}</v-list-item-title
                            >
                            <v-list-item-title
                              class="headline mb-1 text-wrap"
                              style="word-break: normal"
                              >{{ n["Title in Arabic"] }}</v-list-item-title
                            >
                            <div>{{ n["Abstract"] }}</div>

                            <v-list-item
                              >Publishing House:
                              {{ n["Publisher"] }}</v-list-item
                            >
                            <v-list-item
                              >Translator: {{ n["Translator"] }}</v-list-item
                            >
                            <v-list-item
                              >Publication Date:
                              {{ n["Publication Year"] }}</v-list-item
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="max-width: 12%; color: #79597b; font-weight: bold">
            UK
          </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'UK - London'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-hover v-slot="{ hover }" close-delay="100">
                          <v-icon
                            slot="activator"
                            v-on="on"
                            :class="hover ? 'iconclicked' : 'icon'"
                          >
                            mdi-book-open-variant
                          </v-icon>
                        </v-hover>
                      </template>
                      <v-card>
                        {{ n.Author }}
                      </v-card>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="max-width: 12%; color: #79597b; font-weight: bold">
            Egypt
          </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'Egypt - Cairo'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-hover v-slot="{ hover }" close-delay="100">
                          <v-icon
                            slot="activator"
                            v-on="on"
                            :class="hover ? 'iconclicked' : 'icon'"
                          >
                            mdi-book-open-variant
                          </v-icon>
                        </v-hover>
                      </template>
                      <v-card>
                        {{ n.Author }}
                      </v-card>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="max-width: 12%; color: #79597b; font-weight: bold">
            Canada
          </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'Canada - Toronto'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-hover v-slot="{ hover }" close-delay="100">
                          <v-icon
                            slot="activator"
                            v-on="on"
                            :class="hover ? 'iconclicked' : 'icon'"
                          >
                            mdi-book-open-variant
                          </v-icon>
                        </v-hover>
                      </template>
                      <v-card>
                        {{ n.Author }}
                      </v-card>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="max-width: 12%; color: #79597b; font-weight: bold">
            Qatar
          </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'Qatar - Doha'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-hover v-slot="{ hover }" close-delay="100">
                          <v-icon
                            slot="activator"
                            v-on="on"
                            :class="hover ? 'iconclicked' : 'icon'"
                          >
                            mdi-book-open-variant
                          </v-icon>
                        </v-hover>
                      </template>
                      <v-card>
                        {{ n.Author }}
                      </v-card>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <template v-for="(n, i) in past_year_titles">
          <v-col :key="i" cols="auto">
            <v-card color="#fdf6f0">
              <v-img
                width="15vh"
                height="20vh"
                color="gray"
                :src="n['Book Cover']"
              ></v-img>
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
  props: ["year", "year_titles", "authors_td", "titles_td", "past_year_titles"],

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

    this.events = await d3.csv(events);
    console.log(events);
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
  color: #79597b;
}

#publisher-text {
  font-size: 50px;
  color: #79597b;
}

#publisher-text1 {
  font-size: 15px;
  color: #79597b;
}

#author-text {
  font-size: 50px;
  color: #79597b;
}

.iconclicked {
  color: #79597b !important;
}

.icon {
}
</style>