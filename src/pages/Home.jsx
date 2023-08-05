import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import imgg1 from '../Assets/europe.jpg';
import imgg2 from '../Assets/europe2.jpg';
import imgg3 from '../Assets/europe3.jpg';
import imgg4 from '../Assets/scholar.jpg';
import imgg5 from '../Assets/scholarships.png';
import imgg6 from '../Assets/scholarships2.png';

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
      <div className="md:max-w-[1400px] max-w-[450px] md:h-[780px] h-[300px] w-full m-auto relative group">
        <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className=" w-full h-full rounded-2xl duration-500"></div>
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
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="">
          <p className='text-blue-950 font-serif'>WHY CHOOSE US</p>
          <p className='mt-6'>Royal Education Consultancy doesn't just specialize on scholarships to India, we are linked with a large number of universities in Europe in countries like Canada, Poland, Italy and Germany etc. We also provide support at every stage of the process, from accepting enrolment to the hassle-free arrival of students. </p>
          <p>We are also linked with other countries such as Ghana, South Africa, Indonesia, Thailand and China.This is to ensure that our students get the best education at a lower cost as well as the ability to choose their dream destination</p>
          <p>After our students have arrived at their destinations, we also provide them with accomodation free of charge for the first month to allow them to settle</p>
            <p>Our Services also include:</p>
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
            <div className="mt-5">
              <button className='py-2 px-3 shadow flex items-center bg-red-600'>Know more <BsArrowRight className='text-xl text-white'/></button>
            </div>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  )
}

export default Home;
