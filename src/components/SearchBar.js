import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    state = { input: 'Enter Search Here' };

    onFormSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.input} onChange={(e) => { this.setState({ input: e.target.value }) }}></input>
                        <Link to={`/search/${this.state.input}`}><button className="ui button primary">Search</button></Link>
                    </div>
                </form>
            </div>

        )
    }
}
export default SearchBar;