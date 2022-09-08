import { configureStore } from "@reduxjs/toolkit";
import shopReducer, {fetchAllItems} from "./shopReducers";

export const store = configureStore({
    reducer: { 
        shopReducer,
    },
})

store.subscribe(()=>{
    // console.log(store.getState().shopReducer);
})
store.dispatch(fetchAllItems());