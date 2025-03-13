"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import rightT from './assets/tree 1 1.png';
import leftT from './assets/TREE 2 1.png';
import rock2 from './assets/ROCK 1 1.png';
import rock1 from './assets/ROCK 2 1.png';
import couple from './assets/couple & shadow 1.png';
import Image from 'next/image';

const Hero = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const leftTRef = useRef(null);
  const rightTRef = useRef(null);
  const coupleRef = useRef(null);
  const textRef = useRef(null);
  const rockRef1 = useRef(null);
  const rockRef2 = useRef(null);
  const mm = gsap.matchMedia();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100); // Small delay to trigger animation
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Access window safely inside useEffect
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (height === 0) return; // Wait until height is set

    gsap.to(leftTRef.current, {
      x: 40,
      y: 0,
      duration: 2
    });

    gsap.to(rightTRef.current, {
      x: 0,
      y: 0,
      duration: 2,
      height: "116vh",
      width: "35%"
    });

    mm.add("(min-width: 1300px)", () => {
      gsap.to(coupleRef.current, {
        x: 0,
        y: -(height / 5.8),
        duration: 2,
        width: "20vw",
        ease: "power2.out"
      });
    });

    mm.add("(max-width: 1300px)", () => {
      gsap.to(coupleRef.current, {
        x: 0,
        y: -(height / 8),
        duration: 2,
        width: "20vw",
        ease: "power2.out"
      });
    });

    gsap.to(rockRef1.current, {
      width: "20%",
      duration: 2,
    });

    gsap.to(rockRef2.current, {
      width: "13%",
      duration: 2,
    });

  }, [height, mm]);

  return (
    <div style={{ backgroundSize: "100% 100%" }} className='bg-couple bg-cover bg-no-repeat bg-center h-[100vh] w-full'>
      {/* Add absolute images */}
      <Image ref={leftTRef}
        src={leftT} alt="Left Tree"
        className="absolute top-0 left-[-2.8rem] w-[35%] h-[100vh]"
      />
      <Image ref={rightTRef}
        src={rightT}
        alt="Right Tree"
        className="absolute top-0 right-0 w-[30%]  h-[100vh]"
      />
      <Image 
        src={couple}
        alt="Couple"
        className={`absolute bottom-[-10vw] left-[40%] w-[18vw] z-10 transform  -translate-y-0  transition-all duration-[2500ms]  ease-out ${
          animate ? "bottom-[0%] left-[40%] w-[20vw] " : ""
        }`}
      />
      <Image ref={rockRef1}
        src={rock1}
        alt="Rock 1"
        className="absolute bottom-0 left-0 w-[10%]"
      />
      <Image ref={rockRef2}
        src={rock2}
        alt="Rock 2"
        className="absolute bottom-0 right-0 w-[10%]"
      />
       <div
   
      className={`absolute top-[70%] left-[50%] text-center text-black text-[0.4rem] opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[2500ms] ease-out ${
        animate ? "top-[35%] left-[50%] text-[2.5vw] opacity-100" : ""
      }`}
    >
      <p className="text-[5em] tracking-[10px]">AMORR</p>
      <p className="text-[0.5em]">Challenges Engage Efforts Future</p>
    </div>
    </div>
  );
};

export default Hero;
