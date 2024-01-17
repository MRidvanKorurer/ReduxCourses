import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

const CourseList = () => {
  const dispatch = useDispatch();

  const { courses } = useSelector(({ form, course: { searchTerm, data } }) => {
    const filteredCourse = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { courses: filteredCourse };
  });

  // console.log(useSelector((state) => state.course.data))

  return (
    <div>
      {courses?.map((item) => {
        return (
          <div
            className="border my-4 flex justify-center items-center flex-col gap-5 shadow-xl p-1"
            key={item.id}
          >
            <h2 className=" font-bold text-xl">{item.title}</h2>
            <p>{item.desc}</p>
            <span className=" font-bold">{item.cost}$</span>
            <button
              onClick={() => dispatch(removeCourse(item.id))}
              className=" bg-red-700 text-white rounded w-20 "
            >
              Sil
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
