import React, { useState } from 'react'
import "./navbar.css"
// import logo from "../../react-portfolio-assets/assets/Screenshot 2023-08-19 102352.png"
import { Link } from 'react-scroll'
import menu from "../../react-portfolio-assets/assets/menu (1).png"

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem" onClick={()=>{setShowMenu(false)}}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>{setShowMenu(false)}}>Contact Me</Link>
        </div>
        {/* <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior: "smooth"})
        }}>
           Contact me
        </button> */}
        <img src={menu} alt="" className='mobMenu' onClick={()=>{setShowMenu(!showMenu)}}/>
        <div className='navMenu'  style={{display: showMenu? "flex":"none"}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className="listItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className="listItem">Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Contact me</Link>
        </div>

    </nav>
  )
}

export default Navbar


