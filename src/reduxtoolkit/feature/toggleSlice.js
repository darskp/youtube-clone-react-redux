import { createSlice } from "@reduxjs/toolkit";

let toggleintialState = {
    isToggle: false,
}
const toggleSlice = createSlice({
    name: 'toggle',
    initialState: toggleintialState,
    reducers: {
    toggleAction: (state, action) => {
      state.isToggle = !state.isToggle;
    },
  },
});
export default toggleSlice.reducer;
export const { toggleAction } = toggleSlice.actions;
