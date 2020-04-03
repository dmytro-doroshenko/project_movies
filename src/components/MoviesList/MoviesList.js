import React, {useEffect, useState} from "react";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.scss';

const CN = 'movies_list';

function MoviesList(props) {


    const [store, setStore] = useState('');

    const url = 'https://api.themoviedb.org/3/discover/movie';
    const header = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1ZDJjNjY5MDJmYzZlYTBmODI0MDlkYjZhNmM2YyIsInN1YiI6IjVlODQ4MjUxZTM4YmQ4MDAxMWFiODNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vkMPTJhClcMrTyrqz1_OcT1XZqRUOUhznmF9Ai2cCLw'};



    useEffect(() => {
        fetch(url, {headers: header})
            .then(response => response.json())
            .then(result => setStore(result))

    }, [])

    console.log(store.results);
    return (
        <div className={`${CN}`}>

            {
                store
                    ? store.results.map(item => <MoviesListCard movieInfo={item} key={item.id}/>)
                    : 'Loading...'
            }
        </div>

    );
}

export default MoviesList;