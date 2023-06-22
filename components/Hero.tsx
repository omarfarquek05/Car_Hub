"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import React from 'react'

const Hero = () => {
 const  handleScroll =()=> {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
 }
  
  return (
    <div className="hero">
<div className="flex-1 pt-36 padding-x">
  {/* bg-clip-text text-transparent 
        bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 */}
        <h1 className="hero__title bg-clip-text text-transparent 
        bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">
          Find,book,rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/*Custom Button*/}
    <CustomButton 
      title= "Explore Cars"
      containerStyles = "bg-primary-blue text-white rounded-full mt-10"
      handleClick = {handleScroll}
      />
      
    </div>
    
    <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
     

    </div>
    </div>
  )
}

export default Hero