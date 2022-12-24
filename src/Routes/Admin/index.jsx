import React from 'react'
import LeftList from './dashboard/LeftList'
import './../../Styles/TopContainer.css'
import RightList from './dashboard/RightList'
import StudIcon from './../../Assets/Icons/stud-icon.svg'
import BarIcon from './../../Assets/Icons/bar-icon.svg'
import CandIcon from './../../Assets/Icons/candi-icon.svg'
import ListIcon from './../../Assets/Icons/list-icon.svg' 
const TopContainer = () => {
  return (
    <div className="Container">
      <div className="header"><p>COLLEGE ELECTION 2022-23</p>
      <button>Switch election</button>
      </div>
      <div className="topContainer">
      <div className="itemContainer1">
        <div className="title1"><p>Student</p></div>
        <div className="value">26</div>
        <div className="icon"><img src={StudIcon} alt=""></img></div>
      </div>
      
        <div className="itemContainer2">
        <div className="title2"><p>Candidate</p></div>
        <div className="value">13</div>
        <div className="icon"><img src={CandIcon} alt=""></img></div>
       </div>
        
        <div className="itemContainer3">
          <div className="title3"><p>Posts</p></div>
          <div className="value">6</div>
          <div className="icon"><img src={ListIcon} alt=""></img></div>
        </div>
        <div className="itemContainer4">
          <div className="title4"><p>Voted</p></div>
          <div className="value">9</div>
          <div className="icon"><img src={BarIcon} alt=""></img></div>
        </div>
        </div>

        <div className="bottom">
       
       <LeftList/>
       
       <RightList/>
         </div>
         
         


    </div>
   
  )
}

export default TopContainer 