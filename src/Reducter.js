import { createReducer } from "@reduxjs/toolkit";
let initialState={
    c:0,
}

export const customReducer = createReducer(initialState,{
    increment: (state) => {
        state.c += 1
    },
    decrement: (state) => {
      state.c -= 1
    },
    incrementByAmount: (state, action) => {
      state.c += action.payload
    }
        
        
});