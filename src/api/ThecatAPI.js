import axios from 'axios';

require('../config/axios');

const catURL = 'https://api.thecatapi.com/v1';
const limit = 10;

export function fetchImagesAPI(page = 0) {
  return axios.get(`${catURL}/images/search?page=${page}&limit=${limit}`);
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