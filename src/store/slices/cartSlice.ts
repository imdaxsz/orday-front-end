import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addCartItems,
  decreaseCartProduct,
  deleteCartItems,
  getCartList,
  increaseCartProduct,
} from "@/api/CartApi";

interface CartState {
  items: CartItem[];
  loading: boolean;
}

const initialState: CartState = {
  items: [],
  loading: false,
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
  async (itemInfo: ProductInfo[], thunkAPI) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      })

      .addCase(increaseCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      })

      .addCase(decreaseCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item,
        );
      })

      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => !action.payload.includes(item.id),
        );
      })
      .addCase(removeCartItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default cartSlice.reducer;
