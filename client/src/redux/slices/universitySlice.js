import { createSlice } from '@reduxjs/toolkit';

import { getAllUniversities } from '../actions/universityActions.js';

const storedUniversities = localStorage.getItem('universities') ? JSON.parse(localStorage.getItem('universities')) : [];
export const userSlice = createSlice({
    name: 'university',
    initialState: {
        universities: storedUniversities,
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUniversities.fulfilled, (state, action) => {
                if (action.payload.success) {
                    localStorage.setItem('universities', JSON.stringify(action.payload.data));
                    state.universities = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getAllUniversities.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getAllUniversities.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export default userSlice.reducer;