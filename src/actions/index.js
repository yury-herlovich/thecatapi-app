import axios from 'axios'
import * as actionTypes from '../constants/ActionTypes';

require('../config/axios');

export const catURL = 'https://api.thecatapi.com/v1';
export const limit = 5;
export const order = 'DESC';

export function getImages (page) {
  return (dispatch) => {
    return (
      axios.get(`${catURL}/images/search?page=${page}&limit=${limit}&order=${order}`)
        .then((res) => {
          dispatch({type: actionTypes.GET_IMAGES, images: res.data});
          dispatch({type: actionTypes.IS_LOADING, isLoading: false});
        })
        .catch((err) => console.log(err))
      );
  }
}

export function resetImageStore() {
  return { type: actionTypes.RESET_IMAGE_STORE };
}

export function setLoading (isLoading) {
  return {
    type: actionTypes.IS_LOADING,
    isLoading
  }
}

export function incrementImagePage () {
  return { type: actionTypes.INCREMENT_IMAGE_PAGE }
}

export function addToFavorites (image_id) {
  return (dispatch) => {
    return axios.post(`${catURL}/favourites`, { image_id })
      .then((res) => {
        dispatch({type: actionTypes.MAKE_FAVORITE, image_id});
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
              dispatch({type: actionTypes.GET_FAVORITE, image: {
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
    return axios.delete(`${catURL}/favourites/${favorite_id}`)
      .then((res) => {
        dispatch({type: actionTypes.REMOVE_FROM_FAVORITES, favorite_id});
      })
      .catch((err) => console.log(err));
  }
}

export function resetFavorites() {
  return { type: actionTypes.RESET_FAVORITES };
}
