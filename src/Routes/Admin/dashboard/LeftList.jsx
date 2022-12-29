import React from 'react';
import './../../../Styles/LeftList.css';
import avatar from './../../../Assets/Images/avatar.png';
import ProgressBar from '../../../Components/GraphicalElelments/ProgressBar/ProgressBar';

const list = [
    {
      id: 'a',
      img: {avatar},
      name: 'Joshua Dyer ',
      votes: '11'
      
    },
    {
    
      id: 'b',
      img: {avatar},
      name: 'Joshua Dyer ',
      votes: '2'
      
    },
    {
    id: 'c',
    img: {avatar},
    name: 'Joshua Dyer ',
    votes: '9'
      
    },
    {
      id: 'd',
      img: {avatar},
      name: 'Joshua Dyer ',
      votes: '1'
      
    },
    {
      id: 'e',
      img: {avatar},
      name: 'Joshua Dyer ',
      votes: '0'
        
    }
];


const LeftList = () => (
  
  <ul>
  
<div className="ContainerMain">
<div className="title">Number of Votes</div>
    {list.map(item => (
      <li key={item.id}>
        <div className="leftContainer">
          <div className="imageClass"><img src ={avatar} alt=""></img></div>
          <div className="name">{item.name}</div>
          <div className="votes">{item.votes}</div>

          <ProgressBar/>

        </div>  
      </li>
    ))}
</div>

  </ul>

);

export default LeftList