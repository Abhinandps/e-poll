import React from 'react'
import CandidatesCard from './CandidatesCard'

const PositionCard = ({name,candidates}) => {
  return (
    <div className="election-position-card">
        <div className="election-position-card-title">
            {name}
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
