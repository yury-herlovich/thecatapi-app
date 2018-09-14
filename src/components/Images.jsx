import React, { Component } from 'react';
import { fetchImages } from '../api/ImagesAPI';

class Images extends Component {
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
      </section>
    )
  }

  componentDidMount() {
    fetchImages(this.state.page)
      .then(res => {
        this.setState({ images: res.data });
      })
      .catch(err => console.log(err));
  }
}

export default Images;