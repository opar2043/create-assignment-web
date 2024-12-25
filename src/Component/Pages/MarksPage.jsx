import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

const MarksPage = () => {
 
  const {id} = useParams()
  console.log(id);
  const navigate = useNavigate()

function handleMarks(e){
        e.preventDefault();
    
        const form = e.target;
        const  getMarks = parseFloat(form.getMarks.value);
        const  feedback = form.feedback.value;

    
        const docs ={
          getMarks,
               feedback,
               staus: 'complete'
        }
       fetch(`http://localhost:5000/docs/${id}`,{
          method: "PUT",
          headers:{
            'content-type': 'application/json',
          },
          body: JSON.stringify(docs)
        })
        .then(res => res.json())
        .then(data=>{
          if(data.modifiedCount){
            Swal.fire({
              title: "Marks Given Successfully!",
              icon: "success",
              draggable: true
            });
            navigate('/allpending')
          }
        })
      }
    

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Grade Assignment</h1>
      <div className="mb-4">
        <p>
          <strong>Google Docs Link:</strong>{" "}
          <a
            // href={assignment.googleDocsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open Document
          </a>
        </p>
        <p>
          {/* <strong>Notes Submitted:</strong> {assignment?.notes} */}
        </p>
      </div>
      <form onSubmit={handleMarks}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Marks:
          </label>
          <input
            type="number"
            className="border rounded w-full px-3 py-2 mt-1"
            placeholder={"Marks"}
            name="getMarks"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Feedback:
          </label>
          <textarea
            className="border rounded w-full px-3 py-2 mt-1"
            placeholder="Feedback"
            name="feedback"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MarksPage;
