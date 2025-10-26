import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { AppContext } from '../context/AppContextProivder';
import { toast } from 'react-toastify';

function GameCard({game}) {
  const [isRed, setIsRed] = useState(false);
  const {setFavouriteGames, favouriteGames} = useContext(AppContext);

    useEffect(() => {
      const isFavourite = favouriteGames.some(item => item.id === game.id);
      setIsRed(isFavourite);
    }, [favouriteGames, game.id])

    const handleAddToFavourite = async (id) => {
      setFavouriteGames(prev => {
        const alreadyAdded = favouriteGames.some(item => item.id === id);
        
        if(alreadyAdded){
          return prev.filter(item => item.id !== id);
        }else{
          toast.success('Game Added To Favourites');
          return  [...prev, game];
        }

      }) 
    }
    
  return (
  <div className='relative text-white m-5 hover:scale-105 transition-all duration-300  cursor-pointer border border-green-300 flex flex-col items-center gap-2'>    
    <img className='w-full rounded-lg h-full object-fill' src={game.background_image} />
    <h3 className='font-medium text-lg'>{game.name}</h3>
    {game.genres?.length > 0 && <p className='font-medium text-lg'>{game?.genres[0].name}</p>}

      <Link className='bg-linear-to-l from-green-400 to-black hover:bg-linear-to-r hover:from-green-400 hover:to-black text-white font-medium text-lg py-2 px-8 cursor-pointer transition-all duration-500 rounded-lg mb-2' to={`/game-details/${game.id}`}>
        View Details
      </Link>
      <p onClick={()=>handleAddToFavourite(game.id)} className='absolute bottom-5  active:scale-95  right-5 cursor-pointer'>
        {isRed 
        ? <FaHeart size={30}/>
        : <FaRegHeart size={30}/>
        }
      </p>
  </div>
  )
}

export default GameCard