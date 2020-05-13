//poster, title, genre(badge), rating(stars), movie info
import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";
import Stars from "../Stars/Stars";
import GenreBadges from "../GenreBadges/GenreBadges";
import {NavLink} from "react-router-dom";

import './MoviesListCard.scss';

const CN = 'movies_list_card';

function MoviesListCard({movieInfo}) {
    const {id, title, poster_path, genre_ids, vote_average, overview, release_date} = movieInfo;
    const release_year = release_date.substr(0,4)

    return (
        <NavLink to={`/movieInfo/${id}`} className={`col-3 col-xl-4 col-lg-6 col-sm-12 p-1 text-decoration-none`}>
            <div className={`${CN} text-center`}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <div className=''>
                    <h2 className='py-2'>{title}</h2>
                    <h4>{release_year}</h4>
                    <Stars rating={vote_average/2} />
                    <GenreBadges genre_ids={genre_ids}/>
                    {/*<div className='text_justify'>{overview}</div>*/}
                </div>
            </div>
        </NavLink>
    );
}

export default MoviesListCard;
