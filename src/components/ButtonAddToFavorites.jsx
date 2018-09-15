import React, { Component } from 'react';

class ButtonAddToFavorites extends Component {
  render() {
    return (
      <div className='image-action'>
        {!this.props.isFavorite ?
          <a href="" onClick={(e) => this.props.onClickHandler(e, this.props.id)}>Add to Favorites</a> :
          'In Favorites'
        }
      </div>
    );
  }
}

export default ButtonAddToFavorites;