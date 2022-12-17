import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../Components/Form/Button'
import InputField from '../../../../Components/Form/InputField'
import Select from '../../../../Components/Form/Select'
import apiCall from '../../../../Services/apiCall'
import useCollegeList from '../../../../Hooks/useCollegeList'
const AdminSignUp = () => {

  const  navigate = useNavigate();

  const collegeList = useCollegeList();

  const [formData,setFormData] = useState(
    {
      name: "",
      email: "",
      password: "",
      college: ""
    }
  );
  
  const [errorData, setErrorData] = useState({
      name: "",
      email: "",
      password: "",
      college: ""
  })

  const {
     name,
     email,
     password,
     college
  } = formData;
  

  const submit = async event=>{
    event.preventDefault();
    setErrorData({
      name: "",
      email: "",
      password: "",
      college: ""
    })
    if(!college){
      onError("college","Please select a collage")
      return
    }
    const response = await apiCall("/auth/admin-register","POST",formData)
    if(!response.status){
      response.data.forEach(({message,path})=>{
        onError(path,message)
      })
      return
    }
    navigate("/sign-in")
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
         Label="College"
         placeholder="Select College"
         options={collegeList}
         error={errorData.college}
        />
        <Button
          title="Create Account"/>
      </form>
    </div>
    </div>
  )
}
export default AdminSignUp