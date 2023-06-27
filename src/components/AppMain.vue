<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

// IMPORTO APP_MOVIE_CARD
import AppMovieCard from './AppMovieCard.vue';

// IMPORTO APP_SERIE_CARD
import AppSerieCard from './AppSerieCard.vue';

export default {
    components: {
        // DICHIARO APP_MOVIE_CARD
        AppMovieCard,
        // DICHIARO APP_SERIE_CARD
        AppSerieCard
    },
    data() {
        return {
            // DICHIARO STORE.JS
            store
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <main>
        <!-- Movies Container -->
        <div class="container">
            <!-- Movies Row -->
            <div class="row">
                FILM
                <div class="col-12" v-for="(film, index) in store.moviesList" :key="index">
                    <AppMovieCard :film="film"/>
                </div>
            </div>
        </div>
        <!-- Series Container -->
        <div class="container">
            <!-- Series Row -->
            <div class="row">
                SERIE TV
                <div class="col-12" v-for="(serie, index) in store.seriesList" :key="index">
                    <AppSerieCard :serie="serie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>