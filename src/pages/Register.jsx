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
        agent: "",
        nationality: "",
        stream: "",
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
    <div className='flex flex-col items-center'>
      <div className="w-full md:h-[400px] h-[300px]  ">
        <img src={Study} alt="" className='w-full h-full'/>
      </div>
        <div className="mt-10 shadow mx-auto rounded-full max-w-2xl">
          <div className="w-20 h-20 mx-auto"><img src={user} alt="" className='w-full h-full rounded-full' /></div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <span className='flex flex-col items-center'>
              <label className='font-sans'>Full Name</label>
              <div className="w-full py-2 px-3 border rounded-full flex items-center">
              <BiSolidUserPin className='text-xl'/>
              <input type='text' name='name' className='w-full outline-none' onChange={handleOnChange} value={data.name}/>
              </div>
              
            </span>
            <span className='flex flex-col items-center'>
              <label className='font-sans'>Email</label>
              <div className="w-full py-2 px-3 border rounded-full flex items-center">
                <MdEmail className='text-xl'/>
              <input type='email' name='name' className='w-full outline-none' onChange={handleOnChange} value={data.email}/>
              </div>

            </span>
            <span className='flex flex-col items-center'>
              <label className='font-sans'>Phone Number</label>
              <div className="py-2 px-3 border rounded-full flex items-center w-full">
              <input type='number' name='phone' className='w-full outline-none' onChange={handleOnChange} value={data.phone}/>
              </div>
              
            </span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <span className='flex flex-col items-center'>
              <label>Name of Guardian</label>
              <div className="py-2 px-3 border rounded-full flex items-center w-full">
                <FaUserTie className='text-xl'/>
              <input type='text' name='guardian' className='outline-none w-full' onChange={handleOnChange} value={data.guardian}/>
              </div>
            </span>
            <span className='flex flex-col items-center'>
              <label>Guardian's Number</label>
              <div className="flex items-center py-2 px-3 border rounded-full w-full">
                <AiFillPhone className='text-xl' />
              <input type='number' name='Gnumber' className='w-full outline-none' onChange={handleOnChange} value={data.Gnumber}/>
              </div>
            </span>

          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-6 mt-6">
            <span>
              <select className='py-2 px-3 border rounded-full' onChange={handleOnChange}value={data.degree}>
          <option value={"other"}>Select Degree</option>
          <option value={"Diploma"}>Diploma</option>
          <option value={"Bachelors"}>Bachelors</option>
          <option value={"Masters"}>Masters</option>
          <option value={"Phd"}>Phd</option>
          <option value={"Exchange"}>Exchange</option>
              </select>
            
            </span>
            <span>
            <select className='py-2 px-3 border rounded-full' onChange={handleOnChange}value={data.course}>
          <option value={"other"}>Select Course</option>
          <option value={"Arts & Commerce"}>Arts & Commerce</option>
          <option value={"Computer"}>Computer</option>
          <option value={"Designing"}>Designing</option>
          <option value={"Engineering"}>Engineering</option>
          <option value={"Education"}>Education</option>
          <option value={"Management"}>Management</option>
          <option value={"Medical Science"}>Medical Science</option>
          <option value={"Law"}>Law</option>
          <option value={"Science"}>Science</option>
              </select>
            </span>
          </div>
          <span>
            <select className='py-2 px-3 border rounded-full' onChange={handleOnChange}value={data.altcourse}>
          <option value={"other"}>Select Course</option>
          <option value={"Arts & Commerce"}>Arts & Commerce</option>
          <option value={"Accounting"}>Accounting</option>
          <option value={"Airlines & Tourism"}>Airlines & Tourism</option>
          <option value={"Agriculture"}>Agriculture</option>
          <option value={"Computers"}>Computers</option>
          <option value={"Designing"}>Designing</option>
          <option value={"Engineering"}>Engineering</option>
          <option value={"Education"}>Education</option>
          <option value={"IT"}>IT</option>
          <option value={"Management"}>Management</option>
          <option value={"Medical Science"}>Medical Science</option>
          <option value={"Medical Lab"}>Medical Lab</option>
          <option value={"Law"}>Law</option>
          <option value={"Science"}>Science</option>
              </select>
            </span>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
              <span className='flex flex-col items-center'>
                <label className='font-sans'>Nationality</label>
                <div className="py-2 px-3 border rounded-full w-full flex items-center">
                <input type='text' name='nationaltiy' className='outline-none w-full' value={data.nationality} onChange={handleOnChange}/>
                </div>
              </span>
              <span className='flex flex-col items-center'>
                <label className='font-sans'>Agent Name</label>
                <div className="py-2 px-3 border rounded-full flex items-center w-full">
                  <MdSupportAgent className="text-xl"/>
                <input type='text' name='agent' className='outline-none w-full' value={data.agent} onChange={handleOnChange}/>
                </div>
              </span>
              <span className='flex flex-col items-center'>
               <label className='font-sans'>Which Stream Are You in?</label>
               <div className="py-2 px-3 border rounded-full  flex items-center w-full">
               <input type='text' name='stream' className='outline-none w-full' value={data.stream} onChange={handleOnChange}/>
               </div>
              </span>
            </div>
            <label htmlFor="password" className='font-sans'>Password</label>
          <div className="flex items-center px-3 py-2 w-full mt-2 mb-2 rounded-xl outline-blue-500">
            <span>
              <BiSolidLockAlt className="text-xl" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="*******"
              className="w-full   outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>

          <button className='primary'>Login</button>
        <p className='mt-4 px-2'>Already Have an Account ? <Link to='/login' className='text-blue-500'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register
