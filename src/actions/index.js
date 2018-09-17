import axios from 'axios'

require('../config/axios');

const catURL = 'https://api.thecatapi.com/v1';
const limit = 5;
const order = 'DESC';

export function getImages (page) {
  return (dispatch) => {
    axios.get(`${catURL}/images/search?page=${page}&limit=${limit}&order=${order}`)
      .then((res) => {
        dispatch({type: 'GET_IMAGES', images: res.data});
        dispatch({type: 'IS_LOADING', isLoading: false});
      })
      .catch((err) => console.log(err));
  }
}

export function resetImageStore() {
  return { type: 'RESET_IMAGE_STORE' };
}

export function setLoading (isLoading) {
  return {
    type: 'IS_LOADING',
    isLoading
  }
}

export function incrementImagePage () {
  return { type: 'INCREMENT_IMAGE_PAGE' }
}

export function addToFavorites (image_id) {
  return (dispatch) => {
    axios.post(`${catURL}/favourites`, { image_id })
      .then((res) => {
        dispatch({type: 'MAKE_FAVORITE', image_id});
      })
      .catch((err) => console.log(err));
  }
}

export function getFavorites() {
  return (dispatch) => {
    axios.get(`${catURL}/favourites`)
      .then((res) => {
        res.data.forEach((item) => {
          axios.get(`${catURL}/images/${item.image_id}`)
            .then((imageRes) => {
              dispatch({type: 'GET_FAVORITE', image: {
                ...imageRes.data,
                favorite_id: item.id
              }});
            })
            .catch((err) => console.log(err));
        })
      })
      .catch((err) => console.log(err));
  }
}

export function removeFromFavorites(favorite_id) {
  return (dispatch) => {
    axios.delete(`${catURL}/favourites/${favorite_id}`)
      .then((res) => {
        dispatch({type: 'REMOVE_FROM_FAVORITES', favorite_id});
      })
      .catch((err) => console.log(err));
  }
}

export function resetFavorites() {
  return { type: 'RESET_FAVORITES' };
}
