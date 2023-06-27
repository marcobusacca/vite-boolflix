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
                    this.film.original_language = 'gb';
                    this.flag = true;
                    break;
            }
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="card" style="width: 18rem;">
        <!-- Poster -->
        <img class="card-img-top" :src="`${imageUri}${serie.poster_path}`" :alt="serie.name">
        <div class="card-body">
            <!-- Titolo -->
            <div>
                <strong> Titolo: </strong>
                <span>{{serie.name}}</span>
            </div>
            <!-- Titolo Originale -->
            <div>
                <strong> Titolo Originale: </strong>
                <span>{{serie.original_name}}</span>
            </div>
            <!-- Lingua Flag -->
            <div v-if="flag">
                <strong> Lingua: </strong>
                <span :class="`fi fi-${serie.original_language}`"></span>
            </div>
            <!-- Lingua String -->
            <div v-else>
                <strong> Lingua: </strong>
                <span>{{serie.original_language}}</span>
            </div>
            <!-- Voto -->
            <div>
                <strong> Voto: </strong>
                <span>{{serie.vote_average}}</span>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>