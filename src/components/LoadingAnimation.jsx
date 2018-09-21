import React from 'react';
import PropTypes from 'prop-types';

const LoadingAnimation = ({ isLoading }) => (
  isLoading ? <div>...loading</div> : null
);

LoadingAnimation.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingAnimation;