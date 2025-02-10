import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiViewBoard } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../Provider/AuthProvider";

const AssignmentCard = ({ assign, setAssignments }) => {
  const { user } = useContext(AuthContex);

  const {
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    email,
    _id,
  } = assign || {};

  const handleDelete = () => {
    if (user?.email !== email) {
      Swal.fire({
        title: "Permission Denied!",
        text: "You can't delete assignments created by others!",
        icon: "error",
        draggable: true,
      });
      return;
    }

    fetch(`https://assignment-crub-fullstack.vercel.app/assignment/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "delte 1");
        if (data.deletedCount > 0) {
          Swal.fire({
            title: " Assignment Deleted Successfully!",
            icon: "success",
            draggable: true,
          });
          console.log(data, "delte 2");
          setAssignments(data);
        }
      })
      .catch((error) => console.error("Error deleting assignment:", error));
  };

  return (
    // <div>
    //   <div className="card  shadow-xl">
    //     <figure>
    //       <img src={thumbnail} alt="Shoes" className="h-[200px] w-full" />
    //     </figure>
    //     <div className="card-body p-3">
    //       <h2 className="card-title text-xl">
    //         <span className="font-bold text-xl">Title:</span>
    //         {title}
    //       </h2>
    //       <p className="font-semibold ">
    //         <span className="font-bold text-md">Email:</span> {email}
    //       </p>
    //       <p className="font-semibold ">
    //         <span className="font-bold text-md">Difficulty:</span> {difficulty}
    //       </p>
    //       <div className="grid grid-cols-3 gap-2">
    //         <NavLink to={`/view/${_id}`} state={{ assign }}>
    //           <button className="btn-outline btn w-full">
    //             <CiViewBoard></CiViewBoard> View
    //           </button>
    //         </NavLink>
    //         <NavLink to={`/edit/${_id}`} state={{ assign }}>
    //           <button className="btn btn-outline w-full">
    //             <FaRegEdit></FaRegEdit> Edit
    //           </button>
    //         </NavLink>
    //         <button className="btn btn-outline" onClick={handleDelete}>
    //           <MdDelete></MdDelete> Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full p-2">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <figure>
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="p-4 space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Difficulty:</span> {difficulty}
          </p>

          <div className="grid grid-cols-3 gap-2">
            <NavLink to={`/view/${_id}`} state={{ assign }}>
              <button className="w-full flex items-center justify-center gap-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                <CiViewBoard className="text-lg" />
                View
              </button>
            </NavLink>

            <NavLink to={`/edit/${_id}`} state={{ assign }}>
              <button className="w-full flex items-center justify-center gap-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                <FaRegEdit className="text-lg" />
                Edit
              </button>
            </NavLink>

            <button
              className="w-full flex items-center justify-center gap-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              onClick={handleDelete}
            >
              <MdDelete className="text-lg" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
