<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

// IMPORTO APP_MOVIE_CARD
import AppMovieCard from './AppMovieCard.vue';

// IMPORTO APP_SERIE_CARD
import AppSerieCard from './AppSerieCard.vue';

// IMPORTO APP_LOADER
import AppLoader from './AppLoader.vue';

export default {
    components: {
        // DICHIARO APP_MOVIE_CARD
        AppMovieCard,

        // DICHIARO APP_SERIE_CARD
        AppSerieCard,

        // DICHIARO APP_LOADER
        AppLoader
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
        <!-- Movies & Series Container -->
        <div class="container" v-if="store.wrongSearch === false && store.loading === false">
            <!-- Movies Row -->
            <div class="row">
                <!-- Main Title Movie Col -->
                <div class="col-12 main-title-col">
                    <h2 class="fs-1 fw-bold">FILM</h2>
                </div>
                <!-- App Movie Card Col -->
                <div class="col-3 my-3" v-for="(film, index) in store.moviesList" :key="index">
                    <AppMovieCard :film="film" :imageUri="store.imageUri"/>
                </div>
            </div>
            <!-- Series Row -->
            <div class="row">.
                <!-- Main Title Serie Col -->
                <div class="col-12 main-title-col">
                    <h2 class="fs-1 fw-bold">SERIE TV</h2>
                </div>
                <!-- App Serie Card Col -->
                <div class="col-3 my-3" v-for="(serie, index) in store.seriesList" :key="index">
                    <AppSerieCard :serie="serie" :imageUri="store.imageUri"/>
                </div>
            </div>
        </div>
        <!-- Error Container -->
        <div class="container" v-else-if="store.loading === false">
            <!-- Error Row -->
            <div class="row error-row">
                <!-- Error Col -->
                <div class="col-12">
                    <h2 class="fs-1 fw-bold">Nessun elemento trovato</h2>
                </div>
            </div>
        </div>
        <!-- Loader -->
        <AppLoader v-else/>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

.main-title-col {
    padding: 60px 0;
}

.error-row {
    padding: 50px 0;

    .col-12 {
        text-align: center;
    }
}
</style>