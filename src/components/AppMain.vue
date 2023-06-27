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
                <div class="col-12 main-title-col">
                    <h2 class="fs-1 fw-bold">FILM</h2>
                </div>
                <div class="col-3 my-3" v-for="(film, index) in store.moviesList" :key="index">
                    <AppMovieCard :film="film" :imageUri="store.imageUri"/>
                </div>
            </div>
        </div>
        <!-- Series Container -->
        <div class="container">
            <!-- Series Row -->
            <div class="row">
                <div class="col-12 main-title-col">
                    <h2 class="fs-1 fw-bold">SERIE TV</h2>
                </div>
                <div class="col-3 my-3" v-for="(serie, index) in store.seriesList" :key="index">
                    <AppSerieCard :serie="serie" :imageUri="store.imageUri"/>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.main-title-col {
    padding: 60px 0;
}
</style>