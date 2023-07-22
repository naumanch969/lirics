import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { logo } from "../assets"
import { useNavigate, useLocation } from "react-router-dom"
import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';


const Sidebar = ({ showSidebar, setShowSidebar }) => {

  const navigate = useNavigate()
  const location = useLocation()
  const links = [
    { name: 'Discover', to: '/', icon: HiOutlineHome },
    { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
    { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
    { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  ];


  const NavLinks = ({ handleClick }) => (
    <div className="mt-10 " >
      {
        links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            onClick={() => handleClick && handleClick()}
            className={` hover:text-cyan-400 ${location.pathname == link.to ? 'text-cyan-400' : 'text-gray-400'} flex flex-row justify-start items-center my-8 text-sm font-medium `}
          >
            <link.icon className="w-6 h-6 mr-2" />
            {link.name}
          </NavLink>
        ))
      }
    </div>
  )


  return (
    <div className="bg-[black] h-screen lg:flex-[2] md:flex-[2] md:flex md:flex-col" >

      {/* desktop sidebar */}
      <div className="sm:flex flex-col hidden w-full h-full py-10 px-4 bg-white/5 bg-opacity-80 backdrop-blur-sm " >
        <div className="w-full flex justify-start ">
          <img src={logo} alt="logo" onClick={() => navigate("/")} className="w-28 h-14 self-center object-contain cursor-pointer " />
        </div>
        <NavLinks />
      </div>



      {/* mobile sidebar */}
      <div className={`${showSidebar ? 'left-0' : '-left-full'} absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[rgba(0,0,0,0.8)] to-white/4 backdrop-blur-lg p-6 md:hidden smooth-transition z-50 `} >
        <img src={logo} alt="logo" className="w-28 h-14 self-center object-contain" />
        <NavLinks handleClick={() => setShowSidebar(false)} />
      </div>

    </div>
  )
};

export default Sidebar;



