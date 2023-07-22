import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import PlayPause from "./PlayPause"
import { isSongPlaying, setActiveSong } from "../redux/features/playerSlice"


const SongCard = ({ song, index, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch()

  index == 0 && console.log('first song', song)

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(isSongPlaying(true))
  }
  const handlePauseClick = () => {
    dispatch(isSongPlaying(false))
  }

  return (

    <div className="flex flex-col gap-[8px] min-w-[13rem] sm:max-w-[17rem] lg:w-[32%] md:w-[32%] sm:w-[48%] w-full text-white p-[12px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer " >

      <div className="relative w-full h-[10rem] group" >
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70}' : 'hidden'}  `} >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        <img alt="song-img" src={song.images?.coverart} className="w-full h-full " />
      </div>

      <div className="flex flex-col" >
        {/* title */}
        <p className="font-semibold text-lg  truncate" >
          <Link to={`/songs/${song?.key}`} className="hover:text-cyan-400 hover:underline " >{song.title}</Link>
        </p>
        {/* subtitle */}
        <p className="text-sm truncate  mt-1 " >
          <Link to={song.artists ? `/artists/${song?.artists[0].adamid}` : `/top-artists`} className="hover:text-cyan-400 hover:underline "  >{song.subtitle}</Link>
        </p>
      </div>


    </div>

  )

}
export default SongCard;
