import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating}) => {
  return (
    <div className='flex flex-row'>
        {Array(5).fill(0).map((_, index) => (
             <img    key={index}  src={rating>index? assets.starIconFilled : assets.starIconOutlined} alt="staricon" className=' w-4.5 h-4.5'/>                       
        ))}
    </div>
  )
}

export default StarRating