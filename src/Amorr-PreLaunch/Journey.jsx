"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import rj from "./assets/Vector 1024.png";
import lj from './assets/Vector 1025.png'
import journeysvg1 from './assets/journeysvg1.png'
import journeysvg2 from './assets/journeysvg2.png'
import journeysvg3 from './assets/journeysvg3.png'
import journeysvg4 from './assets/journeysvg4.png'
import journeysvg5 from './assets/journeysvg5.png'
import journeysvg6 from './assets/journeysvg6.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Journey = () => {
  const parentRef = useRef(null);
  const ele = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),];
  const subele = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),];

  const createTimeline = (index, start) => {
    subele.forEach((ref) => {
      gsap.set(ref.current, { opacity: 0 });
    });

    const journeyeff = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: `${start}% 10%`,
      },
    });
    journeyeff.fromTo(
      subele[index].current,
      { x: index % 2 === 0 ? 70 : -70, opacity: 0, scale: 0.7 },
      { x: index % 2 === 0 ? 150 : -150, duration: 1.2, opacity: 1, scale: 1 }
    )
    journeyeff.fromTo(
      subele[index].current,
      { x: index % 2 === 0 ? 150 : -150, opacity: 1 },
      { x: index % 2 === 0 ? 320 : -320, duration: 0.7, opacity: 0, scale: 0.7 },
      "-=0.5"
    )
    journeyeff.fromTo(
      ele[index].current,
      { x: 0, y: 0, opacity: 0 },
      { x: 0, y: 0, duration: 1, opacity: 1 }
    );
  };

  useEffect(() => {
    [10, 30, 40, 50, 60, 70].forEach((start, index) => {
      createTimeline(index, start);
    });
  })

  return (
    <div>
      <div ref={parentRef} className=" overflow-x-hidden w-full flex flex-col justify-center items-center pt-20 pb-40 bg-[linear-gradient(180deg,_#f8a39c,_#ef8e9b,_#e17b9e,_#cf6ba3,_#b75ea9,_#9955af,_#7250b3,_#3a4db3)]">
        <div className="text-[3.5vw] text-white  mr-[40vw]">A Hopeless Romantic Journey .</div>

        <div className="relative flex flex-col items-center w-[86vw] pt-[14vw]">
          {/* 1st card  */}
        <div  className="absolute top-[4vw] left-[0rem] w-[34vw] h-[19.5vw]  bg-black bg-opacity-70 text-white flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
        <div><Image src={journeysvg1} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8 ">
            <h1 className="text-[2.15em] leading-[1em]">Long Term <br />Connections</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>
        {/* restall cards */}
        <div ref={ele[0]} className="self-end w-[34vw] h-[19.5vw] bg-black bg-opacity-70 text-white  flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
        <div><Image src={journeysvg2} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8 ">
            <h1 className="text-[2.15em] leading-[1em]">Where Funs Meets <br />Fate</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>
        <div ref={ele[1]} className=" self-start w-[34vw] h-[19.5vw]  bg-black bg-opacity-70 text-white flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
        <div><Image src={journeysvg3} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8 ">
            <h1 className="text-[2.15em] leading-[1em]">Long Term <br />Connections</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>
        <div ref={ele[2]} className=" self-end w-[34vw] h-[19.5vw] bg-black bg-opacity-70 text-white flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
        <div><Image src={journeysvg4} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8">
            <h1 className="text-[2.15em] leading-[1em]">Where Funs Meets <br />Fate</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>
        <div ref={ele[3]} className=" self-start w-[34vw] h-[19.5vw]  bg-black bg-opacity-70 text-white flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
          <div><Image src={journeysvg5} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8">
            <h1 className="text-[2.15em] leading-[1em]">Long Term <br />Connections</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>
        <div  ref={ele[4]} className=" self-end w-[34vw] h-[19.5vw] bg-black bg-opacity-70 text-white flex px-1 gap-[1px]  border-none rounded-3xl z-10 ">
        <div><Image src={journeysvg6} className="w-[11vw] h-[19vw]"></Image></div>
          <div className="text-[1.1vw] mt-8">
            <h1 className="text-[2.15em] leading-[1em]">Where Funs Meets <br />Fate</h1>
            <p className="text-[1em] mt-3 leading-[1.7em]">At Amorr, we prioritizes serious and long- <br />term dating. Our platform is designed to <br /> give rise to meaningful relationships, not <br />just fleeting moments</p>
          </div>
        </div>

{/* pathway */}
<div className="absolute top-[14.6vw] -mt-[10px]">
          <Image src={rj} className="scale-x-[1] h-[19.5vw] w-[49.5vw] "></Image>

          <Image src={lj} className="scale-x-[-1] h-[19.5vw] w-[37vw]" />
          <Image src={lj} className="scale-x-[1] h-[19.5vw] w-[37vw] ml-[12vw]" />
          <Image src={lj} className="scale-x-[-1] h-[19.5vw] w-[37vw]" />
          <Image src={lj} className="scale-x-[1] h-[19.5vw] w-[37vw] ml-[12vw]" />
</div>

{/* pathblocks */}
<div  className="absolute flex flex-col items-center w-[25vw] mt-[-1.5vw] ">
<div ref={subele[0]}  className="self-start w-[6.5vw] h-[3vw]  bg-black bg-opacity-70 border-none rounded-[3vw] z-10 "></div>
<div  ref={subele[1]} className="self-end w-[6.5vw] h-[3vw] mt-[16.5vw] bg-black bg-opacity-70 border-none rounded-[3vw] z-10 "></div>
<div  ref={subele[2]} className="self-start w-[6.5vw] h-[3vw]  mt-[16.5vw] bg-black bg-opacity-70 border-none rounded-[3vw] z-10 "></div>
<div  ref={subele[3]}  className="self-end w-[6.5vw] h-[3vw]  mt-[16.5vw] bg-black bg-opacity-70 border-none rounded-[3vw] z-10 "></div>
<div  ref={subele[4]} className="self-start w-[6.5vw] h-[3vw]  mt-[16.5vw] bg-black bg-opacity-70 border-none rounded-[3vw] z-10 "></div>

</div>
       
        </div>

      

      </div>
    </div>
  );
};

export default Journey;
