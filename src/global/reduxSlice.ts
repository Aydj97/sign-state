import {createSlice } from "@reduxjs/toolkit";

interface Authstate{
    user: any;
    accessToken: string | null;
     // isAuthenticated: boolean;

}

const initialState: Authstate = {
    user: null,
    accessToken: null
     // isAuthenticated: false,
}



const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
             //state.isAuthenticated = true;
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
             //state.isAuthenticated = fale;
        }

    }


})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;