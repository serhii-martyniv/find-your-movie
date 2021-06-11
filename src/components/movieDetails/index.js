import React, {useState} from "react";
import "./index.scss"
// import img from "../../movie_1.jpg";
// This hook from previous task and now its not used.
import {useChangeDisplay} from "../hooks/changeDisplayHook"
import {
    Link
} from "react-router-dom";

export default (props) => {

    return(
        <div className="movieDetails container">
            {props.movie && <div>
                <div className='headerMovieDetail'>
                    {props.logo}
                    <Link to="/find-your-movie/">Search </Link>
                </div>
                <div className="row">
                    <img src={props.movie.image} alt={props.movie.alt}/>
                    <div className="description">
                        <div className="titleMovie row">
                            <h1>{props.movie.title}</h1>
                            <h1>{props.movie.overview}</h1>
                        </div>
                        <p>Oscar winning movie</p>
                        <div className="row">
                            <div>{props.movie.year}</div>
                            <div>{props.movie.runtime}</div>
                        </div>
                        <p>{props.movie.description}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
