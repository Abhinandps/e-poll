import React from 'react'
import CandidatesCard from './CandidatesCard'

const PositionCard = ({position,candidates}) => {
  return (
    <div className="election-position-card">
        <div className="election-position-card-title">
            {position}
        </div>
         <div className="election-candidates-list">
            {candidates.map(candidate=>(
                <CandidatesCard {...candidate} key={candidate.name}/>
                ) 
                )}            
        </div>
    </div>
  )
}

export default PositionCard
