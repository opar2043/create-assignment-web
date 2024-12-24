// import { useState } from "react";
// import { useLoaderData } from "react-router-dom"
// import AssignmentCard from "./AssignmentCard";


// const AddAssignment = () => {
//   const data = useLoaderData()
//   // console.log(data);
//   const [assignments,setAssignments] = useState(data)
//   console.log(assignments);


//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-center my-5">Assignment's</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//          {
//           assignments.map(assign => <AssignmentCard key={assign._id} assign={assign}></AssignmentCard>)
//          }
//       </div>
//     </div>
//   )
// }

// export default AddAssignment



import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const AddAssignment = () => {
  const data = useLoaderData(); // Should return an array
  const [assignments, setAssignments] = useState(Array.isArray(data) ? data : []);
 
  console.log(assignments);

  // function handleChange(e){
  //      console.log(e);
  // }

  return (
    <div>
     
      <h2 className="text-3xl font-bold text-center my-5">Assignment's</h2>
       <div className="flex flex-col gap-4 md:flex-row justify-between mx-auto md:w-3/4 w-full my-5">

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
  );
};

export default AddAssignment;
