import { useNavigate } from "react-router-dom"


const ArtistCard = ({ track }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      className="flex flex-col gap-[8px] min-w-[13rem] sm:max-w-[17rem] lg:w-[32%] md:w-[32%] sm:w-[48%] w-full text-white p-[12px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer "     >
      <img alt="artist" src={track?.images?.coverart} />
      <p className="mt-4 font-semibold text-lg text-white truncate " >{track?.subtitle}</p>
    </div>


    //  <div className="mt-4 flex flex-col" >
    //         <p className="font-semibold text-lg  truncate" >
    //           {/* text-white */}
    //           <Link to={`/songs/${song?.key}`} >{song.title}</Link>
    //         </p>
    //         <p className="text-sm truncate  mt-1 " >
    //           {/* text-gray-300 */}
    //           <Link to={song.artists ? `/artists/${song?.artists[0].adamid}` : `/top-artists`} >{song.subtitle}</Link>
    //         </p>
    //       </div>
  )

};

export default ArtistCard;
