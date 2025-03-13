"use client"; 
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import girlcut from './assets/GIRLCUTOUT.png'
import guycut from './assets/GUYCUTOUT.png'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const Together = () => {
  const guyRef = useRef(null);
  const girlRef = useRef(null);
  useEffect(() => {
    gsap.to(guyRef.current, {
     left:"34%",
      duration: 2, // Short duration for quick shake effect
      scrollTrigger: {
        trigger: guyRef.current,   // The element to trigger animation on
        start: "top 100%",           // Start the animation when the element is 80% from the top
        end: "bottom 30%",          // End the animation when the element is 20% from the bottom
        scrub: true,              // Allows for smooth scrubbing based on scroll position
      },
      ease: "power1.inOut", // Smooth easing
      onUpdate: () => {
        const currentRotation = gsap.getProperty(guyRef.current, "rotation") || 0;
    const newRotation = currentRotation + ((Math.random() > 0.4 ? 1 : -1) * 2); // Small incremental rotation
    const clampedRotation = Math.max(-7, Math.min(7, newRotation)); // Clamp rotation to ±10
    gsap.set(guyRef.current, { rotation: clampedRotation });
      },
    });
    gsap.to(girlRef.current, {
      right:"32%",
       duration: 2,
       scrollTrigger: {
        trigger: girlRef.current,   // The element to trigger animation on
        start: "top 100%",           // Start the animation when the element is 80% from the top
        end: "bottom 30%",          // End the animation when the element is 20% from the bottom
        scrub: true,               // Allows for smooth scrubbing based on scroll position
      },
      ease: "power1.inOut", // Smooth easing
      onUpdate: () => {
        const currentRotation = gsap.getProperty(girlRef.current, "rotation") || 0;
    const newRotation = currentRotation + ((Math.random() > 0.4 ? 1 : -1) * 2); // Small incremental rotation
    const clampedRotation = Math.max(-7, Math.min(7, newRotation)); // Clamp rotation to ±10
    gsap.set(girlRef.current, { rotation: clampedRotation });
      },
     });
  }, []);

  return (
    <div className="overflow-hidden z-20">
        {/* empty */}
      <div className='bg-[#F8A39C] h-[30vh] w-full overflow-x-hidden z-20'></div>
      {/* //couple */}
      <div className='relative bg-[#F8A39C] h-screen w-full flex flex-col justify-center items-center gap-40'>
    <div className='  mt-[118px]'>
    <h1 className='text-white text-center text-[5vw]'>AMORR</h1>
    <h2 className='text-white text-center text-[1.5vw]'>Brings You Together</h2> 
    </div>
    <Image   src={guycut} ref={guyRef} alt="guycut" className="absolute top-[14%] left-0 w-[17vw]"></Image>
    <Image   src={girlcut}  ref={girlRef} alt="girlcut" className="absolute top-[12%] right-0 w-[17vw]"></Image>
        <p className='text-white text-center pr-32 pl-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lectus eget sem laoreet vehicula. Etiam commodo euismod dolor. Suspendisse eu placerat lacus. Mauris scelerisque quam nec tellus gravida bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. In id lectus eget sem laoreet vehicula. Etiam commodo euismod dolor. Suspendisse eu placerat lacus. Mauris scelerisque quam nec tellus gravida bibendum.  . </p>

      </div>

    </div>
  )
}

export default Together
