import React,{useState} from 'react'
import logo from '../Assets/Logo.jpg'
import {BiSolidUserCircle} from 'react-icons/bi'
import {GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import {BiUserMinus}from 'react-icons/bi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import {BiSolidUserAccount} from 'react-icons/bi'

const Header = () => {
  const userData = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);

  const connectWithWhatsApp = () => {
    const phoneNumber = '+918264420815';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url);
  }

  const phoneNumber = '+918264420815'; 
  const handleCallRequest = () => {
    const message = 'Please call me back!'; 
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRedux());  
  };
  return (
      <header className="fixed top-0 left-0 justify-between h-20 shadow flex items-center  w-full z-50  bg-white ">
          
          <div>
           <Link to={"/"} className=" cursor-pointer px-4 ">
            <div className="h-20 w-22"><img src={logo} alt="" className='h-full w-full'/></div>       
                </Link>
           </div>  
           <div className="flex items-center gap-3 md:gap-7 ">
           <div className="hidden md:flex gap-4 md:gap-6 text-base text-cyan-500 md:text-lg">
           <Link to='/' className='hover:text-cyan-800 font-mono font-semibold'>Home</Link>
           <Link to='/Courses' className='hover:text-cyan-800 font-mono font-semibold'>Courses</Link>
           <Link to='/About' className='hover:text-cyan-800 font-mono font-semibold'>About</Link>
           <Link to='/Scholarships' className='hover:text-cyan-800 font-mono font-semibold'>Scholarships</Link>
           <Link to='/AgentRegistration' className='hover:text-cyan-800 font-mono font-semibold'>Join Our Team</Link>
            </div>
            <div className="flex items-center cursor-pointer gap-2 rounded-full border border-gray-300 py-2 px-4 shadow-md shadow-gray-300 " onClick={handleShowMenu}>
               <GiHamburgerMenu className='text-2xl' /> 
               <BiSolidUserCircle className='text-2xl'/>  
         <div className='mt-30 py-3'>
           {
            showMenu && (
              <div className="absolute  bg-purple-700  right-2 py-1  font-serif w-36  flex items-center flex-col m-auto cursor-pointer shadow rounded min-w-[100px]">   
              <nav className='flex items-center flex-col text-base w-32 px-2 py-1 md:text-lg bg-black text-cyan-500 '>
                 {userData.name ? (
                <Link to={"/"} className="mb-6 flex items-center" onClick={handleLogout}><span className="">{userData.name}</span><BiUserMinus className='text-2xl'/> </Link>
                && <Link to={"account"} className='flex mb-6 items-center'><BiSolidUserAccount className='text-2xl'/>Account</Link>
                  ) : (
                    <Link to={"login"}className="mb-6 flex items-center">  <BiSolidUserCircle className='text-2xl'/>Login</Link>
                  )}
                  {
                    userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                      <Link to={"AddNewUniversity"} className="mb-6 flex items-center">
                      <MdProductionQuantityLimits/>
                          Add University
                    </Link>
                    )
                  }
                    <Link to='/' className=" mb-6">Home</Link>
                    <Link to='/Courses' className=" mb-6">Courses</Link>
                    <Link to='/About' className=" mb-6">About</Link>
                    <Link to='/Scholarships' className=" mb-6">Scholarships</Link>
                    <Link to='/AgentRegistration' className=" mb-6">Join Our Team</Link>
                   <FaWhatsappSquare onClick={connectWithWhatsApp} className="text-3xl mb-6 text-green-600"/>
                  <IoMdCall onClick={handleCallRequest}  className="text-blue-500 text-3xl"/>
              </nav>
              </div> 
            )
           }
          </div>
           </div>
           </div>          
       
        </header>
  )
}

export default Header