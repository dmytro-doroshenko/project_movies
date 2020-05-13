import React, {useEffect, useState} from 'react';
import './GenreBadges.scss';

const CN = 'genre_badge';

function GenreBadges({genre_ids, genresWithNames}) {

    const [genres, setGenres] = useState('');

    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    const header = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1ZDJjNjY5MDJmYzZlYTBmODI0MDlkYjZhNmM2YyIsInN1YiI6IjVlODQ4MjUxZTM4YmQ4MDAxMWFiODNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vkMPTJhClcMrTyrqz1_OcT1XZqRUOUhznmF9Ai2cCLw'};

    useEffect(() => {
        if (!genresWithNames) {
            fetch(url, {headers: header})
                .then(response => response.json())
                .then(result => setGenres(result.genres))
        }
    }, []);

    const getGenreName = (genreId) => {
        let genre = genres.find(element => element.id === genreId);
        return genre.name;
    };

    return (
        <div>
            {
            genresWithNames && genresWithNames.map(genre => <div key={genre.id} className={`${CN}`}>{genre.name}</div>)
        }
        {
            genres && genre_ids && genre_ids.map(item => <div key={item} className={`${CN}`}>{getGenreName(item)}</div>)
        }
        </div>
    );
}

export default GenreBadges;
