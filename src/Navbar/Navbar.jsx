import { useState } from "react"
import {BsFillSunFill} from"react-icons/bs"
import{HiOutlineMenu} from"react-icons/hi"
import{MdOutlineClose} from"react-icons/md"
import useDarkMode from "../useDarkMode"
import{FaMoon} from"react-icons/fa"
const Navbar = (props) => {
    const {isMobile}= props;
    const[openMenu,setOpenMenu]=useState(false)
    const[isDarkMode,toggleDarkMode]= useDarkMode();
    const handleMenu =()=>{
        setOpenMenu(!openMenu);
    }
    const handleDarkMode=()=>{
        toggleDarkMode(!isDarkMode)
    }
    return ( 
        <nav className="flex items-center">
            <div className="flex items-center">
                <div className="text-[20px] font-bold mr-2">
                   NerdCard
                </div>
                {isDarkMode?(
                    <BsFillSunFill size={"24px"} className="cursor-pointer" color="#e9c46a" onClick={handleDarkMode}/>  
                ):(
                    <FaMoon size={"24px"} className="cursor-pointer" color="#e9c46a" onClick={handleDarkMode}/>
                )}
            </div>
            <ul className="md:flex md:gap-10 ml-auto text-xl font-semibold">
                {openMenu && isMobile?(
                    <MdOutlineClose size={"24px"} className="cusor-pointer" onClick={handleMenu}/>
                ): !openMenu && isMobile?(
                    <HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
                ):(
                    <>
                        <li className="btn-hover">Features</li>
                        <li className="btn-hover">Menu</li>
                        <li className="btn-hover">Our Story</li>
                        <li className="btn-hover ml-28">Contact</li>
                    </>
                )}
                {openMenu&&(
                    <div className="absolute right-8 bg-white text-black p-8 text-center text-[13px]">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Menu</li>
                        <li className="cursor-pointer">Our Story</li>
                        <li className="cursor-pointer">Contact</li>
                    </div>
                )}
            </ul>
        </nav>
     );
}
 
export default Navbar ;