import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    title: "",
    desc: "",
    cost: 0,
  },
  reducers: {
    changeTitle: (state, actions) => {
      state.title = actions.payload;
    },
    changeDesc: (state, actions) => {
      state.desc = actions.payload;
    },
    changeCost: (state, actions) => {
      state.cost = actions.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(addCourse, (state, action) => {
      state.title = '',
      state.desc = '',
      state.cost = 0 
    })
  }
});

export const { changeTitle, changeDesc, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
