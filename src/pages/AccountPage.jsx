import React from 'react'
import {  useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import {AiFillAccountBook} from 'react-icons/ai'
import {HiAcademicCap} from 'react-icons/hi'
import {BiSolidUserCircle} from 'react-icons/bi'
import AllProducts from '../Components/AllProducts';
import AllProduct from '../Components/AllProduct';

const AccountPage = () => {
const userData = useSelector((state) => state.user);
  console.log(userData)

 
let {subpage} = useParams()
if (subpage === undefined) {
    subpage = "profile"
}
console.log(subpage)
 // Function to determine link classes based on the active subpage
 function linkClasses(type = null) {
    let classes = 'inline-flex items-center py-2 px-6   rounded-full';
    if (type === subpage || (subpage === undefined && type === 'profile')) {
      classes += ' bg-primary rounded-full';
    }
    return classes;
  }

  return (
    <div>
      <div className='w-full h-[300px]'>
            
           </div>
    <nav className='w-full md:flex grid grid-cols-1 justify-center md:gap-2 mt-8 font-serif'>
       <Link className={linkClasses('profile')} to={'/account'}>
        <BiSolidUserCircle/>Your Profile
      </Link>
      <Link className={linkClasses('scholarship')} to={'/account/scholarship'}>
        <HiAcademicCap/>Study Abroad 
      </Link>
      <Link className={linkClasses('universities')} to={'/account/universities'}>
      <AiFillAccountBook/>Work with Budget
      </Link>
    </nav>
    {subpage === 'universities'&& (
        <div className="mt-10 w-full">
            <AllProduct />
        </div>
    )}
    {
      subpage === 'profile' && (
        <div className='mt-10 mb-4 px-2 text flex flex-col items-center justify-center bg-slate-100 shadow font-sans'>
            <span className='my-4 flex items-center'>Name: {userData.name}</span>
            <span className='my-4 flex items-center'>Email: {userData.email}</span>
            <span className='my-4 flex items-center'>Reffered by: {userData.refference}</span>
            <span className='my-4 flex items-center'>Guardian's Number: {userData.Gnumber} </span>
            <span className='my-4 flex items-center'>Guardian's Name: {userData.guardian}</span>

         </div>
      )
    }
    {
      subpage === 'scholarship' && (
            <div className='mt-10 w-full'>
             <AllProducts/>
            </div>
      )
    }

  </div>
  )
}

export default AccountPage
