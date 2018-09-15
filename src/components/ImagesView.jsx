import React, { Component } from 'react';
import { fetchImagesAPI, addToFavoritesAPI } from '../api/ThecatAPI';

import Image from './ImageItem';
import ButtonAddToFavorites from './ButtonAddToFavorites';

class ImagesView extends Component {
  constructor() {
    super();

    this.state = {
      page: 0,
      images: [],
      isLoading: false
    }

    this.addToFavorites = this.addToFavorites.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.timeout = null;
  }

  render() {
    return (
      <section>
        <header><h1>Images</h1></header>

        { this.state.images.length > 0 &&
          this.state.images.map((item, ind) => (
            <div className='image-container' key={item.id}>
              <Image url={item.url}/>
              <ButtonAddToFavorites
                isFavorite={item.isFavorite || false}
                onClick={(e) => this.addToFavorites(e, item.id)} />
            </div>
          ))
        }

        { this.state.isLoading && <div>...loading</div> }
      </section>
    )
  }

  componentDidMount() {
    this.fetchImages(this.state.page);
    window.addEventListener('scroll', this.onScroll, false);
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

  fetchImages(page) {
    if (this.state.isLoading) {
      return;
    }

    this.setState({isLoading: true});

    fetchImagesAPI(page)
    .then((res) => {
      this.setState({ images: this.state.images.concat(res.data) });
    })
    .catch((err) => console.log(err))
    .finally(() => this.setState({isLoading: false}));
  }

  onScroll() {
    if (this.state.images.length === 0 || this.state.isLoading) {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(()=>{
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
        this.setState({page: this.state.page + 1});
        this.fetchImages(this.state.page);
      }
    }, 150);
  }
}

export default ImagesView;