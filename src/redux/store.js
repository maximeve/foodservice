import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import menuReducer from './menu';
import locationReducer from './location';

const store = configureStore({
  reducer: { cart : cartReducer,
    menu: menuReducer ,
    location: locationReducer  
  },
})

export default store