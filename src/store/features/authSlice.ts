import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  username: string;
  access: string;
  refresh: string;
}

const initialState: initialStateType = {
  username: "",
  access: "",
  refresh: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
