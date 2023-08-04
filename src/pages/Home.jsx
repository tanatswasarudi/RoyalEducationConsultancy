import React, { useRef,useState  } from 'react'
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';
import {GrNext,GrPrevious} from 'react-icons/gr' 
import imgg1 from '../Assets/europe.jpg';
import imgg2 from '../Assets/europe2.jpg';
import imgg3 from '../Assets/europe3.jpg';
import imgg4 from '../Assets/scholar.jpg';
import imgg5 from '../Assets/scholarships.png';
import imgg6 from '../Assets/scholarships2.png';

const Home = () => {
  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200 
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  const images =[imgg1, imgg2 , imgg3, imgg4, imgg5, imgg6]


  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className="">
      <div className="min-w-full md:h-[360px] h-[300px] ">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="min-w-[calc(100vh)] h-full object-cover"
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
      <h1 className='text-blue-900 text-2xl px-2 font-sans font-semibold mt-10 mb-4 mr-auto'>Our Gallery</h1>
      <div className='ml-auto flex gap-4 mb-2'>
          <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1'><GrNext/></button>
        </div>
      <div className="flex gap-5 items-center w-full overflow-scroll scrollbar-none scroll-smooth transition-all'" ref={slideProductRef}>
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img1} alt="" className='w-full h-full' /></div></div> 
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img2} alt="" className='w-full h-full' /></div></div>
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img3} alt="" className='w-full h-full' /></div></div>
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img4} alt="" className='w-full h-full' /></div></div>
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img5} alt="" className='w-full h-full' /></div></div> 
       <div className='min-w-[300px] max-w-[300px] shadow border-t border-primary bg-slate-200 rounded flex flex-col items-center px-2'><div className="min-w-[280px] max-w-[280px]"><img src={img6} alt="" className='w-full h-full' /></div></div>
      </div>
    <div className="mt-7">
      
    </div>
    </div>
  )
}

export default Home
