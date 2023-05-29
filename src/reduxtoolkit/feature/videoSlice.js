import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    videoList: [],
    video: {}
}
const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        getVideos(name) {
            return name;
        },
        setVideos: (state, action) => {
            console.log(action.payload.items);
            state.videoList = action.payload.items
;
        }
    }
})

export const { getVideos, setVideos } = videoSlice.actions
export default videoSlice.reducer;
