import React from 'react';
import './app.scss';

import Header from '../Header';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import CounterMovies from '../CounterMovies';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <Navigation />
                <CounterMovies />
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
            </div>
            <Footer />
        </>
    )
}

export default App;