import React from 'react'
import avatar from '../../Assets/Images/avatar.png';
import './../../Styles/Students.css'
import deleteIcon from './../../Assets/Icons/delete.svg'

// import ReactTable from 'react-ReactTable'

const data = [
  {
    id: 'a',
    img: {avatar},
    name: 'Gargi Neog',
    year:'2020',
    department:'IT',
    reg_num: 'ace20it034',
    },
    {
      id: 'b',
      img: {avatar},
      name: 'Gargi Neog',
      year:'2020',
      department:'CSE',
      reg_num: 'ace20cs034',
    },
    {
      id: 'c',
      img: {avatar},
      name: 'Gargi Neog',
      year:'2020',
      department:'CSE',
      reg_num: 'ace20cs035',

      },
      {
        id: 'd',
        img: {avatar},
        name: 'Gargi Neog',
        year:'2020',
        department:'CSE',
        reg_num: 'ace20cs036',
      },
    {
      id: 'e',
      img: {avatar},
      name: 'Gargi Neogi ',
      year:'2020',
      department:'CE',
      reg_num: 'ace20ce036',
      },
      {
        id: 'f',
        img: {avatar},
        name: 'Gargi Neog',
        year:'2020',
        department:'CE',
        reg_num: 'ace20ce040',
      }
];


const Students = () => {
  return (
       <div className="container-fluid">
           
              <form>
                <table>
                  <thead>
                    <tr >
                      <th></th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Batch</th>
                      <th>Register Number</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data)=>{
                      return(
                           <tr >
                            <td id="image"><img src ={avatar} alt=""></img></td>
                            <td>{data.name}</td>
                            <td>{data.department}</td>
                            <td>{data.year}</td>
                            <td>{data.reg_num}</td>
                            <td><img src ={deleteIcon} alt=""></img></td>
                           </tr>
                      );
                    })}
                  </tbody>
                </table>
              </form>
           
       </div>
   
  );
};

export default Students
