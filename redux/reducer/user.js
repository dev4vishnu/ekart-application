import {
  USER_SIGN_IN_SUCCESS,
  ADD_TO_CART,
  USER_SIGN_UP_SUCCESS,
  CLEAR_CART,
} from "../action/user";

const initialState = {
  isLoggedIn: false,
  userDetails: null,
  cart: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.status,
        userDetails: action.payload.userDetails,
      };
    default:
      return state;
  }
};

export const userList = (state = [], action) => {
  switch (action.type) {
    case USER_SIGN_UP_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const userCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case CLEAR_CART:
      return [action.payload];
    default:
      return state;
  }
};
