import { useState, useEffect } from 'react';
import axios from "axios"
import { useSelector } from "react-redux"
import { Error, SongCard, Loader } from "../components"
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore"

const AroundYou = () => {

    const country = 'IN'
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songs, isFetching, error } = useGetSongsByCountryQuery(country)

    // getting user location
    // useEffect(() => {
    //     axios
    //         .get('https://geo.ipify.org/api/v2/country?apiKey=at_oyct97sQJIIvPx6g4YCMGtADGFruI')
    //         .then((res) => setCountry(res?.data?.location.country))
    //         .catch((err) => console.log(err))
    // }, [country]);


    if (error) return <Error />;

    return (
        <div className="flex flex-col " >
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 " >
                Around You <span className="font-black text-cyan-400 " >{country}</span>
            </h2>
            {
                isFetching
                    ?
                    <Loader title="Loading Songs around you..." />
                    :
                    <div className="flex flex-wrap sm:justify-between justify-center gap-[12px] " >
                        {
                            songs?.map((song, index) => (
                                <SongCard
                                    key={song?.key}
                                    song={song}
                                    isPlaying={isPlaying}
                                    activeSong={activeSong}
                                    data={songs}
                                    index={index}
                                />
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default AroundYou;
// geoipify api key at_oyct97sQJIIvPx6g4YCMGtADGFruI