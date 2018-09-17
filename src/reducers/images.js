const initialState = {
  images: [],
  isLoading: false,
  page: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return {
        ...state,
        images: state.images.concat(action.images)
      }
    case 'RESET_IMAGE_STORE':
      return {
        ...state,
        images: [],
        page: 0
      }
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }
    case 'INCREMENT_IMAGE_PAGE':
      return {
        ...state,
        page: state.page + 1
      }
    case 'MAKE_FAVORITE':
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
