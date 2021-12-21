const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        // find by id from my array videos
        playing: state.products.find((item) => item.id === action.payload) ||
        [],
      };
    default:
      return state;
  }
};

export default reducer;
