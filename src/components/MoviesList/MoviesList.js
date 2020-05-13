import React from "react";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

import './MoviesList.scss';
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";

const CN = 'movies_list';

function MoviesList({movies, loading}) {

    return (
        <div className={`${CN}`}>
            {loading && <LoadingSpinner />}
            {!!movies.length && movies.map(item => <MoviesListCard movieInfo={item} key={item.id}/>)
            }
        </div>

    );
}

export default MoviesList;
