import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    videoList: [],
    video: {},
    nextPageToken: null
}
const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        getVideos(name,action) {
            return {
            ...name
            };
        },
        setVideos: (state, action) => {
            console.log(action);
            state.videoList = [...state.videoList, ...action.payload.items];
            state.nextPageToken = action.payload.nextPageToken;
        }
    }
})
export const { getVideos, setVideos } = videoSlice.actions
export default videoSlice.reducer;
