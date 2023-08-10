import React from 'react'
import scholar from '../Assets/europe2.jpg'

const Scholaships = () => {
  return (
    <div>
      <div className="w-full h-[300px] md:h-[400px]">
        <img src={scholar} className='w-full h-full' alt="" />
      </div>
      <div className=" mt-10 grid md:grid-cols-2 grid-cols-1 gap-6 px-10 md:px-3">
        <div className="flex flex-col items-center">
          <strong className='font-serif text-2xl'><h1>About <span className='text-blue-950 font-bold'>ROYAL</span> SCHOLARSHIPS</h1></strong>
          <ul className='flex flex-col items-center px-4 text-black/20'>
            <li className='mt-3'>We offer both <span className='text-red-500 font-bold'>FULLY FUNDED AND PARTIAL</span></li>
            <li className='mt-3'>Application for partial scholarships to India is <span className='font-bold'>Free</span> i.e There is no <span className='font-bold'>Agent Fee.</span></li>
            <li className='mt-3'>To qualify for fully funded scholarships you have to write exams as well as prepare CVs and requires application fee which is <span className='font-bold'>non-refundable.</span></li>
            <li className='mt-3'>Our scholarship program is open to students of all nationalities and is designed to provide partial financial assistance for studying in India or Europe.</li>
            <li className='mt-3'>The scholarship will apply for the full duration of the course.</li>
            <li className='mt-3'>The scholarship program is a competitive one, and interested students are encouraged to submit their applications early.</li>
            <li className='mt-3'>In addition to the partial scholarship, we also arrange pickup services for our students.</li>
            <li className='mt-3'>Students who clear their first semester tuition are eligible for <span className='text-red-500 font-bold'>FREE FLIGHT AND ACCOMODATION</span> during their first month</li>
          </ul>
        </div>
      <div className=""><embed type="video/webm" src="https://www.youtube.com/watch?v=GPRVlA6jIHI" width="400" height="300"></embed></div>
      </div> 
    </div>
  )
}

export default Scholaships
