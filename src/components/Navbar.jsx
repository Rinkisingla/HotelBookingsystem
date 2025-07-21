import React, { useState, useEffect} from 'react'

import { assets } from '../assets/assets.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
 const Booking = ()=>(
 <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>)

const Navbar = () => {
    const NavLink =[
        {name: 'Home', path:'/'},
        {name: 'Hotel', path:'/rooms'},
        {name: 'Experience', path:'/'},
        {name: 'About', path:'/'}
    ]
     const[isScrolled, SetIsScrolled] = useState(false);
     const[isMenuOpen, setIsMenuOpen]= useState(false);
     const {openSignIn} = useClerk();
     const {user} = useUser();
      const navigate = useNavigate();
      const Location = useLocation();
     useEffect(() => {
    
         if(location.pathname !== "/"){
             SetIsScrolled(true);
         }else{
             SetIsScrolled(false);
         }
         SetIsScrolled( prev => location.pathname!=="/"?true:prev)
        const handleScroll = () => {
            SetIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    
  return (
        <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            <Link  className={`flex items-center gap-2  ${isScrolled ?"invert opacity-80":""}`} ><img src={assets.logo} alt ="src" href="/"/></Link>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {
                    NavLink.map((link, i)=>(
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ?"text-gray-700":"text-white"}`}>{link.name}
                         <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0
                               group-hover:w-full transition-all duration-300`} />
                        </a>

                    ))
                }
               <button onClick={()=>navigate('/owner')} className="text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 border border-white ">
                    DashBoard
                </button>
            </div>
             <div className="hidden md:flex items-center gap-4">
                
                <img src={assets.searchIcon} alt='serach icon' className={`h-6 w-6 text-black ${isScrolled ? "invert" : ""}`}/>
                 {user ? 
                 (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='MyBooking' labelIcon={Booking} onClick={()=>navigate('/my-bookings')}></UserButton.Action>
                        </UserButton.MenuItems>
                    </UserButton>
                 ) : (<button onClick={openSignIn} className="bg-black text-white px-8 py-0.5 rounded-full ml-4 transition-all duration-500">
                    Login
                </button>)}
                
            </div>
           
            <div className='flex items-center gap-3 md:hidden'>
                 {
                    user  &&<UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action label='MyBooking' labelIcon={Booking} onClick={()=>navigate('/my-bookings')}></UserButton.Action>
                                </UserButton.MenuItems>
                            </UserButton>
                    }
                <img
                    src={assets.menuIcon}
                    alt="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""} `}
                    />
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                   <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                       <img src={assets.closeMenu} alt='closemenu' />
                    </button>
                    {NavLink.map((link, i) => (
                       <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                           {link.name}
                       </a>
                  ))}
                  { user && <button onClick={()=>navigate('/owner')} className=" px-8 py-0.5 rounded-full ml-4 transition-all duration-500 border border-black ">
                    DashBoard
                    </button>}
                { !user &&<button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>}
            </div>

        </nav>
  )
}

export default Navbar




   


