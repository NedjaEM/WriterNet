<template>
  <v-container>
    <h1 style="color: #e99f4c" class="text-h4">
      A REPOSITORY OF BOOKS BY WOMEN FROM THE ARAB WORLD
    </h1>
    <h1 style="color: #e99f4c" class="text-h4">TRANSLATED TO ENGLISH</h1>
    <h2 style="color: #de5499" class="intro text-h6">Scroll to read more</h2>
    <div class="main text-body1">
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === null"
      >
        {{ currStep }}
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '1'"
      >
        <v-img
          width="450px"
          height="400px"
          src="../../public/collage1/collage1.png"
        ></v-img>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '2'"
      >
        <v-img
          width="450px"
          height="400px"
          src="../../public/collage1/collage1.png"
        ></v-img>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '3'"
      >
        <v-img
          width="500px"
          height="400px"
          src="../../public/collag2/collag2.png"
        ></v-img>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '4'"
      >
        <v-img
          width="500px"
          height="400px"
          src="../../public/collage3/3.png"
        ></v-img>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '5'"
      >
        “Now that Arabic literature is reaching a larger audience it’s being
        more and more “orientalized”—terrorism and the condition of women‘s
        lives, catering to the interests of the general public who’re not
        necessarily knowledgeable about the region in terms of daily life and
        social conditions and cannot understand the satire, humor, narrative
        experimentation, etc that writers in the region employ.”
      </v-card>

      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '7'"
      >
        <v-col>
          <v-row>
            <v-btn to="/time" color="#fdf6f0"> Chronological View </v-btn>
          </v-row>
          <v-row>
            <v-img width="500px" src="../../public/timeline_logo.jpg"></v-img>
          </v-row>
        </v-col>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '8'"
      >
        <v-col>
          <v-row>
            <v-btn to="/network" color="#fdf6f0"> Network View </v-btn>
          </v-row>
          <v-row style="max-height=100%">
            <v-img
              width="400px"
              height="400px"
              src="../../public/network_logo.jpg"
            ></v-img>
          </v-row>
        </v-col>
      </v-card>
      <v-card
        class="main__graphic"
        outlined
        color="transparent"
        v-if="currStep === '6'"
      >
        These ideas have led me to ask more questions and think of tools that
        might help answer these questions. And this is how this project was
        born:
      </v-card>
      <Scrollama
        :offset="0.5"
        @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
        class="main__scrollama"
      >
        <div class="step" data-step-no="1">
          After moving to the US, I noticed how infrequently books written in
          Arabic are translated into English, especially books written by women.
          I was surprised to discover that the books that I enjoyed were never
          translated into English and remain inaccessible to my friends and
          peers in the US. In fact, I have not found one single book that was
          written by a Tunisian woman that has been translated into English.
        </div>
        <div class="step" data-step-no="2">
          So.. I wanted to explore the reasons why this has happened and I
          started looking for data to help me uncover why Arabic books written
          by women are not widely translated.
        </div>
        <div class="step" data-step-no="3">
          I started by collecting information on every book that was written by
          a woman and translated from Arabic into English. So far, I have found
          181 books. It has been challenging to locate all of them as the
          information is scattered so I hope this project will be a centralized
          repository for these books and their stories.
        </div>
        <div class="step" data-step-no="4">
          My data collection and exploration, start from Amal Amireh’s
          well-articulated idea that Arab women’s novels are often presented “as
          sociological and anthropological texts that reflect the reality of
          Islam and the Arab world and “lift the veil” from what a reviewer
          called “unimaginable world of Arab women” (Amireh)
        </div>
        <div class="step" data-step-no="5">
          Alexa Firat emphasizes this idea.
        </div>
        <div class="step" data-step-no="6">
          a digital repository about women writers from the Arab world and their
          books that were translated into English. The repository can best be
          explored in two ways: a chronological experience and a relational
          experience.
        </div>
        <div class="step" data-step-no="7">
          The chronological experience allows for an exploration of the books
          translated as a factor of time, opening the way for a deep dive into
          how history, events in time might have affected the books and authors
          that were chosen for translation on a certain year. Click on the image
          to explore.
        </div>
        <div class="step" data-step-no="8">
          The relational experience allows for an exploration of each book as
          part of a whole ecosystem of translation that includes publishers,
          translators, authors and the books themselves. By centering the
          publisher, the network shows a holistic view of books published by a
          specific entity and allows to uncover more hidden relationships. Click
          on the image to explore.
        </div>
      </Scrollama>
    </div>
    <div class="step">
      It is important to note that these books are translated in different
      countries and not only the US. Although I initially wanted to focus on the
      US, the number of books was so little that I wanted to look at all the
      translated books.
    </div>
    <v-col style="max-height = 100%; margin-top: 5%;">
      <div style="font-size: 25px; color: #e99f4c; text-align: center; margin-bottom:5%">
        Where were they published
      </div>
      <v-row>
        <v-col
          style="
            max-width: 15%;
            font-size: 15px;
            color: #e99f4c;
            font-weight: bold;
          "
        >
          US
        </v-col>
        <v-col>
          <v-row>
            <template v-for="(n, i) in titles">
              <template v-if="n.Place.includes('US')">
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
            </template>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style="
            max-width: 15%;
            color: #e99f4c;
            font-size: 15px;
            font-weight: bold;
          "
        >
          UK
        </v-col>
        <v-col>
          <v-row>
            <template v-for="(n, i) in titles">
              <template v-if="n.Place.includes('UK')">
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
            </template>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style="
            max-width: 15%;
            color: #e99f4c;
            font-size: 15px;
            font-weight: bold;
          "
        >
          Egypt
        </v-col>
        <v-col>
          <v-row>
            <template v-for="(n, i) in titles">
              <template v-if="n.Place.includes('Egypt')">
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
            </template>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style="
            max-width: 15%;
            color: #e99f4c;
            font-size: 15px;
            font-weight: bold;
          "
        >
          Canada
        </v-col>
        <v-col>
          <v-row>
            <template v-for="(n, i) in titles">
              <template v-if="n.Place.includes('Egypt')">
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
            </template>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          style="
            max-width: 15%;
            color: #e99f4c;
            font-size: 15px;
            font-weight: bold;
          "
        >
          Qatar
        </v-col>
        <v-col>
          <v-row>
            <template v-for="(n, i) in titles">
              <template v-if="n.Place.includes('Qatar')">
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
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <div class="outro">
      <v-container class="mx-0 px-0" fluid>
        <v-row class="ma-0 pa-0">
          <v-col class="mr-10">
            <v-btn to="/network" width="100%" color="#e99f4c"
              >Network View
            </v-btn>
            <v-img
              height="200px"
              width="200px"
              class="mx-auto"
              src="../../public/outro/network_logo.jpg"
            >
            </v-img>
          </v-col>

          <v-col class="mr-10">
            <v-btn to="/time" width="100%" color="#e99f4c"
              >Chronological View
            </v-btn>
            <v-img
              height="200px"
              width="200px"
              class="mx-auto"
              src="../../public/outro/timeline_logo.jpg"
            >
            </v-img>
          </v-col>
          <v-col class="mr-10"
            ><v-btn to="/sources" width="100%" color="#e99f4c">
              Sources and Inspirations
            </v-btn>
            <v-img
              height="200px"
              width="200px"
              class="mx-auto"
              src="../../public/outro/4.png"
            >
            </v-img>
          </v-col>
          <v-col class="mr-10"
            ><v-btn to="/resources" width="100%" color="#e99f4c">
              Resources and articles</v-btn
            >
            <v-img
              height="200px"
              width="200px"
              class="mx-auto"
              src="../../public/outro/5.png"
            >
            </v-img
          ></v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import titles from "../../public/titles_new.csv";
import * as d3 from "d3";

export default {
  name: "App",
  components: {
    Scrollama,
  },
  data() {
    return {
      currStep: null,
      titles,
    };
  },
  mounted() {
    console.log(this.currStep);
  },
  async created() {
    this.titles = await d3.csv(titles);
  },
};
</script>

<style lang="scss">
h1 {
  margin-top: 2%;
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.intro {
  padding: 30vh;
  text-align: center;
  font-size: 1.6rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e99f4c !important;
}

.outro {
  padding: 30vh;
  text-align: center;
  font-size: 1.6rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e99f4c !important;
}

// additions and overrides of DOM elements vue-scrollama sets up
.main {
  display: flex;

  .main__graphic {
    flex: 1;
    height: 80vh;
    top: 10vh;
    position: sticky;
  }
  .main__scrollama {
    flex: 1;
  }
}

// your elements styles
.main__graphic {
  height: 100%;
  margin: 0 3rem;
  border: 1px solid #ccc;
  background-color: #eee;
  font-size: 1.6rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #264143;
  font-size: 1.5rem;
  padding: 20vh 0;
  margin: 0 3rem;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
