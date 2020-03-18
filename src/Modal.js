import React from 'react'
import ReactDOM from 'react-dom'
import unsplash from '../src/api/unsplash';

class Modal extends React.Component {
    state = { imgLink: [] }
    getDownloadLink = async (props) => {
        const response = await unsplash.get(`/photos/FMbWFDiVRPs/download`)
        this.setState({ imgLink: response })
    }
    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active">{console.log(this.props)}
                <div className="ui standard modal visible active">
                    <img style={{ width: 'inherit' }} src={`https://images.unsplash.com/${this.props.match.params.url}`}></img>
                    <a href={`https://images.unsplash.com/${this.props.match.params.url}`}><button onClick={this.getDownloadLink} className="ui button primary">Download</button></a>
                </div>
            </div>, document.querySelector('#modal')
        )
    }

}

export default Modal;