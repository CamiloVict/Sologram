import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IImage {
  list: any[]
  source: string;
  filter?: string;
  like: boolean
}

const initialState: IImage = {
  list: [],
  source: '',
  filter: '',
  like: false
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
    changeList: (state, action: PayloadAction<[]>) => {
      state.list = action.payload;
    },
    likeManage: (state, action: PayloadAction<any>) => {
      state.list[action.payload.id].liked = action.payload.liked
      window.localStorage.setItem('posts', JSON.stringify(state.list))
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSource, changeFilter, changeList, likeManage } = gettingImage.actions;

export default gettingImage.reducer;
