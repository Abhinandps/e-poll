import {useState} from 'react'
import Button from '../../../../Components/Form/Button'
import InputField from '../../../../Components/Form/InputField'
import Select from '../../../../Components/Form/Select'

const AdminSignUp = () => {

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
  
  const [formData,setFormData] = useState(
    {
      name: "",
      email: "",
      password: "",
      collage: ""
    }
  );

  const {
     name,
     email,
     password,
     collage
  } = formData;

  const submit = event=>{
    event.preventDefault();
  }
  
  const onChange = (key,value)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }

  console.log(formData);

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
        <Button
          title="Create Account"/>
      </form>
    </div>
  )
}

export default AdminSignUp