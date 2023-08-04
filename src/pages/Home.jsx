import React, { useRef } from 'react'
import ImageSlide from '../Components/ImageSlide'
import img1 from '../Assets/student.jpg';
import img2 from '../Assets/student2.jpg';
import img3 from '../Assets/student3.jpg';
import img4 from '../Assets/student4.jpg';
import img5 from '../Assets/student5.jpg';
import img6 from '../Assets/student6.jpg';
import {GrNext,GrPrevious} from 'react-icons/gr' 

const Home = () => {
  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200 
  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full overflow-scroll scrollbar-none">
        <ImageSlide/>
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
