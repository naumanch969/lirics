import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Loader, Error, DetailsHeader, RelatedSongs } from "../components"
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore"

const ArtistDetails = () => {
  const { id: artistId } = useParams()

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId })

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  if (isFetchingArtistDetails) return <Loader title="Searching Artist Details" />
  if (error) return <Error />


  return (
    <div className="flex flex-col" >

      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        isPlaying={isPlaying}
        artistId={artistId}
        activeSong={activeSong}
      />

    </div>
  )
}

export default ArtistDetails;
