import React from 'react'
import { useSelector } from 'react-redux';


const CourseValue = () => {

  const totalCost = useSelector(({ form, course: { searchTerm, data } }) => {
    const filteredCourse = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let total = 0;

    for(let i of filteredCourse) { 
      total += i.cost;
    }

    return total;
  });

  return (
    <div className=' flex justify-center items-center my-4 border w-96 ml-auto text-center p-4 rounded shadow-xl'> 
      <p className=' font-bold text-lg'>Toplam Tutar: {totalCost}$</p>
    </div>
  )
}

export default CourseValue