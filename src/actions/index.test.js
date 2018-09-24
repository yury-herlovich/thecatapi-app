import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import {initialState as ImagesInitialState } from '../reducers/images';
import {initialState as FavoritesInitialState } from '../reducers/favorites';
import * as actions from './index';
import * as actionTypes from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions Images', () => {
  let mock;
  const store = mockStore(ImagesInitialState);

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();

    store.clearActions();
  });

  it('get images', () => {
    const response = [{
      id: '5hr',
      url: 'http://localhost/test.jpg',
    }];

    const expectedActions = [
      { type: actionTypes.GET_IMAGES, images: response },
      { type: actionTypes.IS_LOADING, isLoading: false }
    ];

    mock.onGet(`${actions.catURL}/images/search?page=0&limit=${actions.limit}&order=${actions.order}`)
      .reply(200, response);

    return store.dispatch(actions.getImages(0)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('reset images store', () => {
    const expectedActions = [
      { type: actionTypes.RESET_IMAGE_STORE }
    ];

    store.dispatch(actions.resetImageStore())
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('set Loading state', () => {
    const expectedActions = [
      { type: actionTypes.IS_LOADING, isLoading: true }
    ];

    store.dispatch(actions.setLoading(true))
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('set Loading finish state', () => {
    const expectedActions = [
      { type: actionTypes.IS_LOADING, isLoading: false }
    ];

    store.dispatch(actions.setLoading(false))
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('increment page', () => {
    const expectedActions = [
      { type: actionTypes.INCREMENT_IMAGE_PAGE }
    ];

    store.dispatch(actions.incrementImagePage())
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('add image to favorites', () => {
    const image_id = 1;

    const response = [{
      message: "SUCCESS",
      id: 1
    }];

    const expectedActions = [
      { type: actionTypes.MAKE_FAVORITE, image_id },
    ];

    mock.onPost(`${actions.catURL}/favourites`)
      .reply(200, response);

    return store.dispatch(actions.addToFavorites(image_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('actions Favorites', () => {
  let mock;
  const store = mockStore(FavoritesInitialState);

  beforeEach(() => {
    mock = new MockAdapter(axios);

    store.clearActions();
  });

  afterEach(() => {
    mock.restore();
    mock.reset();

    store.clearActions();
  });


  it('get favorites', () => {
    const favorite_id = 1;
    const image_id = '3a';

    const response = [{
      id: favorite_id,
      image_id
    }];

    const responseImageUrl = {
      image_id,
      url: ''
    };

    const expectedActions = [
      { type: actionTypes.GET_FAVORITES, favorites: [{ favorite_id, image_id}] }
    ];

    mock
      .onGet(`${actions.catURL}/favourites`).reply(200, response)
      .onGet(`${actions.catURL}/images/${image_id}`).reply(200, responseImageUrl);

    return store.dispatch(actions.getFavorites()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('get image url for favorite image', () => {
    const url = 'http://localhost/test.jpg';
    const image_id = '3a';

    let response = {
      url,
      image_id
    };

    const expectedActions = [{
      type: actionTypes.SET_FAVORITE_IMAGE_URL,
      data: { url, image_id}
    }];

    mock
      .onGet(`${actions.catURL}/images/${image_id}`)
      .reply(200, response);

    return store.dispatch(actions.getImageUrlForFavorites(image_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('remove from favorites', () => {
    const favorite_id = 1;

    const response = [{
      message: "SUCCESS"
    }];

    const expectedActions = [
      { type: actionTypes.REMOVE_FROM_FAVORITES, favorite_id }
    ];

    mock.onDelete(`${actions.catURL}/favourites/${favorite_id}`)
      .reply(200, response);

    return store.dispatch(actions.removeFromFavorites(favorite_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('reset favorites store', () => {
    const expectedActions = [
      { type: actionTypes.RESET_FAVORITES }
    ];

    store.dispatch(actions.resetFavorites())
    expect(store.getActions()).toEqual(expectedActions);
  });
});