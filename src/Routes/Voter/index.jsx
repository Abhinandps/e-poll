import { useEffect, useState } from "react"
import PositionCard from "../../Components/Cards/PositionCard"
import apiCall from '../../Services/apiCall'
import Button from '../../Components/Form/Button'

const Voter = () => {
    
    const [data,setData] = useState([]) 
      
    const getElection = async()=>{
        const res =await apiCall("/voter/voter-election")
        setData(
            res.Data.positions.map(p=>({
                id:p.id,
                position: p.position.name,
                candidates:p.candidates.map(c=>({
                    name:c.student.name,
                    department:c.student.batch,
                    semester:c.student.batch,
                    rollno:c.student.registerNumber,
                    image:c.image,
                    id:c._id
                }))
                
            }))
        );
    }
    useEffect(()=>{
        getElection()
    },[])

    return (
        <div className="dashboard-main">
            <div className="election-header-section">
                <div className="election-title-section">
                    <h2>College Election <span>2022-23</span></h2>
                </div>
                <div className="election-time-reminder">
                    <marquee>Attention voters! The polls will be closing at 12 <sup>o</sup> Clock</marquee>
                </div>
            </div>
            <div className="election-view-section">
                {data.map(position =>
                    <PositionCard {...position} key={position.position} />
                )
                }
            </div>
        </div>
    )

}
export default Voter