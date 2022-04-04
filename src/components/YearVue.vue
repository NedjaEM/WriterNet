##counts of books translated so far
##counts of authors translated so far
##notable events in MENA
##placeholder for map view
##placeholder for books
<template>
  <v-container>
    <v-row>
      <v-col id="publisher-text1">
        <div id="year-text">
          {{ year }}
        </div>
        <v-card id="publisher-text" class="mt-10" outlined color="transparent">
          {{ authors_td }}
        </v-card>
          number of authors translated so far
        <v-card id="author-text" class="mt-5" outlined color="transparent">
          {{ titles_td }}
        </v-card>
        number of books translated so far
      </v-col>
      <v-col>
        <v-container>
          <v-row style="height: 60vh">
            <template v-for="(n, i) in year_titles">
              <v-col :key="i">
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
              <v-responsive
                v-if="n === 8"
                :key="`width-${n}`"
                width="40%"
              ></v-responsive>
            </template>
          </v-row>
          <v-col>
            <v-card> </v-card>
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import titles_data from "../../public/titles_new.csv";
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

  components: {
  },

  async created() {
    this.titles = await d3.csv(titles);
    this.getDistinctYear();
  },

  mounted() {
    console.log(this.year_titles);
  },

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
  font-size: 70px;
  color: #79597b;
}

#publisher-text {
  font-size: 70px;
  color: #79597b;
  margin-right: 10%;
}

#publisher-text1 {
  font-size: 15px;
  color: #79597b;
  margin-right: 10%;
}

#author-text {
  font-size: 70px;
  color: #79597b;
  margin-top: 100;
}
</style>