import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo", 
    initialState:[],
    reducers :{
        todoAdd : (state,action)=>{state.push(action.payload)},
        todoDel : (state,action)=>{return state.filter((_,id)=>id!=action.payload)}
    }
})

export const {todoAdd,todoDel} = todoSlice.actions;

export default todoSlice.reducer;