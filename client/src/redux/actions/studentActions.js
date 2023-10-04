import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllStudents = createAsyncThunk(
    "student/getAllStudents",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllStudents();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStudentById = createAsyncThunk(
    "student/getStudentById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getStudentById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStudentsByUniversityId = createAsyncThunk(
    "student/getStudentsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getStudentsByUniversityId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStudentsByFilter = createAsyncThunk(
    "student/getStudentsByFilter",
    async (filter, { rejectWithValue }) => {
        try {
            const { data } = await api.getStudentsByFilter(filter);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerStudent = createAsyncThunk(
    "student/registerStudent",
    async (student, { rejectWithValue }) => {
        try {
            const { data } = await api.registerStudent(student);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateStudent = createAsyncThunk(
    "student/updateStudent",
    async ({ id, student }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateStudent(id, student);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateStudentStatus = createAsyncThunk(
    "student/updateStudentStatus",
    async ({ id, status, verifiedBy }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateStudentStatus(id, status, verifiedBy);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteStudent = createAsyncThunk(
    "student/deleteStudent",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.deleteStudent(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);