import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {ImPriceTag} from 'react-icons/im'
import {BiUpload} from 'react-icons/bi'
import { imagetobase64 } from '../utility/imagetobase64'
import {SiHtmlacademy} from 'react-icons/si'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {MdWork,MdOutlineSupportAgent} from 'react-icons/md'
import {RiFlightTakeoffLine} from 'react-icons/ri'



const Universities = () => {
    const [data,setData] = useState({
        title : "",
        address : "",
        category2: "",
        photos : [],
        perks : [],
        category : "",
        description : "",
        price: "",
        Videolink:"",
      })
      const [selectedPerks, setSelectedPerks] = useState([]);
      const handleOnChange = (e) =>{
        const {name,value} = e.target
        setData((preve)=>{
          return{
            ...preve,
           [name] : value
          }
        })}
        const handleUpload = async (e) => {
          const files = e.target.files;
          const uploadedPhotos = [];
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const data = await imagetobase64(file);
            uploadedPhotos.push(data);
          }
          setData((prevData) => ({
            ...prevData,
            photos: uploadedPhotos,
          }));
        };
        const handlePerksChange = (e) => {
          const perkName = e.target.name;
          const isChecked = e.target.checked;
      
          setSelectedPerks((prevPerks) => {
            if (isChecked) {
              return [...prevPerks, perkName]; // Add perk to selectedPerks
            } else {
              return prevPerks.filter((perk) => perk !== perkName); // Remove perk from selectedPerks
            }
          });
        };
          const handleSubmit = async(e) =>{
            e.preventDefault()
          
              const {title,address,photos,price,Videolink,category,category2, description} = data;
              if(title && address && category &&category2 && photos && price &&Videolink && description){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/upload`,{
                  method : "POST", 
                  headers :{
                    "content-type" : "application/json"
                  },
                  body : JSON.stringify({ ...data, perks: selectedPerks })
                })
                const fetchRes = await fetchData.json()
                console.log(fetchRes)
                toast(fetchRes.message)
                alert("University Details have been uploaded")
                setData (()=>{
                  return{
                     title : "",
                     address : "",
                     category : "",
                     category2: "",
                     photos : [],
                     perks : [],
                     description : "",
                     price: "",
                     Videolink:"",
                  }
                })
              }
              else{
                toast("Enter Missing Fields")
              }
          }
  return (
    <div>
         <div className='p-4'>
      <form className='flex flex-col w-full  p-3 ' onSubmit={handleSubmit}>
        <h1 className=' text-2xl mt-4'>Title</h1>
        <p className='text-sm text-gray-500 mb-2'>Name of the University</p>
        <input type={"text"} name='title' className='w-full border rounded'  onChange={handleOnChange} value={data.title}/>
       
        <label htmlFor='category' className=' text-2xl mt-4'>Price Range</label>
        <select className='w-full border rounded' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"} className='text-sm text-gray-500'>Select Price Range</option>
          <option value={"below 1000"}>Below 1000</option>
          <option value={"above 1000"}>Above 1000</option>
          <option value={"below 2500"}>Below 2500</option>
          <option value={"above 2500"}>Above 2500</option>
          </select>

          <label htmlFor='category' className=' text-2xl mt-4'>Region</label>
        <select className='w-full border rounded' id='category2' name='category2' onChange={handleOnChange} value={data.category2}>
          <option value={"other"} className='text-sm text-gray-500'>Select Region</option>
          <option value={"Europe"}>Europe</option>
          <option value={"India"}>India</option>
          <option value={"Africa"}>Africa</option>
          </select>
        <h1 className=' text-2xl mt-4'>Address</h1>
        <p className='text-sm text-gray-500 mb-2'>Address to this University</p>
        <input type='text' name='address'className='w-full border rounded' placeholder=''  onChange={handleOnChange} value={data.address}/>

        <label htmlFor='image' className=' text-2xl mt-4'>Photos
        <p className='text-gray-500 text-sm mb-2'>Add photos of the University</p>
        <div className='h-44 w-full flex items-center  bg-gray-500 justify-center rounded cursor-pointer overflow-scroll'>
           {data.photos && data.photos.length > 0 ? (
            data.photos.map((photo, index) => (
           <img key={index} src={photo} alt='' className='h-full object-cover' />
           ))
   ) : (
          <span className='text-4xl '><BiUpload/></span>
     )}
       <input
    type='file'
    id='image'
    accept='image/*'
    multiple
    className='hidden'
    onChange={handleUpload}
  />
</div>

        </label>

        <h1 className=' text-2xl mt-4'>Perks</h1>
        <p className='text-gray-500 text-sm mb-2'>select all the perks</p>
        <div className='grid grid-cols-2 md:grid-cols-4 ' >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Partial Scholarship' checked={selectedPerks.includes('Partial Scholarship')} onChange={handlePerksChange}/>
            <span className='flex items-center'><SiHtmlacademy/>50%</span>
            </label >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Full Scholarship' checked={selectedPerks.includes('Full Scholarship')} onChange={handlePerksChange} />
            <span className='flex items-center'><SiHtmlacademy/>100%</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Internships' checked={selectedPerks.includes('Internships')} onChange={handlePerksChange}/>
            <span className='flex items-center'><MdWork/>Internships</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Free Flight' checked={selectedPerks.includes("Free Flight")} onChange={handlePerksChange}/>
            <span className='flex items-center'><RiFlightTakeoffLine/>Free Flight</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Agent Fee'  checked={selectedPerks.includes("Agent Fee")} onChange={handlePerksChange}/>
            <span className='flex items-center'><MdOutlineSupportAgent/>Agent Fee</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='Accomodation' checked={selectedPerks.includes('Accomodation')} onChange={handlePerksChange}/>
            <span className='flex items-center'><BsFillHouseCheckFill/>Accomodation</span>
            </label>
        </div>
        <h1 className=' text-2xl mt-4' >Price</h1>
        <p className='text-gray-500 text-sm mb-2'>Price per semester</p>
        <div className=' flex items-center w-full border rounded-full gap-2 '>
        <span className=''><ImPriceTag/></span>
        <input type={"price"} name='price'className='outline-none' onChange={handleOnChange} value={data.price}/>
        </div>

        <h1 className=' text-2xl mt-4'>VideoLink</h1>
        <p className='text-sm text-gray-500 mb-2'>Add Youtube Videolink about this university</p>
        <input type='text' name='Videolink' className='w-full border rounded-full' onChange={handleOnChange} value={data.Videolink}/>

        <div className=''>
        <h1 className=' text-2xl mt-4'>Description</h1>
        <p className='text-gray-500 text-sm mb-2'>Description of this University</p>
        <textarea rows={3} id='description' className='w-full h-[140px] border rounded' name='description' onChange={handleOnChange} value={data.description}/>
        </div>

        <button className='bg-primary p-2  rounded-full text-gray-500 font-medium shadow mt-4'>Upload</button>
      </form>
      </div>
    </div>
  )
}

export default Universities