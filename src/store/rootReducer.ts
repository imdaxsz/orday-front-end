import { combineReducers } from "@reduxjs/toolkit";

import auth from "./slices/authSlice";
import cart from "./slices/cartSlice";

const reducer = combineReducers({
  auth,
  cart,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
