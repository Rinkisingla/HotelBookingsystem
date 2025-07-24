import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const[images,setImages]= useState(
    {
      1:null,
      2:null,
      3:null,
      4:null
    })
     const [input, setInput] = useState(
      {
        roomType:'',
        priceperNight:'',
        amenities:{
          'Free Wifi':false,
          'Free Breakfast': false,
          'Room Service': false,
          'Mountain View': false,
          'Pool Access': false,
        }
      }
     )
  return (
    <form>
      <Title align='left' font='Outfit' title='Add Room'  subtitle='Fill in the details Carefully and accurate  room details pricing and amentites to enhance user booking experience'/>
      {/* Upload Are for images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4  my-2 flex-wrap'>
        {
          Object.keys(images).map((key)=>(
            <label htmlFor={`roomImages${key}`} key={key}>
              <img className='h-24 w-full object-cover cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]):assets.uploadArea} alt=""/>
              <input type='file' accept='image/*' id={`roomImages${key}`} hidden onChange={e=> setImages({...images, [key] :e.target.files[0]})}/>
            </label>
          ))
        }
      </div>

      <div className=' flex w-full max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={input.roomType} onChange={e=> setInput({...input, roomType: e.target.value})}
            className=' opacity-70 border border-gray-300 mt-1 rounded p-2 w-full' >
              <option value="">Select Room Type</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Luxury Room">Luxury Room</option>
              <option value="Family Suite">Family Suite</option>
          </select>
        </div>
          <div>
            <p className='mt-4 text-gray-800'>Price
              <span className='text-sm'>/night</span>
            </p>
            <input type='number' placeholder='0'  className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.priceperNight} onChange={e=>setInput({...input, priceperNight : e.target.value})}/>
          </div>
      </div>
         <p className='mt-4 text-gray-800'>Amenities</p>
         <div className='flex flex-col  flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(input.amenities).map((amenity, index)=>(
                <div key={index}>
                  <input type='checkbox' id={`amenities${index+1}`} checked={
                    input.amenities[amenity]}
                    onChange={()=>setInput({...input, amenities:{...input.amenities, [amenity]:!input.amenities[amenity]}})}
                    />
                    <label htmlFor={`amenities${index+1}`}> {amenity}</label>
                </div>
              ))
            }
         </div>
         <button className='bg-blue-800 text-white px-8 py-2 rounded mt-8 cursor-pointer'>Add Room</button>

    </form>
  )
}

export default AddRoom