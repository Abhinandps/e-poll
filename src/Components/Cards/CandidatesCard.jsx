
import ProgressBar from "../GraphicalElelments/ProgressBar/ProgressBar"
import avatar from "./../../Assets/Images/avatar.png"

const CandidatesCard = (
   {name,
    department,
    semester,
    rollno,
    votes,img,winStatus,
    addVote,
    position,
    candidate
}
) =>{
   
    return (
        <div className={ winStatus ? 'candidates-win-card' : 'candidates-card'}>
            <div className="candidates-avatar">
                <img src={ img ? img : `${avatar}`} alt="" />
            </div>

            {votes ? '' :

                <div className="candidate-select">
                    <label>select</label>
                    <input type="radio" onClick={()=>addVote(position,candidate)} />
                </div>
            }

            <div className={winStatus ? 'candidates-win-name' : 'candidates-name'}>
                {name}
            </div>

            <div className='candidates-details'>
                {department ? department : <p className={winStatus ? 'win-view-vote' : 'view-vote'}>{`${votes} Votes`}</p>}
            </div>

            <div className="candidates-details">
                {semester ? semester : <div> <ProgressBar resultPage={true} /> </div>}
            </div>
            <div className="candidates-details">
                {rollno && `Roll-no${rollno}`}

            </div>

        </div>

    )
}
export default CandidatesCard