import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addCartItems,
  decreaseCartProduct,
  deleteCartItems,
  getCartList,
  increaseCartProduct,
} from "@/libs/api/CartApi";

interface CartState {
  items: CartItem[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CartState = {
  items: [],
  loading: "idle",
};

export const fetchCartItems = createAsyncThunk(
  "cart/getCartList",
  async (_, thunkAPI) => {
    try {
      const data = await getCartList();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (itemInfo: CartProductInfo, thunkAPI) => {
    try {
      const data = await addCartItems(itemInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const increaseCartItemQuantity = createAsyncThunk(
  "cart/increaseCartItemQuantity",
  async (productId: number, thunkAPI) => {
    try {
      const data = await increaseCartProduct(productId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const decreaseCartItemQuantity = createAsyncThunk(
  "cart/decreaseCartItemQuantity",
  async (productId: number, thunkAPI) => {
    try {
      const data = await decreaseCartProduct(productId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (productIds: number[], thunkAPI) => {
    try {
      const data = await deleteCartItems(productIds);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // removeFromCart: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = action.payload;
      })
      .addCase(increaseCartItemQuantity.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      })
      .addCase(decreaseCartItemQuantity.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item,
        );
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = state.items.filter(
          (item) => !action.payload.includes(item.id),
        );
      });
  },
});

// export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
