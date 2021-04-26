export const GET_BANNER_LIST_SUCCESS = 'GET_BANNER_LIST_SUCCESS';
export const GET_BANNER_LIST_FAIL = 'GET_BANNER_LIST_FAIL';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAIL = 'GET_CATEGORY_LIST_FAIL';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';

export const getProductsListSuccess=(list)=>{
    return {
     type: GET_PRODUCT_LIST_SUCCESS,
     payload:list
    };
}

export const getProductsListFail=()=>{
    return {
     type: GET_PRODUCT_LIST_FAIL,
    };
}


export const getCategorySuccess=(list)=>{
    return {
     type: GET_CATEGORY_LIST_SUCCESS,
     payload:list
    };
}

export const getCategoryFail=()=>{
    return {
     type: GET_CATEGORY_LIST_FAIL,
    };
}

export const getBannersSuccess=(list)=>{
    return {
     type: GET_BANNER_LIST_SUCCESS,
     payload:list
    };
}

export const getBannersFail=()=>{
    return {
     type: GET_BANNER_LIST_FAIL,
    };
}