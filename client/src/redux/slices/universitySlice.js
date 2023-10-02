import { createSlice } from '@reduxjs/toolkit';

import { getAllUniversities, getUniversitiesByFilter } from '../actions/universityActions.js';

export const userSlice = createSlice({
    name: 'university',
    initialState: {
        universities: [],
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUniversities.fulfilled, (state, action) => {
                if (action.payload.success) {
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
            .addCase(getUniversitiesByFilter.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.universities = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getUniversitiesByFilter.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getUniversitiesByFilter.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export default userSlice.reducer;