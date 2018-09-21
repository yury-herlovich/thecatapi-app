import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFavorites,
  resetFavorites,
  removeFromFavorites
} from '../../actions';

import Image from '../ImageItem';
import ButtonRemoveFromFavorites from '../ButtonRemoveFromFavorites';

class FavoritesView extends Component {
  constructor() {
    super();

    this.removeFavorite = this.removeFavorite.bind(this);
  }

  render() {
    return (
      <section>
        <header><h1>Favorites</h1></header>

        { this.props.images.length > 0 &&
          this.props.images.map((item, ind) => (
            <div className='image-container' key={item.favorite_id}>
              <Image url={item.url}/>
              <ButtonRemoveFromFavorites
                onClick={(e) => this.removeFavorite(e, item.favorite_id)} />
            </div>
          ))
        }
      </section>
    )
  }

  componentDidMount() {
    this.props.getFavorites();
  }

  componentWillUnmount() {
    this.props.resetFavorites();
  }

  removeFavorite(e, favorite_id) {
    e.preventDefault();
    this.props.removeFromFavorites(favorite_id);
  }
}

const mapStateToProps = state => ({
  images: state.favorites.images
});

export default connect(mapStateToProps, {
  getFavorites,
  resetFavorites,
  removeFromFavorites
})(FavoritesView);