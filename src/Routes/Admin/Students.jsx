import React, { useEffect, useState } from 'react'
import avatar from '../../Assets/Images/avatar.png';
import './../../Styles/Students.css'
import deleteIcon from './../../Assets/Icons/delete.svg'
import apiCall from '../../Services/apiCall';

// import ReactTable from 'react-ReactTable'






const Students = () => {
  // const data = [
  //   {
  //     id: 'a',
  //     img: {avatar},
  //     name: 'Gargi Neog',
  //     year:'2020',
  //     department:'IT',
  //     reg_num: 'ace20it034',
  //     }
  //   ]

  const [data, setData] = useState([])

  console.log(data);
  const getVoters = async () => {
    const res = await apiCall("/admin/get-voters")
    setData(
      res.data.map(d => ({
        id: d._id,
        name: d.name,
        year: d.batch,
        department: '',
        reg_num: d.registerNumber,

      }))
    );
  }

  useEffect(() => {
    getVoters()
  }, [])
  return (
    <div className="dashboard-main">

      <form>
        <table>
          <thead>
            <tr >
              <th>Student</th>
              <th>Name</th>
              <th>Department</th>
              <th>Batch</th>
              <th>Register Number</th>
              {/* <th>Modify</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr >
                  <td id="image"><img src={avatar} alt=""></img></td>
                  <td>{data.name}</td>
                  <td>{data.department}</td>
                  <td>{data.year}</td>
                  <td>{data.reg_num}</td>
                  {/* <td><img src={deleteIcon} alt=""></img></td> */}
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
