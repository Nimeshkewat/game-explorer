import React, { useContext, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { AppContext } from "../context/AppContextProivder";
import axios from "axios";
import Loader from "./Loader";

function GameList() {
  const { BASE_URL, API_KEY, search, games, setGames, genreFilter, sortOrder } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchAllGames = async (pageNumber = 1) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/games?key=${API_KEY}&search=${search}&page=${pageNumber}&genres=${genreFilter}&ordering=${sortOrder}`
      );

      // console.log(data);
      if(pageNumber === 1){
        setGames(data.results);
      }else{
        setGames(prev => [...prev, ...data.results]);
      }
      
      // setHasMore(!!data.next);
      if(data.next){
        setHasMore(true);
      }else{
        setHasMore(false);
      }

    } catch (error) {
      console.log("GameList:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(1);
      fetchAllGames(1);
      scrollTo(0,0)
    }, 400);
    return () => clearTimeout(timeout)
  }, [search, genreFilter, sortOrder])


  return  (
    <div className="flex flex-col gap-10 mt-10">
      <h2 className="text-green-300 underline font-bold text-center text-3xl">
        Popular Games
      </h2>

      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

          {/* Load More Button */}
     {hasMore && <div className='flex justify-center my-10'>
        <button
          onClick={() => {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchAllGames(nextPage);
          }}
         className='bg-linear-to-l  from-green-400 to-black hover:bg-linear-to-r hover:from-green-400 hover:to-black text-white font-medium text-lg py-2 px-8 cursor-pointer transition-all duration-500 rounded-lg mb-2 active:scale-90'
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>}
    </div>
  );
}

export default GameList;
