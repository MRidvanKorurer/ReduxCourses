import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeDesc, changeTitle } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

const CourseForm = () => {
  const dispatch = useDispatch();

  const { title, desc, cost } = useSelector((state) => {
    return {
      title: state.form.title,
      desc: state.form.desc,
      cost: state.form.cost,
    };
  });

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCourse({title, desc, cost}));
  }

  return (
    <div className=" flex flex-col gap-4 border shadow-xl px-8 py-4 rounded-lg">
      <div>
        <h2 className=" font-bold text-2xl border-b-4 border-indigo-800 inline-block">
          Kurs Ekle
        </h2>
      </div>
      <div className=" flex justify-around items-center">
        <form className=" flex justify-center items-center gap-5">
          <div className=" flex gap-2 justify-center items-center">
            <label className=" font-bold text-lg">Ad</label>
            <input
              className=" border border-indigo-800 rounded p-1"
              type="text"
              onChange={(e) => dispatch(changeTitle(e.target.value))}
              value={title}
            />
          </div>

          <div className=" flex gap-2 justify-center items-center">
            <label className=" font-bold text-lg">Açıklama</label>
            <textarea
              rows={4}
              className=" border border-indigo-800 rounded p-1"
              type="text"
              onChange={(e) => dispatch(changeDesc(e.target.value))}
              value={desc}
            />
          </div>

          <div className=" flex gap-2 justify-center items-center">
            <label className=" font-bold text-lg">Fiyat</label>
            <input
              className=" border border-indigo-800 rounded p-1"
              type="number"
              onChange={(e) => dispatch(changeCost(parseInt(e.target.value)))}
              value={cost}
            />
          </div>
        </form>
        <div>
          <button onClick={handleClick} className=" bg-indigo-800 text-white hover:bg-indigo-700 transition-all w-32 py-2 rounded">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
