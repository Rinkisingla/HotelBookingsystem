import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
     const{id} = useParams();
      const[room, setRoom] = useState(null);
      const[mainImage, setMainImage]= useState(null);
       useEffect(()=>{
            const room = roomsDummyData.find(room => room._id === id);
             if (room) {
                setRoom(room);
                setMainImage(room.images[0]);
            }

       },[id])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* {roomDetails} */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className=' text-3xl md:text-4xl font-playfair'>
                {room.hotel.name}
                <span className='font-inter text-sm'>{room.roomType}</span>
            </h1>
            <p className='text-sm font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'> 20% OFF</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>
        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt ="loaction"/>
            <span>{room.hotel.address}</span>
        </div>
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt ="mainImage" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className=' grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {
                    room?.images.length >1 && room.images.map((image,index)=>(
                        <img onClick={()=>setMainImage(image)} key={index} src={image} alt="Room images"
                       className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline-3 outline-orange-500' : ''}`}/>

                    ))
                }
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    Experience Luxury Like Never Before
                </h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {
                        room.amenities.map((amen, index) => (
                        <div key={index} className='items-center flex gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                            <img src={facilityIcons[amen]} alt={amen} className='w-5 h-5' />
                            <p className='text-xs'>{amen}</p>
                        </div>
                        ))
                    }
                    </div>
            </div>
            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>
       {/* Checkin checkout form */}
       <form className="flex flex-col md:flex-row items-stretch justify-between gap-6 bg-white p-6 rounded-2xl mx-auto mt-16 max-w-6xl shadow-[0_0_20px_rgba(0,0,0,0.1)]">
  {/* Check-In */}
  <div className="flex flex-col w-full md:w-1/3">
    <label htmlFor="checkInDate" className="text-gray-600 font-semibold mb-2">Check-In</label>
    <input
      type="date"
      id="checkInDate"
      required
      className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Check-Out */}
  <div className="flex flex-col w-full md:w-1/3">
    <label htmlFor="checkOutDate" className="text-gray-600 font-semibold mb-2">Check-Out</label>
    <input
      type="date"
      id="checkOutDate"
      required
      className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Guests */}
  <div className="flex flex-col w-full md:w-1/3">
    <label htmlFor="guests" className="text-gray-600 font-semibold mb-2">Guests</label>
    <input
      type="number"
      id="guests"
      min="1"
      placeholder="Number of guests"
      required
      className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Button */}
  <div className="w-full md:w-auto flex items-end">
    <button
      type="submit"
      className="w-full md:w-auto bg-blue-700 hover:bg-blue-600 transition-all text-white font-semibold rounded-xl px-8 py-3 mt-4 md:mt-0"
    >
      BOOK NOW
    </button>
  </div>
</form>
    <div className='mt-24 space-y-4'>
        {
            roomCommonData.map((data,index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={data.icon} alt={`${data.title}-icon`} className='w-6.5'/>
                    <div>
                        <p className='text-base'>{data.title}</p>
                        <p className='text-gray-500'>{data.description}</p>
                    </div>
                </div>   
            ))
        }
    </div>
    <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. 
        You get the comfortable two bedroom apartment that has a true city feeling.
    </div>
    {/* HostedBy */}
    <div className='flex flex-col items-start gap-4 '>
        <div className=' flex gap-4'>
            <image src={room.hotel.owner.image} alt="ownerimage" className='h-14  w-14 md:h-18 md:w-18 rounded-full'/>
           <div>
                 <p className='text-lg md:text-xl'>  Hosted By{room.hotel.name}</p>
                    <div className=' flex items-center mt-1'>
                        <StarRating/>
                        <p className='ml-2'>200+ reviews</p>
                    </div>
           </div>
        </div>
        <button className='px-6 py-2.5 mt-5 rounded text-white bg-blue-800 hover:bg-blue-600 transition-all cursor-pointer'>
  Contact Now
</button>
    </div>

    </div>
  )
}

export default RoomDetails