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

import DropdownItem from './Components/DropdownItem'


import "../../Styles/DashboardLayout.css"


const DashboardLayout = () => {

    const [open,setOpen] = useState(false);
    const [sidebar,setSideBar] = useState(false);



    return (
        <>
            <div className='dashboard-container'>

                {/* Top Bar */}
                <div className="dashboard-topbar-section">

                    <div className="topbar-title-section">
                        <img src={menuBar} alt="" onClick={()=>{setSideBar(true)}} />
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

                <div className={`dashboard-sidebar-section ${sidebar ? 'dashboard-sidebar-section-active' : ''}`}>
                    <div className='toggle-button'>
                        <img src={arrow} alt="" onClick={()=>{setSideBar(false)}} />
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
                        <NavLink to="history" className="sidebar-navigation-list parentList">
                            <img src={icon} alt="" />
                            <p>History</p>
                        </NavLink >
                        <NavLink to="results" className="sidebar-navigation-list parentList">
                            <img src={icon} alt="" />
                            <p>Result</p>
                        </NavLink >
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




export default DashboardLayout