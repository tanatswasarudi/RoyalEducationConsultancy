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
    <nav className='w-full md:flex grid grid-cols-1 justify-center md:gap-2 mt-8 font-serif'>
       <Link className={linkClasses('profile')} to={'/account'}>
        <BiSolidUserCircle/>Your Profile
      </Link>
      <Link className={linkClasses('scholarship')} to={'/account/scholarship'}>
        <HiAcademicCap/>Work with Region 
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
        <div className='mt-10 mb-4 w-full'>
           <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-40">
            <div className="px-6 p-2 shadow rounded ">
              <span className='font-serif flex items-center'>Name: {userData.name}</span>
              <span className='font-serif flex items-center'>Email: {userData.email}</span>
              <span className='font-serif flex items-center'>Phone: {userData.phone}</span>
              <span className='font-serif flex items-center'>Agent: {userData.agent}</span>
            </div>
            <div className="px-6 p-2 shadow rounded">
            <span className='font-serif flex items-center'>Guardian's Name: {userData.guardian}</span>
            <span className='font-serif flex items-center '>Guardian's number: {userData.Gnumber}</span>
            <span className='font-serif flex items-center'>Nationality: {userData.nationality}</span>
            <span className='font-serif flex items-center'>Degree: {userData.degree}</span>
            </div>
            
           </div>
           <div className=""></div>
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
