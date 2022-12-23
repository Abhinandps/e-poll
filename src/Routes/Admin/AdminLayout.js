import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import avatar from "../../Assets/Images/admin.png"
import useAuth from '../../Hooks/useAuth'
 
const AdminLayout = () => {
    useAuth("admin");
    const userData = {
        name: "Neog",
        status: "Admin",
        avatar: avatar
    }

    const data = [
        {
            title: "Dashboard",
            path:"admin/dashboard"
        },
        {
            title: "Students",
            path: "admin/students"
        },
        {
            title: "Election",
            path: "admin/election",
            subMenu: [
                {
                    title: "Create Election",
                    path:"admin/election"
                },
                {
                    title: "View Candidates",
                    path:"admin/view-candidates"
                },
            ]
        },
        {
            title: "Posts",
            path: "admin/posts"
        },
        {
            title: "Branches",
            path: "admin/branches"
        },
        {
            title: "Result",
            path: "admin/result"
        }
    ]

    return (
        <DashboardLayout userData={userData} data={data}/>
    )
}

export default AdminLayout