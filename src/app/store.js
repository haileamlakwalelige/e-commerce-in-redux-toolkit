import productReducer from '../features/slices/ProductSlice';
import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../features/slices/SliderSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products:productReducer,
  },
})