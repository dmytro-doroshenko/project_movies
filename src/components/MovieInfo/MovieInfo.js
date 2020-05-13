import React, {useEffect} from 'react';
import {clearCurrentMovieInfo, getMovieInfo} from "../../actionCreators/movies.action";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PosterPreview from "../PosterPreview/PosterPreview";
import Stars from "../Stars/Stars";
import GenreBadges from "../GenreBadges/GenreBadges";

import './MovieInfo.scss';
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";

const CN = 'movie_info_page';

function MovieInfo(props) {
    const {match: {params: {movieID}}, getMovie, clearMovie, movie, loading} = props;
    const {title, original_title, genres, poster_path, vote_average, vote_count, release_date} = movie;

    useEffect(() => {
        getMovie(movieID);
        return () => {
            clearMovie()
        };
    }, [])

    const releaseDate = new Date(release_date);
    const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className='container'>
            {loading && <LoadingSpinner />}
            {!!Object.keys(movie).length &&
                <div className={`${CN}`}>

                    <h1 className={`${CN}__title`}>{title}</h1>
                    {title !== original_title
                        ? <h3 className={`${CN}__title`}>{original_title}</h3>
                        : ''
                    }
                    <div className='d-flex'>
                        <PosterPreview poster_path={poster_path} title={title}/>
                        <div className={`${CN}__details`}>
                            <Stars numberOfStars={10} rating={vote_average}/>
                            <div className='py-2'>{vote_average}/10 ({vote_count} votes)</div>
                            <div className='py-2'>
                                <b>Genres:</b>
                                <div className='d-inline-block'><GenreBadges genresWithNames={genres}/></div>
                            </div>
                            <div className='py-2'>
                                <b>Release date: </b>
                                {releaseDate.getDay()} {month_names_short[releaseDate.getMonth()]} {releaseDate.getFullYear()}
                            </div>
                            <div className='py-2'>
                                <b>Country: </b>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.moviesReducer.loading,
        isLoaded: state.moviesReducer.isLoaded,
        movie: state.moviesReducer.selectedMovie,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        getMovie: getMovieInfo,
        clearMovie: clearCurrentMovieInfo,
    }, dispatch)
};

export const MovieInfoWithRedux = connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
