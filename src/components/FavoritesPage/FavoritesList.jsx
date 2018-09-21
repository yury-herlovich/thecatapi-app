import React from 'react';
import PropTypes from 'prop-types';

import Image from '../ImageItem';
import ButtonRemoveFromFavorites from '../ButtonRemoveFromFavorites';

const FavoritesList = ({ images, removeFavorite }) => (
  images.length > 0 ?
    images.map((item, ind) => (
      <div className='image-container' key={item.favorite_id}>
        <Image url={item.url}/>
        <ButtonRemoveFromFavorites
          onClick={(e) => removeFavorite(e, item.favorite_id)} />
      </div>
    )) : null
);

FavoritesList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
    }).isRequired
  ).isRequired,
  removeFavorite: PropTypes.func.isRequired
};

export default FavoritesList;