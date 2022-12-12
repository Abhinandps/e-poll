import { Link } from "react-router-dom"

const Home = ()=> {
    return (
      <>
      <div>
        Logo
      </div>
      <div>
        <div>
          Home
        </div>
          <div>
          About
        </div>
        <div>
          Contact
        </div>
        <div>
          Service
        </div>
      </div>
      <div>
        <h1> Vote For The Future </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
        </p>
      </div>
      <div>
        <h2>E-Poll System For College Election </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
        </p>
      </div>
      <div>
        <button>
          <Link to="/sign-in"> Sign In </Link>
        </button>
        <button>
          <Link to="sign-up"> Sign Up</Link>
        </button>
      </div>
      <div>
        
      </div>
      </>
      )
  }

  export default Home