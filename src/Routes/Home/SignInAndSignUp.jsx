import { useNavigate } from "react-router-dom";


const SignInAndSignUp = ({path}) => {
  const navigate = useNavigate();
  const goTo = (route) => {
    navigate(
      `/${route}/${path}`
    )
  }

return (
  <div>
    <button onClick={(goTo("admin"))}>Admin</button>
    <button onClick={(goTo("voter"))}>Voter</button>
  </div>
)
}
export default SignInAndSignUp