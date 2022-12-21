import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import bubbleIcon from "../../Assets/Icons/bubble.svg"
import arrow from "../../Assets/Icons/toggleArrow.svg"
import menuBar from "../../Assets/Icons/menuBar.svg"
import user from "../../Assets/Icons/user.svg"
import logout from "../../Assets/Icons/logout.svg"

import DropdownItem from './Components/DropdownItem'
import NavigationMenu from './Components/NavigationMenu'
import "../../Styles/DashboardLayout.css"


const DashboardLayout = ({ userData, data }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [sidebar, setSideBar] = useState(false);

    const onLogout =()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        navigate("/");
    }

    return (
        <>
            <div className='dashboard-container'>

                {/* Top Bar */}
                <div className="dashboard-topbar-section">

                    <div className="topbar-title-section">
                        <img src={menuBar} alt="" onClick={() => { setSideBar(true) }} />
                        <h1>Dashboard</h1>
                    </div>

                    <div className="topbar-userDetails-section">
                        <div  className="topbar-avatar">
                            <img src={userData.avatar} alt="" />

                        </div>
                        <div className="topbar-userDetails">
                            <h3>{userData.name}</h3>
                            <p>{userData.status}</p>
                        </div>

                        <div className="topbar-userOptionField">
                            <img src={bubbleIcon} alt="" onClick={() => { setOpen(!open) }} />
                        </div>

                    </div>
                </div>

                {/* Drop Down Menu Added  */}
                <div className={`dropdown-menu ${open ? 'open' : 'close'}`}>
                    <DropdownItem src={user} text={"Profile"} />
                    <DropdownItem onClick={onLogout} src={logout} color={"#FF5C5C"} text={"Sign out"} />
                </div>

                {/* Side Bar  */}
                <div className={`dashboard-sidebar-section ${sidebar ? 'dashboard-sidebar-section-active' : ''}`}>
                    <div className='toggle-button'>
                        <img src={arrow} alt="" onClick={() => { setSideBar(false) }} />
                    </div>
                    <div className="dashboard-sidebar-logo">LOGO</div>

                    <div className="dashboard-sidebar-navigation-menu">
                        {
                            data.map((navData,i) => {
                               
                                return (
                                    <>
                                        <NavigationMenu key={i} {...navData} />
                                    </>
                                )
                            })
                        }
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