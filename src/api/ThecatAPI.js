import axios from 'axios';

require('../config/axios');

const catURL = 'https://api.thecatapi.com/v1';
const limit = 5;
const order = 'DESC';

export function fetchImagesAPI(page = 0) {
  return axios.get(`${catURL}/images/search?page=${page}&limit=${limit}&order=${order}`);
}


export function fetchImageAPI(image_id) {
  return axios.get(`${catURL}/images/${image_id}`);
}


export function addToFavoritesAPI(image_id) {
  return axios.post(`${catURL}/favourites`, {
      image_id
    });
}


export function fetchFavoritesAPI() {
  return axios.get(`${catURL}/favourites`);
}


export function removeFavoriteAPI(favorite_id) {
  return axios.delete(`${catURL}/favourites/${favorite_id}`);
}