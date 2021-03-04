import React from 'react';
import './navigation.scss';
import Filter from '../Filter';
import Sort from '../Sort';

const Navigation = () => {
    return (
        <div className="navigation">
            <Filter />
            <Sort />
        </div>
    )
}

export default Navigation