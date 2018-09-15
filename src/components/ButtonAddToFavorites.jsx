import React from 'react';

const ButtonAddToFavorites = ({ onClick, isFavorite }) => (
  <div className='image-action'>
    { !isFavorite ?
      <a href="" onClick={onClick}>Add to Favorites</a> :
      'In Favorites'
    }
  </div>
)

export default ButtonAddToFavorites;