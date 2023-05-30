import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoggedIn: false,
    email: null,
    password: null,
    error: null,
}
let authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginsuccess: (state, action) => {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.error = null;
        },
        loginfail: (state, action) => {
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
            state.error = action.payload;
        },
        regsuccess: (state, action) => {
            state.isLoggedIn = false;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.error = null;
        },
        regfail: (state, action) => {
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
            state.error = action.payload;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
            state.error = null;
        },
    }
})
export const { loginfail, loginsuccess, regsuccess, regfail,logout } = authslice.actions;
export default authslice.reducer;