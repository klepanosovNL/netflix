import React from 'react';
import { Button } from '@material-ui/core';
import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <h1>find your movie</h1>
            <input type="text" placeholder="What do you want to watch?"></input>
            <Button variant="outlined" color="secondary">search</Button>
        </div>
    )
}

export default Search