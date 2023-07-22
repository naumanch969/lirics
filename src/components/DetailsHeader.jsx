import { Link } from "react-router-dom"



const DetailsHeader = ({ songData, artistId, artistData }) => {

  const artist = artistData?.artists[artistId].attributes


  return (
    <div className="relative w-full h-32 flex flex-col" >
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-32 h-28" />

      <div className="absolute inset-0 ml-2 top-2 h-28 flex items-center" >
        <img alt="art" src={artistId
          ?
          artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          :
          songData?.images?.coverart
        }
          className="w-28 sm:w-28 h-20 sm:h-28 rounded-full object-cover shadow-xl border-2 shadow-black "
        />
        <div className="ml-5  " >
          <p className="font-bold text-xl sm:text-2xl text-white" >{artistId ? artist?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`} >
              <p className="text-base text-white text-gray-40 mt-2" >{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text-base text-white text-gray-40 mt-2">
            {artistId
              ?
              artist?.genreNames[0]
              :
              songData?.genres?.primary
            }
          </p>

        </div>
      </div>

      <div className="w-full h-24" />

    </div>
  )
}

export default DetailsHeader;
