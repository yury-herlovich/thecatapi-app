import React from 'react';
import PropTypes from 'prop-types';

import ImageItem from '../ImageItem';
import ButtonAddToFavorites from '../ButtonAddToFavorites';

const ImageList = ({ images, addToFavorites }) => (
  images.length > 0 ?
    images.map((item, ind) => (
      <div className='image-container' key={item.id}>
        <ImageItem url={item.url}/>
        <ButtonAddToFavorites
          isFavorite={item.isFavorite || false}
          onClick={(e) => addToFavorites(e, item.id)} />
      </div>
    )) : null
);

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
    }).isRequired
  ).isRequired,
  addToFavorites: PropTypes.func.isRequired
};

export default ImageList;