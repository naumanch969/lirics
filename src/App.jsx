import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Navbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(()=>{
    window.scrollTo()
  },[])

  return (
    <div className="relative flex min-h-screen w-screen overflow-x-hidden ">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="w-full lg:flex-[10] md:flex-[8] flex flex-col bg-gradient-to-br  bg-[black] ">
        {/* from-black to-[#121286] */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />


        <div className="bg-[black] w-full px-[16px] lg:mt-0 mt-[16px] sm:px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex lg:flex-row flex-col-reverse gap-[16px] ">
          {/* songs */}
          <div className="flex-[8] lg:mb-0 mb-[32px] ">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          {/* Top Artists, Charts */}
          <div className="lg:flex-[4] xl:sticky relative top-0 h-fit mb-[16px] mt-[8px] ">
            <TopPlay />
          </div>
        </div>

      </div>



      {/* player */}
      {
        activeSong?.title &&
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-white/4 backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      }


    </div>
  );
};

export default App;
