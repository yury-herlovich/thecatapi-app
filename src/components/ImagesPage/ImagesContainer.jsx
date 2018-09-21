import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getImages as getImagesAction,
  setLoading,
  addToFavorites,
  resetImageStore,
  incrementImagePage
} from '../../actions';

import ImageList from './ImageList';
import LoadingAnimation from '../LoadingAnimation';

export class ImagesContainer extends Component {
  constructor() {
    super();

    this.addToFavorites = this.addToFavorites.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.timeout = null;
  }

  render() {
    return (
      <section>
        <header><h1>Images</h1></header>
        <ImageList images={this.props.images} addToFavorites={this.addToFavorites} />
        <LoadingAnimation isLoading={this.props.isLoading}/>
      </section>
    )
  }

  componentDidMount() {
    this.getImages();
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.props.resetImageStore();
  }

  addToFavorites(e, id) {
    e.preventDefault();
    this.props.addToFavorites(id);
  }

  getImages() {
    if (this.props.isLoading) {
      return;
    }

    this.props.setLoading(true);

    this.props.getImagesAction(this.props.page);
  }

  onScroll() {
    if (this.props.images.length === 0 || this.props.isLoading) {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(()=>{
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
        this.props.incrementImagePage();
        this.getImages();
      }
    }, 100);
  }
}

const mapStateToProps = state => ({
  images: state.images.images,
  isLoading: state.images.isLoading,
  page: state.images.page
});

export default connect(mapStateToProps, {
  setLoading,
  getImagesAction,
  addToFavorites,
  resetImageStore,
  incrementImagePage
})(ImagesContainer);