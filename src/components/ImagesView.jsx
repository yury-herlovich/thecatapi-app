import React, { Component } from 'react';
import { fetchImagesAPI, addToFavoritesAPI } from '../api/ImagesAPI';

import Image from './ImageItem';

class ImagesView extends Component {
  constructor() {
    super();

    this.state = {
      page: 0,
      images: []
    }

    this.addToFavorites = this.addToFavorites.bind(this);
  }

  render() {
    return (
      <section>
        <header><h1>Images</h1></header>
        { this.state.images.length > 0 &&
          this.state.images.map((item, ind) => {
            return (
              <div className='image-container' key={ind}>
                <Image url={item.url}/>
                <div className='image-action'>
                  {!item.isFavorite ?
                    <a href="" onClick={(e) => this.addToFavorites(e, item.id)}>Add to Favorites</a> :
                    'In Favorites'
                  }
                </div>
              </div>
            );
          })
        }
      </section>
    )
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    fetchImagesAPI(this.state.page)
    .then((res) => {
      this.setState({ images: this.state.images.concat(res.data) });
    })
    .catch((err) => console.log(err));
  }

  addToFavorites(e, id) {
    e.preventDefault();

    addToFavoritesAPI(id)
      .then((res) => {
        // find the image in state
        let imageInd;
        this.state.images.forEach((item, ind) => {
          if (item.id !== id) {
            return;
          }

          imageInd = ind;
        });

        if (imageInd === undefined) {
          return;
        }

        // add property isFavorite
        let images = [...this.state.images];
        images[imageInd].isFavorite = true;

        this.setState({images});
      })
      .catch((err) => console.log(err));
  }
}

export default ImagesView;