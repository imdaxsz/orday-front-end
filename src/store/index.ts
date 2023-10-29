import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import reducer from "./rootReducer";

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
