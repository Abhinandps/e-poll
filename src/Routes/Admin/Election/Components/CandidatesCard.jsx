import React from 'react'
import "../../../../Styles/CandidatesCard.css"
import exitIcon from "../../../../Assets/Icons/exit.svg"
import avatar from "../../../../Assets/Images/avatar.png"
import { staticUrl } from '../../../../Config/apiUrl'

const CandidatesCard = ({ name,onDelete,image }) => {
    return (
        <div className="candidate-nameCard">

            <img className='avatar' src={(image && (staticUrl + image)) || avatar} alt="" />
            <p>{name}</p>
            <img className='exit-icon' onClick={onDelete} src={exitIcon} alt="" />
        </div>
    )
}

export default CandidatesCard
