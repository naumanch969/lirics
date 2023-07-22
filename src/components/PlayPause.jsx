import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"

const PlayPause = ({ song, handlePause, handlePlay, activeSong, isPlaying }) => {
  // song is each individual song, activeSong is the song playing currently


  return (

    isPlaying && activeSong?.title === song.title ?
      (
        <FaPauseCircle
          size={32}
          className="text-gray-300"
          onClick={handlePause}
        />
      )
      :
      (
        <FaPlayCircle
          size={32}
          className="text-gray-300"
          onClick={handlePlay}
        />
      )

  )
}

export default PlayPause;
