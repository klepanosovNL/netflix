import React, {useState, useEffect} from 'react';
import './app.scss';

import Header from '../Header';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import CounterMovies from '../CounterMovies';
import ErrorBoundary from '../ErrorBoundary';
import MovieDetail from '../MovieDetail';

const App = () => {
    const [visible, setVisible] = useState(false);

    const movies = [
        {
            name: 'Pulp Fiction',
            describe: 'Action & Adventure',
            year: '2004'
        },
        {
            name: 'Bohemian Rhapsody',
            describe: 'Drama, Biography, Music',
            year: '2003'
        },
        {
            name: 'Bill: Vol 2',
            describe: 'Oscar winning Movie',
            year: '1994'
        },
        {
            name: 'Avengers: War of Infinity',
            describe: 'Action & Adventure',
            year: '2004'
        }
    ];

    if (visible) {
        return (
            <>  
            <MovieDetail />
                <div className='main'>
                    <Navigation />
                    <CounterMovies />
                    <ErrorBoundary>
                        <MovieList setVisible={setVisible} movieList={movies}/>
                    </ErrorBoundary>
                </div>
                <Footer />
             </>
        )
    } else {
        return (
            <>  
                <Header />
                <div className='main'>
                    <Navigation />
                    <CounterMovies />
                    <ErrorBoundary>
                        <MovieList movieList={movies}/>
                    </ErrorBoundary>
                </div>
                <Footer />
            </>
        )
    }
}

export default App;