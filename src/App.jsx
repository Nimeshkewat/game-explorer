import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import GameDetails from './pages/GameDetails'
import Favourites from './pages/Favourite'

function App() {
  return (
    <div className='min-h-screen bg-linear-to-r from-black to-green-500'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game-details/:id' element={<GameDetails/>} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div>
  )
}

export default App