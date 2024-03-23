import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    allFoods: {}
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getAllData: (state, action) => {
            state.allFoods = action.payload;
        },
        increaseItem: (state, action) => {
            const item = state.allFoods.find((item) => item._id === action.payload);
            if (item && item.quantity < 10) {
                item.quantity += 1;
            }
        },
        decreaseItem:(state,action)=>{
            const item = state.allFoods.find((item)=>item._id === action.payload)
            if(item && item.quantity >1){
                item.quantity -=1
            }
        }
        
    }
});

export const { getAllData ,increaseItem,decreaseItem} = foodSlice.actions;
export default foodSlice.reducer;

