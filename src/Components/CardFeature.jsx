import React from 'react'
import { Link } from 'react-router-dom'
import {PiDotsThreeCircleDuotone} from 'react-icons/pi'
import {BiChevronRight} from 'react-icons/bi'

const CardFeature = ({title,address,photos,price, description,id,perks,category,category2 ,loadingArray}) => {
  return (
    <div className='bg-slate-300 cursor-pointer w-full min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] gap-3 shadow rounded-2xl py-5 md:px-4 flex flex-col overflow-scroll scrollbar-none'>
         {title ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} className='flex flex-col cursor-pointer bg-gray-100 p-2 rounded-2xl'>
         <div className=' gap-2 flex overflow-scroll md:scrollbar-none '>
         <div className=' h-44 w-60 justify-center items-center grow shrink-0'> 
          {photos && photos.length > 0 ? (
              <img src={photos[0]} className="h-full rounded-2xl  " alt='' />
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>No Image Available</p>
              </div>
            )}
          </div>
         </div>
          
          <div className='flex flex-col'>
          <p className='font-bold mb-2'>{address}</p>
          <h2 className='text-sm font-serif font-bold text-blue-400'>{title}</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 text-sm text-cyan-500 capitalize font-serif gap-2'>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[0]} </span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[1]}</span> 
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[2]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[3]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[4]}</span>
                 <span className='flex'><BiChevronRight className='text-sm text-black'/>{perks[5]}</span>
               </div>
          <p className=" font-bold text-gray-500" ><span className='text-red-500'>$</span>{price} per semester</p>
          <p className='text-sm flex flex-col mb-2 overflow-scroll scrollbar-none'>{description}</p>
          <p className='mt-4'><button className='p-2 flex items-center rounded bg-green-500 hover:bg-green-700'>View More<PiDotsThreeCircleDuotone className='text-gray-500 text-sm'/></button></p>
          </div>
        </Link>
       </> 
    ) :(
        <div className="flex justify-center font-serif items-center ">
        <p>{loadingArray}</p>
        </div>
    )}
    </div>
   
  
  )
}

export default CardFeature