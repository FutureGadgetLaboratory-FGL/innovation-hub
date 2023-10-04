import { createSlice } from "@reduxjs/toolkit";

import { getUniversityAdminsByUniversityId } from "../actions/universityAdminActions";

const uAdminSlice = createSlice({
    name: 'uAdmin',
    initialState: {
        uAdmins: [],
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUniversityAdminsByUniversityId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.uAdmins = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getUniversityAdminsByUniversityId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getUniversityAdminsByUniversityId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload.err;
            })
    }
})

export default uAdminSlice.reducer;