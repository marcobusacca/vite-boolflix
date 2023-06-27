<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        serie: Object
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
    <div class="card">
        Serie TV
        <div>
            <strong> Titolo: </strong>
            <span>{{serie.name}}</span>
        </div>
        <div>
            <strong> Titolo Originale: </strong>
            <span>{{serie.original_name}}</span>
        </div>
        <div v-if="flag">
            <strong> Lingua: </strong>
            <span :class="`fi fi-${serie.original_language}`"></span>
        </div>
        <div v-else>
            <strong> Lingua: </strong>
            <span>{{serie.original_language}}</span>
        </div>
        <div>
            <strong> Voto: </strong>
            <span>{{serie.vote_average}}</span>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>