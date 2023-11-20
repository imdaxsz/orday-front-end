import { combineReducers } from "@reduxjs/toolkit";

import auth from "./slices/authSlice";
import cart from "./slices/cartSlice";
import productInfo from "./slices/productInfoSlice";

const reducer = combineReducers({
  auth,
  cart,
  productInfo,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
