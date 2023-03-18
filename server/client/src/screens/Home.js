import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Library from './Library'
import Feed from './Feed'
import Trending from './Trending'
import Player from './Player'
import Favourites from './Favourites'
import './home.css'
import Login from '../components/Login'
import Signup from '../components/Signup'
const Home = () => {
  return (
   <>
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
   </>
  )
}

export default Home
