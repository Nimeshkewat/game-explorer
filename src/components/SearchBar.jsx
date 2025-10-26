import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { AppContext } from '../context/AppContextProivder';

function SearchBar() {
    const {search, setSearch} = useContext(AppContext);

  return (
        <div className='bg-white  py-2 px-3 flex w-30 md:w-80 items-center gap-2 rounded-lg'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='text-black w-full flex-1 h-full border-none outline-none font-medium' type="text" placeholder='Search' name='search' />
            <button type="submit">
                <CiSearch className='text-black cursor-pointer' size={25}/>
            </button>
        </div>
  )
}

export default SearchBar