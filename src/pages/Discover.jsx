
import { Error, Loader, SongCard } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore"
import { selectGenreListId } from "../redux/features/playerSlice"

const Discover = () => {

    const dispatch = useDispatch()
    const { activeSong, isPlaying, genreListId } = useSelector(state => state.player)

    const genres = [
        { title: 'Pop', value: 'POP' },
        { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
        { title: 'Dance', value: 'DANCE' },
        { title: 'Electronic', value: 'ELECTRONIC' },
        { title: 'Soul', value: 'SOUL_RNB' },
        { title: 'Alternative', value: 'ALTERNATIVE' },
        { title: 'Rock', value: 'ROCK' },
        { title: 'Latin', value: 'LATIN' },
        { title: 'Film', value: 'FILM_TV' },
        { title: 'Country', value: 'COUNTRY' },
        { title: 'Worldwide', value: 'WORLDWIDE' },
        { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
        { title: 'House', value: 'HOUSE' },
        { title: 'K-Pop', value: 'K_POP' },
    ];

    const { data: songs, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP')


    if (error) return <Error />

    const genreTitle = genres.find(genre => genre.value == genreListId)?.title || 'POP'

    return (
        <div className="flex flex-col gap-[8px] " >

            <div className="w-full flex justify-between items-center gap-[1rem] sm:flex-row flex-col mt-2 mb-2 " >
                <h2 className="font-bold text-3xl text-white w-full md:w-fit text-left  " >Discover <span className="text-cyan-400 " > {genreTitle}</span></h2>
                <div className="md:w-fit w-full flex justify-end " >
                    <select value={genreListId || 'POP'} onChange={e => dispatch(selectGenreListId(e.target.value))} className="bg-white/5 hover:bg-white/4 text-gray-300 cursor-pointer p-3 text-sm rounded-lg outline-none  " >
                        {
                            genres?.map((genre,index) => (
                                <option key={index} value={genre.value} >{genre.title}</option>
                            ))
                        }
                    </select>
                </div>
            </div>



            {
                isFetching
                    ?
                    <Loader title="Loading Songs....." />
                    :
                    <div className="flex flex-wrap sm:justify-between justify-center gap-[12px] " >
                        {
                            songs.map((song, index) => (
                                <SongCard
                                    key={song.key}
                                    data={songs}
                                    song={song}
                                    index={index}
                                    isPlaying={isPlaying}
                                    activeSong={activeSong}
                                />
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default Discover;