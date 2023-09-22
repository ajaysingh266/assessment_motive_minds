import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../initialState";

export const productReducer = createSlice({
  name: "products",
  initialState: productState,
  reducers: {
    getProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { getProducts } = productReducer.actions;
export default productReducer.reducer;
