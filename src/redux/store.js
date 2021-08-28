import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import menuReducer from './menu';

const store = configureStore({
  reducer: { cart : cartReducer,
    menu: menuReducer  
  },
})

export default store