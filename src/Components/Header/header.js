import React from 'react';
import './header.scss';
import Search from '../Search';
import Logo from '../Logo';
import AddMovie from '../AddMovie';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <AddMovie />
            <Search />
        </div>
    )
}

export default Header