import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    videoList: [],
    video: {}
}
const videoSlice = createSlice({
    name: "video",
    initialState: initialState,
    reducers: {
        getVideos(name) {
            return name;
        },
        setVideos:(state,action)=>{
        console.log(action.payload.contents);
        state.videoList=action.payload.contents;
        }
    }
})

export const {getVideos,setVideos} =videoSlice.actions
export default videoSlice.reducer;