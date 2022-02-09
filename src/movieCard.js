
import React from "react";

export default function MovieCard ({movie}) {
   

    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt="{movie.title + `poster`}" className="card--image"/>
            <div className="card--content">
                <h3 className="card--title">
                    {movie.title}
                </h3>
                <p>
                    <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                    <small>RATING: {movie.vote_average} out of 10</small>
                </p>
                <p className="card--desc">
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}

 