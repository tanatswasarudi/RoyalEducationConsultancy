import React from 'react'
import Study from '../Assets/europe2.jpg'
import {GoDotFill} from 'react-icons/go'

const Courses = () => {
  return (
    <div>
      <div className="w-full md:h-[400px] h-[300px]  ">
        <img src={Study} alt="" className='w-full h-full'/>
      </div>
    <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6 md:px-10 px-3">
      <div className="flex flex-col items-center px-3">
          <p className='md:mt-10 mt-5 text-blue-950 text-lg font-semibold'>ADMISSIONS TO INDIA</p>
          <ul className=' px-4 mt-5'>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Lovely Professional University</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Country: India (ASIA)</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>FEES: 975-1500USD per semester</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Submit your documents to apply</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Offer letter is received in a few days if you meet the requirements</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Accept the Offer Letter by making an acceptance deposit</li>
          
        </ul>
        <ul className=' px-4 mt-5'>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>CT University</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Country: India (ASIA)</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>FEES: 700-1500USD per semester</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Submit your documents to apply</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Offer letter is received in a few days if you meet the requirements</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Accept the Offer Letter by making an acceptance deposit</li>
        </ul>
        <p className='md:mt-10 mt-5 text-blue-950  text-lg font-semibold'>ADMISSIONS TO EUROPE</p>
          <ul className=' px-4 mt-5'>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>University of Warsaw</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Country: Poland(EUROPE)</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>FEES: 2000-3000USD per year</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Accommodation: 200-300USD per month</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Check Eligibility</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Submit required documents to apply</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Offer letter is received in a few months if you meet the requirements</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Payment is done when you get to the university</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Take English exams with our assistance in order to get Visa</li>
        </ul>
        <p className='md:mt-10 mt-5 text-blue-950 text-lg font-semibold'>ADMISSIONS TO AFRICA</p>
          <ul className='px-4 mt-5'>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>University of Cape-Town</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Country: South-Africa(AFRICA)</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>FEES: 700-1500USD per year</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Accommodation: 100-200USD per month</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Check Eligibility</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Submit required documents to apply</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Offer letter is received in a few weeks if you meet the requirements</li>
          <li className='mt-3 flex items-center gap-2'><GoDotFill/>Accept the Offer Letter by making an acceptance deposit</li>
        
        </ul>
      </div>
      <div className="">
        <div className="">  
        <iframe 
         width="400" 
         height="300" 
         src="https://www.youtube.com/embed/p6m8eoJFaeI" 
          frameborder="0" 
         allowfullscreen
         >
         </iframe></div>
       <div className="mt-8">
       <iframe 
         width="400" 
         height="300" 
         src="https://www.youtube.com/watch?v=W3b9_zMEulA" 
          frameborder="0" 
         allowfullscreen
         >
         </iframe>
       </div>
      </div>
  
    </div>
    </div>
  )
}

export default Courses
