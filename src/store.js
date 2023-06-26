
// IMPORTO REACTIVE DA VUE
import { reactive } from "vue";

// ESPORTO LA CONSTANTE STORE CONTENENTE TUTTI GLI ELEMENTI ACCESSIBILI AD OGNI COMPONENTE VUE
export const store = reactive({
    apiKey: '31cb166d3bf37ee613d74902c213a580',
    moviesApiUri: 'https://api.themoviedb.org/3/search/movie',
    seriesApiUri: 'https://api.themoviedb.org/3/search/tv',
    imageUri: 'https://image.tmdb.org/t/p/w342',
    moviesList: [],
    seriesList: [],
    userSearch: '',
});