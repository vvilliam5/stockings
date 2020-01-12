import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/searchBar.css';

class SearchBar extends React.Component {
    state = { input: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div class="ui inverted transparent massive icon input input-pad">
                            <input type="text" value={this.state.input} onChange={(e) => { this.setState({ input: e.target.value }) }} placeholder="Search..." style={{ color: 'ghostwhite' }} />
                            <i class="search icon"></i>
                        </div>
                        <Link to={`/search/${this.state.input}`}><button className="link-pad ui search-btn inverted button primary massive">Search</button></Link>
                    </div>
                </form>
            </div>

        )
    }
}
export default SearchBar;