import { combineReducers } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";
import productInfo from "./slices/productInfoSlice";

const reducer = combineReducers({
  cart,
  productInfo,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
