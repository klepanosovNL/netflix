import React, { useEffect, useState } from 'react';
import MovieSettings from '../MovieSettings';

import './movieList.scss';

const MovieList = ({ movieList, setMovie }) => {
    const listItems = movieList.map((item) => {
        return (
            <div className="movie" key={item.name.toString()} onClick={() => setMovie(item)}>
                <MovieSettings />
                <span className="movie__name">{item.name}</span>
                <span className="movie__year">{item.year}</span>
                <div className="movie__describe">{item.describe}</div>
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