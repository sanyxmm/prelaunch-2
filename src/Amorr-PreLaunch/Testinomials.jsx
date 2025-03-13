import React from 'react'
import i1 from './assets/Rectangle 3732.png'
import i2 from './assets/Rectangle 3733.png'
import i3 from './assets/Rectangle 3734.png'
import i4 from './assets/ec48394dfec48ecd9e16485febe5ece0.jpg'
import testi from './assets/Ellipse 356.png'
import Image from 'next/image'
const Testinomials = () => {
  const images = [i1, i2, i3, i4, i1, i2];
  return (
    <div className=' h-[150vh] w-full bg-[rgb(12,12,12)] pt-20 pb-12 overflow-hidden'>
      
      <h1 className='text-center text-white text-5xl py-20'>Testimonials</h1>

      <div className='relative '>
      <Image src={testi}  className='absolute top-[-35px] right-0 max-w-[100vw] h-20'></Image>
      <Image src={testi}  className='absolute bottom-[-35px] right-0 max-w-[100vw] h-20'></Image>
      <div className='flex flex-row gap-x-7 overflow-x-scroll  hide-scrollbar h-[420px] overflow-hidden'>
    {images.map((src, index) => (
      <Image key={index} src={src} className="w-[350px]" alt={`Image ${index + 1}`} />
    ))}
      </div>
      </div>
    </div>
  )
}

export default Testinomials
