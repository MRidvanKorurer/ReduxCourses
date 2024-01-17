import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse: (state, actions) => {
      state.data.push({
        title: actions.payload.title,
        desc: actions.payload.desc,
        cost: actions.payload.cost,
        id: nanoid(),
      });
    },

    removeCourse: (state, actions) => {
        const updatedCourses = state.data.filter((item) => {
            return(
                item.id !== actions.payload
            );
        });
        state.data = updatedCourses;
    },

    searchCourse: (state, actions) => {
        state.searchTerm = actions.payload;
    }
  },
});

export const { addCourse, removeCourse, searchCourse } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
