
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Error, SongCard, Loader } from "../components"
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore"

const Search = () => {

  const { searchTerm } = useParams()

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)  // data: {tracks:{}, artists:{}}

  if (isFetching) return <Loader title="Loading Songs ..." />;
  if (error) return <Error />;

  const songs = data?.tracks?.hits?.map((song) => song?.track)

  return (
    <div className="flex flex-col " >
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 " >Showing results for <span className="font-black text-cyan-400 " >{searchTerm}</span> </h2>

      <div className="flex flex-wrap sm:justify-between justify-center gap-[12px] " >
        {
          songs?.map((song, index) => (
            <SongCard
              key={song?.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              index={index}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Search;
// geoipify api key at_oyct97sQJIIvPx6g4YCMGtADGFruI