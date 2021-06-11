import React from "react";
import "./index.scss"

import {
    Link,
} from "react-router-dom";

export default (props) => {
    return(
        <div className="movieItem">
            <div className={props.movieActionClasses} onClick={props.showMovieActions}>
                <div onClick={props.showModalEdit}>Edit</div>
                <div onClick={props.showModalDelete}>Delete</div>
            </div>
            <Link to={
                {
                    pathname: `/find-your-movie/film/${props.movieItem.id}`,
                }
        }>
                 <img src={props.movieItem.image} />
            </Link>
           <div className="description">
               <div className="col">
                   <h4>{props.movieItem.title}</h4>
                   <p>{props.movieItem.genre}</p>
               </div>
               <div className="col">
                   <div className="year">{props.movieItem.year}</div>
               </div>
           </div>
        </div>
    )
}
