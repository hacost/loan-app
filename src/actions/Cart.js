const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});
const deleteProduct = (payload) => ({
  type: 'DELETE_PRODUCT',
  payload,
});
const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export { addToCart, deleteProduct, getVideoSource };
