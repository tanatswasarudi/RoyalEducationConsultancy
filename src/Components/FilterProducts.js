import React from 'react'
import {HiAcademicCap} from 'react-icons/hi'

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick} className=''>
        <div className='text-7xl  p-5 bg-primary rounded-full cursor-pointer hover:to-red-300'>
             <HiAcademicCap className=''/>
           </div>
           <p className='text-center font-medium my-1 capitalize'>{category}</p>
            
    </div>
  )
}

export default FilterProduct