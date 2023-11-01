import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  items: CartItem[];
}

const initialState: ProductState = {
  items: [],
};

export const productInfoSlice = createSlice({
  name: "productInfo",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
    resetProducts: () => initialState,
  },
});

export const { addProducts, resetProducts } = productInfoSlice.actions;
export default productInfoSlice.reducer;
