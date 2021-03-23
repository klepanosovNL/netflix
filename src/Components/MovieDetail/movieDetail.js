import React, { useEffect } from 'react';
import Logo from '../Logo';
import './movieDetail.scss';

const MovieDetail = ({ currentMovie }) => {
    return (
        <>
            <div className='movie__detail'>
                <Logo />
                <a className="backToSearch" href="#"></a>
                <div className="movie__image"></div>
                <div className='movie__section-description'>
                    <div className='movie__title'>
                        <span className='movie__name'>{currentMovie.name}</span>
                        <span className='movie__rating'>2.3</span>
                    </div>
                    <div className='movie__subtitle'>subtitle</div>
                    <div className='movie__info'>
                        <span>1994</span>
                        <span>124 min</span>
                    </div>
                    <div className='movie__description'>
                        some description..
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail