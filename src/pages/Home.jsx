import React, { useState} from 'react'
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';
import {GrNext,GrPrevious} from 'react-icons/gr' 
import {RxDotFilled} from 'react-icons/rx'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import imgg1 from '../Assets/europe.jpg';
import imgg2 from '../Assets/europe2.jpg';
import imgg3 from '../Assets/europe3.jpg';
import imgg4 from '../Assets/scholar.jpg';
import imgg5 from '../Assets/scholarships.png';
import imgg6 from '../Assets/scholarships2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import "../Styles/Home.css"

const Home = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const slides = [imgg1, imgg2, imgg3, imgg4, imgg5, imgg6]
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="">
      <div className="max-w-[1400px] md:h-[500px] h-[300px] w-full m-auto px-4 relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className="w-auto h-[400px] md:h-[500px]  rounded-2xl bg-center bg-cover duration-500"></div>
     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
      <BsArrowLeftShort onClick={prevSlide} size={30}/></div>
     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
      <BsArrowRightShort onClick={nextSlide} size={30}/></div>
      <div className="flex top-3 justify-center">
      {slides.map((slide,slideIndex)=>(
        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className=""><RxDotFilled className='text-2xl'/></div>
      ))}
     </div>
     </div>
        <Carousel infiniteLoop autoPlay>
          <div className="">
            <img src={images} alt="mobile" />
          </div>
        </Carousel>
    </div>
    
    
  )
}

export default Home
