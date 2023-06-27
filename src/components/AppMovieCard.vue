<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        film: Object,
        imageUri: String
    },
    data() {
        return {
            flag: false,
        }
    },
    created() {
        this.getFlagList();
    },
    methods: {
        getFlagList() {
            switch (this.film.original_language) {
                case 'it':
                    this.flag = true;
                    break;
                case 'fr':
                    this.flag = true;
                    break;
                case 'de':
                    this.flag = true;
                    break;
                case 'es':
                    this.flag = true;
                    break;
                case 'en':
                    this.film.original_language = 'gb';
                    this.flag = true;
                    break;
            }
        }
    },
    computed: {
        tranformVote() {
            return Math.ceil(this.film.vote_average / 2);
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="app-card">
        <div class="card-poster" :style="film.poster_path === null ? 'display: none' : ''">
            <!-- Poster -->
            <img :src="`${imageUri}${film.poster_path}`" :alt="film.title">
        </div>
        <div class="card-details" :style="film.poster_path === null ? 'display: block' : ''">
            <!-- Titolo -->
            <div>
                <strong>{{film.title}}</strong>
            </div>
            <!-- Titolo Originale -->
            <div v-if="film.title !== film.original_title">
                <strong>{{film.original_title}}</strong>
            </div>
            <!-- Lingua Flag -->
            <div class="card-language" v-if="flag">
                <span :class="`fi fi-${film.original_language}`"></span>
            </div>
            <!-- Lingua String -->
            <div class="card-language" v-else>
                <strong> Lingua: </strong>
                <span>{{film.original_language}}</span>
            </div>
            <!-- Voto -->
            <div class="class-star">
                <i :class="tranformVote > 0 ? 'fa-solid fa-star fa-xl fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 1 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 2 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 3 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 4 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
            </div>
            <!-- Trama -->
            <div class="card-overview" v-if="film.overview !== ''">
                <div>
                    <strong> Trama </strong>
                </div>
                <p>{{film.overview}}</p>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>