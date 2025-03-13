import React from 'react'
import amor from './assets/Group 543 (1).png'
import vector from './assets/Screenshot 2024-11-10 213933.png'
import Image from 'next/image'
import lineArrow from './assets/Line 26.png'
const Footer = () => {
  return (
    <div className=' overflow-x-hidden w-screen flex flex-col justify-between px-16 pt-[5vh] bg-[#0C0C0C] text-white'>
    {/* button section */}
  <section className='flex justify-center items-center  h-[90vh]'>
    <div className='w-[75vw] text-wrap text-center'>
        <p className='text-[50px] leading-[60px] '>“The best thing to hold onto in life is <br /> each other”</p>
    
    
<div class="relative inline-flex items-center justify-center p-[1px] rounded-full hover:bg-gradient-to-r from-[#FF204E] to-[#A01EC1] w-[80%] mt-8">
        <span class="bg-[#0C0C0C] text-white font-semibold px-2 pt-1 pb-2 rounded-full w-full">
        <div class="relative inline-flex items-center justify-center p-[1px] rounded-full bg-gradient-to-r from-[#FF204E] to-[#A01EC1] w-[99%] mt-[7px]">
<span class="bg-[#0C0C0C] text-white font-semibold p-2 rounded-full w-full">
  <button className=' bg-gradient-to-r from-[#FF204E] to-[#A01EC1] text-white text-[22px] font-semibold px-4 py-6  rounded-full shadow-lg hover:opacity-90 transition duration-300 w-full hover:bg-white  hover:text-black  hover:from-[#FFFFFF] hover:to-[#FFFFFF]  '>PRE-REGISTER NOW!</button>
</span>
</div>
</span>
</div>
    </div>    
  </section>

 <section> 
  {/* body section */}
  <div className='flex flex-row justify-between '>
    <div className='w-[25vw]'>
       <Image src={amor} className='pb-5' alt="" />
        <div>Get started to grow up your Bonds <br />with perfect environment and genuinity.</div>
        <div className='text-xs py-5 text-gray-300 '>Amorr, 2025</div>
        <Image width='60vw' src={vector} alt="" />
    </div>
    {/* social media links */}
    <div className='flex flex-col w-[23vw] mr-5 mt-5'>
        <div class="flex items-center justify-between bg-[#0C0C0C] text-white p-4">
<h1 class="text-[20px] font-light ">Instagram</h1>
<img
src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
alt="Instagram Logo"
class="w-8 h-8 border-none rounded-2xl"
/>
</div>

{/* <!-- Divider with Arrow --> */}
<Image src={lineArrow}></Image>

<div class="flex items-center justify-between bg-[#0C0C0C] text-white p-4">
<h1 class="text-[20px] font-light ">LinkedIn</h1>
<img
src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
alt="LinkedIn Logo"
class="w-8 h-8 border-none rounded-2xl"
/>
</div>

{/* <!-- Divider with Arrow --> */}
<Image src={lineArrow}></Image>

<div class="flex items-center justify-between bg-[#0C0C0C] text-white p-4">
<h1 class="text-[20px] font-light ">Twitter</h1>
<img
src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitterx--v2.png"
alt="Twitter Logo"
class="w-8 h-8 border-none rounded-2xl"
/>
</div>

{/* <!-- Divider with Arrow --> */}
<Image src={lineArrow}></Image>

<div class="flex items-center justify-between bg-[#0C0C0C] text-white p-4">
<h1 class="text-[20px] font-light ">Facebook</h1>
<img
src="https://img.icons8.com/fluency/48/facebook-new.png"
alt="Facebook Logo"
class="w-8 h-8 border-none rounded-2xl"
/>
</div>

{/* <!-- Divider with Arrow --> */}
<Image src={lineArrow}></Image>
    </div>
  </div>
  {/* copyright section */}
  <div className='flex flex-row justify-between pb-8 mt-2 text-gray-300 text-xs '>
    <div >© 2025 AMORR.</div>
    <div className='space-x-5'>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookies</a>
    </div>
  </div>
 </section>
</div>
  )
}

export default Footer
