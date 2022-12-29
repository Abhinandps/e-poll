import React from 'react'
import PositionCard from '../Cards/PositionCard'
import avatar from '../../Assets/Images/avatar.png'

const Result = () => {

    const data = [
        {
            position: 'Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    // img: {avatar},
                    votes: '11',
                    winStatus: true

                },
                {
                    name: "Jhon",
                    img: { avatar },
                    votes: '11',

                }

            ]
        },

        {
            position: 'Vice-Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    img: { avatar },
                    votes: '11',

                },
                {
                    name: "Jhon",
                    img: { avatar },
                    votes: '11',

                },
                {
                    name: "Joshua Dyer",
                    img: { avatar },
                    votes: '11',
                    winStatus: true

                },
                {
                    name: "Jhon",
                    img: { avatar },
                    votes: '11',

                }

            ]
        },
        {
            position: 'General Secretary',
            candidates: [
                {
                    name: "Joshua Dyer",
                    img: { avatar },
                    votes: '11',

                },
                {
                    name: "Jhon",
                    img: { avatar },
                    votes: '11',
                    winStatus: true
                },
                {
                    name: "Joshua Dyer",
                    img: { avatar },
                    votes: '11',

                },
                {
                    name: "Jhon",
                    img: { avatar },
                    votes: '11',

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

export default Result
