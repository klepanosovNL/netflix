import React from 'react';
import {useDispatch} from 'react-redux';
import { setSort } from '../actions';
import './sort.scss';



const Sort = () => {
    const sorts = ['release_date', 'vote_average'];
    const dispatch = useDispatch();
    const options = sorts.map((item) => {
        return <option key={item.toString()}>{item}</option>
    })
    return (
        <div className="sort">
            <span>sort by</span>
            <select onChange={(e) => dispatch(setSort(e.target.value))}>
                {options}
            </select>
        </div>
    )
}

export default Sort