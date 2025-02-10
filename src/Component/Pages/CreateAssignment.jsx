import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../Provider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import img from "../../assets/assignment.png";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const { user } = useContext(AuthContex);
  const [startDate, setStartDate] = useState(new Date());

  function handleFormData(e) {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const dueDate = form.dueDate.value;

    const assignment = {
      email,
      title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
    };

    console.log(assignment);

    fetch("https://assignment-crub-fullstack.vercel.app/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Created Assignment Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  }

  return (
    // <div className='flex flex-col md:flex-row gap-2'>

    //   <div className='flex-1'>
    //       <img src={img} className='w-full md:w-4/5' />
    //   </div>

    //   <div className="max-w-lg mx-auto flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
    //   <h2 className="text-2xl font-bold mb-6 text-center">Create Assignment</h2>
    //   <form onSubmit={handleFormData}>
    //     {/* Title */}
    //     <div className="mb-4">
    //       <label htmlFor="title" className="block text-sm font-medium mb-2">
    //         Title
    //       </label>
    //       <input
    //         type="text"
    //         id="title"
    //         name="title"
    //         placeholder="Enter assignment title"
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Email  */}
    //     <div className="mb-4">
    //       <label htmlFor="title" className="block text-sm font-medium mb-2">
    //        Email
    //       </label>
    //       <input
    //         type="text"
    //         id="email"
    //         name="email"
    //         defaultValue={user?.email}
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Description */}
    //     <div className="mb-4">
    //       <label htmlFor="description" className="block text-sm font-medium mb-2">
    //         Description
    //       </label>
    //       <textarea
    //         id="description"
    //         name="description"
    //         placeholder="Enter assignment description"
    //         rows="4"
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       ></textarea>
    //     </div>

    //     {/* Marks */}
    //     <div className="mb-4">
    //       <label htmlFor="marks" className="block text-sm font-medium mb-2">
    //         Marks
    //       </label>
    //       <input
    //         type="number"
    //         id="marks"
    //         name="marks"
    //         placeholder="Enter total marks"
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Thumbnail URL */}
    //     <div className="mb-4">
    //       <label htmlFor="thumbnail" className="block text-sm font-medium mb-2">
    //         Thumbnail Image URL
    //       </label>
    //       <input
    //         type="url"
    //         id="thumbnail"
    //         name="thumbnail"
    //         defaultValue={'https://i.ibb.co.com/W5WDc4f/pic-3.jpg'}
    //         placeholder="Enter thumbnail image URL"
    //         className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Difficulty Level */}
    //     <div className="mb-4">
    //       <label htmlFor="difficulty" className="block text-sm font-medium mb-2">
    //         Difficulty Level
    //       </label>
    //       <select
    //         id="difficulty"
    //         name="difficulty"
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       >
    //         <option value="easy">Easy</option>
    //         <option value="medium">Medium</option>
    //         <option value="hard">Hard</option>
    //       </select>
    //     </div>

    //     {/* Due Date */}
    //     <div className="mb-6">
    //       <label htmlFor="dueDate" className="block text-sm font-medium mb-2">
    //       <DatePicker
    //             className="border p-2 rounded-md"
    //             selected={startDate}
    //             onChange={(date) => setStartDate(date)}
    //           />
    //       </label>
    //       <input
    //         type="date"
    //         id="dueDate"
    //         name="dueDate"
    //         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    //       />
    //     </div>

    //     {/* Submit Button */}
    //     <button
    //       type="submit"
    //       className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
    //     >
    //       Submit Assignment
    //     </button>
    //   </form>
    //    </div>

    // </div>

    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8 bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl shadow-2xl">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={img}
          alt="Assignment"
          className="w-full md:w-4/5 border-2 bg-pink-500 border-pink-200 rounded-xl shadow-xl object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Form Section */}
      <div className="max-w-lg mx-auto flex-1 bg-white p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-pink-600 tracking-wide">
          Create Assignment
        </h2>

        <form onSubmit={handleFormData} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter assignment title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={user?.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter assignment description"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            ></textarea>
          </div>

          {/* Marks */}
          <div>
            <label
              htmlFor="marks"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Marks
            </label>
            <input
              type="number"
              id="marks"
              name="marks"
              placeholder="Enter total marks"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Thumbnail URL */}
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thumbnail Image URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              defaultValue="https://i.ibb.co.com/W5WDc4f/pic-3.jpg"
              placeholder="Enter thumbnail image URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 font-semibold text-lg"
          >
            Submit Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
