import React from 'react';
import MovieSettings from '../MovieSettings';

import './movieList.scss';

const MovieList = ({ movieList, setMovie }) => {
    const listItems = movieList.map((item) => {
        return (
            <div className="movie" key={item.title.toString()} 
                onClick={() => {
                    setMovie(item);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                }}
            >
                <MovieSettings movie={item} />
                <img src={item.poster_path}></img>
                <span className="movie__name">{item.title}</span>
                <span className="movie__year">{item.release_date}</span>
                <div className="movie__describe">{item.overview}</div>
            </div>
        )
    })

    return (
        <div className="movieList">
            {listItems}
        </div>
    )   
}

export default MovieList