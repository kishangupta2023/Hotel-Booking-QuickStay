import React from 'react'
import Navbar from './components/Navbar';
import { useLocation,Route,Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

const App = () => {
  // used useLocation to check if the current path includes "owner" if owner then hide the navbar
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App