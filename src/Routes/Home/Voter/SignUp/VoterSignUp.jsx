import {useState} from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'

import Select from '../../../../Components/Form/Select'
import useCollegeList from '../../../../Hooks/useCollegeList'
import apiCall from '../../../../Services/apiCall'

const defaultFormData = {
  name: "",
      email: "",
      password: "",
      college: "",
      semester:"",
      registerNumber:""
}

const VoterSignUp = () => {

  const collegeList = useCollegeList();
  
  const semesterList = [
    {
      name: "1st sem",
      id:1
    },
    {
      name: "2nd sem",
      id:2
    },
    {
      name: "3rd sem",
      id:3
    },
    {
      name: "4th sem",
      id:4
    },
    {
      name: "5th sem",
      id:5
    },
    {
      name: "6th sem",
      id:6
    }
  ]
  
  const [formData,setFormData] = useState(defaultFormData);

  const [errorData, setErrorData] = useState(defaultFormData)

  const {
     name,
     email,
     password,
     college,
     semester,
     registerNumber
  } = formData;

  const submit = async event=>{
    event.preventDefault();
    setErrorData(defaultFormData)
    if(!college){
      onError("college","Please select a collage")
      return
    }
    const response = await apiCall("/auth/voter-register","POST",formData)
    if(!response.status){
      response.data.forEach(({message,path})=>{
        onError(path,message)
      })
      return
    }
    
   
  }
  
  const onChange = (key,value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const onError = (key,value)=>{
    setErrorData(prev=>({
      ...prev,
      [key]: value
    }))
  }




  return (
    <div className='form-wrap'> 
    <div className='home-form'>
      <h2>
        Create Account
      </h2>
      <form onSubmit={submit}>
        <InputField
           Label="Name"
           value={name}
           onChange={v=>onChange("name",v)}
           placeholder="Enter Your Name"
           error={errorData.name}
        />
        <InputField
            value={email}
            Label="Email"
            onChange={v=>onChange("email",v)}
            placeholder="Enter Your Email"
            error={errorData.email}
        />
        <InputField
            value={password}
            Label="Password"
            type="Password"
            onChange={v=>onChange("password",v)}
            placeholder="Enter Your Password"
            error={errorData.password}
        />
        <Select
         value={college}
         onChange={v=>onChange("college",v)}
         Label="Collage"
         placeholder="Select Collage"
         options={collegeList}
         error={errorData.college}
        />
        
        <Select
         value={semester}
         onChange={v=>onChange("semester",v)}
         Label="Semester"
         placeholder="Select Semester"
         options={semesterList}
         error={errorData.semester}
        />
         <InputField
            value={registerNumber}
            Label="Register Number"
            onChange={v=>onChange("registerNumber",v)}
            placeholder="Enter Your Register Number"
            error={errorData.registerNumber}
        />
        <Button
          title="Create Account"/>
      </form>
    </div>
    </div>   
  )
}

export default VoterSignUp