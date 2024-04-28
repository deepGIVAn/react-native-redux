import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      //   console.log("state", state);
      //   console.log("action", action);
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
