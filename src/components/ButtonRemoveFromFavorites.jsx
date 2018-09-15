import React, { Component } from 'react';

class ButtonRemoveFromFavorites extends Component {
  render() {
    return (
      <div className='image-action'>
        <a href="" onClick={(e) => this.props.onClickHandler(e, this.props.favorite_id)}>Remove from Favorites</a>
      </div>
    );
  }
}

export default ButtonRemoveFromFavorites;