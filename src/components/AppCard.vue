<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        film: Object
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
            }
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="card">
        <div>
            <strong> Titolo: </strong>
            <span>{{film.title}}</span>
        </div>
        <div>
            <strong> Titolo Originale: </strong>
            <span>{{film.original_title}}</span>
        </div>
        <div v-if="flag">
            <strong> Lingua: </strong>
            <span :class="`fi fi-${film.original_language}`"></span>
        </div>
        <div v-else>
            <strong> Lingua: </strong>
            <span>{{film.original_language}}</span>
        </div>
        <div>
            <strong> Voto: </strong>
            <span>{{film.vote_average}}</span>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss" scoped>
// IMPORTO VARIABLES.SCSS
@use '../styles/partials/variables' as *;
</style>