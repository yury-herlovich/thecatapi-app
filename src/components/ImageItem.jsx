import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    return (
      <div className="image-item">
        {this.props.url ?
          <img src={this.props.url} alt="" /> :
          'Image not found'
        }
      </div>
    );
  }
}

export default ImageItem;