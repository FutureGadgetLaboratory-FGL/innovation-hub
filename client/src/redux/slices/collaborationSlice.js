import { createSlice } from "@reduxjs/toolkit";

import { getAllCollaborations, getCollaborationsByUniversityId, getPendingCollaborationsByUniversityId, getCollaborationsByStudentId, acceptCollaboration, rejectCollaboration } from "../actions/collaborationActions.js";

export const collaborationSlice = createSlice({
    name: 'collaboration',
    initialState: {
        collaborations: [],
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCollaborations.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getAllCollaborations.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getAllCollaborations.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getCollaborationsByUniversityId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getCollaborationsByUniversityId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getCollaborationsByUniversityId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getPendingCollaborationsByUniversityId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getPendingCollaborationsByUniversityId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getPendingCollaborationsByUniversityId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getCollaborationsByStudentId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getCollaborationsByStudentId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getCollaborationsByStudentId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(acceptCollaboration.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = state.collaborations.filter(collaboration => collaboration._id !== action.payload.data._id);
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(acceptCollaboration.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(acceptCollaboration.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(rejectCollaboration.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.collaborations = state.collaborations.filter(collaboration => collaboration._id !== action.payload.data._id);
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(rejectCollaboration.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(rejectCollaboration.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export default collaborationSlice.reducer;