import MovieList from "./MovieList";
import {connect} from "react-redux";
import {updateSort, updateFilter, updateMovieActionCreator, addMovieActionCreator, deleteMovieActionCreator, updateMovieIdActionCreator} from "../../modules/movies-reducer"

const mapStateToProps = (state) => {
    return {
        movies:state.movies.movieList,
        categories: state.movies.categories,
        sort: state.movies.sort,
        filter: state.movies.filter,
        activeMovieId: state.movies.activeMovieId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSort: (sortName) => {
            dispatch(updateSort(sortName))
        },
        changeFilter: (filterName) => {
            dispatch(updateFilter(filterName))
        },
        updateMovie: (updatedMovie) => {
            dispatch(updateMovieActionCreator(updatedMovie))
        },
        addMovie: (newMovie) => {
            dispatch(addMovieActionCreator(newMovie))
        },
        deleteMovie: (movieId) => {
            dispatch(deleteMovieActionCreator(movieId))
        },
        updateMovieId: (movieId) => {
            dispatch(updateMovieIdActionCreator(movieId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)