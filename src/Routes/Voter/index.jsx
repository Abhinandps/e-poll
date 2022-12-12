import React from 'react'
import PositionCard from "../../Components/Cards/PositionCard"
const Voter = () => {
   const data = [
    {
        position:'Chairman',
        candidates: [
            {
                name:"Joshua Dyer",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Jhon",
                department: "cs",
                semester:"6",
                rollno:"10"
            }
          
        ]
    },
    
    {
        position:'Vice-Chairman',
        candidates: [
            {
                name:"Joshua Dyer",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Jhon",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Joshua Dyer",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Jhon",
                department: "cs",
                semester:"6",
                rollno:"10"
            }
          
        ]
    },  
    {
        position:'General Secretary',
        candidates: [
            {
                name:"Joshua Dyer",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Jhon",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Joshua Dyer",
                department: "cs",
                semester:"6",
                rollno:"10"
            },
            {
                name:"Jhon",
                department: "cs",
                semester:"6",
                rollno:"10"
            }
          
        ]
    }
    
]
 return(
    <div className="dashboard-main">
      <h2>Hello Mia</h2>
     <div className="election-view-section">
         {data.map(position=>
             <PositionCard {...position}/>
        )
        }
     </div>
    </div>
    )   
    
}
export default Voter