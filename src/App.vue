<template>
  <v-app dark>
    <!-- <v-app-bar app color="black" dark> -->
    <v-main>
      <AllYears />
    </v-main>
    <!-- </v-app-bar> -->
  </v-app>
</template>

<script>
// import NetworkGraph from "./components/NetworkGraph";
import AllYears from "./components/AllYears.vue";
import NetworkGraph from './components/NetworkGraph.vue';
export default {
  name: "App",

  components: {
    // NetworkGraph,
    AllYears,
    NetworkGraph,
  },

  data: () => ({}),
};
</script>

<style>
v-app {
  background-color: #fff7ae;
}
</style>
