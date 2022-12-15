import React, { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
// import NotificationIcon from "../../Assets/Icons/notification.svg"
import bubbleIcon from "../../Assets/Icons/bubble.svg"
import avatar from "../../Assets/Images/avatar.png"
import icon from "../../Assets/Icons/Icon.svg"
import subIcon from "../../Assets/Icons/sub-icon.svg"
import arrow from "../../Assets/Icons/toggleArrow.svg"
import menuBar from "../../Assets/Icons/menuBar.svg"
import user from "../../Assets/Icons/user.svg"
import logout from "../../Assets/Icons/logout.svg"


import "../../Styles/DashboardLayout.css"


const DashboardLayout = () => {

    const [open,setOpen] = useState(false);



    return (
        <>
            <div className='dashboard-container'>

                {/* Top Bar */}
                <div className="dashboard-topbar-section">
                    <div className="topbar-title-section">
                        <img src={menuBar} alt="" />
                        <h1>Dashboard</h1>
                    </div>
                    <div className="topbar-userDetails-section">
                        <div className="topbar-avatar">
                            <img src={avatar} alt="" />

                        </div>
                        <div className="topbar-userDetails">
                            <h3>Mia V</h3>
                            <p>Student</p>
                        </div>

                        <div className="topbar-userOptionField">
                            <img src={bubbleIcon} alt="" onClick={()=>{setOpen(!open)}}/>
                        </div>

                    </div>
                </div>
                
                {/* Drop Down Menu Added  */}
                    <div className={`dropdown-menu ${open? 'open' : 'close'}`}>
                        <DropdownItem src={user} text={"Profile"} />
                        <DropdownItem src={logout} color={"#FF5C5C"} text={"Sign out"} />
                    </div>

                {/* Side Bar  */}
                <div className="dashboard-sidebar-section">
                    <div className='toggle-button'>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="dashboard-sidebar-logo">LOGO</div>

                    <div className="dashboard-sidebar-navigation-menu">
                        <NavLink index className="sidebar-navigation-list parentList">
                            <img src={icon} alt="" />
                            <p>Dashboard</p>
                        </NavLink >

                        <div className="sub-navigation-menu">

                            <Link className="sidebar-navigation-list childList">
                                <img src={subIcon} alt="" />
                                <p>Vice-Chairman</p>
                            </Link>
                            <Link className="sidebar-navigation-list childList">
                                <img src={subIcon} alt="" />
                                <p>Genaeral Secretary</p>
                            </Link>
                            <Link className="sidebar-navigation-list childList">
                                <img src={subIcon} alt="" />
                                <p>Magazine Editor</p>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Main  */}
                <div className="innerContent-section">
                    <Outlet />
                </div>
            </div>
        </>
    )
}



const DropdownItem = ({ text, color,src }) => {
    return (
        <span className="dropdownItem">
            <Link className="item" >
                <img src={src}/>
                <p style={{ color: color }} >{text}</p>
            </Link>
        </span>
    )
}

export default DashboardLayout