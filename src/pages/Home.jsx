import React from 'react'
import ScrollingImages from '../Components/ScrollingImages'
import ScrollingImagesGallery from '../Components/ScrollingImagesGallery'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center'>
      <div className="w-full h-[400px]">
        <ScrollingImages/>
      </div>
      <div className="bg-slate-200 mt-2 mb-8">
        <div className="px-6"> <Link  className='px-4 py-2 rounded-full bg-primary'>Apply Now</Link></div>       
      </div>
    <div className="mt-10">
      <h1 className='text-blue-900 text-xl font-sans font-semibold'>Our Gallery</h1>
      <ScrollingImagesGallery/>
    </div>
    </div>
  )
}

export default Home
