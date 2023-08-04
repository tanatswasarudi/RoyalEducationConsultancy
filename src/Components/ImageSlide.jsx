import React, { useState, useEffect } from 'react';
import img1 from '../Assets/europe.jpg';
import img2 from '../Assets/europe2.jpg';
import img3 from '../Assets/europe3.jpg';
import img4 from '../Assets/scholar.jpg';
import img5 from '../Assets/scholarships.png';
import img6 from '../Assets/scholarships2.png';

const images = [img1, img2, img3, img4, img5, img6];

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const imageStyle = {
    width: '100%',
    height: isMobile ? 'auto' : '300px', // Adjust the height for mobile and non-mobile views.
    objectFit: 'cover',
  };

  return (
    <div className="w-full">
      <div className="w-full md:h-[360px] h-[300px] ">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={imageStyle}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prevImage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-auto">
          Prev
        </button>
        <button onClick={nextImage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlide;
