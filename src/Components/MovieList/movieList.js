import React from 'react';
import './movieList.scss';

const MovieList = () => {
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
    const listItems = movies.map((item) => {
        return (
            <div className="movie" key={item.name.toString()}>
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