import { combineReducers } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";

const reducer = combineReducers({
  cart,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
