import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    return (
      <div><img src={this.props.url} alt="" /></div>
    );
  }
}

export default ImageItem;