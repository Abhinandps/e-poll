import React from 'react'
import CandidatesCard from "../../Components/Cards/CandidatesCard"
const PositionCard = ({
    position,
    candidates,
    addVote
}
    ) =>{
    return(
        <div className="election-position-card">
        <div className="election-position-card-title">
            {position}
        </div>
         <div className="election-candidates-list">
            {candidates.map(candidate=>(
                <CandidatesCard addVote={addVote} {...candidate} key={candidate.rollno}/>
                ) 
                )}            
        </div>
    </div>
    )
}
export default PositionCard