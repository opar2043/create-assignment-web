import React, { useContext, useEffect, useState } from 'react'
import { AuthContex } from '../Provider/AuthProvider';

const MySubmisson = () => {
        const {user} = useContext(AuthContex)
    
        const [marks , setmarks] = useState([])
              useEffect(() => {
            fetch(`http://localhost:5000/docs`)
              .then((res) => res.json())
              .then((data) => {
                setmarks(data);
              })
              .catch((error) => console.error('Error fetching job data:', error));
          }, []); 
          
          const data = marks.filter(mark => mark?.email === user?.email)

          console.log(data);
  return (
    <div>
    <div>
    <div className="w-9/12 mx-auto py-5 flex items-center justify-between">
  {/* Email Section */}
  <p className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow">
    EMAIL: <span className="opacity-80">{user?.email}</span>
  </p>
  {/* Heading Section */}
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    My Submitted Assignments
  </h2>
</div>

      
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Index</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Marks</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Obtained Marks</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((d, idx) => (
                <tr key={d._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{idx + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{d.title}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{d.marks}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                        d.staus === 'pending'
                          ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                      }`}
                    >
                      {d.staus}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {d.getMarks || (
                      <span className="italic text-gray-500">Not Given Yet</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default MySubmisson