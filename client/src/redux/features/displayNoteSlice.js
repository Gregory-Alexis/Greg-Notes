import { createSlice } from "@reduxjs/toolkit";

export const displayNoteSlice = createSlice({
  name: "displayNote",
  initialState: {
    notes: [],
    isActive: false,
    updated: false,
  },
  reducers: {
    setNotes: (state, action) => {
      return {
        ...state,
        notes: action.payload,
      };
    },
    setIsActive: (state, action) => {
      return {
        ...state,
        isActive: action.payload,
      };
    },

    setUpdated: (state, action) => {
      return {
        ...state,
        updated: action.payload,
      };
    },
  },
});

export const { setNotes, setIsActive, setIsModalOpen, setUpdated } =
  displayNoteSlice.actions;
export default displayNoteSlice.reducer;
