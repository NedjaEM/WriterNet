<template>
  <v-container>
      <h1 style="color: #e99f4c">Sources</h1>
        <v-card outlined class="mb-3" color="#f2ebe9" style="border: 1px solid #e99f4c"
         v-for="item in sources" v-bind:key="item.Source">
         <v-card-title class="text-h7">
             {{item.Title}}
         </v-card-title>
         <v-card-title>
             {{item.Author}}
         </v-card-title>
         <v-card-title>
             {{item.Journal}}
         </v-card-title>
         <v-card-title>
             {{item.Year}}
         </v-card-title>
         <v-card-title>
             {{item.Link}}
         </v-card-title>
        </v-card>
  </v-container>
</template>


<script>
import * as d3 from "d3";
import sources from "../../public/sources.csv";

export default {
  data() {
    return {
        sources
    };
  },

  async created() {
    this.sources = await d3.csv(sources);
  },
  mounted() {},
  methods: {},
};
</script>