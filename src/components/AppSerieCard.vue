<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        serie: Object,
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
            switch (this.serie.original_language) {
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
                    this.serie.original_language = 'gb';
                    this.flag = true;
                    break;
            }
        }
    },
    computed: {
        tranformVote() {
            return Math.ceil(this.serie.vote_average / 2);
        }
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="app-card">
        <div class="card-poster" :style="serie.poster_path === null ? 'display: none' : ''">
            <!-- Poster -->
            <img :src="`${imageUri}${serie.poster_path}`" :alt="serie.name">
        </div>
        <div class="card-details" :style="serie.poster_path === null ? 'display: block' : ''">
            <!-- Titolo -->
            <div>
                <span>{{serie.name}}</span>
            </div>
            <!-- Titolo Originale -->
            <div v-if="serie.name !== serie.original_name">
                <span>{{serie.original_name}}</span>
            </div>
            <!-- Lingua Flag -->
            <div class="card-language" v-if="flag">
                <span :class="`fi fi-${serie.original_language}`"></span>
            </div>
            <!-- Lingua String -->
            <div class="card-language" v-else>
                <strong> Lingua: </strong>
                <span>{{serie.original_language}}</span>
            </div>
            <!-- Voto -->
            <div class="class-star">
                <i :class="tranformVote > 0 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 1 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 2 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 3 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
                <i :class="tranformVote > 4 ? 'fa-solid fa-star fa-xl' : 'fa-regular fa-star fa-xl'"></i>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>