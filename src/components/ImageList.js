import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const imageRender = props.image.map((image) => {
        return <ImageCard key={image.id} img={image} />;
    })

    return <div className="image-list">{imageRender}</div>
}

export default ImageList;