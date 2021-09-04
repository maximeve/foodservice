import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    items : [],
    modalIsOpen : false
  },
  reducers: {
    addcart: (state, action) => {
      state.items = [...state.items,action.payload]
      console.log(state.items)
    },
    removecart: (state, action) => {
      state.items = action.payload
    },
    modalState: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addcart, removecart, modalState } = cartSlice.actions

export default cartSlice.reducer