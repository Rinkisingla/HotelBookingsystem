import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Allrooms from './pages/Allrooms'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import HotelRegistration from './components/HotelRegistration'
import Layout from './pages/HotelOwner/Layout'

const App = () => {
  const isownerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isownerPath && <Navbar />}
      {false && <HotelRegistration/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Allrooms />} />
          <Route path='/room/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBooking/>} />
          <Route path='/owner' element ={<Layout/>}/>
        </Routes>
      </div>
      
      {!isownerPath && <Footer />}
    </div>
  );
};

export default App;
