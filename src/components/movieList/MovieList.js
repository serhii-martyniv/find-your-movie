import React, { useCallback, useEffect, useMemo, useState } from "react";
import MovieItem from "./movieItem";
import MovieCount from "./movieCount";
import MovieBar from "./movieBar";
import "./index.scss";
import PropTypes from "prop-types";
import Modal from "../modals";
import EditFilmModal from "../modals/EditFilmModal"
import DeleteFilmModal from "../modals/DeleteFilmModal"
import { useChangeDisplay } from "../hooks/changeDisplayHook"
import NoMovieFound from "../erros/NoMoviesFound"
import MovieSort from "./MovieSort"
import {
    useParams,
} from "react-router-dom";

const MovieList = (props) => {
    let searchValue = useParams().search;
    const [editAction, setEditAction] = useState(false);
    const [deleteAction, setDeleteAction] = useState(false);
    const [movieActions, setMovieActions] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [movies, setMovies] = useState([]);

    const showMovieActions = (value, id) => {
        setMovieActions(!value);
        setActiveLink(id);
    }
    function showModalEdit(id) {
        onUpdateMovieId(id)
        setEditAction(true);
    }
    function showModalDelete(id) {
        onUpdateMovieId(id)
        setDeleteAction(true);
    }

    let onUpdateMovieId = (movieId) => {
        props.updateMovieId(movieId)
    }

    let onChangeSort = (e) => {
        props.changeSort(e.target.value);
    }

    let onChangeFilter = (e) => {
        props.changeFilter(e.target.name);
    }

    let onDeleteMovie = (deletedMovie) => {
        closeModal()
        props.deleteMovie(deletedMovie)
    }

    let onUpdateMovie = (updatedMovie) => {
        closeModal()
        props.updateMovie(updatedMovie)
    }

    let sort = props.sort;
    let filter = props.filter;
    
    useEffect(() => {
        setMovies(props.movies)
    }, [props.movies])

    const closeModal = useCallback(() => {
        setEditAction(false);
        setDeleteAction(false);
    }, [])

    // Movie list render
    let renderMovieList = useMemo(() => movies.filter((movie) => {
        if (searchValue) {
            if (movie.title.indexOf(searchValue) !== -1) {
                return movie
            }
        }
        else {
            return movie
        }
    }).filter((movie) => {
        if (filter === 'all') {
            return movie
        }
        else if (movie.genre === filter) {
            return movie
        }
    }).sort((a, b) => {
        if (sort === 'year') {
            return (
                a.year > b.year ? 1 : -1
            )
        }
        if (sort === 'title') {
            return (
                a.title > b.title ? 1 : -1
            )
        }
        if (sort === 'genre') {
            return (
                a.genre > b.genre ? 1 : -1
            )
        }
    }).map((movie) => {
        let movieActionClasses = movieActions && movie.id === activeLink ? "dots display-block" : "dots display-none";
        return (
            <MovieItem key={movie.id} movieItem={movie}
                showModalDelete={() => showModalDelete(movie.id)}
                showModalEdit={() => showModalEdit(movie.id)}
                showMovieActions={() =>
                    showMovieActions(movieActions, movie.id)}
                movieActionClasses={movieActionClasses}
                details={useChangeDisplay}
                refMovieDetails={props.refMovieDetails}
                refHeader={props.refHeader}
            />

        )
    }), [movies, movieActions, activeLink, sort, filter, searchValue]);

    // Render modal windows
    const renderModals = useMemo(() => {
        return (
            <>
                <Modal show={editAction} handleClose={closeModal}>
                    <EditFilmModal activeMovie={props.activeMovieId} onUpdateMovie={onUpdateMovie} />
                </Modal>
                <Modal show={deleteAction} handleClose={closeModal}>
                    <DeleteFilmModal activeMovie={props.activeMovieId} onDeleteMovie={onDeleteMovie} />
                </Modal>
            </>
        )
    }, [editAction, deleteAction, props.activeMovieId])

    // Top bar renderer
    let countText = '';
    let categories = '';
    if (renderMovieList.length < 1) {
        renderMovieList = <NoMovieFound />
    }
    else {
        let count = <strong>{renderMovieList.length}</strong>;
        countText = movies.length > 1 ? <>{count} <span>movies found</span></> : <>{count} <span>movie found</span></>
        let id = -1;
        categories = props.categories.map((category) => {
            id++;
            let classes = category === filter ? 'category-item active' : 'category-item'
            return (
                <a key={id} name={category} className={classes} onClick={onChangeFilter} href="#">{category}</a>
            )
        })
    }

    return (
        <div className="movieList container">
            {renderModals}
            <MovieBar>
                <div className="categoriesWrapper">{categories}</div>
                <MovieSort onChangeSort={onChangeSort}/>
            </MovieBar>
            <MovieCount count={countText} />
            <div className="movieListWrapper">{renderMovieList}</div>
        </div>
    )
}

MovieList.propTypes = {
    categories: PropTypes.array.isRequired,
    movies: PropTypes.array.isRequired,
}

export default MovieList
