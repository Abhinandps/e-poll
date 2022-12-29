import React from 'react'
import PositionCard from '../../Components/Cards/PositionCard'

const ViewCandidates = () => {

  const data = [
    {
      position: 'Chairman',
      candidates: [
        {
          name: "Joshua Dyer",
          department: "cs",
          semester: "6",
          rollno: "10"
        },
        {
          name: "Jhon",
          department: "cs",
          semester: "6",
          rollno: "11"
        }

      ]
    },

    {
      position: 'Vice-Chairman',
      candidates: [
        {
          name: "Joshua Dyer",
          department: "cs",
          semester: "6",
          rollno: "12"
        },
        {
          name: "Jhon",
          department: "cs",
          semester: "6",
          rollno: "13"
        },
        {
          name: "Joshua Dyer",
          department: "cs",
          semester: "6",
          rollno: "14"
        },
        {
          name: "Jhon",
          department: "cs",
          semester: "6",
          rollno: "15"
        }

      ]
    },
    {
      position: 'General Secretary',
      candidates: [
        {
          name: "Joshua Dyer",
          department: "cs",
          semester: "6",
          rollno: "16"
        },
        {
          name: "Jhon",
          department: "cs",
          semester: "6",
          rollno: "17"
        },
        {
          name: "Joshua Dyer",
          department: "cs",
          semester: "6",
          rollno: "18"
        },
        {
          name: "Jhon",
          department: "cs",
          semester: "6",
          rollno: "19"
        }

      ]
    }

  ]


  return (
    <div className='dashboard-main'>
      <div className="election-view-section">
        {data.map(position =>
          <PositionCard {...position} key={position.position} />
        )
        }
      </div>

    </div>
  )
}

export default ViewCandidates
