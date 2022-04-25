import { configureStore } from "@reduxjs/toolkit";
import displayNoteReducer from "../features/displayNoteSlice";
import noteInputReducer from "../features/noteInputSlice";

export const store = configureStore({
  reducer: {
    noteInputSlice: noteInputReducer,
    displayNoteSlice: displayNoteReducer,
  },
});
