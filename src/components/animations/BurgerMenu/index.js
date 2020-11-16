import React, {useState} from "react"
import "./style.css"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
// import { SidebarData } from './sidebarData';
import {sidebarData} from "./sidebarData"
import { IconContext } from 'react-icons'

function BurgerMenu  () {
    const [sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div 
    className="BurgerMenu_container"
    // role="button"
    // onClick={() => setStatus(status ==='open' ? 'close' : 'open')}
    >
        <Link to="" className='menu-bars'>
    <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
       {/* <i className={status}></i>
       <i className={status}></i>
       <i className={status}></i> */}
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
      <ul clasName ='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
              <Link to="/"className='menu-bars'>
              <AiIcons.AiOutlineClose/>              
              </Link>
          </li>
          {sidebarData.map((item,index) => {
              return (
                  <li key={index} className={item.cName}>
                      <Link to ={item.path}>
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

export default BurgerMenu