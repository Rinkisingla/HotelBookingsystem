import React, { useState } from 'react'
import Title from '../components/Title'
import { roomsDummyData } from '../assets/assets'

const ListRoom = () => {
  const[Rooms, setRooms]= useState(roomsDummyData)
  return (
   <div>
     <Title align='left' font='outfit' title='Room Listing' subtitle='View edit or manage all the list rooms. Keep the information upto date to provide the best user experience'/>
    <p className='text-gray-500 mt-8'>All Rooms</p>
    <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 font-medium text-gray-800 '>Name</th>
              <th className='py-3 px-4 font-medium text-gray-800 max-sm:hidden'>Facility</th>
              <th className='py-3 px-4 font-medium text-gray-800 text-center'>Price/Night</th>
              <th className='py-3 px-4 font-medium text-gray-800 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {Rooms.map((items, index) => (
              <tr key={index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{items.roomType}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{items.amenities.join(',')}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{items.pricePerNight}</td>
                <td className='py-3 px-4 border-t border-gray-300 text-center'>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <div
                      onClick={() => {
                        const updatedRooms = [...Rooms];
                        updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable;
                        setRooms(updatedRooms);
                      }}
                      className={`w-12 h-7 rounded-full transition-colors duration-300 ${
                        items.isAvailable ? 'bg-blue-600' : 'bg-gray-300'
                      } relative`}
                    >
                      <div
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          items.isAvailable ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>


          </table>
          </div>
   </div>
  )
}

export default ListRoom