import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCourse } from "../store/slices/courseSlice";

const CourseSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.course.searchTerm);

  return (
    <div className=" flex justify-center items-center my-4">
      <input
        value={searchTerm}
        onChange={(e) => dispatch(searchCourse(e.target.value))}
        type="text"
        className="border p-1 w-96 rounded shadow-xl border-indigo-800 "
        placeholder="Kurs ara..."
      />
    </div>
  );
};

export default CourseSearch;
