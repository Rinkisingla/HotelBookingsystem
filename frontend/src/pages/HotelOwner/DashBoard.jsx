import React from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'
import { useState } from 'react'

const DashBoard = () => {
   const[Dashboarddata , setDashboarddata]=  useState(dashboardDummyData);
  return (
    <div>
      <Title align="left" font='outfit' title="DashBoard" subtitle='Monitor Your room listing, track bookings, and analyse reveneu-all in one place .Stay updated with real time insights to ensure smooth operations'/>
      <div className='flex gap-4 my-8'>
        <div className='bg-blue-600/3 border border-blue-900/100  rounded flex  p-4 pr-8'>
          <img src={assets.totalBookingIcon}  alt="" className='max-sm:hidden h-10'/>
          <div className=' flex flex-col sm:ml-5 font-medium'>
            <p className='text-blue-500 text-lg'>Total Booking</p>
            <p className='text-neutral-400 text-base'>{Dashboarddata.totalBookings}</p>
          </div>
        </div>
        {/* Total revenue */}
              <div className='bg-blue-600/3 border border-blue-900/100  rounded flex  p-4 pr-8'>
                <img src={assets.totalRevenueIcon}  alt="" className='max-sm:hidden h-10'/>
                <div className=' flex flex-col sm:ml-5 font-medium'>
                  <p className='text-blue-500 text-lg'>Total Revenue</p>
                  <p className='text-neutral-400 text-base'>${Dashboarddata.totalRevenue}</p>
                </div>
            </div>
      </div>
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Booking</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 font-medium text-gray-800 '>Username</th>
              <th className='py-3 px-4 font-medium text-gray-800 max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 font-medium text-gray-800 text-center'>Total Amount</th>
              <th className='py-3 px-4 font-medium text-gray-800 text-center'>Payment Status</th>
                
            </tr>
          </thead>
          <tbody className='text-sm'>
            {
              Dashboarddata.bookings.map((item, index)=>(
                <tr key={index}>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300max-sm:hidden'>{item.room.roomType}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300max-sm:hidden text-center'>${item.totalPrice}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300max-sm:hidden'>
                    <button className={`px-3 py-1 text-xs rounded-full mx-auto ${item.isPaid?'bg-green-200 text-green-600':'bg-amber-200 text-amber-600'}`}>
                      {item.isPaid?'Completed':'Pending'}
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default DashBoard