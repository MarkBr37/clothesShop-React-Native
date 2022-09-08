import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems } from '../utils/fetchItems';

export const fetchAllItems = createAsyncThunk(
    'fetchAllItems',
    async () => {
        const res = await fetchItems();
        return res;
    }
)

const initialState = {
    items: {},
    savedsSet: [],
    currntSet: {},
}

const shopSlice = createSlice({
    name: 'shopReducer',
    initialState,
    reducers: {
        addCurrntSet( state, action ){
            
            state.currntSet[action.payload.type] = action.payload;
        },
        saveSet( state, action ){
            
            state.savedsSet.push(action.payload);
        },
        removeCurrntSet( state ){
            state.currntSet = {}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllItems.fulfilled, (state, action) => {
            state.items = action.payload;
        })
    }
})

export const { addCurrntSet, saveSet, removeCurrntSet } = shopSlice.actions;

export default shopSlice.reducer;