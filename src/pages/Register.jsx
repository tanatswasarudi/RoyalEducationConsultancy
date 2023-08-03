import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { BiShowAlt, BiHide, BiSolidUserPin } from "react-icons/bi";
import { MdEmail,MdSupportAgent } from "react-icons/md";
import { toast } from "react-hot-toast";
import {FaUserTie} from 'react-icons/fa'
import {BiSolidLockAlt} from 'react-icons/bi'
import {AiFillPhone} from 'react-icons/ai'
import user from '../Assets/User.gif'
import Study from '../Assets/study2.png'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
      const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        Gnumber: "",
        guardian: "",
        password: "",
        degree: "",
        course: "",
        altcourse: "",
      });
      const handleOnChange = (e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                    ...preve,
                    [name] : value
            }})}
            const handleSubmit = async (e) => {
              e.preventDefault();
              
              const { name, email,phone,guardian,Gnumber, password, course,degree,altcourse} = data;
              
              if (name && email && password && phone && Gnumber && guardian && course && altcourse && degree) {
                try {
                  const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/register`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });
                  const responseData = await response.json();
                  if (response.ok) {
                    // If the response was successful (status code 200), show success message
                    toast.success(responseData.message);
                    // Navigate to the login page
                    navigate('/login');
                  } else {
                    // If the response was not successful, show error message
                    toast.error(responseData.message);
                  }
                } catch (error) {
                  console.error(error);
                  // Show error message for internal server error
                  toast.error('Internal server error');
                }
              } else {
                toast.error('Enter missing fields');
              }
            };
            

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className="w-full h-[300px]">
        <img src={Study} alt="" />
      </div>
        <div className="mt-10">
         <div className="w-full max-w-sm m-auto flex items-center flex-col p-2 ">
            <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-xl shadow-md m-auto relative">
            <img src={user} alt="" className='w-full h-full' />
          </div>
          <form className='' onSubmit={handleSubmit}>
        <label htmlFor="name" className='font-serif'>Full Name:</label>
        <div className="flex items-center w-full border my-1 py-2 px-3 rounded-full">
            <span className=''><FaUserTie/></span>
            <input type='text' name='name' placeholder='John Doe' className='w-full outline-none' value={data.name} onChange={handleOnChange}/>
        </div>
        <label htmlFor="email" className='font-serif mt-4'>Your Email:</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdEmail className="text-md " />
              </span>
              <input type='email' name='email' placeholder='johndoe@gmail.com' className=' w-full outline-none' value={data.email} onChange={handleOnChange}/>  
         </div>
         <div className="mt-4">
          <span className='w-1/2 rounded-full'>
          <select className='w-full border rounded' id='degree' name='degree' onChange={handleOnChange} value={data.degree}>
          <option value={"other"} className='text-sm text-gray-500'>Select Degree</option>
          <option value={"diploma"}>Diploma</option>
          <option value={"bachelors"}>Bachelors</option>
          <option value={"masters"}>Masters</option>
          <option value={"phd"}>Phd</option>
          </select>
          </span>
          <span className='w-1/2 rounded-full'>
          <select className='w-full border rounded' id='course' name='course' onChange={handleOnChange} value={data.course}>
          <option value={"other"} className='text-sm text-gray-500'>Select Course</option>
          <option value={"arts & commerce"}>Arts & Commerce</option>
          <option value={"computer"}>Computer</option>
          <option value={"designing"}>Designing</option>
          <option value={"management"}>Management</option>
          <option value={"medical science"}>Medical Science</option>
          <option value={"law"}>Law</option>
          <option value={"science"}>Science</option>
          </select>
          </span>
         </div>
         <div className="mt-4">
         <span className='w-1/2 rounded-full'>
          <select className='w-full border rounded' id='altcourse' name='altcourse' onChange={handleOnChange} value={data.altcourse}>
          <option value={"other"} className='text-sm text-gray-500'>Select Course</option>
          <option value={"arts & commerce"}>Arts & Commerce</option>
          <option value={"computer"}>Computer</option>
          <option value={"designing"}>Designing</option>
          <option value={"management"}>Management</option>
          <option value={"medical science"}>Medical Science</option>
          <option value={"law"}>Law</option>
          <option value={"science"}>Science</option>
          </select>
          </span>
         </div>
         <label htmlFor="phone" className='font-serif mt-4'>Your Phone Number:</label>
         <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <AiFillPhone className="text-md " />
              </span>
              <input type='text' name='phone' placeholder='+263 234567891' className=' w-full outline-none' value={data.phone} onChange={handleOnChange}/>  
         </div>
         <label htmlFor="guardian" className='font-serif mt-4'>Name of Guardian</label>
         <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <BiSolidUserPin className="text-md " />
              </span>
              <input type='text' name='guardian' placeholder='Name of Guardian' className=' w-full outline-none' value={data.guardian} onChange={handleOnChange}/>  
         </div>
         <label htmlFor="Gnumber" className='font-serif mt-4'>Guardian's Number</label>
         <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <AiFillPhone className="text-md " />
              </span>
              <input type='text' name='Gnumber' placeholder='+263 123456789' className=' w-full outline-none' value={data.Gnumber} onChange={handleOnChange}/>  
         </div>
         <label htmlFor="agent" className='font-serif mt-4'>Who reffered you?</label>
         <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdSupportAgent className="text-md " />
              </span>
              <input type='text' name='agent' placeholder='Nomagugu Gumede' className=' w-full outline-none' value={data.agent} onChange={handleOnChange}/>  
         </div>

        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'> 
        <span>
          <BiSolidLockAlt/>
        </span>
            <input id='password'  name="password"   type={showPassword ? "text" : "password"} placeholder='*******' className=' w-full outline-none' value={data.password} onChange={handleOnChange}/>   
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
            </div>
       
        <button className='bg-primary rounded-full'>Register</button>
        <p className='mt-4 px-2'>Already Have an Account ? <Link to='/login' className='text-blue-500'>Login</Link> </p>
      </form>
          </div>
          
      </div>
    </div>
  )
}

export default Register
