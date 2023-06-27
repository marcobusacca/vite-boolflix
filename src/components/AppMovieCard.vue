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
        <div class="card-poster">
            <!-- Poster -->
            <img :src="`${imageUri}${film.poster_path}`" :alt="film.title">
        </div>
        <div class="card-details">
            <!-- Titolo -->
            <div>
                <strong> Titolo: </strong>
                <span>{{film.title}}</span>
            </div>
            <!-- Titolo Originale -->
            <div>
                <strong> Titolo Originale: </strong>
                <span>{{film.original_title}}</span>
            </div>
            <!-- Lingua Flag -->
            <div v-if="flag" class="card-flag">
                <span :class="`fi fi-${film.original_language}`"></span>
            </div>
            <!-- Lingua String -->
            <div v-else>
                <strong> Lingua: </strong>
                <span>{{film.original_language}}</span>
            </div>
            <!-- Voto -->
            <div>
                <strong> Voto: </strong>
                <i :class="tranformVote > 0 ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                <i :class="tranformVote > 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                <i :class="tranformVote > 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                <i :class="tranformVote > 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                <i :class="tranformVote > 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>