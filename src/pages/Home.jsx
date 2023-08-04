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

const Home = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const slides = [imgg1, imgg2, imgg3, imgg4, imgg5, imgg6]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPic, setCurrentPic] = useState(0)
  //Student Pictures
  const prevProduct = () => {
    const isFirstImage = currentPic === 0;
    const newInd = isFirstImage ? slides.length - 1 : currentPic -1;
    setCurrentPic(newInd);
  }
  const nextProduct = () => {
    const isLastImage = currentPic === slides.length -1;
    const newIndex = isLastImage ? 0 : currentPic + 1;
    setCurrentPic(newInd)
  }
//pictures of Europe
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  const gotoSlide = (imageIndex) => {
    setCurrentIndex(imageIndex);
  }
 
  return (
    <div className="">
      <div className='object-cover md:max-w-[1500px] md:h-[440px] h-[300px] w-full group'>
      <div style={{backgroundImage: `url(${images[currentIndex]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <GrPrevious onClick={prevSlide} className='text-2xl'/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <GrNext onClick={nextSlide} className='text-2xl'/>
        </div>
        <div className="flex top-4 justify-center py-2">
          {images.map((image,imageIndex)=>(
            <div key={imageIndex} onClick={() => gotoSlide(imageIndex)} className="text-2xl cursor-pointer"><RxDotFilled/></div>
          ))}
        </div>
      
    </div>
      <h1 className='text-2xl text-blue-500 mr-auto'>Our Gallery</h1> 
         <div className='ml-auto flex gap-4'>
          <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><BsArrowLeftShort/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><BsArrowRightShort/></button>
        </div>
      <div className="w-full m-auto py-16 px-4 relative max-w-[500px] md:h-[500px] h-[300px] group ">
        <div style={{backgroundImage: `url(${slides[currentPic]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      </div>
    </div>
    
  )
}

export default Home
