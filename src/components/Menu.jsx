import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav>
        <Link to={'/images'}>Images</Link>
        <Link to={'/favorites'}>Favorites</Link>
      </nav>
    )
  }
}

export default Menu;