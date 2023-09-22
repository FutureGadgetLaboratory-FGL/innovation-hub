import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import universityReducer from './slices/universitySlice';
import studentSlice from './slices/studentSlice';
import projectSlice from './slices/projectSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        university: universityReducer,
        student: studentSlice,
        project: projectSlice,
    },
});
