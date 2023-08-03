import React, { useState, useEffect } from 'react';
import img1 from '../Assets/europe.jpg';
import img2 from '../Assets/europe2.jpg';
import img3 from '../Assets/scholar.jpg';
import img4 from '../Assets/scholar2.jpg';
import img5 from '../Assets/scholarships.png';
import img6 from '../Assets/scholarships2.png';
import img7 from '../Assets/study.png';

const images = [img1, img2, img3, img4, img5, img6, img7]; // Add other images to this array

const ScrollingImages = () => {
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
          className={`absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        />
      ))}
    </div>
  );
};

export default ScrollingImages;
