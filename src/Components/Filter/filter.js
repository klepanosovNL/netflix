import React from 'react';
import {useDispatch} from 'react-redux';
import './filter.scss';
import { Link } from "react-router-dom";
import { setFilter } from '../actions';


const Filter = () => {
    const dispatch = useDispatch();
    const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const listItems = filterItems.map((item) => 
        <Link to={`/${item}`} key={item.toString()} onClick={() => dispatch(setFilter(item.toString()))}>
            {item}
        </Link>
    );

    return (
        <div className="filter">
            {listItems}
        </div>

    )
}

export default Filter