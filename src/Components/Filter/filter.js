import React from 'react';
import './filter.scss';

const Filter = () => {
    const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const listItems = filterItems.map((item) => 
        <a href={item} key={item.toString()}>
            {item}
        </a>);

    return (
        <div className="filter">
            {listItems}
        </div>
    )
}

export default Filter