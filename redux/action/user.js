export const USER_SIGN_IN_SUCCESS = "USER_SIGN_IN_SUCCESS";
export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const SHOW_SNACKBAR = "SHOW_SNACKBAR";


export const login = (userData) => ({
    type: USER_SIGN_IN_SUCCESS,
    payload: userData
});

export const userSignUp = (userData) => ({
    type: USER_SIGN_UP_SUCCESS,
    payload: userData
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const clearCart = () => ({
    type: CLEAR_CART,
    payload:null,
});

export const snackbarMessage=(message)=>({
    type:SHOW_SNACKBAR,
    payload:message,
})

export const updateCart=(itemList)=>({
    type:'UPDATE_CART',
    payload:itemList,
})
