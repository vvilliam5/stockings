import React from 'react';
import { Link } from 'react-router-dom';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 }
        this.elementRef = React.createRef()
    }
    componentDidMount() {
        this.elementRef.current.addEventListener('load', () => this.setState({ spans: Math.ceil(this.elementRef.current.clientHeight / 9) }))
    }
    render() {
        const { urls, description } = this.props.img;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <Link to={`/photo/${urls.regular.slice(28)}`}><img ref={this.elementRef} src={urls.thumb} alt={description}></img></Link>
            </div>
        )
    }
}

export default ImageCard;