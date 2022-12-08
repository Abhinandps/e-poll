import { Link } from "react-router-dom"

const Home = ()=> {
    return (
      <div>
        Home
        <br/>
        <Link to="/sign-in"> Sign In </Link>
        <br />
        <Link to="sign-up"> Sign Up</Link>
      </div>
      )
  }

  export default Home