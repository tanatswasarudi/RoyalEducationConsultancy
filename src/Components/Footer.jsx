import React from "react";
import { BsChevronBarRight, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import {IoMdCall} from 'react-icons/io'
import { Link } from "react-router-dom";
import {BiChevronRight} from 'react-icons/bi'



const Footer = () => {
  const connectWithWhatsApp = () => {
    // Create the WhatsApp URL
    const message = `Hello, l needed assistance`;
    const URL = `https://wa.me/+918264420815?text=${encodeURIComponent(message)}`;
    // Open the WhatsApp URL
    window.open(URL);
  }

  const phoneNumber = '+91 8264420815'; // Replace with the desired recipient's phone number

  const handleCallRequest = () => {
    const message = 'Please call me back!'; // Customize the call request message
    const callUrl = `tel:${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(callUrl);
  };
  return (
    <footer className="w-full bg-gray-900 text-gray-200 items-center z-50">
      <div className="md:p-10 p-1"> 
        <div className="max-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5 pb-4">
            <h4 className="pb-4 text-red-500">Royal Education</h4>
              <p className="text-gray-500">
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-yellow-500"><MdEmail/><strong>Email:</strong> <span className="text-sm md:text-base">RoyalEducation@gmail.com</span></span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-blue-500"><BsFacebook className="text-blue-500" /><strong>Facebook: </strong> <span className="text-sm md:text-base">RoyalEducation</span></span><br/>
              <span className="flex flex-row items-center cursor-pointer font-serif hover:text-green-500" onClick={connectWithWhatsApp}><FaWhatsappSquare className="text-2xl text-green-600"/><strong>WhatsApp:</strong> <span className="text-sm md:text-base shadow rounded p-2">Click Here</span></span><br/>
              </p>
              
            </div>
            <div className="mb-5 items-center cursor-pointer">
            <h4 className="text-red-500 pb-4 ">Useful Links</h4>
            <ul className="text-gray-500">
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500 "><Link to={"Scholarships"} ><BsChevronBarRight/>Scholarships</Link> </span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"Courses"}><BsChevronBarRight/>Courses</Link></span> </li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"login"}><BsChevronBarRight/>Login</Link></span></li>
              <li className="pb-4"><span className="flex items-center flex-row hover:text-yellow-500"><Link to={"register"}><BsChevronBarRight/>Register</Link></span></li>
            </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-red-500 pb-4">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Admissions</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Accomodation</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Internships</li>
                <li className="pb-4 flex items-center flex-row hover:text-yellow-500"><BiChevronRight/>Web Development</li>
               
              </ul>
            </div>
            <div className="mb-5">
              <ul>
              <li className="pb-4 text-red-500">Apply Today</li>
              <li className="flex flex-row items-center font-serif hover:text-yellow-500 text-gray-500" onClick={handleCallRequest}><IoMdCall className="text-blue-500"/> <strong>Phone:</strong>+91 ###-3333-##</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;