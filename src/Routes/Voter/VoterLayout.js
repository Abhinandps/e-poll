import {useState,useEffect} from 'react'
import apiCall from '../../Services/apiCall'
import DashboardLayout from '../../Components/Layout/DashboardLayout'

import avatar from "../../Assets/Images/avatar.png"
import useAuth from '../../Hooks/useAuth'

const VoterLayout = () => {
   
   useAuth("voter");

    const [userData,setUserData] = useState({

        name: "",
        status: "Student",
        avatar: avatar
    });
    const getprofile =async () => {
        const res= await apiCall("/voter/profile");
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
            id:1,
            title: "Dashboard",
            path:'voter/dashboard',
            subMenu: [
                {
                    id:1,
                    title: "Vice-Chairman"
                },
                {
                    id:2,
                    title: "General Secratary"
                },
                {
                    id:3,
                    title: "Magazine Editor",
                },
            ]
        },
        {
            id:2,
            title: "History",
            path: "voter/history"
        },
        {
            id:3,
            title: "Result",
            path: "voter/result"
        }
    ]




    return (
        <DashboardLayout  userData={userData} data={data} />
    )
}

export default VoterLayout