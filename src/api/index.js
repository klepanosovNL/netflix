import { moviesLoaded, addNewMovie, closeModal, deleteMovie, updateMovie } from '../Components/actions'

export function fetchMovies(filters = [], sortItem='') {
    return dispatch => {
        const getResource = async (url) => {
            const res = await fetch(url);
            const body = await res.json();
            const movies = body.data;
            
            return movies;
        }
    
        const filter = filters[0] ? `filter=${filters[0]}`: ''
        const sortParam = sortItem ? `sortBy=${sortItem}&sortOrder="desc"`: ''
        const queryPararms = [filter, sortParam].filter(element => {
            if (element) {
                return element 
            }
        }).join('&')

        getResource(`http://localhost:4000/movies?${queryPararms}`)
            .then((movies) => { dispatch(moviesLoaded(movies)) })
    }
}

export function addMovie(movie) {
    return (dispatch, getState) => {
        const addResource = async (url) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', accept: 'application/json' },
                body: JSON.stringify(movie)
            });
            const movie = await res.json();            
            return movie;
        }
    
        addResource('http://localhost:4000/movies')
            .then((movie) => { 
                const movies = getState().movies;
                movies.push(movie)
                dispatch(addNewMovie(movies)) 
            })
        dispatch(closeModal())
    }
}


export function editMovie(data) {
    return (dispatch, getState) => {
        const addResource = async (url) => {
            const res = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', accept: 'application/json' },
                body: JSON.stringify(data)
            });
            const movie = await res.json();
            return movie;
        }
    
        addResource('http://localhost:4000/movies')
            .then((movie) => {
                const movies = getState().movies;
                for (let i = 0; i < movies.length; i++) {
                    const mv = movies[i];
                    if (mv.id === movie.id) {
                        movies[i] = movie;
                        break;
                    }
                }
                dispatch(updateMovie(movies))
            })
        dispatch(closeModal())
    }
}

export function deleteMovieById(id) {
    return (dispatch, getState) => {
        const addResource = async (url) => {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', accept: 'application/json' },
                body: JSON.stringify({id})
            });
        }
    
        addResource(`http://localhost:4000/movies/${id}`)
            .then(() => { 
                const movies = getState().movies.filter(movie => {
                    return movie.id !== id;
                });
                dispatch(deleteMovie(movies))
                dispatch(closeModal()); 
            })
    }
}