import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'

import avatar from "../../Assets/Images/avatar.png"

const VoterLayout = () => {

    const userData = {
        name: "Mia",
        status: "Student",
        avatar: avatar
    }

    const data = [
        {
            title: "Dashboard",
            subMenu: [
                {
                    title: "Vice-Chairman"
                },
                {
                    title: "General Secratary"
                },
                {
                    title: "Magazine Editor",
                },
            ]
        },
        {
            title: "History",
            path: "history"
        },
        {
            title: "Result",
            path: "result"
        }
    ]




    return (
        <DashboardLayout userData={userData} data={data} />
    )
}

export default VoterLayout