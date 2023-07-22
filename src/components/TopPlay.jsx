import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

import PlayPause from "./PlayPause"
import { isSongPlaying, setActiveSong } from "../redux/features/playerSlice"
import { useGetTopChartsQuery } from "../redux/services/shazamCore"

const TopPlay = () => {

  const dispatch = useDispatch()
  const divRef = useRef(null);
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data: songs } = useGetTopChartsQuery()
  const topPlays = songs?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data: songs, index }))
    dispatch(isSongPlaying(true))
  }
  const handlePauseClick = (song, i) => {
    dispatch(isSongPlaying(false))
  }

  const TopChartCard = ({ song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div className="w-full flex flex-row items-center rounded-lg cursor-pointer bg-white/5 hover:bg-white/4 p-[8px] "  >
      <h3 className="font-bold text-base text-white mr-3" >{index + 1}.</h3>                        {/* index */}
      <div className="flex flex-1 flex-row justify-between items-center" >
        <img className="w-[48px] h-[48px] rounded-lg " src={song?.images?.coverart} alt={song?.title} /> {/* image */}
        <div className="flex flex-1 flex-col justify-center mx-3 " >
          <Link to={`/songs/${song?.key}`} >                                  {/* title */}
            <p className="text-[1rem] text-white " >{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`} >                  {/* subtitle */}
            <p className="text-[14px] text-gray-300 " >{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
    </div>
  )





  return (
    <div ref={divRef} className="flex-1 xl:max-w-[500px] max-w-full flex flex-col gap-[20px] " >




      {/* Top Artists */}
      <div className="w-full flex flex-col gap-[12px] " >
        {/* Heading */}
        <div className="flex flex-row justify-between items-center" >
          <h2 className="text-white font-bold text-2xl " >Top Artists</h2>
          <Link to="/top-artists"  >
            <p className="text-gray-300 text-base cursor-pointer hover:underline " >See more</p>
          </Link>
        </div>
        {/* Slider */}
        <div className="w-full flex lg:justify-between justify-start items-center lg:gap-[8px] gap-[12px] " >
          {
            topPlays?.map((song, index) => (
              <Link key={index} to={`/artists/${song?.artists[0].adamid}`} className="w-[60px] h-[60px] " >
                <img src={song?.images.background} alt="name" className="rounded-full w-full h-full object-cover" />
              </Link>
            ))
          }
        </div>
      </div>



      {/* Top Charts */}
      <div className="w-full flex flex-col gap-[12px] " >
        <div className="flex flex-row justify-between items-center" >
          <h2 className="text-white font-bold text-2xl " >Top Charts</h2>
          <Link to="/top-charts"  >
            <p className="text-gray-300 text-base cursor-pointer hover:underline " >See more</p>
          </Link>
        </div>
        <div className="flex flex-col gap-[8px] " >
          {
            topPlays?.map((song, i) => (
              <TopChartCard
                key={i}
                song={song}
                index={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={() => handlePlayClick(song, i)}
                handlePauseClick={() => handlePauseClick(song, i)}
              />
            ))
          }
        </div>
      </div>


    </div>
  )

}

export default TopPlay;
