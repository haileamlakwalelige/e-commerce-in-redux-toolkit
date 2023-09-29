
import sliderData from '../../assets/data/data';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  length:sliderData.length,
}

export const SliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers:{
            nextSlider(state, action){
                console.log("action",action);
                console.log("state",state);
                state.value = action.payload > state.length -1 ? 0: action.payload;
            },
            prevSlider(state, action){
                console.log("action",action);
                console.log("state",state);
                state.value=action.payload < 0 ? state.length -1: action.payload;
            },
        },
  },)

// Action creators are generated for each case reducer function
export const { nextSlider, prevSlider } = SliderSlice.actions

export default SliderSlice.reducer