import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IImage {
  source: string;
  filter?: string;
}

const initialState: IImage = {
  source: '',
  filter: ''
};

export const gettingImage = createSlice({
  name: "image",
  initialState,
  reducers: {
    changeSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSource, changeFilter } = gettingImage.actions;

export default gettingImage.reducer;
