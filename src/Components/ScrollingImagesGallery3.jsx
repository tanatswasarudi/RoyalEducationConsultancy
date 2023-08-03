import React, { useState, useEffect } from 'react';
import img1 from '../Assets/student6.jpg';
import img2 from '../Assets/student5.jpg';


const images = [img1, img2]; // Add other images to this array

const ScrollingImagesGallery3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative overflow-hidden">
        {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full h-full opacity-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        />
      ))}
        </div>
      
  );
};

export default ScrollingImagesGallery3;
