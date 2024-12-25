import React, { useContext, useEffect, useState } from 'react'
import { AuthContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useLocation } from 'react-router-dom';
import { IoShieldCheckmarkSharp } from "react-icons/io5"

const TakeAssignment = () => {

  const location = useLocation()
  const {assign} = location.state || {}
  console.log(assign,'kire');


  const data = useLoaderData();
 
  const {
    title,
    email,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
  _id} = assign || {}

  console.log(assign,'hiiiiii');

  const {user} = useContext(AuthContex)
  console.log(user);

  function handleAssignment(e){
    e.preventDefault();
    const quote = e.target.quote.value;
    const docs = e.target.docs.value;

    const note = {
      title,
      marks,
      creator:email,
      name: user?.displayName,
      email : user?.email,
      quote,
      docs,
      staus: 'pending',
      getMarks: 0,
      feedback: ''
    }

    if (user?.email === email) { // Compare user email with the creator email
      Swal.fire({
        title: "Sorry! You can't add your own assignment",
        icon: "error", // Changed icon to "error" for better context
        draggable: true
      });
      return;
    }

   console.log(note,'user info');

      fetch('http://localhost:5000/docs',{
          method: "POST",
          headers:{
            'content-type': 'application/json',
          },
          body: JSON.stringify(note)
        })
        .then(res => res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              title: "Created Assignment Successfully!",
              icon: "success",
              draggable: true
            });
          }
        })
    console.log(note);
  }

  return (
    <div className=''>
      <div className="min-h-screen py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Assignment</h2>
       <form onSubmit={handleAssignment}>
          {/* Google Docs Link */}
          <div className="mb-4">
            <label
              htmlFor="googleDocsLink"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Google Docs Link
            </label>
            <input
              type="url"
              id="googleDocsLink"
              name="docs"
              // value={formData.googleDocsLink}
              // onChange={handleChange}
              placeholder="Enter your Google Docs link"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Quick Note */}
          <div className="mb-4">
            <label
              htmlFor="quickNote"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quick Note
            </label>
            <textarea
              id="quickNote"
              name="quote"
              // value={formData.quickNote}
              // onChange={handleChange}
              placeholder="Add a quick note (optional)"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Submit Assignment
            </button>
          </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default TakeAssignment