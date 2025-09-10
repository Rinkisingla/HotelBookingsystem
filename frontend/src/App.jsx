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
import DashBoard from './pages/HotelOwner/DashBoard'
import AddRoom from './pages/HotelOwner/AddRoom'
import ListRoom from './pages/ListRoom'

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
          <Route path='/owner' element ={<Layout/>}>
                <Route index element ={<DashBoard/>}/>
                <Route path='add-room' element ={<AddRoom/>}/>
                <Route path='list-room' element ={<ListRoom/>}/>

          </Route>
        </Routes>
      </div>
      
      {!isownerPath && <Footer />}
    </div>
  );
};

export default App;
