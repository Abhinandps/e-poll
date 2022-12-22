import React from 'react'
import "../../../../Styles/CandidatesCard.css"
import exitIcon from "../../../../Assets/Icons/exit.svg"
import avatar from "../../../../Assets/Images/avatar.png"

const CandidatesCard = ({ name,onDelete }) => {
    return (
        <div className="candidate-nameCard">

            <img className='avatar' src={avatar} alt="" />
            <p>{name}</p>
            <img className='exit-icon' onClick={onDelete} src={exitIcon} alt="" />
        </div>
    )
}

export default CandidatesCard
