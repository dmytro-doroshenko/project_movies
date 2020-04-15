import React from "react";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.scss';

const CN = 'movies_list';

function MoviesList({movies, loading}) {


    return (
        <div className={`${CN}`}>
            {loading && <div>Loading...</div>}
            {movies && movies.map(item => <MoviesListCard movieInfo={item} key={item.id}/>)
            }
        </div>

    );
}

export default MoviesList;
