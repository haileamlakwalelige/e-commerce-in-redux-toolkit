import productReducer from '../features/slices/ProductSlice';
import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../features/slices/SliderSlice'
import cartReducer from '../features/slices/cartSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products:productReducer,
    cart:cartReducer,
  },
})