import { createSlice } from '@reduxjs/toolkit';

import { getAllSpocs, getSpocById, getSpocsByUniversityId, updateSpoc, updateSpocStatus } from '../actions/spocActions.js';

export const spocSlice = createSlice({
    initialState: {
        spocs: [],
        selectedSpoc: null,
        loading: false,
        err: null,
    },
    name: 'spoc',
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllSpocs.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.spocs = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getAllSpocs.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getAllSpocs.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    }
});

export default spocSlice.reducer;