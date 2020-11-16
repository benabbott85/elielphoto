import React from 'react'
// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons  from "react-icons/md";
import * as GHIcons from "react-icons/go";
import * as BSIcons from "react-icons/bs"
// import * as IOIcons from "react-icons/io"


export const sidebarData = [
// {
//     title: 'Home',
//     path: '/',
//     icon: <AiIcons.AiFillHome/>,
//     cName: 'nav-text'
// },
{
    title: 'About Me',
    path: '/About',
    icon: <BSIcons.BsPeopleCircle/>,
    cName: 'nav-text'
},
{
    title: 'Contact Me',
    path: '/Contact',
    icon: <MdIcons.MdEmail/>,
    cName: 'nav-text'
},
// {
//     title: 'Tech',
//     path: '/Technologies',
//     icon: <AiIcons.AiFillHtml5/>,
//     cName: 'nav-text'
// },

{
    title: 'My Portfolio',
    path: '/Portfolio',
    icon: <GHIcons.GoProject/>,
    cName: 'nav-text'
}

]


