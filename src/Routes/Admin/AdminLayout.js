import React,{useState,useEffect} from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import avatar from "../../Assets/Images/admin.png"
import useAuth from '../../Hooks/useAuth'
import apiCall from '../../Services/apiCall'
 
const AdminLayout = () => {
    useAuth("admin");
    const [userData, setUserData] = useState({
        name: "",
        status: "Admin",
        avatar: avatar
    });

    const getprofile =async () => {
        const res= await apiCall("/admin/profile");
        setUserData({
            ...userData,
            name: res.data.name,
        });

    };

    useEffect(() => {
        getprofile();
    },[]);

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