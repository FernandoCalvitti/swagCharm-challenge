import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../components/ProductsGrid/ProductsGrid";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState as any,
  reducers: {
    addProductToCart: (state, action: any) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
    removeProductFromCart: (state, action: any) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(
        (product: Item) => product.id !== productId
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
