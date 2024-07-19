import React from 'react'
import logo from '../MovieLogo.png'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className='flex space-x-8 items-center back bg-pink-200  h-15 p-3 '>
      
      <Link to="/"><img className='cursor-pointer w-[50px] rounded-3xl bg-pink-100 text-pink-200 ' src={logo} alt={"Movie Logo"} /></Link>
      <Link to="/movies" className='cursor-pointer text-pink-500 text-xl font-bold hover:text-pink-900 '>Movies</Link>
      <Link to="/watchlist" className='cursor-pointer text-pink-500 font-bold text-xl hover:text-pink-900'>WatchList</Link>
    </div>
  )
}

export default NavBar
