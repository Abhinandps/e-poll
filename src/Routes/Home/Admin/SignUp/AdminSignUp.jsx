import React, { useState } from 'react'
import Button from '../../../../Components/Forms/Button'
import InputField from '../../../../Components/Forms/InputField'
import Select from '../../../../Components/Forms/Select'

const AdminSignUp = () => {

  const collegelist = [
    {
      name : "CET",
      id : 1
    },
    {
      name : "CET",
      id : 2
    },
    {
      name : "MGC",
      id : 3
    }
  ]

  const [formData,setFormData]=useState(
    {
      name : "",
      email : "",
      password : "",
      college :""
    }
  )



  const submit = event=> {
    event.preventDefault();

  }

  const onChange = (key,value) => {
      setFormData({
         ...formData,
         [key]:value
  })}

  const {
    name,
    email,
    password,
    college

  } = formData ;
  return (
    <div className='home-form'>
      <h2>
        Create Account 
      </h2>
      <form onSubmit={submit}>
        <InputField
          label="Name"
          value={name} 
          onChange={v=>onChange("name",v)}
          placeholder="Enter Your Name"
        />
        <InputField
          label="Email"
          value={email} 
          onChange={v=>onChange("email",v)}
          placeholder="Enter Your Email"
        />
        <InputField
          label="Password"
          type="password"
          value={password} 
          onChange={v=>onChange("password",v)}
          placeholder="Enter Your Password"
        />
        <Select
          label="College"
          value={college} 
          placeholder="Select College" 
          options={collegelist}       
        />
        <Button
          title="Create Account"
        /> 
      </form>
    </div>

  )
}
export default AdminSignUp