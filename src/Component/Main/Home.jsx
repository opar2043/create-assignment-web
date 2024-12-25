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


  return (
    <div>
      <Banner></Banner>
      <AddAssignment></AddAssignment>
      <Assignment></Assignment>
      <FAQ></FAQ>
    </div>
  )
}

export default Home