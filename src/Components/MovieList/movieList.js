import React from 'react';
import MovieSettings from '../MovieSettings';
import { Link } from "react-router-dom";

import './movieList.scss';

const MovieList = ({ movieList, setMovie }) => {
    const listItems = movieList.map((item) => {
        return (
            <Link to={`id:${item.id}`} className="movie" key={item.id.toString()} 
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
            </Link>
        )
    })

    return (
        <div className="movieList">
            {listItems}
        </div>
    )   
}

export default MovieList