import { createSlice } from '@reduxjs/toolkit';
import {storeData } from '../../assets/data/data';





  export const ProductSlice = createSlice({
    name: 'product',
    initialState:{
      filterateProduct:JSON.parse(sessionStorage.getItem('filterData'))||storeData,
      singleProduct:JSON.parse(sessionStorage.getItem('singleProduct'))||storeData,
    },
    
    reducers:{
             filtersProduct(state, action){
                try{
                    const filters= storeData.filter((product)=> product.type ===action.payload);
                    state.filterateProduct = filters;
                    console.log('filter',filters);
                    const saveState = JSON.stringify(filters);
                    sessionStorage.setItem("filterData",saveState);
                }catch(err){
                    return err;
                }
             },
             oneProduct(state, action){
              try{
                const single=storeData.filter((product)=>product.id === action.payload);
                state.singleProduct = single;
                console.log('single',single);
                const saveData=JSON.stringify(single);
                sessionStorage.setItem("singleProduct",saveData);
              }catch(err){
                return err;
              }
             },
          },
    })
  

  export const { filtersProduct, oneProduct } = ProductSlice.actions;
  export default ProductSlice.reducer;