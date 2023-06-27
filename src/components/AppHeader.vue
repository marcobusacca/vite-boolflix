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
                <div class="col-6">
                    <!-- Header Title Content -->
                    <div class="header-title-content">
                        <h1 class="f-bebas-neue">BOOLFLIX</h1>
                    </div>
                </div>
                <!-- Search Bar Col -->
                <div class="col-6 search-bar-col">
                    <!-- Search Bar Content -->
                    <div class="search-bar-content">
                        <!-- Search Bar Input -->
                        <input type="text" name="film-search" id="film-search" placeholder="Cerca un film o una serie tv" v-model="store.userSearch" @keyup.enter="$emit('search')">
                        <!-- Search Bar Button -->
                        <button class="btn btn-danger" @click="$emit('search')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;

header {
    height: 150px;
    padding: 20px;
    background-color: black;

    .row {
        align-items: center;

        h1 {
            color: red;
            font-size: 80px;
        }

        .search-bar-content {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 100%;

            input {
                width: 55%;
                height: 35px;
                padding: 0 10px;
                border-color: black;
            }

            button {
                height: 35px;
                background-color: #e71429;
                border-color: black;
                border-radius: 0;
            }
        }
    }
}
</style>