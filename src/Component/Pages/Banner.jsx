import React from 'react'
import pic1 from '../../assets/pic-1.webp'
import pic2 from '../../assets/pic-2.webp'
import pic3 from '../../assets/pic-3.jpeg'
import { color, motion } from "motion/react"
import { redirect } from 'react-router-dom'

const Banner = () => {
  return (
<div>
<div className="carousel w-full">
<div id="item1" className="carousel-item w-full ">
  <div className="hero w-full">
    <div className="relative w-11/12">
      {/* Image */}
      <img src={pic1} alt="Carousel slide 1" className="w-full h-full object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-content text-center">
        <div className="w-9/12">
              <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{
                   opacity: 1,
                   y: 0,
                   color: ["red", "Yellow"], 
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity, 
                   repeatType: "reverse", 
                 }}
                 className="text-5xl font-bold mb-4"
               >
                Welcome to Assignment Crub
              </motion.h1>
          
              <motion.button
                  animate={{
                    background: ["#FFD580", "#FFA07A"] 
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="btn  text-black"
                >
                  Get Started
                </motion.button>

        </div>
      </div>
    </div>
  </div>
</div>

{/* item -222222222222222 */}

  <div id="item2" className="carousel-item w-full">
  <div className="hero w-full">
    <div className="relative w-10/12">
      {/* Image */}
      <img src={pic3} alt="Carousel slide 1" className="w-full h-full object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-content text-center">
        <div className="w-9/12">
        <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{
                   opacity: 1,
                   y: 0,
                   color: ["#FFD580", "#FFA07A"]  
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity, 
                   repeatType: "reverse", 
                 }}
                 className="text-5xl font-bold mb-4"
               >
                Make text Your Self
              </motion.h1>
          
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* item 333333333333333333 */}
  <div id="item3" className="carousel-item w-full">
  <div className="hero w-full">
    <div className="relative w-10/12">
      {/* Image */}
      <img src={pic2} alt="Carousel slide 1" className="w-full h-full object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-neutral-content text-center">
        <div className="w-9/12">
        <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{
                   opacity: 1,
                   y: 0,
                   color: ["red", "Yellow"], 
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity, 
                   repeatType: "reverse", 
                 }}
                 className="text-5xl font-bold mb-4"
               >
                Join With New Ides
              </motion.h1>
          
        </div>
      </div>
    </div>
  </div>
  </div>

</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
 
</div>
</div>

 
  )
}

export default Banner