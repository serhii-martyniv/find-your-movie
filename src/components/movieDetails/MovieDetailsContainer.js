import MovieDetails from "."
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React from "react";

export const MovieDetailsContainer = (props) => {
    let params = useParams();
    const movie = useSelector(state => state.movies.movieList.find(movie => movie.id == params['id']))
    return <MovieDetails movie={movie} logo={props.logo}/>
}

