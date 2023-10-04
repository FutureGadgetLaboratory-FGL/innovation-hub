import { createSlice } from '@reduxjs/toolkit';

import { getAllStudents, getStudentsByFilter, getStudentsByUniversityId } from '../actions/studentActions.js';

const storedStudents = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: storedStudents,
        loading: false,
        err: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getStudentsByUniversityId.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.students = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getStudentsByUniversityId.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getStudentsByUniversityId.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getAllStudents.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.students = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getAllStudents.pending, (state, action) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getAllStudents.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
            .addCase(getStudentsByFilter.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.students = action.payload.data;
                    state.err = null;
                } else if (action.payload.err) {
                    state.err = action.payload.err;
                }
                state.loading = false;
                console.log(action.payload.message);
            })
            .addCase(getStudentsByFilter.pending, (state) => {
                state.loading = true;
                state.err = null;
            })
            .addCase(getStudentsByFilter.rejected, (state, action) => {
                state.loading = false;
                state.err = action.payload;
            })
    },
});

export default studentSlice.reducer;