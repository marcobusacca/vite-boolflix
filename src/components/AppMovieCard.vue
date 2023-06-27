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
    <div class="card" style="width: 18rem;">
        <!-- Poster -->
        <img class="card-img-top" :src="`${imageUri}${film.poster_path}`" :alt="film.title">
        <div class="card-body">
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
            <div v-if="flag">
                <strong> Lingua: </strong>
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
                <span>{{tranformVote}}</span>
                <i class="fa-solid fa-star" v-if="tranformVote > 0"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="tranformVote > 1"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="tranformVote > 2"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="tranformVote > 3"></i>
                <i class="fa-regular fa-star" v-else></i>
                <i class="fa-solid fa-star" v-if="tranformVote > 4"></i>
                <i class="fa-regular fa-star" v-else></i>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>