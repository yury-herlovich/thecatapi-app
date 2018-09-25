import favoritesReducer from './favorites';
import * as actionTypes from '../constants/ActionTypes';
import { initialState } from './favorites';

describe('Favorites store', () => {
  it('default state', () => {
    const action = { type: 'default_action' };

    expect(favoritesReducer(undefined, action)).toEqual(initialState);
  });


  it('get favorites', () => {
    const favorites = [
      { favorite_id: 1, image_id: '1a' },
      { favorite_id: 2, image_id: '2a' },
    ];

    const action = {
      type: actionTypes.GET_FAVORITES,
      favorites
    };

    const expectedState = {
      ...initialState,
      images: favorites
    };

    expect(favoritesReducer(undefined, action)).toEqual(expectedState);
  });


  it('set url for favorite', () => {
    const state = {
      ...initialState,
      images: [
        { favorite_id: 1, image_id: '1a' },
        { favorite_id: 2, image_id: '2a' }
      ]
    };

    const action = {
      type: actionTypes.SET_FAVORITE_IMAGE_URL,
      data: {
        image_id: '2a',
        url: 'http://localhost/test.jpg'
      }
    };

    const expectedState = JSON.parse(JSON.stringify(state))
    expectedState.images[1].url = action.data.url;

    expect(favoritesReducer(state, action)).toEqual(expectedState);
  });


  it('reset favorites', () => {
    const state = {
      ...initialState,
      images: [
        { favorite_id: 1, image_id: '1a' },
        { favorite_id: 2, image_id: '2a' }
      ]
    };

    const action = { type: actionTypes.RESET_FAVORITES };

    expect(favoritesReducer(state, action).images.length).toEqual(0);
  });


  it('remove image from favorites', () => {
    const state = {
      ...initialState,
      images: [
        { favorite_id: 1, image_id: '1a' },
        { favorite_id: 2, image_id: '2a' }
      ]
    };

    const action = {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      favorite_id: 1
    };

    const expectedState = JSON.parse(JSON.stringify(state))
    expectedState.images.shift();

    expect(favoritesReducer(state, action)).toEqual(expectedState);
  });
});
