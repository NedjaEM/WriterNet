<template>
  <v-container class="mx-0 px-0" fluid>
    <v-row class="ma-0 pa-0" no-gutters>
      <v-col id="publisher-text1" class="pa-n10" style="max-width: 18%">
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
      <v-col class="ml-0 pl-0">
        <v-container>
          <v-row style="height: 100vh">
            <template v-for="(n, i) in year_titles">
              <v-col :key="i" cols="auto">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-img
                      width="20vh"
                      height="30vh"
                      color="gray"
                      v-on="on"
                      :src="n['Book Cover']"
                    ></v-img>
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
                          >Publishing House: {{ n["Publisher"] }}</v-list-item
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
          </v-row>
          <v-col>
            <v-card> </v-card>
          </v-col>
        </v-container>
      </v-col>
      <v-col>
        <div style="pa-n10; font-size: 25px; color: #79597b;">
          Where were they published
        </div>
        <v-row>
          <v-col style="max-width: 10%"> US </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'US - New York'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon slot="activator" v-on="on">
                          mdi-book-open-variant
                        </v-icon>
                      </template>
                      <span> tooltip </span>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="max-width: 10%"> UK </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'UK - London'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon slot="activator" v-on="on">
                          mdi-book-open-variant
                        </v-icon>
                      </template>
                      <span> tooltip </span>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col style="max-width: 10%"> Egypt </v-col>
          <v-col>
            <v-row>
              <template v-for="(n, i) in past_year_titles">
                <template v-if="n.Place == 'Egypt - Cairo'">
                  <v-col :key="i" cols="auto">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon slot="activator" v-on="on">
                          mdi-book-open-variant
                        </v-icon>
                      </template>
                      <span> tooltip </span>
                    </v-tooltip>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as d3 from "d3";
import titles from "../../public/titles_new.csv";

export default {
  props: ["year", "year_titles", "authors_td", "titles_td", "past_year_titles"],

  watch: {
    past_year_titles: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },

  data() {
    return {
      titles,
      years: [],
    };
  },

  components: {
   
  },

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
    this.getUSBooks();
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

    getUSBooks: function () {
      this.past_year_titles.forEach((element) => {
        console.log(element);
      });
    },

    getUKBooks: function () {},
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
</style>