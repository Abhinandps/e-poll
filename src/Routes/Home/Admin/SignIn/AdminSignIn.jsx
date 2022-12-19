import { useState } from 'react'
import InputField from '../../../../Components/Form/InputField'
import Button from '../../../../Components/Form/Button'
import { useNavigate } from 'react-router-dom'
const AdminSignIn = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""

    }
  );

  const [errorData, setErrorData] = useState({
    email: "",
    password: ""

  })

  const onChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }
  const {
    email,
    password

  } = formData;

  const submit = async event => {
    event.preventDefault();
    setErrorData({
      email: "",
      password: ""

    })
    console.log(formData);
  }

  return (
    <div className='form-wrap'>
      <div className='home-form'>
        <h2>
          Welcome Admin
        </h2>
        <form onSubmit={submit}>
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
          <Button title="Login" />
          <Button title="SignUp" type="button"
            onClick={() => {
              navigate("/admin/sign-up")
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default AdminSignIn