import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <Link to={'/images'}>Images</Link>
    <Link to={'/favorites'}>Favorites</Link>
  </nav>
)

export default Menu;