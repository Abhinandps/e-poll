import { staticUrl } from "../../Config/apiUrl"
import avatar from "./../../Assets/Images/avatar.png"
const CandidatesCard = (
   {name,
    department,
    semester,
    rollno,
    image}
) =>{
    return(
        <div className="candidates-card">
                <div className="candidates-avatar">
                    <img src={image?staticUrl+image:avatar} alt="" />
                </div>
                <div className="candidate-select">
                    <label>select</label>
                    <input type= "radio"/>
                </div>
                <div className="candidates-name">
                   {name}
                </div>
                <div className="candidates-details">
                   {department}
                </div>
                <div className="candidates-details">
                   Btech {semester} th semester
                </div>
                <div className="candidates-details">
                   Roll-no{rollno}
                </div>

        </div>
        
    )
}
export default CandidatesCard