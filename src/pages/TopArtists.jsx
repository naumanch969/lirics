
import { useSelector } from "react-redux"
import { Error, ArtistCard, Loader } from "../components"
import { useGetTopChartsQuery } from "../redux/services/shazamCore"

const TopArtists = () => {



    const { data, isFetching, error } = useGetTopChartsQuery()

    if (error) return <Error />;

    return (
        <div className="flex flex-col " >
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 " >Discover Top Artists</h2>

            {
                isFetching
                    ?
                    <Loader title="Loading Top Artists..." />
                    :
                    <div className="flex flex-wrap sm:justify-between justify-center gap-[12px] " >
                        {
                            data?.map((track, i) => (
                                <ArtistCard
                                    key={track?.key}
                                    track={track}
                                />
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default TopArtists;
// geoipify api key at_oyct97sQJIIvPx6g4YCMGtADGFruI