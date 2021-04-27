import { combineReducers } from "redux";
import {
  userReducer as userDetails,
  userList as registeredUsers,
  snackbar,
  userCart,
} from "./reducer/user";

import {
  bannerList as banners,
  categoryList as categories,
  productsList as products,
} from "./reducer/products";

const rootReducer = combineReducers({
  userDetails,
  registeredUsers,
  banners,
  categories,
  products,
  userCart,
  snackbar,
});

export default rootReducer;
