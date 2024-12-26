import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { AuthContex } from '../Provider/AuthProvider'

const AllPending = () => {
    // const [docs,setDocs] = useLoaderData([]) || []
    const {user} = useContext(AuthContex)

    const [data,setData] = useState([])
     useEffect(()=>{
      fetch('https://assignment-crub-fullstack.vercel.app/docs')
      .then(res =>res.json())
      .then(dats => {
        setData(dats)
      })
     },[])

     console.log(data);

  return (
    <div>
    <h2 className="text-2xl text-center font-bold my-3">All Students Assignments</h2>
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>Title</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, idx) => (
              <tr key={d._id}>
                <th>{idx + 1}</th>
                <td ><button className='bg-blue-100 text-blue-700 hover:bg-yellow-200 px-5 py-2 rounded-md text-sm font-semibold transition'>{d?.email}</button> </td>
                <td>{d.title}</td>
                <td>{d.marks}</td>
                <td>
                <button
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                    d.staus === 'pending'
                      ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {d.staus === 'pending' ? 'Pending' : 'Complete'}
                </button>
              </td>
              <td>
  <NavLink to={`/marks/${d._id}`}>
    <button
      className={`flex items-center justify-center gap-1 px-3 py-1 rounded-md text-sm font-medium shadow transition 
        ${user?.email === d?.email || d?.status === "Marks Given"
          ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
          : "bg-blue-500 text-white hover:bg-blue-600"}`}
      disabled={user?.email === d?.email || d?.status === "Marks Given"}
    >
      <IoShieldCheckmarkSharp className="text-lg" />
      {user?.email === d?.email 
        ? "Own Work" 
        : d?.status === "Marks Given" 
        ? "Marks Given" 
        : "Give Mark"}
    </button>
  </NavLink>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  )
}

export default AllPending