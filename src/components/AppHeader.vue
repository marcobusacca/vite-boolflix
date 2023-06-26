<!-- JAVASCRIPT & VUE.JS -->
<script>
// IMPORTO STORE.JS
import { store } from '../store.js';

export default {
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
    <header>
        <div class="container">
            <div class="row">
                <!-- Head Title Col -->
                <div class="col"></div>
                <!-- Search Bar Col -->
                <div class="col">
                    <input type="text" name="film-search" id="film-search" placeholder="Cerca un film o una serie tv" v-model="store.userSearch" @keyup.enter="$emit('search')">
                    <button @click="$emit('search')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>