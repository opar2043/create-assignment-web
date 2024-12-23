import React from 'react'
import { useLoaderData } from 'react-router-dom'

const AllPending = () => {
    const [docs,setDocs] = useLoaderData([]) || []
    console.log(docs , 'docs');

    // const {title,
    //     marks,
    //     name ,       
    //    email ,        
    //     quote,
    //     docs,
    //     staus} = docs
  return (
    <div>
        <h2 className='text-2xl text-center font-bold my-3'>All Students Assigmen</h2>
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
         {/* <tr key={title}>
            <th>{idx + 1}</th>
            <td>{doc.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> */}
        
    
      
    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}

export default AllPending