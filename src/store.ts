import { configureStore, createSlice } from "@reduxjs/toolkit";

// A temporary empty slice to prevent the error
const dummySlice = createSlice({
  name: "dummy",
  initialState: {},
  reducers: {},
});

export const superAppStore = configureStore({
  reducer: {
    dummy: dummySlice.reducer, // Placeholder reducer to prevent the error
  },
});

export type RootState = ReturnType<typeof superAppStore.getState>;
export type AppDispatch = typeof superAppStore.dispatch;
