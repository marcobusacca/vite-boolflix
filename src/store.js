
// IMPORTO REACTIVE DA VUE
import { reactive } from "vue";

// ESPORTO LA CONSTANTE STORE CONTENENTE TUTTI GLI ELEMENTI ACCESSIBILI AD OGNI COMPONENTE VUE
export const store = reactive({
    ApiKey: '31cb166d3bf37ee613d74902c213a580',
    MoviesApiUri: 'https://api.themoviedb.org/3/search/movie',
    SeriesApiUri: 'https://api.themoviedb.org/3/search/tv',
    ImageUri: 'https://image.tmdb.org/t/p/w342',
    MoviesList: [],
    SeriesList: [],
    userSearch: '',
});