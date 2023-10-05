import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import universityReducer from './slices/universitySlice';
import studentSlice from './slices/studentSlice';
import projectSlice from './slices/projectSlice';
import collaborationSlice from './slices/collaborationSlice';
import spocSlice from './slices/spocSlice';
import uAdminSlice from './slices/uAdminSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        university: universityReducer,
        student: studentSlice,
        project: projectSlice,
        collaboration: collaborationSlice,
        spoc: spocSlice,
        uAdmin: uAdminSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
