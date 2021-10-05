import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    items: [],
    modalIsOpen: false,
  },
  reducers: {
    addcart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.dish === action.payload.dish)
      if (itemIndex >= 0){
        state.items[itemIndex].qty += 1;
      }
      else {
        state.items.push(action.payload)
      }
    },
    clearcart: (state) => {
      state.items = []
    },
    removecart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.dish === action.payload.dish)
      if (state.items[itemIndex].qty > 1){
        state.items[itemIndex].qty -= 1;
      }
      else if(state.items[itemIndex].qty === 1){
        const nextCartItems = state.items.filter(cartItem => cartItem.dish !== action.payload.dish)
        state.items = nextCartItems
      }
    },
    modalState: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addcart, removecart, modalState, clearcart } = cartSlice.actions;

export default cartSlice.reducer;
