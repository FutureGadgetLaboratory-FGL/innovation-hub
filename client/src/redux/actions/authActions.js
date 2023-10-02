import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api/index.js';

export const signin = createAsyncThunk('signin', async (user, { rejectWithValue }) => {
    try {
        console.log("Making signin request with data: ", user);
        const { data } = await api.signin(user);
        console.log("Got response: ", data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const signup = createAsyncThunk('signup', async (user, { rejectWithValue }) => {
    try {
        const { data } = await api.signup(user);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});