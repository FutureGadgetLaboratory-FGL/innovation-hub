import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api/index.js';

export const signin = createAsyncThunk('signin', async (user, { rejectWithValue }) => {
    try {
        const response = await api.signin(user);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const signup = createAsyncThunk('signup', async (user, { rejectWithValue }) => {
    try {
        const response = await api.signup(user);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});