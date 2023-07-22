import { useSelector } from "react-redux"
import { Error, SongCard, Loader } from "../components"
import { useGetTopChartsQuery } from "../redux/services/shazamCore"

const TopCharts = () => {

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: songs, isFetching, error } = useGetTopChartsQuery()

    if (isFetching) return <Loader title="Loading Songs around you..." />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col " >
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 " >Discover Top Charts</h2>

            {
                isFetching
                    ?
                    <Loader title="Loading Top Charts..." />
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

export default TopCharts;
// geoipify api key at_oyct97sQJIIvPx6g4YCMGtADGFruI