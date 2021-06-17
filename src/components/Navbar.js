import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {NavbarElements} from './NavbarElements'
import './Navbar.css'
import {IconContext} from 'react-icons'


function Navbar() {
    const [sideBar, setSideBar] = useState(false)

    const toggleSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className = "navbar">
                    <Link to = "#" className = "menu-bars">
                        <FaIcons.FaBars onClick = {toggleSideBar}/>
                    </Link>
                </div>
                <nav className = {sideBar ? "nav-menu-active" : "nav-menu"}>
                    <ul className = "nav-menu-items" onClick = {toggleSideBar}>
                        <li className = "navbar-toggle">
                            <Link to = "#" className = "menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {NavbarElements.map((item, index) => {
                            return(
                                <li key = {index} className = {item.className}>
                                    <Link to = {item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
