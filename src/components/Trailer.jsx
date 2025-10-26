import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContextProivder';

function Trailer({id}) {
    const {BASE_URL, API_KEY} = useContext(AppContext)
    const [trailer, setTrailer] = useState([]);

    const fetchTrailer = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/games/${id}/movies?key=${API_KEY}`);
            setTrailer(data.results || []);
        } catch (error) {
            console.log('Trailer', error);
        }
    }

    useEffect(() => {
        fetchTrailer();
    }, [id]);

    // console.log(trailer[0]?.data?.max);
 return (
    <div className="text-white ">
      <h2 className="text-2xl font-bold mb-4">Game Trailer</h2>
      {trailer.length > 0 ? (
          <video controls width="600" className="rounded-lg shadow-lg">
            <source src={trailer[0]?.data?.max} type="video/mp4" />
          </video>
      ) : (
        <p>No trailer available for this game.</p>
      )}
    </div>
  );
}


export default Trailer