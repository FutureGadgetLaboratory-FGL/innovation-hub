import { createSlice } from '@reduxjs/toolkit';

import { signin, signup } from '../actions/authActions.js';

const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: storedUser,
        loading: false,
        err: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            state.user = null;
            state.loading = false;
            state.err = null;
            window.location.href = '/';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signin.fulfilled, (state, action) => {
                if (action.payload.success) {
                    localStorage.setItem('user', JSON.stringify(action.payload.data));
                    localStorage.setItem('token', action.payload.token);
                    state.user = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                } 
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(signin.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(signup.fulfilled, (state, action) => {
                if (action.payload.success) {
                    localStorage.setItem('user', JSON.stringify(action.payload.data));
                    localStorage.setItem('token', action.payload.token);
                    state.user = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                } 
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(signup.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;