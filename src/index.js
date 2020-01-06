import React from 'react';
import domRender from 'react-dom';
import App from './components/App';

domRender.render(
    <App />, document.querySelector('#root')
)