import { configureStore } from "@reduxjs/toolkit";
import slice  from "./Slice";

export default configureStore({
    reducer:{
      cartbox:slice,
      favorite:slice
    }
})