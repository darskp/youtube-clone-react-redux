import { createSlice } from "@reduxjs/toolkit";

let initialState={
videoList:[],
video:{}
}
const videoSlice=createSlice({
name:"video",
initialState:initialState,
})

export default videoSlice.reducer;