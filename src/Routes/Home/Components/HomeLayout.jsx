import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
         LOGO
       </div>
      <div className="navigationbar">
        <div className="linkactive">
          Home
        </div>
        <div>
          About
        </div>
        <div>
          Contact
        </div>
        <div>
          Service
        </div>
      </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default HomeLayout
