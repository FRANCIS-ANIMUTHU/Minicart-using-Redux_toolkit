import { createSlice } from "@reduxjs/toolkit";


export const slice=createSlice({
    name:'React',
initialState:{
    cartbox:[],
    favorite:[]
},
reducers:{
    addCart:(state,action)=>{
        state.cartbox=action.payload
        console.log(state);
    },
    addfav:(state,action)=>{
        state.favorite=action.payload
        console.log(state);
    }
} 
},
)
export  const{addCart,addfav}=slice.actions;
export default slice.reducer;