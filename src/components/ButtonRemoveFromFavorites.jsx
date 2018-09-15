import React from 'react';
import PropTypes from 'prop-types';

const ButtonRemoveFromFavorites = ({ onClick }) => (
  <div className='image-action'>
    <a href="" onClick={onClick}>Remove from Favorites</a>
  </div>
)

ButtonRemoveFromFavorites.proptypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonRemoveFromFavorites;