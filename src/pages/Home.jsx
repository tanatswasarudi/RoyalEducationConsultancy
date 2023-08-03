import React from 'react'
import ScrollingImages from '../Components/ScrollingImages'
import ScrollingImagesGallery from '../Components/ScrollingImagesGallery'
import ScrollingImagesGallery2 from '../Components/ScrollingImagesGallery2'
import ScrollingImagesGallery3 from '../Components/ScrollingImagesGallery3'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full h-[400px]">
        <ScrollingImages/>
      </div>
      <div className="mt-2 mb-8">
        <button className="px-6"> <Link  className='cursor pointer p-4 bg-primary text-white rounded-full shadow-lg'>Apply Now</Link></button>       
      </div>
      <h1 className='text-blue-900 text-xl font-sans font-semibold mt-10'>Our Gallery</h1>
    <div className="grid md:grid-cols-3 grid-cols-1 mt-2 gap-3">
      <div className="w-full min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px]">
      <ScrollingImagesGallery/>
      </div>
      <div className="w-full min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px]">
      <ScrollingImagesGallery2/>
      </div>
      <div className="w-full min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px]">
      <ScrollingImagesGallery3/>
      </div>
    </div>
    </div>
  )
}

export default Home
