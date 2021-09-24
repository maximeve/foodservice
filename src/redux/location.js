import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: ''
  },
  reducers: {
    setlocation: (state, action) => {
      state.location = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setlocation } = locationSlice.actions;

export default locationSlice.reducer;
