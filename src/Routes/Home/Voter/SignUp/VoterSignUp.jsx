import { useEffect, useState } from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'

import Select from '../../../../Components/Form/Select'
import useCollegeList from '../../../../Hooks/useCollegeList'
import apiCall from '../../../../Services/apiCall'
import { useNavigate } from 'react-router-dom'

const defaultFormData = {
  name: "",
  email: "",
  password: "",
  college: "",
  batch: "",
  department: "",
  registerNumber: ""
}

const VoterSignUp = () => {
  const navigate = useNavigate();

  const collegeList = useCollegeList();

  const batchList = [
    2017,
    2018,
    2019,
    2020,
    2021,
    2022
  ].map(name => ({ name, id: name }))

  // const batchList = [
  //   {
  //     name: "1st sem",
  //     id:1
  //   },
  //   {
  //     name: "2nd sem",
  //     id:2
  //   },
  //   {
  //     name: "3rd sem",
  //     id:3
  //   },
  //   {
  //     name: "4th sem",
  //     id:4
  //   },
  //   {
  //     name: "5th sem",
  //     id:5
  //   },
  //   {
  //     name: "6th sem",
  //     id:6
  //   }
  // ]

  const [formData, setFormData] = useState(defaultFormData);

  const [errorData, setErrorData] = useState(defaultFormData)
  
  const [departmentList,setDepartmentList] = useState([])

  const {
    name,
    email,
    password,
    college,
    batch,
    department,
    registerNumber
  } = formData;

  useEffect(()=>{
    onChange("department","")
    if(college){
      setDepartmentList(
        collegeList.find(({id})=> id===college).batches
      );
      return
    }
    setDepartmentList([]);
  },[college])

  const submit = async event => {
    event.preventDefault();
    setErrorData(defaultFormData)
    if (!college) {
      onError("college", "Please select a collage")
      return
    }
    const response = await apiCall("/auth/voter-register", "POST", formData)
    if (!response.status) {
      response.data.forEach(({ message, path }) => {
        onError(path, message)
      })
      return
    }
    navigate("/voter/sign-in")


  }

  const onChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const onError = (key, value) => {
    setErrorData(prev => ({
      ...prev,
      [key]: value
    }))
  }




  return (

    <>

    <div className="votersignupcontent">
          
          <div className="votersignuptext">
            <div>
              <h1> Vote For The Future </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
              </p>
            </div>
          </div>

    <div className='votersignupform-wrap'>
      <div className='votersignup-form'>
        <h2>
          Create Account
        </h2>
        <form onSubmit={submit}>
          <InputField
            Label="Name"
            value={name}
            onChange={v => onChange("name", v)}
            placeholder="Enter Your Name"
            error={errorData.name}
          />
          <InputField
            value={email}
            Label="Email"
            onChange={v => onChange("email", v)}
            placeholder="Enter Your Email"
            error={errorData.email}
          />
          <InputField
            value={password}
            Label="Password"
            type="Password"
            onChange={v => onChange("password", v)}
            placeholder="Enter Your Password"
            error={errorData.password}
          />
          <Select
            value={college}
            onChange={v => onChange("college", v)}
            Label="Collage"
            placeholder="Select Collage"
            options={collegeList}
            error={errorData.college}
          />
          <Select
            value={department}
            onChange={v => onChange("department", v)}
            Label="Department"
            placeholder="Select Department"
            options={departmentList}
            error={errorData.department}
          />

          <Select
            value={batch}
            onChange={v => onChange("batch", v)}
            Label="Batch"
            placeholder="Select Batch"
            options={batchList}
            error={errorData.batch}
          />


          <InputField
            value={registerNumber}
            Label="Register Number"
            onChange={v => onChange("registerNumber", v)}
            placeholder="Enter Your Register Number"
            error={errorData.registerNumber}
          />
          <Button
            title="Create Account" />
        </form>
      </div>
    </div>
    </div>

    <div className="votersignupbottom">
            <div className="votersignupbottomcontent">
              <h2>E-Poll System For College Election </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
                </p>
            </div>  
          </div>
    
          </>
  )
}

export default VoterSignUp