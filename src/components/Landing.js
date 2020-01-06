import React from 'react';
import '../assets/css/landing.css'
import SearchBar from './SearchBar'

class Landing extends React.Component {
    render() {
        return (
            <div className="main">
                <div>
                    <h1 className="header">STOCKINGS</h1>
                    <h3 className="header-little">Free stock royalty-free HD images</h3>
                    <SearchBar />
                </div>
            </div>
        )
    }
}

export default Landing;