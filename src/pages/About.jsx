import React, { useState }  from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
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
      <div className="md:max-w-[1400px] max-w-[450px] md:h-[780px] h-[300px]  py-16 px-4 w-full m-auto relative group">
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 ">
        <div className="w-[500px] h-[400px] ">
          <img src={logo} alt="" className='w-full h-full' />
        </div>
        <div className="flex flex-col items-center px-3">
          <span className='text-2xl font-serif text-blue-950'>WHO ARE WE</span>
          <p className='text-xl text-red-500'>AN UPCOMING RELIABLE AND AUTHENTIC EDUCATION CONSULTANCY</p>
          <p className='mt-4'>Our aim is to provide various educational opportunities to all our clients at fingertips points at an affordable price</p>
           <p className=''>Royal Education is built on love and passion to provide affordable educational opportunities for all.</p>
           <p>Our goal is to reach out to as many people as possible and deliverthese opportunities at an affordable price</p>
           <p>We provide full assistance throughout the admission process: counselling students in their home countries, liaising with the Indian embassy to expedite student visas, providing online money transfer platforms that make money transfer an effortless process</p>
           <p>Royal Education Consultancy is committed to fulfil the dream of aspiring students to get quality education by providing them intriguing scholarship programs in India’s top universities. Our students take advantage of the many distinctive courses that our colleges provide for them which helps them to choose a career of their dreams.</p>
           <p className='text-gray-500 '></p>
           
        </div>
      </div>
    </div>
  )
}

export default About
