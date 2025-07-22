import React, { useState } from 'react'
import Title from '../components/Title.jsx'
import { assets, userBookingsDummyData } from '../assets/assets.js'

const MyBooking = () => {
     const[bookings, setbookings] = useState(userBookingsDummyData)
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title="My Booking" subtitle={`Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks`}/>
        <div className='max-w-6xl mt-8 w-full text-gray-800'>
            <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                <div className='w-1/3'>Hotel</div>
                <div className='w-1/3'>Days and timing </div>
                <div className='w-1/3'>Payment</div>
            </div>
            {
              bookings.map((items, index)=>(
                <div key={index} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t gap-6'>
                    <div className='flex flex-col md:flex-row'>
                      <img src={items.room.images[0]} alt="hotel-image" className='w-32 md:w-44 rounded shadow object-cover'/>
                      <div className='flex flex-col gap-1.5 md:ml-4 max-md:mt-3'>
                        <p className='font-platfair text-2xl'> {items.hotel.name}
                            <span className='font-inter text-sm'> ({items.room.roomType})</span>
                        </p>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                          <img src={assets.locationIcon} alt="locationicon"/>
                          <span> {items.hotel.address}</span>
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                          <img src={assets.guestsIcon} alt="guesticon"/>
                          <span> Guest :{items.guests}</span>
                        </div>
                        <p className='text-base'>Total: ${items.totalPrice}</p>
                      </div>
                    </div>
                    
                    {/* Days and timing */}
                    <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                        <div>
                          <p>Check-In</p>
                          <p className='text-gray-500 text-sm'>
                            {new Date(items.checkInDate).toDateString()}
                          </p>
                        </div>
                        <div>
                          <p>Check-Out</p>
                           <p className='text-gray-500 text-sm'>
                            {new Date(items.checkOutDate).toDateString()}
                           </p>
                        </div>
                    </div>
                    {/* Payment */}
                    <div className='flex flex-col items-start justify-center pt-3'>
                      <div className='flex items-center gap-2'>
                        {/* Status Dot */}
                        <div className={`h-3 w-3 rounded-full ${items.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                        
                        {/* Status Text */}
                        <p className={`text-sm ${items.isPaid ? "text-green-600" : "text-red-500"}`}>
                          {items.isPaid ? "Paid" : "Unpaid"}
                        </p>
                      </div>

                      {/* Conditional Pay Button */}
                      {
                        !items.isPaid && (
                          <button className='px-4 py-1.5 mt-2 text-xs border border-gray-500 rounded-full hover:bg-gray-700 hover:text-white transition-all cursor-pointer'>
                            Pay Now
                          </button>
                        )
                      }
                    </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default MyBooking