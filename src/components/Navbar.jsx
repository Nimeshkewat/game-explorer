import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContextProivder'

function Navbar() {
  const {genreFilter, setGenreFilter, setSearch, sortOrder, setSortOrder} = useContext(AppContext);
  return (
    <div className=' z-10 sticky top-0 gap-3 text-white flex items-center justify-between py-5 px-20'>
      <Link onClick={()=>setSearch('')} to='/'><h2 className='text-4xl  underline font-medium text-green-400 cursor-pointer'>Games</h2></Link>
      <SearchBar />
      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        className="text-white md:w-40  font-bold text-lg border border-green-800 cursor-pointer px-2 py-1 rounded-lg"
      >
        {/* <option className='text-white bg-green-500' value="">All Genres</option> */}
        <option className='text-white bg-green-500' value="action">Action</option>
        <option className='text-white bg-green-500' value="adventure">Adventure</option>
        <option className='text-white bg-green-500' value="shooter">Shooting</option>
        <option className='text-white bg-green-500' value="strategy">Strategy</option>
      </select>

  <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="text-white md:w-40  font-bold text-lg border border-green-800 cursor-pointer px-2 py-1 rounded-lg"
      >
        <option className='text-white bg-green-500' value="">Default</option>
        <option className='text-white bg-green-500' value="rating">Rating</option>
        <option className='text-white bg-green-500' value="released">Release Date</option>
        <option className='text-white bg-green-500' value="name">Name (A–Z)</option>
      </select>

      <Link to="/favourites">
        <h3 className="text-white text-lg font-bold  hover:text-green-400">Favourites ❤️</h3>
      </Link>
    </div>
  )
}

export default Navbar