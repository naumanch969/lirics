
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { RiCloseLine } from "react-icons/ri"
import { HiOutlineMenu } from "react-icons/hi"

const Searchbar = ({showSidebar, setShowSidebar} ) => {

  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`)
  }


  return (
    <>

      {/* laptop */}
      <div className="w-full hidden md:flex justify-between items-center text-gray-400 focus-within:text-gray-600 h-[64px] px-[24px] border-b-[1px] border-[#121212] " >

        {/* search input */}
        <div className="relative md:w-[24rem] sm:w-[16rem] w-[15rem] h-[40px] rounded-[4px] py-[4px] px-[8px] border-[.5px] border-[#323232] " >
          <input
            type="text"
            placeholder="Search here... "
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full bg-inherit h-full outline-none border-none "
          />
          <button onClick={handleSearch} className="absolute right-0 top-[50%] transform translate-y-[-50%] w-[42px] rounded-[4px] h-[99%] bg-white/5 hover:bg-white/4 text-[22px] flex justify-center items-center " >
            <FiSearch />
          </button>
        </div>

        <div className="flex justify-between items-center gap-[16px] " >
          <span className="text-white " >Account</span>
          <span className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-white/5 text-white text-[28px] " >N</span>
        </div>

      </div>










      {/* tablet + mobile */}
      <div className="w-full h-[7rem] flex md:hidden justify-between items-center flex-col gap-[8px] text-gray-400 focus-within:text-gray-600 px-[16px]  " >

        <div className="flex justify-between items-center w-full h-[64px] " >
          {/* logo */}
          <div className="" >
            <Link to='/' className="text-cyan-400 text-[24px] font-bold " >Musify</Link>
          </div>
          {/* Account */}
          <div className="flex justify-end items-center gap-[6px] md:border-none border-b-[1px] border-[#121212] " >
            <div className="flex justify-center items-center " >
              {
                showSidebar
                  ?
                  <RiCloseLine onClick={() => setShowSidebar(false)} className="w-6 h-6 text-white mr-2 cursor-pointer" />
                  :
                  <HiOutlineMenu onClick={() => setShowSidebar(true)} className="w-6 h-6 text-white mr-2 cursor-pointer " />
              }
            </div>
            <div className="flex justify-between items-center gap-[16px] " >
              <span className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-white/5 text-white text-[28px] " >N</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center " >
          <div className="relative md:w-[24rem] sm:w-[16rem] w-[15rem] h-[40px] rounded-[4px] py-[4px] px-[8px] border-[.5px] border-[#323232] " >
            <input
              type="text"
              placeholder="Search here... "
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-inherit h-full outline-none border-none "
            />
            <button onClick={handleSearch} className="absolute right-0 top-[50%] transform translate-y-[-50%] w-[42px] rounded-[4px] h-[99%] bg-white/5 hover:bg-white/4 text-[22px] flex justify-center items-center " >
              <FiSearch />
            </button>
          </div>
        </div>


      </div>

    </>
  )
}

export default Searchbar;
