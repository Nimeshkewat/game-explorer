import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProivder";
import Loader from "../components/Loader";
import Trailer from "../components/Trailer";

function GameDetails() {
  const { id } = useParams();
  const { BASE_URL, API_KEY } = useContext(AppContext);
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchGameDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/games/${id}?key=${API_KEY}`
      );
      setGame(data);
    } catch (error) {
      console.log("Fetch Game Details: ", error);
    } finally {
      setIsLoading(false);
    }

  };

  useEffect(() => {
    fetchGameDetails();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col md:flex-row gap-10 p-10">
      <div className="min-h-[80vh] w-100">
        <img
          className="h-[80vh] object-cover rounded-lg"
          src={game.background_image}
          alt=""
        />
      </div>

      <div className="w-3xl  text-white flex flex-col gap-5">
        <p className="font-bold text-lg">
          Name: <span className="font-medium">{game.name}</span>
        </p>
        <p className="font-bold text-lg">
          Description:{" "}
          <span className="font-medium">{game.description_raw}</span>
        </p>
        {game.genres && game.genres?.length > 1 && (
          <p className="font-bold text-lg">
            Genre: <span className="font-medium">{game?.genres[0].name} | {game?.genres[1].name}</span>
          </p>
        )}
        <p className="font-bold text-lg">
          Ratings: <span className="font-medium">{game.rating} / 5</span>
        </p>
        <p className="font-bold text-lg">
          Released: <span className="font-medium">{game.released}</span>
        </p>
        {game.developers?.length > 0 && (
          <p className="font-bold text-lg">
            Developers:{" "}
            <span className="font-medium">{game.developers[0].name}</span>
          </p>
        )}
        {game.platforms?.length > 0 && (
          <p className="font-bold text-lg">
            Platforms:{" "}
            {game.platforms.map((item) => (
              <span className="font-medium px-1" key={item.platform.id}>
                {item.platform.slug}
              </span>
            ))}
          </p>
        )}
        {game.tags?.length > 0 && (
          <p className="font-bold text-lg">
            Language:{" "}
            <span className="font-medium">{game.tags[0].language}</span>{" "}
          </p>
        )}
        <Link target="_blank" to={`${game.website}`}>
          <p className="font-bold text-lg">
            Website:{" "}
            <span className="text-blue-300 hover:text-blue-400 underline font-medium">
              {game.website}
            </span>
          </p>
        </Link>

        <Trailer id={id} />

        <Link to='/' className='flex items-center justify-center bg-linear-to-l w-20 from-green-400 to-black hover:bg-linear-to-r hover:from-green-400 hover:to-black text-white font-medium text-lg py-2 px-8 cursor-pointer transition-all duration-500 rounded-lg mb-2 active:scale-90'>
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
}

export default GameDetails;
