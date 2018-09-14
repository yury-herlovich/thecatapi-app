import React, { Component } from 'react';
import { fetchFavoritesAPI, fetchImageAPI, removeFavoriteAPI } from '../api/ThecatAPI';

import Image from './ImageItem';

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
          this.state.images.map((item, ind) => {
            return (
              <div className='image-container' key={ind}>
                <Image url={item.url}/>

                <div className='image-action'>
                    <a href="" onClick={(e) => this.removeFromFavorites(e, item.favorite_id)}>Remove from Favorites</a>
                </div>
              </div>
            );
          })
        }
      </section>
    )
  }

  componentDidMount() {
    this.fetchFavorites();
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
          .catch((err) => console.log(err.response.data.message));
      });
    } catch(e) {
      return console.log(e);
    }
  }

  removeFromFavorites(e, favorite_id) {
    e.preventDefault();

    removeFavoriteAPI(favorite_id)
      .then((res) => {
        let images = this.state.images.filter((item) => item.favorite_id !== favorite_id);

        this.setState({images});
      })
      .catch((err) => console.log(err));

    console.log(favorite_id);
  }
}

export default FavoritesView;