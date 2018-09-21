import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFavorites,
  resetFavorites,
  removeFromFavorites
} from '../../actions';

import FavoritesList from './FavoritesList';

class FavoritesView extends Component {
  constructor() {
    super();

    this.removeFavorite = this.removeFavorite.bind(this);
  }

  render() {
    return (
      <section>
        <header><h1>Favorites</h1></header>

        <FavoritesList images={this.props.images} removeFavorite={this.removeFavorite} />
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