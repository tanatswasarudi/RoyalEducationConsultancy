import React from 'react'
import ScrollingImages from '../Components/ScrollingImages'
import ScrollingImagesGallery from '../Components/ScrollingImagesGallery'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full h-[400px]">
        <ScrollingImages/>
      </div>
      <h1 className='text-blue-900 text-xl font-sans font-semibold mt-10'>Our Gallery</h1>
    <div className="mt-7">
      <div className="">
      <ScrollingImagesGallery/>
      </div>
    </div>
    </div>
  )
}

export default Home
