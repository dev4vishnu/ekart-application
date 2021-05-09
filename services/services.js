import axios from "axios";

import {
  getBannersFail,
  getBannersSuccess,
  getCategoryFail,
  getCategorySuccess,
  getProductsListSuccess,
  getProductsListFail,
} from "../redux/action/products";

const api = "http://localhost:5000";

export const getBannerList = () => async (dispatch) => {
  try {
    const resp = await axios.get(`${api}/banners`);
    if (resp.status === 200) {
      dispatch(getBannersSuccess(resp.data));
    } else {
      dispatch(getBannersFail());
    }
  } catch (error) {
    console.log("Unable to fetch banner's list", error);
  }
};

export const getCategoryList = () => async (dispatch) => {
  try {
    const resp = await axios.get(`${api}/categories`);
    if (resp.status === 200) {
      dispatch(getCategorySuccess(resp.data));
    } else {
      dispatch(getCategoryFail());
    }
  } catch (error) {
    console.log("Unable to fetch category list");
  }
};

export const getProductList = () => async (dispatch) => {
  try {
    const resp = await axios.get(`${api}/products`);
    if (resp.status === 200) {
      dispatch(getProductsListSuccess(resp.data));
    } else {
      dispatch(getProductsListFail());
    }
  } catch (error) {
    console.log("Unable to fetch product list");
  }
};

