import React from 'react';
import './PosterPreview.scss';

const CN = 'poster_preview';

function PosterPreview({poster_path, title}) {

    const poster_url = 'https://image.tmdb.org/t/p/w400';

    return (
        <img src={`${poster_url}${poster_path}`} alt={`${title}_poster`} className={`${CN}`}/>
    );
}

export default PosterPreview;
