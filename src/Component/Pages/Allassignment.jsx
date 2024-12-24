import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";


const Allassignment = () => {

    // const data = useLoaderData(); // Should return an array
    // const [assignments, setAssignments] = useState(Array.isArray(data) ? data : []);
    const [assignments, setAssignments] = useState( []);
    const [filter,setFilter] = useState('')
      useEffect(() => {
    fetch(`http://localhost:5000/allassignment?filter=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      })
      .catch((error) => console.error('Error fetching job data:', error));
  }, [filter]);
   
    // console.log(assignments);
  return (
    <div>
     
    <h2 className="text-3xl font-bold text-center my-5">Assignment's</h2>
    <div className="flex flex-col gap-4 md:flex-row justify-between mx-auto md:w-3/4 w-full my-5">
    <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setFilter(e.target.value)}>
    <option  selected>Select language</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
</select>

   {/* text input */}

   <label className="input input-bordered flex items-center py-7 gap-2">
<input type="text" className="grow py-2" placeholder="Search" />
<button className="btn btn-active btn-neutral  ">Neutral</button>
</label>


    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {assignments.length > 0 ? (
        assignments.map((assign) => (
          <AssignmentCard key={assign._id} assign={assign}></AssignmentCard>
        ))
      ) : (
        <p className="text-center">No assignments available.</p>
      )}
    </div>
  </div>
  )
}

export default Allassignment