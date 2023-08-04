import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify"
import {FaUserTie} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import img6 from '../Assets/study.png';

const AgentRegistration = () => {
    const [data, setData] = useState({
      email : "",
      phone : "",
      name : "",
    });
    const handleOnChange = (e)=>{
      const {name,value}=e.target
      setData((preve)=>{
          return{
                  ...preve,
                  [name] : value
          }})}

          const handleSubmit = async(e) =>{
            e.preventDefault()
            const {email,phone,name} = data;
            if ( phone && email && name) {
              const fetchDta = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/apply`,{
                method : "POST",
                headers :{
                  "content-type" : "application/json"
                },
                body : JSON.stringify(data)
              })
          const fetchRes = await fetchDta.json()
          console.log(fetchRes)
          toast(fetchRes.message)
          const message = `Hello, I would like to apply to be a counselor at your Firm. My details are:\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`;
          const whatsappURL = `https://wa.me/+918264420815?text=${encodeURIComponent(message)}`;
          window.open(whatsappURL, '_blank');
          setData (()=>{
            return{
              email : "",
              phone : "",
              name : "",
              
            }
          })
        }
        else{
          toast("Application was not succesful")
        }
      }

  return (
    <div>
      <div className="w-full h-[300px] md:h-[400px]"><img src={img6} alt="" className='w-full h-full' /></div>
      <div className="mx-auto max-w-md pt-10 mb-6">
      <form className='flex flex-col' onSubmit={handleSubmit}>
      <label htmlFor='name' className='px-3 font-serif'>Full Name</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <FaUserTie className="text-md " />
              </span>
              <input type='text' name='name' placeholder='John Smith' className=' w-full outline-none'value={data.name} onChange={handleOnChange}/>  
         </div>
         <label htmlFor='phone' className='px-3 font-serif'>Phone Number</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <AiFillPhone className="text-md " />
              </span>
              <input type='text' name='name' placeholder='+91 9876987655' className=' w-full outline-none'value={data.phone} onChange={handleOnChange}/>  
         </div>
      <label htmlFor='email' className='px-3 font-serif'>Email</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdEmail className="text-md " />
              </span>
              <input type='email' name='email' placeholder='johndoe@gmail.com' className=' w-full outline-none'value={data.email} onChange={handleOnChange}/>  
         </div>
              
              <button className='px-4 py-2 bg-green-500 hover:bg-green-800 rounded-2xl' >Apply Now</button>
              </form>
      </div>
    </div>
  )
}

export default AgentRegistration
