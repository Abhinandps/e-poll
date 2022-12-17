import {useState} from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'
const AdminSignIn = () => {
 


 const [formData,setFormData] = useState(
  {
    username: "",
    password: ""
    
  }
);

const [errorData, setErrorData] = useState({
  username: "",
  password: ""

})

const onChange = (key,value)=>{
  setFormData({
    ...formData,
    [key]: value
  })
}
const {
  username,
  password
  
} = formData;

const submit = async event=>{
  event.preventDefault();
  setErrorData({
    username: "",
    password: ""
    
  })
}

  return (
    <div className='form-wrap'>
    <div className='home-form'>
    <h2>
      Welcome Admin
    </h2>
    <form onSubmit={submit}>
    <InputField
    value={username}
    Label="Username"
    onChange={v=>onChange("username",v)}
    placeholder="Enter Your Username"
    error={errorData.username}
/>
<InputField
    value={password}
    Label="Password"
    type="Password"
    onChange={v=>onChange("password",v)}
    placeholder="Enter Your Password"
   error={errorData.password}
/>
<Button
          title="Login"/>
<Button
          title="SignUp"/>
   </form>
   </div>
   </div>
  )
}

export default AdminSignIn