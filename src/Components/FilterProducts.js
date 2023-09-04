import React from 'react'
import {HiAcademicCap} from 'react-icons/hi'

const FilterProduct = ({category2,onClick}) => {
  return (
    <div onClick={onClick} className=''>
        <div className='text-7xl  p-5 bg-blue-950 rounded-full cursor-pointer hover:to-blue-300'>
             <HiAcademicCap className=''/>
           </div>
           <p className='text-center font-medium my-1 capitalize'>{category2}</p>
            
    </div>
  )
}

export default FilterProduct