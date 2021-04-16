import React, { useEffect } from 'react';
import Logo from '../Logo';
import './movieDetail.scss';

const MovieDetail = ({ currentMovie }) => {
    return (
        <>
            <div className='movie__detail'>
                <Logo />
                <a className="backToSearch" href="#"></a>
                <img src={currentMovie.poster_path} className="movie__image"></img>
                <div className='movie__section-description'>
                    <div className='movie__title'>
                        <span className='movie__name'>{currentMovie.title}</span>
                        <span className='movie__rating'>{currentMovie.vote_average}</span>
                    </div>
                    <div className='movie__subtitle'>{currentMovie.tagline}</div>
                    <div className='movie__info'>
                        <span>{currentMovie.release_date}</span>
                        <span>{currentMovie.runtime} min</span>
                    </div>
                    <div className='movie__description'>{currentMovie.overview}</div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail