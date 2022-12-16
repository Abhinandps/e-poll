import React from 'react'
import { Link } from 'react-router-dom'
import subIcon from "../../../Assets/Icons/sub-icon.svg"

const SubNavigation = ({title, path}) => {
    return (
        <Link to={path} className="sidebar-navigation-list childList">
            <img src={subIcon} alt="" />
            <p>{title}</p>
        </Link>

    )
}

export default SubNavigation