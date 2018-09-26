import imagesReducer, { initialState } from './images';
import * as actionTypes from '../constants/ActionTypes';

describe('Images store', () => {
  it('default state', () => {
    const action = { type: 'default_action' };

    expect(imagesReducer(undefined, action)).toEqual(initialState);
  });


  it('get images', () => {
    const images = [
      { id: 1, url: 'http://localhost/test1.jpg' },
      { id: 2, url: 'http://localhost/test2.jpg' },
    ];

    const action = {
      type: actionTypes.GET_IMAGES,
      images
    };

    const expectedState = {
      ...initialState,
      images
    };

    expect(imagesReducer(undefined, action)).toEqual(expectedState);
  });


  it('add more images', () => {
    const state = {
      ...initialState,
      images: [
        { id: 1, url: 'http://localhost/test1.jpg' },
        { id: 2, url: 'http://localhost/test2.jpg' },
      ]
    };

    const images = [
      { id: 3, url: 'http://localhost/test3.jpg' },
      { id: 4, url: 'http://localhost/test4.jpg' },
    ];

    const action = {
      type: actionTypes.GET_IMAGES,
      images
    };

    const expectedState = {
      ...initialState,
      images: state.images.concat(images)
    };

    expect(imagesReducer(state, action)).toEqual(expectedState);
  });


  it('reset image store', () => {
    const state = {
      ...initialState,
      images: [
        { id: 1, url: 'http://localhost/test1.jpg' },
        { id: 2, url: 'http://localhost/test2.jpg' },
      ],
      page: 9,
      isLoading: true
    };

    const action = {
      type: actionTypes.RESET_IMAGE_STORE
    };

    const expectedState = {
      ...initialState,
      images: [],
      page: 0,
      isLoading: false
    };

    expect(imagesReducer(state, action)).toEqual(expectedState);
  });


  it('set isLoading', () => {
    const action = {
      type: actionTypes.IS_LOADING,
      isLoading: true
    };

    const expectedState = {
      ...initialState,
      isLoading: true
    };

    expect(imagesReducer(undefined, action)).toEqual(expectedState);
  });

  it('hide isLoading', () => {
    const action = {
      type: actionTypes.IS_LOADING,
      isLoading: false
    };

    const expectedState = {
      ...initialState,
      isLoading: false
    };

    expect(imagesReducer(undefined, action)).toEqual(expectedState);
  });


  it('increment number of page', () => {
    const state = {
      ...initialState,
      page: 9
    };

    const action = {
      type: actionTypes.INCREMENT_IMAGE_PAGE
    };

    const expectedState = {
      ...initialState,
      page: 10
    };

    expect(imagesReducer(state, action)).toEqual(expectedState);
  });

  it('make image a favorite', () => {
    const state = {
      ...initialState,
      images: [
        { id: 1, url: 'http://localhost/test1.jpg' },
        { id: 2, url: 'http://localhost/test2.jpg' },
      ]
    };

    const action = {
      type: actionTypes.MAKE_FAVORITE,
      image_id: state.images[1].id
    };

    const expectedState = JSON.parse(JSON.stringify(state));
    expectedState.images[1].isFavorite = true;

    expect(imagesReducer(state, action)).toEqual(expectedState);
  });
});
