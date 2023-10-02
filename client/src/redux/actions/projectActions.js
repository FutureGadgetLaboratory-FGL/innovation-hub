import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api/index.js";

export const getAllProjects = createAsyncThunk(
    "project/getAllProjects",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getAllProjects();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getProjectById = createAsyncThunk(
    "project/getProjectById",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getProjectById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getProjectsByUniversityId = createAsyncThunk(
    "project/getProjectsByUniversityId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getProjectsByUniversityId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getProjectsByStudentId = createAsyncThunk(
    "project/getProjectsByStudentId",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.getProjectsByStudentId(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createProject = createAsyncThunk( 
    "project/createProject",
    async (project, { rejectWithValue }) => {
        try {
            const { data } = await api.createProject(project);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateProject = createAsyncThunk(
    "project/updateProject",
    async ({ id, project }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateProject(id, project);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateProjectStatus = createAsyncThunk(
    "project/updateProjectStatus",
    async ({ id, status, verifiedBy, verifiedByType }, { rejectWithValue }) => {
        try {
            const { data } = await api.updateProjectStatus(id, status, verifiedBy, verifiedByType);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteProject = createAsyncThunk(
    "project/deleteProject",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.deleteProject(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const likeProject = createAsyncThunk(
    "project/likeProject",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.likeProject(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const unlikeProject = createAsyncThunk(
    "project/unlikeProject",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.unlikeProject(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const commentProject = createAsyncThunk(
    "project/commentProject",
    async ({ id, comment }, { rejectWithValue }) => {
        try {
            const { data } = await api.commentProject(id, comment);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const reviewProject = createAsyncThunk(
    "project/reviewProject",
    async ({ id, review }, { rejectWithValue }) => {
        try {
            const { data } = await api.reviewProject(id, review);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const shareProject = createAsyncThunk(
    "project/shareProject",
    async ({ id, share }, { rejectWithValue }) => {
        try {
            const { data } = await api.shareProject(id, share);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
