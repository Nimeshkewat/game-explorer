import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProivder";
import GameCard from "../components/GameCard";

function Favourites() {
  const { favouriteGames } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <h2 className="text-green-300 underline font-bold text-center text-3xl">
        Favourite Games ❤️
      </h2>

      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favouriteGames.length === 0 ? (
          <p className="text-white text-center col-span-full">No favourites yet!</p>
        ) : (
          favouriteGames.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </div>
    </div>
  );
}

export default Favourites;
