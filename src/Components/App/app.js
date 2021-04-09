import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './app.scss';
import { fetchMovies } from '../../api';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Header from '../Header';
import Footer from '../Footer';
import MovieList from '../MovieList';
import Navigation from '../Navigation';
import CounterMovies from '../CounterMovies';
import ErrorBoundary from '../ErrorBoundary';
import MovieDetail from '../MovieDetail';
import CustomModal from '../CustomModal';

const App = () => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const movies = useSelector(state => state.movies)
    const filter = useSelector(state => state.currentFilter)
    const sortItem = useSelector(state => state.currentSort)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies(filter, sortItem));
    }, [filter, sortItem]);

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/*'>
                        {
                            !currentMovie ?
                                <Header /> :
                                <MovieDetail currentMovie={currentMovie} />
                        }
                        <div className='main'>
                            <Navigation />
                            <CounterMovies />
                            <CustomModal />
                            <ErrorBoundary>
                                <MovieList movieList={movies} setMovie={setCurrentMovie} />                    
                            </ErrorBoundary>
                        </div>
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>
    )

}

export default App;