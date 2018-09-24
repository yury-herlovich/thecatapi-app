import * as actionTypes from '../constants/ActionTypes';

export const initialState = {
  images: [],
  isLoading: false,
  page: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.images)
      }
    case actionTypes.RESET_IMAGE_STORE:
      return {
        ...state,
        images: [],
        page: 0
      }
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case actionTypes.INCREMENT_IMAGE_PAGE:
      return {
        ...state,
        page: state.page + 1
      }
    case actionTypes.MAKE_FAVORITE:
      return {
        ...state,
        images: state.images.map((item) => {
          if (item.id === action.image_id) {
            item.isFavorite = true;
          }

          return item;
        })
      }
    default:
      return state;
  }
}
