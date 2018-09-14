import React, { Component } from 'react';
import { fetchFavoritesAPI, fetchImageAPI } from '../api/ThecatAPI';

import Image from './ImageItem';

class FavoritesView extends Component {
  constructor() {
    super()

    this.state = {
      images: []
    }
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
            this.setState({images: this.state.images.concat(image.data)});
          })
          .catch((err) => console.log(err.response.data.message));
      });
    } catch(e) {
      return console.log(e);
    }
  }
}

export default FavoritesView;