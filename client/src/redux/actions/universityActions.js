import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllUniversities = createAsyncThunk(
    "university/getAllUniversities",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllUniversities();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUniversityById = createAsyncThunk(
    "university/getUniversityById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getUniversityById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUniversitiesByFilter = createAsyncThunk(
    "university/getUniversitiesByFilter",
    async (filter, { rejectWithValue }) => {
        try {
            const { data } = await api.getUniversitiesByFilter(filter);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUniversity = createAsyncThunk(
    "university/registerUniversity",
    async (university, { rejectWithValue }) => {
        try {
            const { data } = await api.registerUniversity(university);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUniversity = createAsyncThunk(
    "university/updateUniversity",
    async ({ id, university }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateUniversity(id, university);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUniversityStatus = createAsyncThunk(
    "university/updateUniversityStatus",
    async ({ id, status, verifiedBy }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateUniversityStatus(id, status, verifiedBy);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteUniversity = createAsyncThunk(
    "university/deleteUniversity",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.deleteUniversity(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);