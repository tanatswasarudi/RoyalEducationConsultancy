import React, { useState }  from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort, BsArrowRight } from 'react-icons/bs';
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';
import logo from '../Assets/Logo.jpg'

const About = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndigo, setCurrentIndigo] = useState(0)
  const goToImage = (imageIndex) => {
    setCurrentIndigo(imageIndex);
  };
const goToPrevious = () => {
  const FirstSlide = currentIndigo === 0
  const newIndia = FirstSlide ? images.length - 1 : currentIndigo - 1;
  setCurrentIndigo(newIndia)
}
const goToNext = () => {
  const LastSlide = currentIndigo === images.length - 1 ;
  const newIndia = LastSlide ? 0 : currentIndigo + 1
  setCurrentIndigo(newIndia)
}
  return (
    <div>
      <div className="w-full md:h-[400px] h-[300px] group">
        <div style={{ backgroundImage: `url(${images[currentIndigo]})` }} className="w-full h-full rounded-2xl duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
          <BsArrowLeftShort onClick={goToPrevious} size={20} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
          <BsArrowRightShort onClick={goToNext} size={20} />
        </div>
        <div className="flex top-3 justify-center">
          {images.map((image, imageIndex) => (
            <div key={imageIndex} onClick={() => goToImage(imageIndex)} className=""><RxDotFilled className='text-2xl' /></div>
          ))}
        </div>
      </div>
      <div className="grid px-10 md:px-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 ">
        <div className="w-[300px] h-[350px] md:h-[500px] md:w-[450px] ">
          <img src={logo} alt="" className='w-full h-full' />
        </div>
        <div className="px-3 text-gray-600">
        <p className='text-blue-950 font-serif mt-8 text-2xl'>WHO ARE WE?</p>
        <p className='mt-6'>ROYAL EDUCATION CONSULTANCY is a reliable and authentic firm that is based in INDIA and is connected with a variety of schools in Africa so as to recruit Academically inclined individuals.</p>
        <p className='mt-6'>Our aim is to provide various educational opportunities to all our clients at fingertips points at an affordable price</p>
          <p className='text-blue-950 font-serif mt-8 text-lg'>WHY CHOOSE US</p>
          <p className='mt-6'>Royal Education Consultancy doesn't just specialize on scholarships to India, we are linked with a large number of universities in Europe in countries like Canada, Poland, Italy and Germany etc. We also provide support at every stage of the process, from accepting enrolment to the hassle-free arrival of students. </p>
          <p className='mt-6'>We are also linked with other countries such as Ghana, South Africa, Indonesia, Thailand and China.This is to ensure that our students get the best education at a lower cost as well as the ability to choose their dream destination</p><br/>
          <p className='mt-6'>After our students have arrived at their destinations, we also provide them with accomodation free of charge for the first month to allow them to settle</p><br/>
            <p className='mt-4'>Our Services also include:</p>
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
                <span className='text-gray-500'>Top Companies</span>
              </div>
            </div>
            <div className="mt-5">
              <button className='py-2 px-3 shadow flex items-center gap-4 bg-red-600'>Know more<BsArrowRight className='text-xl text-white'/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
