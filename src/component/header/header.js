import React, { useState } from 'react'

import Logo from '../../img/index.png'
import Search from '../../img/search-icon.png'

import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

export function Header(){

    const [nav, setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }

    return(
        <div className="w-screen bg-violet-700 h-[50px] drop-shadow-lg fixed z-10">
            <div className="max-w-[1240px] mx-auto justify-between items-center h-full w-full flex">
                <div className="">
                    <img src={Logo} alt="" className="object-fill w-[150px]" />
                </div>
                
                <ul className="hidden md:flex gap-8 text-white">
                    <li className="">Home</li>
                    <li className="">About</li>
                    <li className="">Services</li>
                    <li className="">Doctors</li>
                    <li className="">Department</li>
                    <li className="">Blog</li>
                    <li className="">Contact</li>
                </ul>
                <div className="hidden md:flex gap-2">
                    <img  src={Search} alt="" className="object-fill w-[40px]" />
                    <input type="text" placeholder="Search" className="rounded-full px-4 focus:outline-none" />
                </div>
                <div className="md:hidden pr-5" onClick={handleClick}>
                    { nav ? <GrClose /> : <GiHamburgerMenu />}
                </div>
            </div>
            <ul className={ !nav ? 'hidden' : "absolute bg-violet-700 px-8 w-full text-xl text-white"}>
                <div className="flex my-4">
                    <img  src={Search} alt="" className="object-fill w-[40px]" />
                    <input type="text" placeholder="Search" className="rounded-full px-4 focus:outline-none w-full" />
                </div>
                <li className="border-b-2 w-full border-white">Home</li>
                <li className="border-b-2 w-full border-white">About</li>
                <li className="border-b-2 w-full border-white">Services</li>
                <li className="border-b-2 w-full border-white">Doctors</li>
                <li className="border-b-2 w-full border-white">Department</li>
                <li className="border-b-2 w-full border-white">Blog</li>
                <li className="border-b-2 w-full border-white">Contact</li>  
            </ul>
        </div>
    )
}