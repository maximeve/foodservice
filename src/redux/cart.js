import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    items : []
  },
  reducers: {
    addcart: (state, action) => {
      state.items = action.payload
    },
    removecart: (state, action) => {
      state.items = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addcart, removecart } = cartSlice.actions

export default cartSlice.reducer