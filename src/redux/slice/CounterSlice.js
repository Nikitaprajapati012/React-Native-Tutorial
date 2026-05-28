import {createSlice} from '@reduxjs/toolkit'


//Action , Reducer , Store
export const counterReduxSlice = createSlice({
name: 'counter',
 initialState:{
    value:0,
 },
 reducer:{
    increment:(state) => {state.value+=1
 },
decrement: (state) => {state.value-=1},
reset : (state) => {state.value = 0}
},
}
)
export const {increment,decrement,reset} = counterReduxSlice.actions;
export default counterReduxSlice.reducer;