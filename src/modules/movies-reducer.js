const ADD_MOVIE = "ADD-MOVIE";
const UPDATE_MOVIE = "UPDATE-MOVIE";
const DELETE_MOVIE = "DELETE-MOVIE";
const SET_SORT = "SET-SORT";
const SET_FILTER = "SET-FILTER";
const SET_ACTIVE_MOVIE_ID = "SET-ACTIVE-MOVIE-ID";
const FETCH_MOVIES = "FETCH-MOVIES";
const GET_MOVIE = "GET_MOVIE";
let initialState = {
    activeMovieId: '',
    categories: [
        'all', 'comedy', 'crime', 'drama'
    ],
    movieList: [],
    sort: 'year',
    filter: 'all',
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
            };
        case GET_MOVIE:
            return {
                ...state,
            };
        case ADD_MOVIE:
            let newMovie = {
                id: state.movieList.length + 1,
                title: action.newMovie.title,
                year: action.newMovie.year,
                genre: action.newMovie.genre,
                overview: action.newMovie.overview,
                runtime: action.newMovie.runtime,
            };
            return {
                ...state,
                movieList: [...state.movieList, newMovie]
            }
        case UPDATE_MOVIE:
            let updatedMovielist = state.movieList.map((movie) => {
                if (movie.id === state.activeMovieId) {
                    return {
                        id: movie.id,
                        image: movie.image,
                        alt: movie.alt,
                        title: action.updatedMovie.title,
                        year: action.updatedMovie.year,
                        genre: action.updatedMovie.genre,
                        overview: action.updatedMovie.overview,
                        url: action.updatedMovie.url,
                        runtime: action.updatedMovie.runtime,
                    }
                }
                else {
                    return movie
                }
            })
            return {
                ...state,
                movieList: updatedMovielist
            }
        case DELETE_MOVIE:
            let updatedMovieList = state.movieList.filter((movie) => movie.id !== state.activeMovieId);

            return {
                ...state,
                movieList: updatedMovieList
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.sort
            }
        case SET_ACTIVE_MOVIE_ID:
            return {
                ...state,
                activeMovieId: action.movieId
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }

}

export const updateSort = (sortName) => ({ type: SET_SORT, sort: sortName });
export const updateMovieIdActionCreator = (movieId) => ({ type: SET_ACTIVE_MOVIE_ID, movieId: movieId });
export const fetchMovies = () => ({
    type: FETCH_MOVIES,
});
export const updateFilter = (filterName) => ({ type: SET_FILTER, filter: filterName });
export const updateMovieActionCreator = (updatedMovie) => ({ type: UPDATE_MOVIE, updatedMovie });
export const addMovieActionCreator = (newMovie) => ({ type: ADD_MOVIE, newMovie: newMovie });
export const getMovieActionCreator = (movieId) => ({type: GET_MOVIE, movieId})
export const deleteMovieActionCreator = (movieId) => ({ type: DELETE_MOVIE, movieId });

export default moviesReducer