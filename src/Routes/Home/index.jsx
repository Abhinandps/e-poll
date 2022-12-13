import { Link } from "react-router-dom"

const Home = ()=> {
    return (
      <>
      <div className="container">
        <div className="header">
          <div className="logo">
            LOGO
          </div>
          <div className="navigationbar">
            <div className="linkactive">
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
        </div>

        <div className="maincontent">
          <div>
            <h1> Vote For The Future </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
            </p>
          </div>
        </div>
        
        <div className="bottom">
          <div className="bottomcontent">
            <h2>E-Poll System For College Election </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
            </p>
          </div>
          <div className="buttons">
            <button className="signup">
              <Link to="sign-up"> Sign Up</Link>
            </button>
            <button className="signin">
              <Link to="/sign-in"> Sign In </Link>
            </button>
            
          </div>
        </div>
        </div>
      </>
      )
  }

  export default Home