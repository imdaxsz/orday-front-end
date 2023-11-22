import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * @deprecated access token localStorage 저장으로 인해 더 이상 사용되지 않음
 */

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    signout: () => initialState,
  },
});

export const { setAccessToken, signout } = authSlice.actions;
export default authSlice.reducer;
