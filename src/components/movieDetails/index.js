import React, {useState} from "react";
import "./index.scss"
// import img from "../../movie_1.jpg";
// This hook from previous task and now its not used.
import {useChangeDisplay} from "../hooks/changeDisplayHook"
import {
    Link
} from "react-router-dom";

export default (props) => {
    const [description] = useState('test description')
    const [rating] = useState('5.0')

    return(
        <div className="movieDetails container">
            <div className='headerMovieDetail'>
                {props.logo}
                <Link to="/">Search </Link>
            </div>
            <div className="row">
                {/* <img src={img} /> */}
                <div className="description">
                    <div className="titleMovie row">
                        <h1>{props.movie.title}</h1>
                        <h1>{rating}</h1>
                    </div>
                    <p>Oscar winning movie</p>
                    <div className="row">
                        <div>{props.movie.year}</div>
                        <div>{props.movie.runtime}</div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
