import { createSlice } from '@reduxjs/toolkit';

import { getAllProjects, getProjectsByUniversityId } from '../actions/projectActions.js';

const storedProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        projects: storedProjects,
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
                    localStorage.setItem('projects', JSON.stringify(action.payload.data));
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
                    localStorage.setItem('projects', JSON.stringify(action.payload.data));
                    state.universities = action.payload.data;
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
    },
});

export default studentSlice.reducer;