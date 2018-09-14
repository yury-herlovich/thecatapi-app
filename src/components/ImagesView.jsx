import React, { Component } from 'react';
import { fetchImages as fetchImagesAPI } from '../api/ImagesAPI';

import Image from './ImageItem';

class ImagesView extends Component {
  constructor() {
    super();

    this.state = {
      page: 0,
      images: []
    }
  }

  render() {
    return (
      <section>
        <header><h1>Images</h1></header>
        { this.state.images.length > 0 &&
          this.state.images.map((item, ind) => {
            return <Image url={item.url} key={ind} />;
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
}

export default ImagesView;