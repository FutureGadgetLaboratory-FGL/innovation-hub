import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllUniversityAdmins = createAsyncThunk(
    "universityAdmin/getAllUniversityAdmins",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllUniversityAdmins();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUniversityAdminById = createAsyncThunk(
    "universityAdmin/getUniversityAdminById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getUniversityAdminById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUniversityAdminsByUniversityId = createAsyncThunk(
    "universityAdmin/getUniversityAdminsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getUniversityAdminsByUniversityId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUniversityAdmin = createAsyncThunk(
    "universityAdmin/updateUniversityAdmin",
    async ({ id, universityAdmin }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateUniversityAdmin(id, universityAdmin);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUniversityAdminStatus = createAsyncThunk(
    "universityAdmin/updateUniversityAdminStatus",
    async ({ id, status }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateUniversityAdminStatus(id, status);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteUniversityAdmin = createAsyncThunk(
    "universityAdmin/deleteUniversityAdmin",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.deleteUniversityAdmin(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);