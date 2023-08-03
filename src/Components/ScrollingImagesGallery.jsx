import React, { useState, useEffect } from 'react';
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';
import img7 from '../Assets/study.png';

const images = [img1, img2, img3, img4, img5, img6, img7]; // Add other images to this array

const ScrollingImagesGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative overflow-hidden">
        <div className="w-full h-[300px] justify-center items-center grow shrink-0' min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px]">
        {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        />
      ))}
        </div>
      
    </div>
  );
};

export default ScrollingImagesGallery;
