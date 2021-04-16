import React from 'react';
import { Link } from "react-router-dom";
import './logo.scss';

const Logo = () => {
    return (
        <Link exact to="/" className="logo">
            <strong>netflix</strong>
            <span>roulette</span>
        </Link>
    )
}

export default Logo