import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryfee: 12,
  freeDeliveryfee: 300,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== productId
        );
      }
    },
  },
});

export const { addCartItem, changeQuantity } = cartSlice.actions;

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubTotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state) => state.cart;

export const selectDeliveryFee = createSelector(
  selectSubTotal,
  cartSelector,
  (subtotal, cart) => (subtotal < cart.freeDeliveryfee ? 0 : cart.deliveryfee)
);

export const selectTotal = createSelector(
  selectSubTotal,
  selectDeliveryFee,
  (subtotal, fee) => subtotal + fee
);

export default cartSlice.reducer;
