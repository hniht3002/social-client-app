import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/slices/countSlices.js"

export default configureStore({
    reducer:{
        counter: counterReducer
    }
})
