import React from 'react';
import './sort.scss';

const Sort = () => {
    return (
        <div className="sort">
            <span>sort by</span>
            <select>
                <option value="DEFAULT">release date</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}

export default Sort