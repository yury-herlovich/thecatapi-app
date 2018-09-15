import React from 'react';
import PropTypes from 'prop-types';

const ImageItem = ({ url }) => (
  <div className="image-item">
    { url ?  <img src={url} alt="" /> : 'Image not found' }
  </div>
);

ImageItem.propTypes = {
  url: PropTypes.string
};

export default ImageItem;