import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiViewBoard } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContex } from "../Provider/AuthProvider";

const AssignmentCard = ({assign,setAssignments}) => {
  // console.log(assign);
  const {user} = useContext(AuthContex)
  // const [data,setData]= useState()
  const {
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    email,
  _id} = assign || {}


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
        console.log(data,'delte 1');
        if (data.deletedCount>0) {
           Swal.fire({
                    title: " Assignment Deleted Successfully!",
                    icon: "success",
                    draggable: true
                  }); 
                  console.log(data,'delte 2');
                  setAssignments(data)
        } 
      })
      .catch((error) => console.error("Error deleting assignment:", error));
  };


  return (
    <div>
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes"
      className="h-[200px] w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl"><span className="font-bold text-2xl">Title:</span>{title}</h2>
    <p className="font-semibold "><span className="font-bold text-lg">Email:</span> {email}</p>
    <p className="font-semibold "><span className="font-bold text-lg">Difficulty:</span> {difficulty}</p>
    <div className="grid grid-cols-3 gap-2">
  
      <NavLink to={`/view/${_id}`} state={{assign}}>
           <button  className="btn-outline btn w-full"><CiViewBoard></CiViewBoard> View</button>
      </NavLink>
      <NavLink to={`/edit/${_id}`} state={{assign}}>
           <button  className="btn btn-outline w-full"><FaRegEdit></FaRegEdit> Edit</button>
      </NavLink>
      <button className="btn btn-outline" onClick={handleDelete}><MdDelete ></MdDelete> Delete</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default AssignmentCard
