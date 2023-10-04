import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllCollaborations = createAsyncThunk(
    "collaboration/getAllCollaborations",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllCollaborations();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getCollaborationById = createAsyncThunk(
    "collaboration/getCollaborationById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getCollaborationById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }   
);

export const getCollaborationsByUniversityId = createAsyncThunk(
    "collaboration/getCollaborationsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getCollaborationsByUniversityId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getPendingCollaborationsByUniversityId = createAsyncThunk(
    "collaboration/getPendingCollaborationRequestsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getCollaborationsByUniversityId(id);
            let pendingCollaborations = data.data.filter(collaboration => collaboration.status === "pending");
            let pendingCollaborationsData = {
                success: data.success,
                message: data.message,
                data: pendingCollaborations
            };
            return pendingCollaborationsData;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getCollaborationsByStudentId = createAsyncThunk(
    "collaboration/getCollaborationsByStudentId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getCollaborationsByStudentId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createCollaboration = createAsyncThunk(
    "collaboration/createCollaboration",
    async (collaboration, { rejectWithValue }) => {
        try {
            const { data } = await api.createCollaboration(collaboration);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const acceptCollaboration = createAsyncThunk(
    "collaboration/acceptCollaboration",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.acceptCollaboration(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const rejectCollaboration = createAsyncThunk(
    "collaboration/rejectCollaboration",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.rejectCollaboration(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);