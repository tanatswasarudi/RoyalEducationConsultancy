import React, { useState }  from 'react'
import img1 from '../Assets/europe.jpg';
import img2 from '../Assets/europe2.jpg';
import img3 from '../Assets/europe3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/study.png';
import img6 from '../Assets/student6.jpg';
import { BsArrowLeftShort, BsArrowRightShort, BsArrowRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
function Card () {
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
    return(<>
          <div className=" relative group">
          <img className='md:w-[1400px] w-[400px] md:h-[500px] h-[300px]' src={images[currentIndigo]} alt=''/>
  <div className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
    <BsArrowLeftShort onClick={goToPrevious} size={20} />
  </div>
  <div className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/25 text-white cursor-pointer">
    <BsArrowRightShort onClick={goToNext} size={20} />
  </div>
  <div className="flex top-3 justify-center">
    {images.map((image, imageIndex) => (
      <div
        key={imageIndex}
        onClick={() => goToImage(imageIndex)}
        className="cursor-pointer"
      >
        <RxDotFilled className="text-2xl" />
      </div>
    ))}
  </div>
</div>
    </>)
}
export default Card;