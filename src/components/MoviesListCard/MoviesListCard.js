//poster, title, genre(badge), rating(stars), movie info
import React from 'react';
import './MoviesListCard.scss';
import PosterPreview from "../PosterPreview/PosterPreview";
import Stars from "../Stars/Stars";
import GenreBadges from "../GenreBadges/GenreBadges";

const CN = 'movies_list_card';

function MoviesListCard({movieInfo}) {

    const {title, poster_path, genre_ids, vote_average, overview} = movieInfo;

    return (
        <div className={`col-3 col-xl-4 col-lg-6 col-sm-12 p-2`}>
            <div className={`${CN} text-center`}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <div className='p-2'>
                    <h2 className='py-2'>{title}</h2>
                    <GenreBadges genre_ids={genre_ids}/>
                    <Stars rating={vote_average/2} />
                    <div className='text_justify'>{overview}</div>
                </div>
            </div>
        </div>
    );
}

export default MoviesListCard;