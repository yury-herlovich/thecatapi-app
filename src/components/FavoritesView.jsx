import React, { Component } from 'react';
import { fetchFavoritesAPI, fetchImageAPI, removeFavoriteAPI } from '../api/ThecatAPI';

import Image from './ImageItem';
import ButtonRemoveFromFavorites from './ButtonRemoveFromFavorites';

class FavoritesView extends Component {
  constructor() {
    super()

    this.state = {
      images: []
    }

    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  render() {
    return (
      <section>
        <header><h1>Favorites</h1></header>

        { this.state.images.length > 0 &&
          this.state.images.map((item, ind) => (
            <div className='image-container' key={item.favorite_id}>
              <Image url={item.url}/>
              <ButtonRemoveFromFavorites
                onClick={(e) => this.removeFromFavorites(e, item.favorite_id)} />
            </div>
          ))
        }
      </section>
    )
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  removeFromFavorites(e, favorite_id) {
    e.preventDefault();

    removeFavoriteAPI(favorite_id)
      .then((res) => {
        let images = this.state.images.filter((item) => item.favorite_id !== favorite_id);

        this.setState({images});
      })
      .catch((err) => console.log(err));
  }

  async fetchFavorites() {
    try {
      let favorites = await fetchFavoritesAPI();

      favorites.data.forEach((item) => {
        fetchImageAPI(item.image_id)
          .then((image) => {
            let image_data = image.data;
            image_data.favorite_id = item.id;

            this.setState({images: this.state.images.concat(image_data)});
          })
          // .catch((err) => console.log(err.response));
          .catch((err) => {
            let image = {
              url: undefined,
              id: item.image_id,
              favorite_id: item.id
            }

            this.setState({images: this.state.images.concat(image)});
          });
      });
    } catch(e) {
      return console.log(e);
    }
  }
}

export default FavoritesView;