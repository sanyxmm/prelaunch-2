"use client"; 
import React, { useEffect, useRef } from "react";
import zoomin from './assets/zoomin.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const Cherish = () => {
    const parentRef = useRef(null);
    const imageRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
  useEffect(() => {
    gsap.timeline
      ({
        scrollTrigger: {
          trigger: parentRef.current, // The element that triggers the animation
          start: "top top", // Start when the top of the h1 reaches the top of the screen
          end: "top top", // No end point, just one-time trigger
          once: true, // Only trigger once (no repeat)
          markers: false, // Set to true for debugging, false for production
        },
      })
      .to(imageRef.current, { 
        duration: 2,
        scale:5,
        opacity:0,
      })
      .to(h1Ref.current, {
          opacity:1,
          y: 15, 
          duration: 3, 
          stagger:2,
      })
      .to(h1Ref.current, {
        opacity:0,
      })    
      .fromTo(h2Ref.current,{
          opacity:0,
        },
        {
          duration: 2,
          stagger:2,
          opacity:1,
      })
  },[]);
  return (
    <div  ref={parentRef} className='relative w-full h-screen flex justify-center items-center bg-amorr bg-no-repeat bg-cover  overflow-hidden '>
      <Image ref={imageRef} className="absolute w-full" src={zoomin}></Image>
      <div className="flex-row justify-center items-center ">
      <h1 ref={h1Ref}  className="text-white text-5xl text-center font-thin opacity-0">Cherish Moments</h1>
      <h2 ref={h2Ref} className="text-white text-5xl text-center font-semibold  opacity-0 ">Look them in the vault of your <br />memories <br /> 
      <span className="text-[20px] font-normal">with AMORR.</span></h2>
      </div>
    </div>
  )
}

export default Cherish
