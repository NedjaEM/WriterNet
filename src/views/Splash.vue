<template>
  <v-container fluid>
    <h1 style="color: #79597b" >
      Books written in Arabic by Women and translated to English
    </h1>
    <!-- <h3 style="color: #79597b">by Nadia El Mouldi</h3> -->
    <v-row>
      <v-col>
        <v-card
          class="mx-auto mt-10"
          max-width="400"
        >
          <v-img height="250" src="../../public/timeline_logo.jpg"></v-img>

          <v-btn to='/time'> Chronological View </v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto mt-10"
          max-width="400"
        >
          <v-img height="250" src="../../public/network_logo.jpg"></v-img>
          <v-btn to='/network'> Network View </v-btn>
        </v-card>
      </v-col>
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