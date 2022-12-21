import {useState} from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'
import apiCall from '../../../../Services/apiCall';
import { useNavigate } from 'react-router-dom';
const VoterSignIn = () => {
 const [error,setError] = useState("");
 const navigate = useNavigate();
 const [formData,setFormData] = useState(
  {
    email: "",
    password: ""
    
  }
);

const onChange = (key,value)=>{
  setFormData({
    ...formData,
    [key]: value
  })
}
const {
  email,
  password
  
} = formData;

const submit = async event=>{
  event.preventDefault();
  setError("");
  const response = await apiCall("/auth/voter-login","POST",formData)
  if(!response.status){
    setError(response.data[0].message);
    return
  }
  localStorage.setItem("token",response.data.token);
  localStorage.setItem("userType",response.data.userType);
  console.log(response);
  navigate("/dashboard/voter")
}

  return (
    <div className='form-wrap'>
    <div className='home-form'>
    <h2>
      Welcome to E-Poll!!
    </h2>
    <form onSubmit={submit}>
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
  <div className='error-field'>{error}</div>
<Button
          title="Login"/>
<Button
   onClick={()=>navigate("/voter/sign-up")}
   type="button"
          title="SignUp"/>
   </form>
   </div>
   </div>
  )
}

export default VoterSignIn