import React from 'react';
import PropTypes from 'prop-types';

const ButtonAddToFavorites = ({ onClick, isFavorite }) => (
  <div className='image-action'>
    { !isFavorite ?
      <a href="" onClick={onClick}>Add to Favorites</a> :
      'In Favorites'
    }
  </div>
);

ButtonAddToFavorites.proptypes = {
  onClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default ButtonAddToFavorites;