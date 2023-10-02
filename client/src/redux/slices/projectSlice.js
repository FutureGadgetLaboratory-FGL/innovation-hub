import { createSlice } from '@reduxjs/toolkit';

import { getAllProjects, getProjectsByUniversityId, getProjectById, updateProjectStatus } from '../actions/projectActions.js';

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        projects: [],
        selectedProject: null,
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProjects.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getAllProjects.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.projects = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getAllProjects.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getProjectsByUniversityId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.projects = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getProjectsByUniversityId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getProjectsByUniversityId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getProjectById.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.selectedProject = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getProjectById.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getProjectById.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(updateProjectStatus.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.selectedProject = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(updateProjectStatus.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(updateProjectStatus.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export default studentSlice.reducer;