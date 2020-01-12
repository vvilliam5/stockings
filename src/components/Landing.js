import React from 'react';
import '../assets/css/landing.css'
import LandingSearchBar from './LandingSearchBar';

class Landing extends React.Component {
    render() {
        return (
            <div className="main">
                <div>
                    <h1 className="header">STOCKINGS</h1>
                    <h3 className="header-little">The best free stock royalty-free HD images available on the internet</h3>
                    <LandingSearchBar />
                </div>
            </div>
        )
    }
}

export default Landing;