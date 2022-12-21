import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from "../../../Assets/Icons/Icon.svg"
import SubNavigation from './SubNavigation'

const NavigationMenu = ({id,title,path,subMenu}) => {
    return (
      <>
        <NavLink key={id} to={path}  className="sidebar-navigation-list parentList">
            <img src={icon} alt="" />
            <p>{title}</p>
        </NavLink >
        <div className="sub-navigation-menu">
         {subMenu && subMenu.map((subData)=> <SubNavigation key={subData.id} {...subData}/> )}
        </div>
      </>
        
    )
}

export default NavigationMenu