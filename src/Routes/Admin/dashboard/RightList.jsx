import React from 'react';
import './../../../Styles/RightList.css';
import admin from './../../../Assets/Images/admin.png';
const list = [
 
  {
    id: 'a',
    img: {admin},
    name: 'Gargi Neog',
    year:'2020',
    department:'CE',
    votes: '882',
    },
    {
      id: 'b',
      img: {admin},
      name: 'Gargi Neog',
      year:'2020',
      department:'CE',
      votes: '882'
    },
    {
      id: 'c',
      img: {admin},
      name: 'Gargi Neog',
      year:'2020',
      department:'CE',
      votes: '882'
      },
      {
        id: 'd',
        img: {admin},
        name: 'Gargi Neog',
        year:'2020',
        department:'CE',
        votes: '882'
      },
    {
      id: 'e',
      img: {admin},
      name: 'Gargi Neog',
      year:'2020',
      department:'CE',
      votes: '882'
      },
      {
        id: 'f',
        img: {admin},
        name: 'Gargi Neog',
        year:'2020',
        department:'CE',
        votes: '882'
      }

];

const RightList = () => (
  
  <ul>
    <div className="history">Recent Voters </div>
    <div className="rightContainer">
    {list.map(item => (
      <li key={item.id}>
        
        <div className="image"><img src ={admin} alt=""></img></div>
        <div className="name">{item.name}</div>
        <div className="year">{item.year}</div>
        <div className="department">{item.department}</div>
        <div className="year">{item.votes}</div>
       
      </li>   
    ))}
     </div>
  </ul>

);

export default RightList;
