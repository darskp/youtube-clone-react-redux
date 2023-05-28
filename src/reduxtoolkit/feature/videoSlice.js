import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isToggle: false,
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
            state.videoList = action.payload.contents;
        }
    }
})
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: initialState.isToggle,
  reducers: {
    toggleAction: (state,action) => {
        console.log(action);
       if (action.type === 'TOGGLE') {
    return !state;
  }
  return state;
    },
  },
});
export const { getVideos, setVideos} = videoSlice.actions
export default videoSlice.reducer;
export const {toggleSliceReducer}=toggleSlice.reducer;
export const { toggleAction } = toggleSlice.actions;
