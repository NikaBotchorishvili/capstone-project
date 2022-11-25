import React from 'react';

function Image({className, imageURL}) {
    return (
        <div className={`${className} image-container`}>
            <img src={imageURL} className='image-grid'/>
        </div>
    );
}

export default Image;