import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../components/ProductsGrid/ProductsGrid";

const initialState = {
  totalCount: 0,
  productsList: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState as any,
  reducers: {
    addProductToCart: (state, action: any) => {
      state.productsList = [
        ...state.productsList,
        {
          ...action.payload,
          quantity: 1 || 0,
          totalItem: action.payload.price,
        },
      ];
      state.totalCount += 1;
    },
    removeProductFromCart: (state, action: any) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(
        (product: Item) => product.id !== productId
      );
    },
    changeQuantity: (state, action: any) => {
      const { id, amount } = action.payload;
      const index = state.productsList.findIndex((item: any) => item.id === id);

      let newShoppingCart = [...state.productsList];
      newShoppingCart[index].quantity = amount;
      newShoppingCart[index].totalItem =
        newShoppingCart[index].quantity * newShoppingCart[index].price;

      state.productsList = newShoppingCart;
    },
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.productsList.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  changeQuantity,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
