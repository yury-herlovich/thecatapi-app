import * as actionTypes from '../constants/ActionTypes';

export const initialState = {
  images: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAVORITES:
      return {
        ...state,
        images: state.images.concat(action.favorites)
      }
    case actionTypes.SET_FAVORITE_IMAGE_URL:
      return {
        ...state,
        images: state.images.map((item) => {
          if (item.image_id === action.data.image_id) {
            item.url = action.data.url;
          }

          return item;
        })
      }
    case actionTypes.RESET_FAVORITES:
      return {
        ...state,
        images: []
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        images: state.images.filter((item) => item.favorite_id !== action.favorite_id)
      }
    default:
        return state
  }
}
