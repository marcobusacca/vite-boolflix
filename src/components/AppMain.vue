<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

// IMPORTO APP_CARD
import AppCard from './AppCard.vue';

export default {
    components: {
        // DICHIARO APP_CARD
        AppCard
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
        <div class="container">
            <div class="row">
                <div class="col-12" v-for="(film, index) in store.moviesList" :key="index">
                    <AppCard :film="film"/>
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