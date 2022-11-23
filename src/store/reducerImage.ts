import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IImage {
  source: string;
}

const initialState: IImage = {
  source: "",
};

export const gettingImage = createSlice({
  name: "image",
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<string>) => {
      console.log('17  >>> ', action);
      state.source = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSource } = gettingImage.actions;

export default gettingImage.reducer;
