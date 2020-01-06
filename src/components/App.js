import React from 'react';
import unsplash from '../api/unsplash';
import { Router, Route } from 'react-router-dom';

import Landing from './Landing';
import SearchList from './SearchList';
import history from '../history';
import Modal from '../Modal';

class App extends React.Component {
    state = { image: [] }
    onSubmit = async (prop) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: prop
            }
        })
        this.setState({ image: response.data.results })
    }
    render() {
        return (
            <div className="ui container fluid">
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Landing} />
                        <Route path="/search/:id" component={SearchList} />
                        <Route path="/photo/:url" component={Modal} />
                    </div>
                </Router>
                {/* <SearchBar submit={this.onSubmit} />
                <ImageList image={this.state.image} /> */}
            </div>
        )
    }
}

export default App;
