<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        film: Object
    }
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
        <div>
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