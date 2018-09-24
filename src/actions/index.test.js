import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { initialState as ImagesInitialState } from '../reducers/images';
import * as actions from './index';
import * as actionTypes from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
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
})