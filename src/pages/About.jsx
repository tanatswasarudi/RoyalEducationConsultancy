import React, { useState }  from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';

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
      <div className="max-w-[1400px] h-[780px] py-16 px-4 w-full m-auto relative group">
        <div style={{ backgroundImage: `url(${images[currentIndigo]})` }} className="w-full h-full object-cover rounded-2xl duration-500"></div>
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
    </div>
  )
}

export default About
