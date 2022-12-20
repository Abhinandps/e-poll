import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import avatar from "../../Assets/Images/admin.png"
 
const AdminLayout = () => {
    const userData = {
        name: "Neog",
        status: "Admin",
        avatar: avatar
    }

    const data = [
        {
            title: "Dashboard",
        },
        {
            title: "Students",
            path: "students"
        },
        {
            title: "Election",
            path: "election",
            subMenu: [
                {
                    title: "Create Election",
                    path:"election"
                },
                {
                    title: "View Candidates",
                },
            ]
        },
        {
            title: "Posts",
            path: "posts"
        },
        {
            title: "Branches",
            path: "branches"
        },
        {
            title: "Result",
            path: "result"
        }
    ]

    return (
        <DashboardLayout userData={userData} data={data}/>
    )
}

export default AdminLayout