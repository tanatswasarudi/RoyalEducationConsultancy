import React, { useState } from 'react';

const ImageSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider w-full">
      <div className="slider-container h-400 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="navigation-buttons flex justify-center mt-4">
        <button onClick={prevImage} className="nav-button prev bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-2">
          Prev
        </button>
        <button onClick={nextImage} className="nav-button next bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlide;

