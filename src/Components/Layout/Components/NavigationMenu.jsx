import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from "../../../Assets/Icons/Icon.svg"
import SubNavigation from './SubNavigation'

const NavigationMenu = ({title,path,subMenu}) => {
    return (
      <>
        <NavLink to={path}  className="sidebar-navigation-list parentList">
            <img src={icon} alt="" />
            <p>{title}</p>
        </NavLink >
        <div className="sub-navigation-menu">
         {subMenu && subMenu.map((subData)=> <SubNavigation {...subData}/> )}
        </div>
      </>
        
    )
}

export default NavigationMenu