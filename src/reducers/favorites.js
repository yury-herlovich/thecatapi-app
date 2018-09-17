const initialState = {
  images: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_FAVORITE':
      return {
        ...state,
        images: state.images.concat(action.image)
      }
    case 'RESET_FAVORITES':
      return {
        ...state,
        images: []
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        images: state.images.filter((item) => item.favorite_id !== action.favorite_id)
      }
    default:
        return state
  }
}
