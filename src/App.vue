<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO AXIOS
import axios from 'axios';

// IMPORTO STORE.JS
import { store } from './store.js';

// IMPORTO APP_HEADER
import AppHeader from './components/AppHeader.vue';

// IMPORTO APP_MAIN
import AppMain from './components/AppMain.vue';

export default {
  components: {
    // DICHIARO APP_HEADER
    AppHeader,

    // DICHIARO APP_MAIN
    AppMain
  },
  data() {
    return {
      // DICHIARO STORE.JS
      store
    }
  },
  methods: {
    getList() {
      // CONTROLLO CHE L'UTENTE ABBIA INSERITO UNA STRINGA NELLA SEARCH-BAR
      if (store.userSearch !== '') {

        // CHIAMATA API MOVIES

        // RESETTO L'ARRAY MOVIES_LIST
        store.moviesList = [];

        // CREO L'URL PER LA CHIAMATA API FILM CON IL FILTRAGGIO RICHIESTO DALL'UTENTE
        const moviesUrl = `${store.moviesApiUri}?api_key=${store.apiKey}&query=${store.userSearch}`;

        // EFFETTUO LA CHIAMATA API PER OTTENERE I FILM RICERCATI DALL'UTENTE
        axios.get(moviesUrl).then((result) => {

          // INSERISCO DENTRO L'ARRAY MOVIES_LIST GLI OGGETTI OTTENUTI DALLA CHIAMATA API
          store.moviesList = result.data.results;
        })

        // CHIAMATA API SERIES


        // RESETTO L'ARRAY SERIES_LIST
        store.seriesList = [];

        // CREO L'URL PER LA CHIAMATA API SERIE TV CON IL FILTRAGGIO RICHIESTO DALL'UTENTE
        const seriesUrl = `${store.seriesApiUri}?api_key=${store.apiKey}&query=${store.userSearch}`;

        // EFFETTUO LA CHIAMATA API PER OTTENERE LE SERIE TV RICERCATE DALL'UTENTE
        axios.get(seriesUrl).then((result) => {

          // INSERISCO DENTRO L'ARRAY SERIES_LIST GLI OGGETTI OTTENUTI DALLA CHIAMATA API
          store.seriesList = result.data.results;
        })
      }
    }
  }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
  <AppHeader @search="getList"/>
  <AppMain/>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use './styles/generals.scss' as *;
</style>