import React from 'react'
import Study from '../Assets/europe2.jpg'

const Courses = () => {
  return (
    <div>
      <div className="w-full md:h-[400px] h-[300px]  ">
        <img src={Study} alt="" className='w-full h-full'/>
      </div>
    <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6 md:px-10 px-3">
      <div className="flex flex-col items-center px-3">
          <p className='mt-8 text-blue-950 mb-5'>ADMISSIONS TO INDIA</p>
          <ul className='flex flex-col items-center px-4 mt-5 text-black/20'>
          <li className='mt-3'>Lovely Professional University</li>
          <li className='mt-3'>Country: India (ASIA)</li>
          <li className='mt-3'>FEES: 975-1500USD per semester</li>
          <li className='mt-3'>Submit your documents to apply</li>
          <li className='mt-3'>Offer letter is received in a few days if you meet the requirements</li>
          <li className='mt-3'>Accept the Offer Letter by making an acceptance deposit</li>
          
        </ul>
        <ul className='flex flex-col items-center mt-8 px-4 text-black/20'>
          <li className='mt-3'>CT University</li>
          <li className='mt-3'>Country: India (ASIA)</li>
          <li className='mt-3'>FEES: 700-1500USD per semester</li>
          <li className='mt-3'>Submit your documents to apply</li>
          <li className='mt-3'>Offer letter is received in a few days if you meet the requirements</li>
          <li className='mt-3'>Accept the Offer Letter by making an acceptance deposit</li>
        </ul>
        <p className='mt-8 text-blue-950 mb-5'>ADMISSIONS TO EUROPE</p>
          <ul className='flex flex-col items-center px-4 mt-5 text-black/20'>
          <li className='mt-3'>University of Warsaw</li>
          <li className='mt-3'>Country: Poland(EUROPE)</li>
          <li className='mt-3'>FEES: 2000-3000USD per year</li>
          <li className='mt-3'>Accommodation: 200-300USD per month</li>
          <li className='mt-3'>Check Eligibility</li>
          <li className='mt-3'>Submit required documents to apply</li>
          <li className='mt-3'>Offer letter is received in a few months if you meet the requirements</li>
          <li className='mt-3'>Payment is done when you get to the university</li>
          <li className='mt-3'>Take English exams with our assistance in order to get Visa</li>
        </ul>
        <p className='mt-8 text-blue-950 mb-5'>ADMISSIONS TO EUROPE</p>
          <ul className='flex flex-col items-center px-4 mt-5 text-black/20'>
          <li className='mt-3'>University of Cape-Town</li>
          <li className='mt-3'>Country: South-Africa(AFRICA)</li>
          <li className='mt-3'>FEES: 700-1500USD per year</li>
          <li className='mt-3'>Accommodation: 100-200USD per month</li>
          <li className='mt-3'>Check Eligibility</li>
          <li className='mt-3'>Submit required documents to apply</li>
          <li className='mt-3'>Offer letter is received in a few weeks if you meet the requirements</li>
          <li className='mt-3'>Accept the Offer Letter by making an acceptance deposit</li>
          <li className='mt-3'></li>
        </ul>
      </div>
      <div className=""><embed type="video/webm" src="https://www.youtube.com/watch?v=p6m8eoJFaeI" width="400" height="300"></embed></div>
    </div>
    </div>
  )
}

export default Courses
