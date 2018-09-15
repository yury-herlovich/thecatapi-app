import React from 'react';

const ImageItem = ({ url }) => (
  <div className="image-item">
    { url ?  <img src={url} alt="" /> : 'Image not found' }
  </div>
)

export default ImageItem;