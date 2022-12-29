import React from 'react'

const ProgressBar = ({resultPage}) => {
    return (
        <div className={`${resultPage ? 'progress-div-extended' : 'progress-div'}` }>
            <div className="progress"></div>
        </div>
    )
}

export default ProgressBar
