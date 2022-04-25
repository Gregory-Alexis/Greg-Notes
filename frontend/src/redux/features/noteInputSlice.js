import { createSlice } from "@reduxjs/toolkit";

export const noteInputSlice = createSlice({
  name: "noteInput",
  initialState: {
    isActive: false,
    note: "",
    title: "",
  },
  reducers: {
    setNote: (state, action) => {
      return {
        ...state,
        note: action.payload,
      };
    },
    setTitle: (state, action) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    setIsActive: (state, action) => {
      return {
        ...state,
        isActive: action.payload,
      };
    },
  },
});

export const { setNote, setTitle, setIsActive } = noteInputSlice.actions;
export default noteInputSlice.reducer;
