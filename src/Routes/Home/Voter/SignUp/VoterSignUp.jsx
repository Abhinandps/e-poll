import {useState} from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'

import Select from '../../../../Components/Form/Select'
const VoterSignUp = () => {
  const collageList = [
    {
      name: "MEA",
      id:1
    },
    {
      name: "ACE",
      id:2
    },
    {
      name: "GECI",
      id:3
    }
  ]
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
  
  const [formData,setFormData] = useState(
    {
      name: "",
      email: "",
      password: "",
      collage: "",
      semester:"",
      regno:""
    }
  );

  const {
     name,
     email,
     password,
     collage,
     semester,
     regno
  } = formData;

  const submit = event=>{
    event.preventDefault();
    console.log(formData);
  }
  
  const onChange = (key,value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }



  return (
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
        />
        <InputField
            value={email}
            Label="Email"
            onChange={v=>onChange("email",v)}
            placeholder="Enter Your Email"
        />
        <InputField
            value={password}
            Label="Password"
            type="Password"
            onChange={v=>onChange("password",v)}
            placeholder="Enter Your Password"
        />
        <Select
         value={collage.id}
         onChange={v=>onChange("collage",v)}
         Label="Collage"
         placeholder="Select Collage"
         options={collageList}
        />
        
        <Select
         value={semester.id}
         onChange={v=>onChange("semester",v)}
         Label="Semester"
         placeholder="Select Semester"
         options={semesterList}
        />
         <InputField
            value={regno}
            Label="Register Number"
            onChange={v=>onChange("regno",v)}
            placeholder="Enter Your Register Number"
        />
        <Button
          title="Create Account"/>
      </form>
    </div>
  )
}

export default VoterSignUp