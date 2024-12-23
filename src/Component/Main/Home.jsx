import React, { useContext, useState } from 'react'
import { AuthContex } from '../Provider/AuthProvider'
import Banner from '../Pages/Banner'
import FAQ from './FAQ'
import Assignment from './Assignment'
import AssignmentCard from '../Pages/AssignmentCard'
import AddAssignment from '../Pages/AddAssignment'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const {opar} = useContext(AuthContex)
  //   const data = useLoaderData(); // Should return an array
  // const [assignments, setAssignments] = useState(Array.isArray(data) ? data : []);

  return (
    <div>
      <Banner></Banner>
      <AddAssignment></AddAssignment>

      <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {assignments.length > 0 ? (
          assignments.map((assign) => (
            <AssignmentCard key={assign._id} assign={assign}></AssignmentCard>
          ))
        ) : (
          <p className="text-center">No assignments available.</p>
        )}
      </div> */}
      </div>
      <Assignment></Assignment>
      <FAQ></FAQ>
    </div>
  )
}

export default Home