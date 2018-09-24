import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { initialState as ImagesInitialState } from '../reducers/images';
import * as actions from './index';
import * as actionTypes from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action Get Images', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
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

    const store = mockStore(ImagesInitialState);

    return store.dispatch(actions.getImages(0)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('action Reset Images Store', () => {
  it('reset images store', () => {
    const expectedActions = [
      { type: actionTypes.RESET_IMAGE_STORE }
    ];

    const store = mockStore(ImagesInitialState);

    store.dispatch(actions.resetImageStore())
    expect(store.getActions()).toEqual(expectedActions);
  });
});


describe('action Reset Images Store', () => {
  it('reset images store', () => {
    const expectedActions = [
      { type: actionTypes.RESET_IMAGE_STORE }
    ];

    const store = mockStore(ImagesInitialState);

    store.dispatch(actions.resetImageStore())
    expect(store.getActions()).toEqual(expectedActions);
  });
});


describe('action set Loading state', () => {
  it('set Loading state', () => {
    const expectedActions = [
      { type: actionTypes.IS_LOADING, isLoading: true }
    ];

    const store = mockStore(ImagesInitialState);

    store.dispatch(actions.setLoading(true))
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('set Loading finish state', () => {
    const expectedActions = [
      { type: actionTypes.IS_LOADING, isLoading: false }
    ];

    const store = mockStore(ImagesInitialState);

    store.dispatch(actions.setLoading(false))
    expect(store.getActions()).toEqual(expectedActions);
  });
});


describe('action increment image page', () => {
  it('reset images store', () => {
    const expectedActions = [
      { type: actionTypes.INCREMENT_IMAGE_PAGE }
    ];

    const store = mockStore(ImagesInitialState);

    store.dispatch(actions.incrementImagePage())
    expect(store.getActions()).toEqual(expectedActions);
  });
});