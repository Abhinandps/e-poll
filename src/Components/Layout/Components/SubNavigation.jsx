import React from 'react'
import { Link } from 'react-router-dom'
import subIcon from "../../../Assets/Icons/sub-icon.svg"

const SubNavigation = ({id,title, path}) => {
    return (
        <Link to={path} key={id} className="sidebar-navigation-list childList">
            <img src={subIcon} alt="" />
            <p>{title}</p>
        </Link>

    )
}

export default SubNavigation