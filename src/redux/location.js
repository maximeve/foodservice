import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: '',
    search: ''
  },
  reducers: {
    setlocation: (state, action) => {
      state.location = action.payload
    },
    setsearch: (state, action) => {
      state.search = action.payload
    } 
  },
});

// Action creators are generated for each case reducer function
export const { setlocation, setsearch } = locationSlice.actions;

export default locationSlice.reducer;
