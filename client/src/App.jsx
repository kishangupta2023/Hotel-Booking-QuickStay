import React from 'react'
import Navbar from './components/Navbar';
import { useLocation,Route,Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import AllRooms from './pages/AllRooms.jsx';

const App = () => {
  // used useLocation to check if the current path includes "owner" if owner then hide the navbar
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App