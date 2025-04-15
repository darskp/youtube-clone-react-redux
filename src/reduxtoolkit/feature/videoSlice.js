import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    videoList: [],
    video: {},
    nextPageToken: null,
    error: null,
}
const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        getVideos(state, action) {
            return {
                ...state,
                videoList: [],
                nextPageToken: null,
                error: null,
            };
        },
        setVideos: (state, action) => {
            console.log(action);
            state.videoList = [...state.videoList, ...action.payload.items];
            state.nextPageToken = action.payload.nextPageToken;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})
export const { getVideos, setVideos,setError } = videoSlice.actions
export default videoSlice.reducer;
