import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllSuperAdmins = createAsyncThunk(
    "superAdmin/getAllSuperAdmins",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllSuperAdmins();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getSuperAdminById = createAsyncThunk(
    "superAdmin/getSuperAdminById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getSuperAdminById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const setSuperAdminPassword = createAsyncThunk(
    "superAdmin/setSuperAdminPassword",
    async ({ id, password }, { rejectWithValue }) => {
        try {
            const { data } = await api.setSuperAdminPassword(id, password);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);