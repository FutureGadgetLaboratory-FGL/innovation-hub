import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllSpocs = createAsyncThunk(
    "spoc/getAllSpocs",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllSpocs();

            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getSpocById = createAsyncThunk(
    "spoc/getSpocById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getSpocById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getSpocsByUniversityId = createAsyncThunk(
    "spoc/getSpocsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getSpocsByUniversityId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateSpoc = createAsyncThunk(
    "spoc/updateSpoc",
    async ({ id, spoc }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateSpoc(id, spoc);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateSpocStatus = createAsyncThunk(
    "spoc/updateSpocStatus",
    async ({ id, status, verifiedBy }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateSpocStatus(id, status, verifiedBy);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteSpoc = createAsyncThunk(
    "spoc/deleteSpoc",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.deleteSpoc(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const assignUAdmin = createAsyncThunk(
    "spoc/assignUAdmin",
    async ( universityAdmin, { rejectWithValue }) => {
        try {
            const { data } = await api.signup(universityAdmin);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);