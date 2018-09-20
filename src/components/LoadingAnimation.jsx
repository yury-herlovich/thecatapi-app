import React from 'react';
import PropTypes from 'prop-types';

const LoadingAnimation = ({ isLoading }) => (
  isLoading ? <div>...loading</div> : <div></div>
);

LoadingAnimation.propTypes = {
  isLoading: PropTypes.bool
};

export default LoadingAnimation;