import {
  GET_BANNER_LIST_FAIL,
  GET_BANNER_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAIL,
  GET_CATEGORY_LIST_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
} from "../action/products";


export const bannerList = (state = [], action) => {
  switch (action.type) {
    case GET_BANNER_LIST_SUCCESS:
      return [...new Set(action.payload)];
    case GET_BANNER_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

export const categoryList = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST_SUCCESS:
      return [...new Set(action.payload)];
    case GET_CATEGORY_LIST_FAIL:
      return state;
    default:
      return state;
  }
};


export const productsList = (state = [], action) => {
    switch (action.type) {
      case GET_PRODUCT_LIST_SUCCESS:
        return [...new Set(action.payload)];
      case GET_PRODUCT_LIST_FAIL:
        return state;
      default:
        return state;
    }
  };
