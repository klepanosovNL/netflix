import React, { useState, useEffect } from 'react';
import './app.scss';

import Header from '../Header';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import CounterMovies from '../CounterMovies';
import ErrorBoundary from '../ErrorBoundary';
import MovieDetail from '../MovieDetail';
import { fakeFetch } from '../../utils/fakeFetch';
import { moviesList } from '../../constants'

const App = () => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fakeFetch(moviesList).then((data) => { setMovies(data) })
    }, []);


    return (
        <>
            {
                !currentMovie ?
                    <Header /> :
                    <MovieDetail currentMovie={currentMovie} />
            }
            <div className='main'>
                <Navigation />
                <CounterMovies />
                <ErrorBoundary>
                    <MovieList movieList={movies} setMovie={setCurrentMovie} />
                </ErrorBoundary>
            </div>
            <Footer />
        </>
    )

}

export default App;