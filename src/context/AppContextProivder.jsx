import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const API_KEY =  import.meta.env.VITE_API_KEY;
    const [games, setGames] = useState([]);
    
    const [search, setSearch] = useState('');
    const [genreFilter, setGenreFilter] = useState('action');
    const [sortOrder, setSortOrder] = useState('');


    const [favouriteGames, setFavouriteGames] = useState(() => {
        const savedFavourites = localStorage.getItem("favouriteGames");
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });
    
    // useEffect(() => {
    //     const savedFavourites = localStorage.getItem("favouriteGames");
    //     if (savedFavourites) {
    //     setFavouriteGames(JSON.parse(savedFavourites));
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('favouriteGames', JSON.stringify(favouriteGames));
    }, [favouriteGames])

    const value = {
        BASE_URL,
        API_KEY,
        search,
        setSearch,
        games,
        setGames,
        genreFilter,
        setGenreFilter,
        favouriteGames,
        setFavouriteGames,
        sortOrder,
        setSortOrder,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export default AppContextProvider