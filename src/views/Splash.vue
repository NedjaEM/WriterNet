<template>
  <v-container fluid>
    <h1 style="color: #79597b">
      Books written in Arabic by Women and translated to English
    </h1>
    <!-- <h3 style="color: #79597b">by Nadia El Mouldi</h3> -->
    <v-row>
      <v-col>
        <v-card class="mx-auto mt-10" max-width="250" color="#fdf6f0">
          <v-img height="150" src="../../public/timeline_logo.jpg"></v-img>

          <v-btn to="/time" color="#fdf6f0"> Chronological View </v-btn>
        </v-card>
        <v-card class="mx-auto mt-10" max-width="250" color="#fdf6f0">
          <v-img height="150" src="../../public/network_logo.jpg"></v-img>
          <v-btn to="/network" color="#fdf6f0"> Network View </v-btn>
        </v-card>
      </v-col>
      <v-col> text here </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
h1 {
  text-align: center;
}
</style>