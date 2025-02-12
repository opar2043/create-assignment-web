import React, { useContext, useState } from 'react'
import { AuthContex } from '../Provider/AuthProvider'
import Banner from '../Pages/Banner'
import FAQ from './FAQ'
import Assignment from './Assignment'
import AssignmentCard from '../Pages/AssignmentCard'
import AddAssignment from '../Pages/AddAssignment'
import { useLoaderData } from 'react-router-dom'
import Student from './Student'

const Home = () => {
    const {opar} = useContext(AuthContex)


  return (
    <div>
      <Banner></Banner>
      <AddAssignment></AddAssignment>
      <Assignment></Assignment>
      <Student></Student>
      <FAQ></FAQ>
    </div>
  )
}

export default Home






  //     <img src={pic1} alt="Carousel slide 1" className="w-full h-full object-cover" />
      
  //     {/* Overlay */}
  //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
  //     {/* Content */}
  //     <div className="absolute inset-0 flex items-center justify-center text-neutral-content text-center">
  //       <div className="w-9/12">
  //             <motion.h1
  //                initial={{ opacity: 0, y: -50 }}
  //                animate={{
  //                  opacity: 1,
  //                  y: 0,
  //                  color: ["red", "Yellow"], 
  //                }}
  //                transition={{
  //                  duration: 2,
  //                  repeat: Infinity, 
  //                  repeatType: "reverse", 
  //                }}
  //                className="text-5xl font-bold mb-4"
  //              >
  //               Welcome to Assignment Crub
  //             </motion.h1>
          
  //             <motion.button
  //                 animate={{
  //                   background: ["#FFD580", "#FFA07A"] 
  //                 }}
  //                 transition={{
  //                   duration: 1,
  //                   repeat: Infinity,
  //                   repeatType: "reverse"
  //                 }}
  //                 className="btn  text-black"
  //               >
  //                 Get Started
  //               </motion.button>

  //       </div>
  //     </div>
  //   </div>
  // </div>