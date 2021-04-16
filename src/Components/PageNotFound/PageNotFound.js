import React from 'react';
import './PageNotFound.scss';
import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

const PageNotFound = () => {
    return (
        <>
            <Header />
                <div className="main">
                    <Navigation />
                    <div className="error">
                        Page not found
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default PageNotFound