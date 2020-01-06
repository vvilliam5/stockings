import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class SearchList extends React.Component {
    state = { images: [] }
    getImages = async (prop) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: prop
            }
        })
        this.setState({ images: response.data.results })
    }
    componentDidMount() {
        this.getImages(this.props.match.params.id)
    }
    componentDidUpdate() {
        this.getImages(this.props.match.params.id)
    }
    render() {
        return (
            <div>{console.log(this.state.images)}
                <SearchBar />
                <ImageList image={this.state.images} />
            </div>
        )
    }
}

export default SearchList;