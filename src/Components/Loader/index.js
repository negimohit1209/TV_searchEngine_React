import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
    <div style = {{paddingTop: 50}}>
        <img
        style = {{width: 75 }}
        alt="loader icon" 
        src={loaderSrc} />
    </div>
);


export default Loader;