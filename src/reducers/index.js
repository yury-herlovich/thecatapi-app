import { combineReducers } from 'redux';
import images from './images';
import favorites from './favorites';

export default combineReducers({
  images,
  favorites
});