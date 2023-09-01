import React, { useState, useRef } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort, BsArrowRight } from 'react-icons/bs';
import {GrNext,GrPrevious} from 'react-icons/gr' 
import {Link} from 'react-router-dom'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import "../Styles/Home.css"
import Carousel from '../Components/Carousel';


const Home = () => {
  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200 
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  const phoneNumber = '+918264420815'; 
  const handleCallRequest = () => {
    const message = 'Please call me back Magrill!';
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  const phoneNumber2 = '+918264420815'; 
 const handleCallRequest2 = () => {
    const msg = 'Please call me back Nomagugu!';
    const call = `tel:${phoneNumber2}?text=${encodeURIComponent(msg)}`;
    window.open(call);
  };
  return (
    <div className="">
      <div className="">
      <Carousel/>
      </div>
          
      <div className="mt-10 px-3 md:px-10 grid md:grid-cols-2 grid-cols-1 gap-6 mb-4 overflow-scroll scrollbar-none">
        <div className="">
          <p className='text-blue-950 font-serif text-2xl'>WHY CHOOSE US</p>
          <p className='mt-6 text-gray-500 font-semibold'>Royal Education Consultancy doesn't just specialize on scholarships to India, we are linked with a large number of universities in Europe in countries like Canada, Poland, Italy and Germany etc. We also provide support at every stage of the process, from accepting enrolment to the hassle-free arrival of students. </p>
            <p className='mt-4 text-lg text-blue-950 font-serif'>Our Services also include:</p>
            <div className='grid grid-cols-2 gap-3'>
            <span className='flex flex-col items-center'>
            <span className='flex items-center font-semibold'><RxDotFilled className='text-red-500'/>Top Universities</span>
            <span className='flex items-center font-semibold mt-4'><RxDotFilled className='text-red-500'/>Free Flight</span>
            </span>

            <span className='flex flex-col items-center'>
            <span className='flex items-center font-semibold'><RxDotFilled className='text-red-500'/>Accomodation</span>
            <span className='flex items-center font-semibold mt-4'><RxDotFilled className='text-red-500'/>Partial Scholarship</span>
            </span>
            </div>
            <div className="mt-5 grid-cols-3 grid gap-3 overflow-scroll scrollbar-none">
              <div className="flex flex-col">
                <span className='flex items-center'><span className='text-2xl text-blue-950'>10K</span><span className='text-red-500 text-xl'>+</span></span>
                <span className='text-gray-500'>International Students</span>
              </div>
              <div className="flex flex-col">
                <span className='flex items-center'><span className='text-2xl text-blue-950'>100</span><span className='text-red-500 text-xl'>+</span></span>
                <span className='text-gray-500'>Top Universities</span>
              </div>
              <div className="flex flex-col">
                <span className='flex items-center'><span className='text-2xl text-blue-950'>50</span><span className='text-red-500 text-xl'>+</span></span>
                <span className='text-gray-500'>Companies</span>
              </div>
            </div>
            <Link to='/About' className="mt-5">
              <button className='py-2 px-3 shadow flex items-center gap-2 bg-red-600'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </Link>
        </div>
        <div className="">
        <div className="flex flex-col items-center"> 
        <iframe 
            className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
            src="https://www.youtube.com/embed/54wZjgTBfP4" 
            frameborder="0" 
            allowfullscreen
            >
          </iframe>
          <div className="flex gap-4 mt-4">
          <button className='font-bold flex items-center bg-blue-500 md:text-base font-mono text-slate-200 px-4 py-2 hover:bg-blue-700 rounded' onClick={handleCallRequest2}>CALL Nomagugu<BsFillTelephoneInboundFill/></button>
          <button className='font-bold flex items-center  bg-blue-500 md:text-base font-mono text-slate-200 px-4 py-2 hover:bg-blue-700 rounded' onClick={handleCallRequest}>CALL Magrill<BsFillTelephoneInboundFill/></button>
          </div>

          </div>
        
        </div>
      </div>
      <div className="mt-10 px-3 mx-auto w-full"><span className='text-lg text-blue-950 font-serif font-semibold'>OUR CAMPUSES</span></div>
      <div className='ml-auto flex gap-4'>
          <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrNext/></button>
        </div>
      <div className="mt-3 mb-10 px-3 flex items-center gap-2 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
              <div className=""> <iframe 
              className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/8x1wEg9tPWQ" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>
              <div className=""> <iframe 
     className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/ftB0BsRM2y8" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>
              <div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/0ehNHUD4TU0" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

         <div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/ocybd-WJo7o" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>
     
     <div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/aB_6C7HK_RI" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

<div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/QFsyO2K7cVc" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

<div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/bBIGfsNtSmA" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

<div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/Cdjm4gT_g5I" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

<div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/_H4hSTQlNpQ" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>

<div className=""> <iframe 
   className='md:w-[500px] md:h-[400px] w-[300px] h-[260px]'
    src="https://www.youtube.com/embed/pEgnCkoyBPw" 
    frameborder="0" 
    allowfullscreen
  ></iframe></div>
      </div>
    </div>
  )
}

export default Home;
 