import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort, BsArrowRight } from 'react-icons/bs';
import imgg1 from '../Assets/europe.jpg';
import imgg2 from '../Assets/europe2.jpg';
import imgg3 from '../Assets/europe3.jpg';
import imgg4 from '../Assets/scholar.jpg';
import imgg5 from '../Assets/scholarships.png';
import imgg6 from '../Assets/scholarships2.png';
import {HiAcademicCap} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Home = () => {
  const slides = [imgg1, imgg2, imgg3, imgg4, imgg5, imgg6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="">
      <div className=" w-full md:h-[400px] h-[300px] m-auto group">
        <div className=" w-full md:h-[400px] h-[300px]">
             <div style={backgroundImage `url(${slides[currentIndex]})` } alt="" className=" w-full h-full rounded-2xl duration-500"></div>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
          <BsArrowLeftShort onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
          <BsArrowRightShort onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-3 justify-center">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=""><RxDotFilled className='text-2xl' /></div>
          ))}
        </div>
      </div>
      <div className="mt-10 px-3 md:px-10 grid md:grid-cols-2 grid-cols-1 gap-6 mb-4">
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
            <div className="mt-5 grid-cols-3 grid gap-3">
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
              <button className='py-2 px-3 shadow flex items-center bg-red-600'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </Link>
        </div>
        <div className="">
        <div className=""><embed type="video/webm" src=" https://www.youtube.com/watch?v=54wZjgTBfP4" width="400" height="300"></embed></div>
        </div>
      </div>
      <div className="mt-10 px-3 md:px-10">
        <span className='mx-auto'><h1 className='text-2xl text-blue-950 font-semibold'>STUDENT'S SERVICES</h1></span>
        <div className="px-2 mt-5 grid md:grid-cols-2 grid-cols-1 gap-6 overflow-scroll scrollbar-none">
          
          <div className="shadow rounded w-[400px] h-[500px] flex flex-col items-center bg-slate-100">
          <span className='gap-3 mx-auto text-lg font-semibold mb-6 justify-center flex items-center'><HiAcademicCap className='text-blue-500'/> Study Visa</span>
          <p className='px-2 text-gray-500 font-serif'>We help our students get their Visas, prepare for IELTs as well as making CVs and we also provide flight booking service</p>
          <Link to='/About' className="mt-5 px-2">
              <button className='py-2 px-3 flex items-center'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </Link>
          </div>
          
          <div className="shadow rounded w-[400px] h-[500px] flex flex-col items-center bg-slate-100">
          <span className=' gap-3 mx-auto text-lg font-semibold mb-6 justify-center flex items-center'><HiAcademicCap className='text-blue-500'/> Internships</span>
          <p className='px-2 text-gray-500 font-serif'>We make sure that our students get enrolled at institutions that are connected with the Top recruiters to help them with industrial exposure</p>
          <Link to='/Scholarships' className="mt-5 px-2">
              <button className='py-2 px-3 flex items-center'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </Link>
          </div>
          
          <div className="shadow rounded w-[400px] h-[500px] flex flex-col items-center bg-slate-100">  
            <span className=' gap-3 mx-auto text-lg font-semibold mb-6 justify-center flex items-center'><HiAcademicCap className='text-blue-500'/> Scholarships</span>
           <p className='px-2 text-gray-500 font-serif'>We help our students avail the highest possible scholarship they can get to fund their higher studies as well as accommodation</p>
           <Link to='/Scholarships' className="mt-5 px-2">
              <button className='py-2 px-3 flex items-center'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;
